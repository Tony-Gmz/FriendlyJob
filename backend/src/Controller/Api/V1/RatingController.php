<?php

namespace App\Controller\Api\V1;

use App\Entity\Rating;
use App\Repository\DemandRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/ratings", name="api_v1_ratings_")
 */
class RatingController extends AbstractController
{
    /**
     * @Route("", name="add", methods={"POST"})
     */
    public function add(Request $request, DemandRepository $demandRepository)
    {
        $jsonData = json_decode($request->getContent());

        $rating = new Rating();

        $rating->setComment($jsonData->comment);
        $rating->setStar($jsonData->star);
        $rating->setDemand($demandRepository->find($jsonData->demand));

        //dd($rating);

        $em = $this->getDoctrine()->getManager();
        $em->persist($rating);
        $em->flush();

        return $this->json(
            $rating,
            201,
            [],
            ['groups' => 'rating_add']
        );
    }
}
