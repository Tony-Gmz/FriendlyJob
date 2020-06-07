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
     * @Route("", name="add", methods={"POST"})
     */
    public function add(Request $request, UserRepository $userRepository, ServiceRepository $serviceRepository)
    {
        
        $jsonData = json_decode($request->getContent());

        $skill = new Skill();

        $user = $userRepository->findUserType($this->getUser()->getId(), 'JOBWORKER');
        // Condition si user null ( donc n'est pas jobworker )
        //dd($user);

        $skill->setDescription($jsonData->description);
        $skill->setPrice($jsonData->price);
        $skill->setUser($user);
        $skill->setService($serviceRepository->find($jsonData->service));

        //dd($skill);

        $em = $this->getDoctrine()->getManager();
        $em->persist($skill);
        $em->flush();

        return $this->json(
            $skill,
            201,
            [],
            ['groups' => 'skill_add']
        );
    }

    /**
     * @OA\Tag(name="SkillController")
     * @OA\Response(
     *     response=201,
     *     description="Return the modified skills",
     *     @Model(type=Skill::class, groups={"skill_edit"})
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
     * @Route("/{id}", name="edit", methods={"PUT"})
     */
    public function edit(Request $request, Skill $skill, ValidatorInterface $validator)
    {
        try {

            $jsonData = json_decode($request->getContent());
    
            $skill->setDescription(isset($jsonData->description) ? $jsonData->description : $skill->getDescription());
            //! Regex pour vérifier que price soit un int
            if ( ! preg_match('/^\d+$/', $jsonData->price) ) {
                return $this->json([
                    'statut' => 404,
                    'message' => "Property price need to be an integer"
                ], 404);
              }

            $skill->setPrice(isset($jsonData->price) ? $jsonData->price : $skill->getPrice());
            $skill->setUpdatedAt(new \DateTime());
    
            //! Validator
            $errors = $validator->validate($skill);
                
            if (count($errors) > 0) {
                return $this->json($errors, 400);
            }
    
            $em = $this->getDoctrine()->getManager();
            $em->persist($skill);
            $em->flush();
    
            return $this->json(
                $skill,
                201,
                [],
                ['groups' => 'skill_edit']
            );
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
     * @Route("/{id}", name="delete", methods={"DELETE"}, requirements={"id": "\d+"})
     */
    public function delete(Skill $skill)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($skill);
        $em->flush();

        return $this->json([
            'statut' => 200,
            'message' => 'La compétence a bien été supprimé.'
        ], 200);
    }
}