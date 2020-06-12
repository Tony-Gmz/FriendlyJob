<?php

namespace App\Controller\Api\V1;

use App\Entity\Demand;
use App\Repository\DemandRepository;
use App\Repository\ServiceRepository;
use App\Repository\UserRepository;
use ErrorException;
use Exception;
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
     * This method is used in order to add a Demand
     * @Route("", name="add", methods={"POST"})
     */
    public function add(Request $request, ServiceRepository $serviceRepository, UserRepository $userRepository, ValidatorInterface $validator)
    {
        // We decode the content data of the Request object
        $jsonData = json_decode($request->getContent());

        // We create a new instance of the Demand class
        $demand = new Demand();

        // We control that the user who adds a Demand is a FriendlyUser
        $friendlyUser = $userRepository->findUserType($this->getUser()->getId(), 'FRIENDLY_USER');
        // If the user is not a FriendlyUser, we are sending a 404 JSON error message
        if ($friendlyUser == null) {
            return $this->json([
                'statut' => 404,
                'message' => "This user is not a FriendlyUser"
            ], 404);
        }
        // This "try-catch" is used to catch the ErrorException
        try {
            // We set the body
            $demand->setBody($jsonData->body);

            // This "try-catch" is used to catch the ErrorException
            try {
                // We set a new DateTime object for the reservationDate and the reservationHour
                $demand->setReservationDate(new \DateTime($jsonData->reservationDate));
                $demand->setReservationHour(new \DateTime($jsonData->reservationHour));
            } 
            // If the date format is incorrect, we send a 400 JSON bad request message
            catch (Exception $e) {
                return $this->json([
                    'status' => 400,
                    'message' => "The date format is incorrect"
                ], 400);
            }

            // We control the status value
            // If the status value is not 'En attente', we return a 404 JSON error message
            if (isset($jsonData->status) && ucfirst(strtolower($jsonData->status)) != 'En attente') {
                return $this->json([
                'statut' => 404,
                'message' => "New demand has to be with a 'En attente' status"
            ], 404);
            }
            // If we pass the condition, we set the status with the 'En attente' value
            $demand->setStatus(isset($jsonData->status) ? ucfirst(strtolower($jsonData->status)) : 'En attente');

            // We retrieve the service by using his id
            $service = $serviceRepository->find($jsonData->service);

            // We control if the service is null/non existent
            // If it's the case, we send a 404 JSON error message
            if ($service == null) {
                return $this->json([
                'statut' => 404,
                'message' => "This service does not exist"
            ], 404);
            }

            // If the service exists, we set it
            $demand->setService($service);
            // If the user is truly a FriendlyUser, we set the user
            $demand->setFriendlyUser($friendlyUser);

            // We control that the user who gets the Demand is a JobWorker
            $jobworker = $userRepository->findUserType($jsonData->jobWorker, 'JOBWORKER');

            // If the JobWorker does not exist, or is not really a JobWorker
            // We return a 404 JSON error message
            if ($jobworker == null) {
                return $this->json([
                'statut' => 404,
                'message' => "This property jobworker is not a Jobwoker or does not exist"
            ], 404);
            }

            // If we pass the condition, we set the JobWorker
            $demand->setJobWorker($jobworker);

            // We retrieve the returned errors by the validator
            // If the validator catches errors, we return a 400 JSON error message
            $errors = $validator->validate($demand);
            if (count($errors) > 0) {
                return $this->json($errors, 400);
            }

            // We call the EntityManagerInterface to persist the valid data
            $em = $this->getDoctrine()->getManager();
            $em->persist($demand);
            $em->flush();

            // Once the data are persist and flush, we return a JSON create message
            return $this->json(
                $demand,
                201,
                [],
                ['groups' => 'demand_add']
            );
            // If the try fails at some point, we return a JSON bad request message
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
     * This method is used in order to edit a Demand
     * @Route("/{id}", name="edit", methods={"PUT"}, requirements={"id": "\d+"})
     */
    public function edit(Request $request, Demand $demand, ValidatorInterface $validator)
    {
        // We call the DemandVoter for authorizations
        $this->denyAccessUnlessGranted('EDIT', $demand);
        
        // We decode the content data of the Request object
        $jsonData = json_decode($request->getContent());

        // If the body field exists and is set, we send the new body
        // Otherwise, we keep the current body
        $demand->setBody(isset($jsonData->body) ? $jsonData->body : $demand->getBody());

        // This "try-catch" is used to catch the ErrorException
        try {
            // If the reservationDate and reservationHour fields exists and are set, we send the new data
            // Otherwise, we keep the current data
            $demand->setReservationDate(isset($jsonData->reservationDate) ? new \DateTime($jsonData->reservationDate) : $demand->getReservationDate());
            $demand->setReservationHour(isset($jsonData->reservationHour) ? new \DateTime($jsonData->reservationHour) : $demand->getReservationHour());

            // If the date format is incorrect, we send a 400 JSON bad request message
        } catch (Exception $e) {
            return $this->json([
                'status' => 400,
                'message' => "The date format is incorrect"
            ], 400);
        }

        // We control the status value for the edit Demand
        // If the status value is set and match the Regex, we set the status
        // Otherwise, we send a 404 JSON error message
        if ( isset($jsonData->status) && !preg_match('/^(En attente|Accept(e|é)e|Annul(e|é)e|Refus(e|é)e|Termin(e|é)e)$/', ucfirst(strtolower($jsonData->status))))
        {
            return $this->json([
                'statut' => 404,
                'message' => "Demands can only have 'En attente', 'Acceptée', 'Annulée', 'Refusée' and 'Terminée' status"
            ], 404);
        }

        // If the status field exists and is set, we send the new status
        // Otherwise, we keep the current status
        $demand->setStatus(isset($jsonData->status) ? ucfirst(strtolower($jsonData->status)) : $demand->getStatus());

        // As we modify a Demand with this method, we set a new DateTime object in the updatedAt setter
        $demand->setUpdatedAt(new \DateTime());

        // We retrieve the returned errors by the validator
        // If the validator catches errors, we return a 400 JSON error message
        $errors = $validator->validate($demand);
        if (count($errors) > 0) {
            return $this->json($errors, 400);
        }

        // We call the EntityManagerInterface to persist the valid data
        $em = $this->getDoctrine()->getManager();
        $em->persist($demand);
        $em->flush();

        // Once the data are persist and flush, we return a 200 JSON OK message
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
     * This method is used in order to get demands from one user
     * @Route("/users", name="users", methods={"GET"})
     */
    public function getDemandsFromOneUser(DemandRepository $demandRepository)
    {
        // We retrieve all the demands from one user using his id
        $allDemands = $demandRepository->findAllDemandsFromOneUser($this->getUser()->getId());

        // We return a 200 JSON OK message
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
     * This method is used in order to delete a Demand
     * @Route("/", name="delete", methods={"DELETE"})
     */
    public function delete(DemandRepository $demandRepository, Request $request)
    {
        // We decode the content data of the Request object
        $jsonData = json_decode($request->getContent());
        
        // This "try-catch" is used to catch the ErrorException
        try {

            // We retrieve the demand by using his id
            $demand = $demandRepository->find($jsonData->id);
        
            // We control if the demand is null/non existent
            // If it's the case, we send a 404 JSON error message
            if ($demand == null) {
                return $this->json([
                'statut' => 404,
                'message' => "This demand does not exist"
            ], 404);
            }

            // We call the DemandVoter for authorizations
            $this->denyAccessUnlessGranted('DELETE', $demand);

            // We call the EntityManagerInterface to remove the data using his id
            $em = $this->getDoctrine()->getManager();
            $em->remove($demand);
            $em->flush();

            // Once the data are remove and flush, we return a 200 JSON OK message
            return $this->json([
                'statut' => 200,
                'message' => 'La demande a bien été supprimé.'
            ], 200);
        
            // If the try fails at some point, we return a JSON bad request message
        } catch (ErrorException $e) {
                return $this->json([
                    'status' => 400,
                    'message' => "Json syntax error"
                ], 400);
            }
    }
}
