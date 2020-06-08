<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Repository\DepartmentRepository;
use App\Repository\ServiceRepository;
use App\Repository\UserRepository;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Nelmio\ApiDocBundle\Annotation\Model;
use Swagger\Annotations as OA;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/users", name="api_v1_users_")
 */
class UserController extends AbstractController
{
    private $passwordEncoder;
    private $tokenManager;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, JWTTokenManagerInterface $tokenManager)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->tokenManager = $tokenManager;
    }

    /**
     * @OA\Tag(name="UserController")
     * @OA\Response(
     *     response=200,
     *     description="Return data from one user",
     * )
     * @Route("", name="read", methods={"GET"}, requirements={"id": "\d+"})
     */
    public function read()
    {
        $response = $this->json(
            $this->getUser(), 
            200, 
            [], 
            ['groups' => 'user_read']
        );

        return $response;
    }

    /**
     * @OA\Tag(name="UserController")
     * @OA\Response(
     *     response=200,
     *     description="Return the created users",
     * )
     * @OA\Parameter(
     *     name="user",
     *     in="body",
     *     description="Create a user",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="email", type="string"),
     *      @OA\Property(property="roles", type="array",
     *          @OA\Items(type="string")
     *      ),
     *      @OA\Property(property="password", type="string"),
     *      @OA\Property(property="firstname", type="string"),
     *      @OA\Property(property="lastname", type="string"),
     *      @OA\Property(property="image", type="string"),
     *      @OA\Property(property="department", type="integer"),
     *     )
     * )
     * @Route("/add", name="add", methods={"POST"})
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
        $user->setImage($jsonData->image ?? null);
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
     * @OA\Tag(name="UserController")
     * @OA\Response(
     *     response=200,
     *     description="Return the modified users",
     * )
     * @OA\Parameter(
     *     name="demand",
     *     in="body",
     *     description="Modify a user",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="email", type="string"),
     *      @OA\Property(property="roles", type="array",
     *          @OA\Items(type="string")
     *      ),
     *      @OA\Property(property="password", type="string"),
     *      @OA\Property(property="firstname", type="string"),
     *      @OA\Property(property="lastname", type="string"),
     *      @OA\Property(property="image", type="string"),
     *      @OA\Property(property="department", type="integer"),
     *     )
     * )
     * @Route("", name="edit", methods={"PUT"})
     */
    public function edit(Request $request, DepartmentRepository $departmentRepository)
    {
        $jsonData = json_decode($request->getContent());
        //dd($jsonData);

        $user = $this->getUser();

        if (isset($jsonData->password)) {
            $encodedPassword = $this->passwordEncoder->encodePassword($user, $jsonData->password);
        }
        else {
            $encodedPassword = null;
        }

        if (isset($jsonData->image)) {
            $image = $jsonData->image;
        }
        else {
            $image = null;
        }

        $token = null;
        if (isset($jsonData->email) && $user->getEmail() != $jsonData->email)
        {
            $user->setEmail($jsonData->email);
            $token = $this->tokenManager->create($user);
            
        }

        $user->setRoles(isset($jsonData->roles) ? $jsonData->roles : $user->getRoles());
        $user->setPassword( $encodedPassword !== null ? $encodedPassword : $user->getPassword() );
        $user->setFirstname(isset($jsonData->firstname) ? $jsonData->firstname : $user->getFirstname());
        $user->setLastname(isset($jsonData->lastname) ? $jsonData->lastname : $user->getLastname());
        $user->setImage($image !== null ? $image : $user->getImage());
        $user->setAbout(isset($jsonData->about) ? $jsonData->about : $user->getAbout());
        $user->setUpdatedAt(new \DateTime());
        $user->setDepartment(isset($jsonData->department) ? $departmentRepository->find($jsonData->department) : $user->getDepartment());
 
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return $this->json(
            [
                'user' => $user, 
                'token' => $token
            ],
            200,
            [],
            ['groups' => 'user_edit']
        );
    }

    /**
     * @OA\Tag(name="UserController")
     * @OA\Response(
     *     response=200,
     *     description="Delete a user",
     * )
     * @Route("", name="delete", methods={"DELETE"})
     */
    public function delete()
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($this->getUser());
        $em->flush();

        return $this->json([
            'statut' => 200,
            'message' => 'L\'utilisateur a bien été supprimé.'
        ], 200);
    }

    /**
     * @OA\Tag(name="UserController")
     * @OA\Response(
     *     response=200,
     *     description="Return one random jobworker",
     * )
     * @Route("/jobworker/random", name="jobworker_random", methods={"GET"})
     */
    public function getRandomJobWorker(UserRepository $userRepository)
    {
        $jobworker = $userRepository->getAllJobWorkers();
        //dd($jobworker);

        shuffle($jobworker);
        //dd($jobworker);

        $getOneRandomJobWorker = $jobworker[mt_rand(0, count($jobworker) - 1)];
        //dd($getOneRandomJobWorker);

        return $this->json(
            $getOneRandomJobWorker,
            200,
            [],
            ['groups' => 'user_random_jobworker']
        );

    }
    
    /**
     * @OA\Tag(name="UserController")
     * @OA\Response(
     *     response=200,
     *     description="Return details from one jobworker",
     * )
     * @Route("/jobworker/{id}", name="jobworker", methods={"GET"}, requirements={"id": "\d+"})
     */
    public function getJobWorkerDetails(UserRepository $userRepository, $id)
    {
        $jobWorker = $userRepository->findJobWorkerDetails($id);

        return $this->json(
            $jobWorker,
            200, 
            [],
            ['groups' => 'user_jobworker_details']
        );
    }

    /**
     * @OA\Tag(name="UserController")
     * @OA\Response(
     *     response=200,
     *     description="Return details from one jobworker for the profile",
     * )
     * @Route("/jobworker", name="jobworker_profile", methods={"GET"})
     */
    public function getJobWorkerDetailsProfile(UserRepository $userRepository)
    {
        $jobWorker = $userRepository->findJobWorkerDetails($this->getUser()->getId());

        return $this->json(
            $jobWorker,
            200, 
            [],
            ['groups' => 'user_jobworker_details']
        );
    }

    /**
     * @OA\Tag(name="UserController")
     * @OA\Response(
     *     response=200,
     *     description="Return details of all admins",
     * )
     * @Route("/contacts", name="contacts", methods={"GET"})
     */
    public function getAllContact(UserRepository $userRepository)
    {
        $admin = $userRepository->findContactDetails();

        return $this->json(
            $admin,
            200, 
            [],
            ['groups' => 'user_contact']
        );
    }

    /**
     * @OA\Tag(name="UserController")
     * @OA\Response(
     *     response=200,
     *     description="Return rating from one JobWorker",
     * )
     * @Route("/jobworker/{id}/rating", name="jobworker_rating", methods={"GET"})
     */
    public function getRatingOfJobworker(UserRepository $userRepository, int $id)
    {
        $jobWorkerRating = $userRepository->findJobWorkerRating($id);
        //dd($jobWorkerRating);

        return $this->json(
            $jobWorkerRating,
            200, 
            [],
            ['groups' => 'user_jobworker_rating']
        );
    }

    /**
     * @OA\Tag(name="UserController")
     * @OA\Response(
     *     response=200,
     *     description="Return the list of the services which has no skill for a jobworker ",
     * )
     * @Route("/jobworker/skill/select", name="jobworker_skill_select", methods={"GET"})
     */
    public function selectSkillForJobWorker(UserRepository $userRepository, SerializerInterface $serializer, ServiceRepository $serviceRepository)
    {
        // Récupération des info jobworker en utilisant une qb existante
        $JobworkerInfo = $userRepository->findJobWorkerDetails($this->getUser()->getId());
        
        // Transformation en tableau de ces données avec un groupe existant
        $arrayJobworkerInfo = $serializer->normalize($JobworkerInfo, null, ['groups' => 'user_jobworker_details']);

        // Récupération de tout les services
        $allService = $serviceRepository->findAll();

        // Transformation en tableau de ces données avec un groupe existant
        $arrayServices = $serializer->normalize($allService, null, ['groups' => 'service_browse']);
        //dd($arrayServices);

        $AllJobworkerSkill = $arrayJobworkerInfo['skills'];
        //dd($AllJobworkerSkill);

        foreach($arrayServices as $index => $service)
        {
            foreach ($AllJobworkerSkill as $skills) {
                $serviceName = $service['title'];
                $skillServiceName = $skills['service']['title'];
                
                if ($serviceName == $skillServiceName)
                {
                    //dump('MATCH !');
                    //dump($serviceName, $skillServiceName);
                    unset($arrayServices[$index]);
                }
                //dump('nope');
            }
        }
        //dd($arrayServices);
        //! Quand la personne a tout les skill sur son profil ça retourne un tableau vide !

        return $this->json(
            $arrayServices, 
            200
        );
    }
}