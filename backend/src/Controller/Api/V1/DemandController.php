<?php

namespace App\Controller\Api\V1;

use App\Entity\Demand;
use App\Repository\DemandRepository;
use App\Repository\ServiceRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/demands", name="api_v1_demands_")
 */
class DemandController extends AbstractController
{
    /**
     * @Route("", name="add", methods={"POST"})
     */
    public function add(Request $request, ServiceRepository $serviceRepository, UserRepository $userRepository)
    {
        $jsonData = json_decode($request->getContent());

        $demand = new Demand();

        $demand->setBody($jsonData->body);
        $demand->setReservationDate(new \DateTime($jsonData->reservationDate));
        $demand->setReservationHour($jsonData->reservationHour);
        $demand->setStatus($jsonData->status ?? 'En attente');
        $demand->setService($serviceRepository->find($jsonData->service));
        $demand->setFriendlyUser($userRepository->findUserType($jsonData->friendlyUser, 'FRIENDLY_USER'));
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
     * @Route("/{id}", name="edit", methods={"PUT"}, requirements={"id": "\d+"})
     */
    public function edit(Request $request, Demand $demand)
    {
        $jsonData = json_decode($request->getContent());

        $demand->setBody($jsonData->body);
        $demand->setReservationDate(new \DateTime($jsonData->reservationDate));
        $demand->setReservationHour($jsonData->reservationHour);
        $demand->setStatus($jsonData->status);
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
     * @Route("/users/{id}", name="users", methods={"GET"}, requirements={"id": "\d+"})
     */
    public function getDemandsFromOneUser(DemandRepository $demandRepository, int $id)
    {
        $allDemands = $demandRepository->findAllDemandsFromOneUser($id);

        return $this->json(
            $allDemands,
            200,
            [],
            ['groups' => 'demand_one_user']
        );

    }

    /**
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
