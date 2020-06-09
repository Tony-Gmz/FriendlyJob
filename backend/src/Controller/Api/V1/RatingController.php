<?php

namespace App\Controller\Api\V1;

use App\Entity\Rating;
use App\Repository\DemandRepository;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use ErrorException;
use Nelmio\ApiDocBundle\Annotation\Model;
use Swagger\Annotations as OA;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("/api/v1/ratings", name="api_v1_ratings_")
 */
class RatingController extends AbstractController
{
    /** 
     * @OA\Tag(name="RatingController")
     * @OA\Response(
     *     response=201,
     *     description="Return the rating created and the demanded where the rating is linked",
     *     @Model(type=Rating::class, groups={"rating_add"}),
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
    public function add(Request $request, DemandRepository $demandRepository, ValidatorInterface $validator)
    {   

        //! Try Catch pour un json MalFormé
        try {
            $jsonData = json_decode($request->getContent());

            $rating = new Rating();

            $rating->setComment($jsonData->comment);

            //! Regex pour vérifier que star soit un int
            if ( ! preg_match('/^\d+$/', $jsonData->star) ) {
                return $this->json([
                    'statut' => 404,
                    'message' => "Property star need to be an integer"
                ], 404);
              }
            $rating->setStar($jsonData->star);

            $demand = $demandRepository->find($jsonData->demand);

            //! Gérer demande inexistante 404
            if ($demand == null)
            {
                return $this->json([
                    'statut' => 404,
                    'message' => "Adding a comment is impossible for a non-existent demand"
                ], 404);
            }
            $rating->setDemand($demand);

            //! VOTER
            $this->denyAccessUnlessGranted('ADD', $rating);

            //! Validator
            $errors = $validator->validate($rating);
            
            if (count($errors) > 0) {
                return $this->json($errors, 400);
            }

            $em = $this->getDoctrine()->getManager();
            $em->persist($rating);
            //! Gestion d'un commentaire unique
            try {
                $em->flush();
             }
             catch (UniqueConstraintViolationException $e) {
                return $this->json([
                    'statut' => 404,
                    'message' => "This rating can't exist for this demands ( Unique )"
                ], 404);
             }

            return $this->json(
                $rating,
                201,
                [],
                ['groups' => 'rating_add']
            );
        }
        catch (ErrorException $e) {
            return $this->json([
                'status' => 400,
                'message' => "Json syntax error"
            ], 400);
        }
        
    }
}
