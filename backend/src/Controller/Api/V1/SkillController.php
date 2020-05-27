<?php

namespace App\Controller\Api\V1;

use App\Entity\Skill;
use App\Repository\ServiceRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/skills", name="api_v1_skills_")
 */
class SkillController extends AbstractController
{
    /**
     * @Route("", name="add", methods={"POST"})
     */
    public function add(Request $request, UserRepository $userRepository, ServiceRepository $serviceRepository)
    {
        $jsonData = json_decode($request->getContent());

        $skill = new Skill();

        $skill->setDescription($jsonData->description);
        $skill->setPrice($jsonData->price);
        $skill->setUser($userRepository->findUserType($jsonData->user, 'JOBWORKER'));
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
     * @Route("/{id}", name="edit", methods={"PUT"})
     */
    public function edit(Request $request, Skill $skill)
    {
        $jsonData = json_decode($request->getContent());

        $skill->setDescription($jsonData->description);
        $skill->setPrice($jsonData->price);
        $skill->setUpdatedAt(new \DateTime());

        //dd($skill);

        $em = $this->getDoctrine()->getManager();
        $em->persist($skill);
        $em->flush();

        return $this->json(
            $skill,
            201,
            [],
            ['groups' => 'skill_edit']
        );
    }

    /**
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
