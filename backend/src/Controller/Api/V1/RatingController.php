<?php

namespace App\Controller\Api\V1;

use App\Entity\Rating;
use App\Repository\DemandRepository;
use Nelmio\ApiDocBundle\Annotation\Model;
use Swagger\Annotations as OA;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/ratings", name="api_v1_ratings_")
 */
class RatingController extends AbstractController
{
    /** 
     * @OA\Tag(name="RatingController")
     * @OA\Response(
     *     response=201,
     *     description="Returns the rating created and the demanded where the rating is linked",
     *     @Model(type=Rating::class, groups={"rating_add"}),
     * )
     * @OA\Parameter(
     *     name="rating",
     *     in="body",
     *     description="Create a rating for one demand",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="comment", type="string"),
     *      @OA\Property(property="star", type="integer"),
     *      @OA\Property(property="demand", type="integer"),
     *     )
     * )
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
