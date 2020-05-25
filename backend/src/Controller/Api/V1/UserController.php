<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Repository\DepartmentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/api/v1/user", name="api_v1_user_")
 */
class UserController extends AbstractController
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @Route("/{id}", name="read", methods={"GET"}, requirements={"id": "\d+"})
     */
    public function read(User $user)
    {
        $response = $this->json(
            $user, 
            200, 
            [], 
            ['groups' => 'user_read']
        );

        return $response;
    }

    /**
     * @Route("", name="add", methods={"POST"})
     */
    public function add(Request $request, DepartmentRepository $departmentRepository)
    {
        $jsonData = json_decode($request->getContent());
        //dd($jsonData);

        $user = new User();
        $encodedPassword = $this->passwordEncoder->encodePassword($user, $jsonData->password);

        $user->setEmail($jsonData->email);
        $user->setRoles($jsonData->roles);
        $user->setPassword($encodedPassword);
        $user->setFirstname($jsonData->firstname);
        $user->setLastname($jsonData->lastname);
        $user->setImage($jsonData->image);
        $user->setDepartment($departmentRepository->find($jsonData->department));

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return $this->json(
            $user,
            201,
            [],
            ['groups' => 'user_add']
        );
    }

    /**
     * @Route("/{id}", name="edit", methods={"PUT"}, requirements={"id": "\d+"})
     */
    public function edit(Request $request, User $user, DepartmentRepository $departmentRepository)
    {
        $jsonData = json_decode($request->getContent());
        //dd($jsonData);

        $user->setEmail($jsonData->email);
        $user->setRoles($jsonData->roles);
        $user->setFirstname($jsonData->firstname);
        $user->setLastname($jsonData->lastname);
        $user->setImage($jsonData->image);
        $user->setDepartment($departmentRepository->find($jsonData->department));

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return $this->json(
            $user,
            200,
            [],
            ['groups' => 'user_edit']
        );
    }

    /**
     * @Route("/{id}", name="delete", methods={"DELETE"}, requirements={"id": "\d+"})
     */
    public function delete(User $user)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($user);
        $em->flush();

        return $this->json(
            $user,
            200, 
            [],
            ['groups' => 'user_delete']
        );
    }
}
