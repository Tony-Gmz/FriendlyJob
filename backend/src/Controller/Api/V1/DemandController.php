<?php

namespace App\Controller\Api\V1;

use App\Entity\Demand;
use App\Repository\DemandRepository;
use App\Repository\ServiceRepository;
use App\Repository\UserRepository;
use ErrorException;
use Nelmio\ApiDocBundle\Annotation\Model;
use Swagger\Annotations as OA;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("/api/v1/demands", name="api_v1_demands_")
 */
class DemandController extends AbstractController
{
    /**
     * @OA\Tag(name="DemandController")
     * @OA\Response(
     *     response=201,
     *     description="Return the added demand",
     *     @Model(type=Demand::class, groups={"demand_add"}),
     * )
     * @OA\Response(
     *     response=404,
     *     description="Return an error message",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="status", type="integer"),
     *      @OA\Property(property="message", type="string")
     *     )
     * )
     * @OA\Response(
     *     response=400,
     *     description="Return a bad Request message",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="status", type="integer"),
     *      @OA\Property(property="message", type="string")
     *     )
     * )
     * @OA\Parameter(
     *     name="demand",
     *     in="body",
     *     description="Create a demand between a FriendlyUser and a JobWorker",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="body", type="string"),
     *      @OA\Property(property="reservationDate", type="string"),
     *      @OA\Property(property="reservationHour", type="string"),
     *      @OA\Property(property="status", type="string"),
     *      @OA\Property(property="service", type="integer"),
     *      @OA\Property(property="jobWorker", type="integer"),
     *     )
     * )
     * @Route("", name="add", methods={"POST"})
     */
    public function add(Request $request, ServiceRepository $serviceRepository, UserRepository $userRepository, ValidatorInterface $validator)
    {
        $jsonData = json_decode($request->getContent());

        $demand = new Demand();

        $friendlyUser = $userRepository->findUserType($this->getUser()->getId(), 'FRIENDLY_USER');
        //! Condition si user null ( donc n'est pas un friendlyUser )
        if ($friendlyUser == null) {
            return $this->json([
                'statut' => 404,
                'message' => "This user is not a FriendlyUser"
            ], 404);
        }
        try {
            $demand->setBody($jsonData->body);

            //! Regex pour le format de date Y-m-d
            if (!preg_match('/^([0-9]{4})\-([0-9]{2})-([0-9]{2})$/', $jsonData->reservationDate)) {
                return $this->json([
                'statut' => 404,
                'message' => "Property reservationDate need to be a DateTime with the format YYYY-MM-DD"
            ], 404);
            }
            $d = explode('-', $jsonData->reservationDate);
            //! Regex pour une date existante dans le calendrier
            if (!checkdate($d[1], $d[2], $d[0])) {
                return $this->json([
                'statut' => 404,
                'message' => "The entered date does not exist"
            ], 404);
            }
            $demand->setReservationDate(new \DateTime($jsonData->reservationDate));
            $demand->setReservationHour($jsonData->reservationHour);

            //! Condition pour controler la valeur de statut
            if (isset($jsonData->status) && ucfirst(strtolower($jsonData->status)) != 'En attente') {
                return $this->json([
                'statut' => 404,
                'message' => "New demand has to be with a 'En attente' status"
            ], 404);
            }
            $demand->setStatus(isset($jsonData->status) ? ucfirst(strtolower($jsonData->status)) : 'En attente');

            $service = $serviceRepository->find($jsonData->service);
            //! Controle existance d'un service
            if ($service == null) {
                return $this->json([
                'statut' => 404,
                'message' => "This service does not exist"
            ], 404);
            }
            $demand->setService($service);
            $demand->setFriendlyUser($friendlyUser);

            $jobworker = $userRepository->findUserType($jsonData->jobWorker, 'JOBWORKER');
            //! Condition si jobworker est null ( donc n'est pas un jobworker ou n'existe pas )
            if ($jobworker == null) {
                return $this->json([
                'statut' => 404,
                'message' => "This property jobworker is not a Jobwoker or does not exist"
            ], 404);
            }
            $demand->setJobWorker($jobworker);

            //! Validator
            $errors = $validator->validate($demand);
    
            if (count($errors) > 0) {
                return $this->json($errors, 400);
            }

            $em = $this->getDoctrine()->getManager();
            $em->persist($demand);
            $em->flush();

            return $this->json(
                $demand,
                201,
                [],
                ['groups' => 'demand_add']
            );
        } catch (ErrorException $e) {
            return $this->json([
                'status' => 400,
                'message' => "Json syntax error"
            ], 400);
        }

    }

    /**
     * @OA\Tag(name="DemandController")
     * @OA\Response(
     *     response=200,
     *     description="Return the modified demand",
     *     @Model(type=Demand::class, groups={"demand_edit"}),
     * )
     * @OA\Response(
     *     response=404,
     *     description="Return an error message",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="status", type="integer"),
     *      @OA\Property(property="message", type="string")
     *     )
     * )
     * @OA\Response(
     *     response=400,
     *     description="Return a bad Request message",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="status", type="integer"),
     *      @OA\Property(property="message", type="string")
     *     )
     * )
     * @OA\Parameter(
     *     name="demand",
     *     in="body",
     *     description="Modify a demand",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="body", type="string"),
     *      @OA\Property(property="reservationDate", type="string"),
     *      @OA\Property(property="reservationHour", type="string"),
     *      @OA\Property(property="status", type="string"),
     *     )
     * )
     * @Route("/{id}", name="edit", methods={"PUT"}, requirements={"id": "\d+"})
     */
    public function edit(Request $request, Demand $demand, ValidatorInterface $validator)
    {
        //! Voter
        $this->denyAccessUnlessGranted('EDIT', $demand);
        
        $jsonData = json_decode($request->getContent());

        $demand->setBody(isset($jsonData->body) ? $jsonData->body : $demand->getBody());

        //! Regex pour le format de date Y-m-d
        if ( isset($jsonData->reservationDate) && !preg_match('/^([0-9]{4})\-([0-9]{2})-([0-9]{2})$/', $jsonData->reservationDate)) {
            return $this->json([
            'statut' => 404,
            'message' => "Property reservationDate need to be a DateTime with the format YYYY-MM-DD"
        ], 404);
        }
        //! L'explode est déclencher seulement quand le jsonData contient la date de réservation
        if ( isset($jsonData->reservationDate)) {
            $d = explode('-', $jsonData->reservationDate);
        }
        //! Regex pour une date existante dans le calendrier
        if ( isset($jsonData->reservationDate) && !checkdate($d[1], $d[2], $d[0])) {
            return $this->json([
            'statut' => 404,
            'message' => "The entered date does not exist"
        ], 404);
        }
        $demand->setReservationDate(isset($jsonData->reservationDate) ? new \DateTime($jsonData->reservationDate) : new \DateTime($demand->getReservationDate()));
        $demand->setReservationHour(isset($jsonData->reservationHour) ? $jsonData->reservationHour : $demand->getReservationHour());

        //! Condition pour controler la valeur de statut d'une demande editer
        if ( isset($jsonData->status) && !preg_match('/^(En attente|Accept(e|é)e|Annul(e|é)e|Refus(e|é)e|Termin(e|é)e)$/', ucfirst(strtolower($jsonData->status))))
        {
            return $this->json([
                'statut' => 404,
                'message' => "Demands can only have 'En attente', 'Acceptée', 'Annulée', 'Refusée' and 'Terminée' status"
            ], 404);
        }
        $demand->setStatus(isset($jsonData->status) ? ucfirst(strtolower($jsonData->status)) : $demand->getStatus());
        $demand->setUpdatedAt(new \DateTime());

        //! Validator
        $errors = $validator->validate($demand);

        if (count($errors) > 0) {
            return $this->json($errors, 400);
        }

        $em = $this->getDoctrine()->getManager();
        $em->persist($demand);
        $em->flush();

        return $this->json(
            $demand,
            200,
            [],
            ['groups' => 'demand_edit']
        );
    } 

    /**
     * @OA\Tag(name="DemandController")
     * @OA\Response(
     *     response=200,
     *     description="Return all the demands from one user",
     *     @Model(type=Demand::class, groups={"demand_one_user"})
     * )
     * @Route("/users", name="users", methods={"GET"})
     */
    public function getDemandsFromOneUser(DemandRepository $demandRepository)
    {
        $allDemands = $demandRepository->findAllDemandsFromOneUser($this->getUser()->getId());

        return $this->json(
            $allDemands,
            200,
            [],
            ['groups' => 'demand_one_user']
        );

    }

    /**
     * @OA\Tag(name="DemandController")
     * @OA\Response(
     *     response=200,
     *     description="Delete a demand",
     * )
     * @OA\Response(
     *     response=404,
     *     description="Return an error message",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="status", type="integer"),
     *      @OA\Property(property="message", type="string")
     *     )
     * )
     * @OA\Response(
     *     response=400,
     *     description="Return a bad Request message",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="status", type="integer"),
     *      @OA\Property(property="message", type="string")
     *     )
     * )
     * @OA\Parameter(
     *     name="demand",
     *     in="body",
     *     description="Delete a demand",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="id", type="integer"),
     *     )
     * )
     * @Route("/", name="delete", methods={"DELETE"})
     */
    public function delete(DemandRepository $demandRepository, Request $request)
    {
        $jsonData = json_decode($request->getContent());
        
        try {
            $demand = $demandRepository->find($jsonData->id);
        
            //! Condition pour vérifier que la demande existe ( non null )
            if ($demand == null) {
                return $this->json([
                'statut' => 404,
                'message' => "This demand does not exist"
            ], 404);
            }

            //! Voter
            $this->denyAccessUnlessGranted('DELETE', $demand);

            $em = $this->getDoctrine()->getManager();
            $em->remove($demand);
            $em->flush();

            return $this->json([
                'statut' => 200,
                'message' => 'La demande a bien été supprimé.'
            ], 200);
        
        } catch (ErrorException $e) {
                return $this->json([
                    'status' => 400,
                    'message' => "Json syntax error"
                ], 400);
            }
    }
}
