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
     * @OA\Response(
     *     response=403,
     *     description="Return a unAuthorization message",
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
     * This method is used in order to add a Rating
     * @Route("", name="add", methods={"POST"})
     */
    public function add(Request $request, DemandRepository $demandRepository, ValidatorInterface $validator)
    {   

        // This "try-catch" is used to catch the ErrorException
        try {
            // We decode the content data of the Request object
            $jsonData = json_decode($request->getContent());

            // We create a new instance of the Rating class
            $rating = new Rating();

            // We set the comment
            $rating->setComment($jsonData->comment);

            // We verify that the star property is an integer
            if ( ! preg_match('/^\d+$/', $jsonData->star) ) {
                return $this->json([
                    'statut' => 404,
                    'message' => "Property star need to be an integer"
                ], 404);
              }
            // After the treatment, if the star is an integer, we set the star
            $rating->setStar($jsonData->star);

            // We retrieve the demand by using his id
            $demand = $demandRepository->find($jsonData->demand);

            // If the demand is non existent, we are sending a 404 JSON error message
            if ($demand == null)
            {
                return $this->json([
                    'statut' => 404,
                    'message' => "Adding a comment is impossible for a non-existent demand"
                ], 404);
            }
            // If the demand exist, we set the demand
            $rating->setDemand($demand);

            // We call the RatingVoter for authorizations
            $this->denyAccessUnlessGranted('ADD', $rating);
            
            // We retrieve the returned errors by the validator
            // If the validator catches errors, we return a 400 JSON error message
            $errors = $validator->validate($rating);
            if (count($errors) > 0) {
                return $this->json($errors, 400);
            }

            // We call the EntityManagerInterface to persist the valid data
            $em = $this->getDoctrine()->getManager();
            $em->persist($rating);
            // This "try-catch" is used to catch the UniqueConstraintViolationException
            // because a demand can only have one rating
            // If we pass the condition, we flush datas to the database
            // If we don't pass the condition, we return a 404 JSON error message
            try {
                $em->flush();
             }
             catch (UniqueConstraintViolationException $e) {
                return $this->json([
                    'statut' => 404,
                    'message' => "This rating can't exist for this demands ( Unique )"
                ], 404);
             }

            // Once the datas are persist and flush, we return a JSON create message
            return $this->json(
                $rating,
                201,
                [],
                ['groups' => 'rating_add']
            );
        }
        // If the try at the beginning fails at some point, we return a JSON bad request message
        catch (ErrorException $e) {
            return $this->json([
                'status' => 400,
                'message' => "Json syntax error"
            ], 400);
        }
        
    }
}
