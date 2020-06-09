<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Repository\DepartmentRepository;
use App\Repository\ServiceRepository;
use App\Repository\UserRepository;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use ErrorException;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Swagger\Annotations as OA;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

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
     * @Route("/add", name="add", methods={"POST"})
     */
    public function add(Request $request, DepartmentRepository $departmentRepository, ValidatorInterface $validator)
    {
        $jsonData = json_decode($request->getContent());
        //dd($jsonData);
        
        $user = new User();

        try {
            //! Regex pour attribuer au password au moins 8 caractères, 1 majuscule, 1 minuscule, un nombre et un caractère spécial
            if (!preg_match('/^(?=.*[^a-zA-Z0-9 ])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/', $jsonData->password)) {
                return $this->json([
                'statut' => 404,
                'message' => 'Password must contains at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
            ], 404);
            }
            $encodedPassword = $this->passwordEncoder->encodePassword($user, $jsonData->password);

            //! Regex pour controller le format de l'email
            if (! preg_match('/^[-._a-z0-9]+@[-._a-z0-9]+$/', strtolower($jsonData->email))) {
                return $this->json([
                'statut' => 404,
                'message' => "Email adress only allows those special characters (-._) and alphanumeric ( a-z 0-9 )"
            ], 404);
            }
            $user->setEmail(strtolower($jsonData->email));
        
            //! Condition pour controller que la variable role est un tableau
            if (!is_array($jsonData->roles) || empty($jsonData->roles)) {
                return $this->json([
                'statut' => 404,
                'message' => 'Property roles needs to be an array and it should not be empty'
            ], 404);
            }
            //! Condition pour controller les roles
            if (!preg_match('/^(FRIENDLY_USER|JOBWORKER)$/', strtoupper($jsonData->roles[0]))) {
                return $this->json([
                'statut' => 404,
                'message' => 'Roles can only be ["FRIENDLY_USER"] or ["JOBWORKER"]'
            ], 404);
            }
            $user->setRoles($jsonData->roles);
            $user->setPassword($encodedPassword);
            $user->setFirstname($jsonData->firstname);
            $user->setLastname($jsonData->lastname);

            //! Condition pour gérer la chaine de caractère vide spécifique à l'image
            if (isset($jsonData->image) && $jsonData->image == "") {
                $jsonData->image = null;
            }
            $user->setImage($jsonData->image ?? null);

            $department = $departmentRepository->find($jsonData->department);
            //! Condition pour un département inexistant
            if ($department == null) {
                return $this->json([
                'statut' => 404,
                'message' => 'This department does not exist'
            ], 404);
            }
            $user->setDepartment($department);

            //! Validator
            $errors = $validator->validate($user);
        
            if (count($errors) > 0) {
                return $this->json($errors, 400);
            }

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            //! Gestion d'un email unique
            try {
                $em->flush();
            } catch (UniqueConstraintViolationException $e) {
                return $this->json([
                'statut' => 404,
                'message' => "This email already exist"
            ], 404);
            }
        

            return $this->json(
                $user,
                201,
                [],
                ['groups' => 'user_add']
            );
        }
        catch (ErrorException $e) {
            return $this->json([
                'status' => 400,
                'message' => "Json syntax error"
            ], 400);
        }
    }

    /**
     * @OA\Tag(name="UserController")
     * @OA\Response(
     *     response=200,
     *     description="Return the modified users",
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
     *     description="Return an Unauthorization message",
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
    public function edit(Request $request, DepartmentRepository $departmentRepository, ValidatorInterface $validator)
    {
        $jsonData = json_decode($request->getContent());
        //dd($jsonData);

        $user = $this->getUser();

        if (isset($jsonData->password)) {
            
            //! Regex pour attribuer au password au moins 8 caractères, 1 majuscule, 1 minuscule, un nombre et un caractère spécial
            if (!preg_match('/^(?=.*[^a-zA-Z0-9 ])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/', $jsonData->password)) {
                return $this->json([
                'statut' => 404,
                'message' => 'Password must contains at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
            ], 404);
            }

            $encodedPassword = $this->passwordEncoder->encodePassword($user, $jsonData->password);
        }
        else {
            $encodedPassword = null;
        }

        if (isset($jsonData->image) && !empty($jsonData->image)) {
            $image = $jsonData->image;
        }
        else {
            $image = null;
        }

        $token = null;
        if (isset($jsonData->email) && $user->getEmail() != $jsonData->email)
        {
            //! Regex pour controller le format de l'email
            if (! preg_match('/^[-._a-z0-9]+@[-._a-z0-9]+$/', strtolower($jsonData->email))) {
                return $this->json([
                    'statut' => 404,
                    'message' => "Email adress only allows those special characters (-._) and alphanumeric ( a-z 0-9 )"
                ], 404);
            }
            
            $user->setEmail(strtolower($jsonData->email));
            $token = $this->tokenManager->create($user);
        }

        if (isset($jsonData->roles)) {
            return $this->json([
                'statut' => 403,
                'message' => "You don't have the authorization to modify this property"
            ], 403);
        }
        $user->setRoles(isset($jsonData->roles) ? $jsonData->roles : $user->getRoles());
        $user->setPassword( $encodedPassword !== null ? $encodedPassword : $user->getPassword() );
        $user->setFirstname(isset($jsonData->firstname) ? $jsonData->firstname : $user->getFirstname());
        $user->setLastname(isset($jsonData->lastname) ? $jsonData->lastname : $user->getLastname());
        $user->setImage($image !== null ? $image : $user->getImage());
        $user->setAbout(isset($jsonData->about) ? $jsonData->about : $user->getAbout());
        $user->setUpdatedAt(new \DateTime());

        if ( isset($jsonData->department) ) {
            $department = $departmentRepository->find($jsonData->department);
            
            //! Condition pour un département inexistant
            if ($department == null) {
                return $this->json([
                'statut' => 404,
                'message' => 'This department does not exist'
            ], 404);
            }
        }
        
        $user->setDepartment(isset($jsonData->department) ? $departmentRepository->find($jsonData->department) : $user->getDepartment());

        //! Validator
        $errors = $validator->validate($user);

        if (count($errors) > 0) {
            return $this->json($errors, 400);
        }
        
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        //! Gestion d'un email unique
        try {
            $em->flush();
        } catch (UniqueConstraintViolationException $e) {
            return $this->json([
            'statut' => 404,
            'message' => "This email already exist"
            ], 404);
        }

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
     * @OA\Response(
     *     response=404,
     *     description="Return an error message",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="status", type="integer"),
     *      @OA\Property(property="message", type="string")
     *     )
     * )
     * @Route("/jobworker/{id}", name="jobworker", methods={"GET"}, requirements={"id": "\d+"})
     */
    public function getJobWorkerDetails(UserRepository $userRepository, $id)
    {
        $jobWorker = $userRepository->findJobWorkerDetails($id);
        
        if ($jobWorker == null) {
            return $this->json([
                'statut' => 404,
                'message' => "This id JobWorker is not a JobWorker or does not exist"
            ], 404);
        }

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
     * @OA\Response(
     *     response=404,
     *     description="Return an error message",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="status", type="integer"),
     *      @OA\Property(property="message", type="string")
     *     )
     * )
     * @Route("/jobworker/{id}/rating", name="jobworker_rating", methods={"GET"})
     */
    public function getRatingOfJobworker(UserRepository $userRepository, int $id)
    {
        $jobworker = $userRepository->findUserType($id, 'JOBWORKER');
        //! Condition si user null ( donc n'est pas un Jobworker )
        if ($jobworker == null) {
            return $this->json([
                'statut' => 404,
                'message' => "This user is not a Jobworker"
            ], 404);
        }

        $jobWorkerRating = $userRepository->findJobWorkerRating($id);
        //! Condition si le jobworker a aucune note ( donc n'est pas un Jobworker )
        // if ($jobWorkerRating == null) {
        //     return $this->json([
        //         'statut' => 404,
        //         'message' => "This jobworker has no rating"
        //     ], 404);
        // }

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
     * @OA\Response(
     *     response=404,
     *     description="Return an error message",
     *     @OA\Schema(
     *      type="object",
     *      @OA\Property(property="status", type="integer"),
     *      @OA\Property(property="message", type="string")
     *     )
     * )
     * @Route("/jobworker/skill/select", name="jobworker_skill_select", methods={"GET"})
     */
    public function selectSkillForJobWorker(UserRepository $userRepository, SerializerInterface $serializer, ServiceRepository $serviceRepository)
    {
        $jobworker = $userRepository->findUserType($this->getUser()->getId(), 'JOBWORKER');
        //! Condition si user null ( donc n'est pas un Jobworker )
        if ($jobworker == null) {
            return $this->json([
                'statut' => 404,
                'message' => "This user is not a Jobworker"
            ], 404);
        }
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
        if ($arrayServices == null )
        {
            return $this->json([
                'statut' => 200,
                'message' => "This JobWorker already has every skills for all services"
            ], 200);
        }

        return $this->json(
            $arrayServices, 
            200
        );
    }
}