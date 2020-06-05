<?php

namespace App\Controller\Api\V1;

use App\Entity\Demand;
use App\Repository\DemandRepository;
use App\Repository\ServiceRepository;
use App\Repository\UserRepository;
use Nelmio\ApiDocBundle\Annotation\Model;
use Swagger\Annotations as OA;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

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
    public function add(Request $request, ServiceRepository $serviceRepository, UserRepository $userRepository)
    {
        $jsonData = json_decode($request->getContent());

        $demand = new Demand();

        $friendlyUser = $userRepository->findUserType($this->getUser()->getId(), 'FRIENDLY_USER');
        //! Condition si user null ( donc n'est pas un friendlyUser )
        if ($friendlyUser == null ) {
            dd('BRAHHHHH raté c\'est pas un friendlyUSER');
        }
        //dd($friendlyUser);

        $demand->setBody($jsonData->body);
        $demand->setReservationDate(new \DateTime($jsonData->reservationDate));
        $demand->setReservationHour($jsonData->reservationHour);
        $demand->setStatus($jsonData->status ?? 'En attente');
        $demand->setService($serviceRepository->find($jsonData->service));
        $demand->setFriendlyUser($friendlyUser);
        $demand->setJobWorker($userRepository->findUserType($jsonData->jobWorker, 'JOBWORKER')); 

        $em = $this->getDoctrine()->getManager();
        $em->persist($demand);
        $em->flush();

        return $this->json(
            $demand,
            201,
            [],
            ['groups' => 'demand_add']
        );

    }

    /**
     * @OA\Tag(name="DemandController")
     * @OA\Response(
     *     response=200,
     *     description="Return the modified demand",
     *     @Model(type=Demand::class, groups={"demand_edit"}),
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
    public function edit(Request $request, Demand $demand)
    {
        $jsonData = json_decode($request->getContent());

        $demand->setBody(isset($jsonData->body) ? $jsonData->body : $demand->getBody());
        $demand->setReservationDate(isset($jsonData->reservationDate) ? new \DateTime($jsonData->reservationDate) : new \DateTime($demand->getReservationDate()));
        $demand->setReservationHour(isset($jsonData->reservationHour) ? $jsonData->reservationHour : $demand->getReservationHour());
        $demand->setStatus(isset($jsonData->status) ? $jsonData->status : $demand->getStatus());
        $demand->setUpdatedAt(new \DateTime());

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
     * @Route("/users", name="users", methods={"GET"}, requirements={"id": "\d+"})
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
        
        $demand = $demandRepository->find($jsonData->id);
        
        $em = $this->getDoctrine()->getManager();
        $em->remove($demand);
        $em->flush();

        return $this->json([
            'statut' => 200,
            'message' => 'La demande a bien été supprimé.'
        ], 200);
    }
}
