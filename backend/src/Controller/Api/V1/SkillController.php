<?php

namespace App\Controller\Api\V1;

use App\Entity\Skill;
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
 * @Route("/api/v1/skills", name="api_v1_skills_")
 */
class SkillController extends AbstractController
{
    /**
     * @OA\Tag(name="SkillController")
     * @OA\Response(
     *     response=201,
     *     description="Return the created skills",
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
     *     name="skill",
     *     in="body",
     *     description="Modify a skill for one jobworker",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="description", type="string"),
     *      @OA\Property(property="price", type="integer"),
     *      @OA\Property(property="service", type="integer"),
     *     )
     * )
     * This method is used in order to add a Skill
     * @Route("", name="add", methods={"POST"})
     */
    public function add(Request $request, UserRepository $userRepository, ServiceRepository $serviceRepository, ValidatorInterface $validator)
    {
        // We decode the content data of the Request object
        $jsonData = json_decode($request->getContent());

        // We create a new instance of the Skill class
        $skill = new Skill();

        // We control that the user who adds a Skill is a JobWorker
        $user = $userRepository->findUserType($this->getUser()->getId(), 'JOBWORKER');
        // If the user is not a JobWorker, we are sending a 404 JSON error message
        if ($user == null)
        {
            return $this->json([
                'statut' => 404,
                'message' => "Adding a skill is impossible for a non-jobworker"
            ], 404);
        }

        // This "try-catch" is used to catch the ErrorException
        try {
            // We set the description
            // The description can be null
            $skill->setDescription($jsonData->description ?? null);

            // We control with a Regex that the property price is an integer
            // If not, we send a 404 JSON error message
            if ( isset($jsonData->price) && !preg_match('/^\d+$/', $jsonData->price) ) {
                return $this->json([
                    'statut' => 404,
                    'message' => "Property price need to be an integer"
                ], 404);
            }
            // If we pass the condition, we set the price
            $skill->setPrice($jsonData->price);
            // If the user is truly a JobWorker, we set the user
            $skill->setUser($user);

            // We retrieve the service by using his id
            $service = $serviceRepository->find($jsonData->service);
            
            // We control if the service is null/non existent
            // If it's the case, we send a 404 JSON error message
            if ($service == null)
            {
                return $this->json([
                    'statut' => 404,
                    'message' => "Adding a skill is impossible for a non-existent service"
                ], 404);
            }
            // If the service exists, we set it
            $skill->setService($service);

            // We retrieve the returned errors by the validator
            // If the validator catches errors, we return a 400 JSON error message
            $errors = $validator->validate($skill);
            if (count($errors) > 0) {
                return $this->json($errors, 400);
            }

            // We call the EntityManagerInterface to persist the valid data
            $em = $this->getDoctrine()->getManager();
            $em->persist($skill);
            $em->flush();

            // Once the datas are persist and flush, we return a JSON create message
            return $this->json(
                $skill,
                201,
                [],
                ['groups' => 'skill_add']
            );
            // If the try fails at some point, we return a JSON bad request message
        } catch (ErrorException $e){
            return $this->json([
                'status' => 400,
                'message' => "Json syntax error"
            ], 400);
        }
    }

    /**
     * @OA\Tag(name="SkillController")
     * @OA\Response(
     *     response=201,
     *     description="Return the modified skills",
     *     @Model(type=Skill::class, groups={"skill_edit"})
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
     *     name="skill",
     *     in="body",
     *     description="Modify a skill for one user",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="description", type="string"),
     *      @OA\Property(property="price", type="integer"),
     *     )
     * )
     * This method is used in order to edit a Skill
     * @Route("/{id}", name="edit", methods={"PUT"})
     */
    public function edit(Request $request, Skill $skill, ValidatorInterface $validator)
    {
        // This "try-catch" is used to catch the ErrorException
        try {
            // We call the SkillVoter for authorizations
            $this->denyAccessUnlessGranted('EDIT', $skill);

            // We decode the content data of the Request object
            $jsonData = json_decode($request->getContent());
    
            // If the description field exists and is set, we send the new description
            // Otherwise, we keep the current description
            $skill->setDescription(isset($jsonData->description) ? $jsonData->description : $skill->getDescription());
            
            // We control with a Regex that the property price is an integer
            // If not, we send a 404 JSON error message
            if ( isset($jsonData->price) && !preg_match('/^\d+$/', $jsonData->price) ) {
                return $this->json([
                    'statut' => 404,
                    'message' => "Property price need to be an integer"
                ], 404);
            }
            // If the price field exists and is set, we send the new price
            // Otherwise, we keep the current price
            $skill->setPrice(isset($jsonData->price) ? $jsonData->price : $skill->getPrice());
            
            // As we modify a Skill with this method, we set a new DateTime object in the updatedAt setter
            $skill->setUpdatedAt(new \DateTime());
    
            // We retrieve the returned errors by the validator
            // If the validator catches errors, we return a 400 JSON error message
            $errors = $validator->validate($skill);
            if (count($errors) > 0) {
                return $this->json($errors, 400);
            }

            // We call the EntityManagerInterface to persist the valid data
            $em = $this->getDoctrine()->getManager();
            $em->persist($skill);
            $em->flush();
    
            // Once the datas are persist and flush, we return a 200 JSON OK message
            return $this->json(
                $skill,
                200,
                [],
                ['groups' => 'skill_edit']
            );
            // If the try fails at some point, we return a JSON bad request message
        } catch (ErrorException $e){
            return $this->json([
                'status' => 400,
                'message' => "Json syntax error"
            ], 400);
        }
    }

    /**
     * @OA\Tag(name="SkillController")
     * @OA\Response(
     *     response=200,
     *     description="Delete a skill",
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
     *     response=403,
     *     description="Return a unAuthorization message",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="status", type="integer"),
     *      @OA\Property(property="message", type="string")
     *     )
     * )
     * This method is used in order to delete a Skill
     * @Route("/{id}", name="delete", methods={"DELETE"}, requirements={"id": "\d+"})
     */
    public function delete(Skill $skill)
    {
        // We call the SkillVoter for authorizations
        $this->denyAccessUnlessGranted('DELETE', $skill);

        // We call the EntityManagerInterface to remove the data using his id
        $em = $this->getDoctrine()->getManager();
        $em->remove($skill);
        $em->flush();

        // Once the data are remove and flush, we return a 200 JSON OK message
        return $this->json([
            'statut' => 200,
            'message' => 'La compétence a bien été supprimé.'
        ], 200);
    }
}