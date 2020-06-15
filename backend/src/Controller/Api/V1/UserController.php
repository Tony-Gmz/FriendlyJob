<?php

namespace App\Controller\Api\V1;

use App\Entity\CheckEmail;
use App\Entity\User;
use App\Repository\DepartmentRepository;
use App\Repository\ServiceRepository;
use App\Repository\UserRepository;
use App\Services\Email;
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
    private $emailService;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, JWTTokenManagerInterface $tokenManager, Email $emailService)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->tokenManager = $tokenManager;
        $this->emailService = $emailService;
    }

    /**
     * @OA\Tag(name="UserController")
     * @OA\Response(
     *     response=200,
     *     description="Return data from one user",
     * )
     * This method is used in order to read a User with his id
     * @Route("", name="read", methods={"GET"}, requirements={"id": "\d+"})
     */
    public function read()
    {
        // We retrieve the current User and we return a 200 JSON OK message
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
     * This method is used in order to add a User
     * @Route("/add", name="add", methods={"POST"})
     */
    public function add(Request $request, DepartmentRepository $departmentRepository, ValidatorInterface $validator)
    {
        // We decode the content data of the Request object
        $jsonData = json_decode($request->getContent());
        
        // We create a new instance of the User class
        $user = new User();

        // This "try-catch" is used to catch the ErrorException
        try {
            // We want the password to have atleast 8 characters, 1 capital letter, 1 lower letter, 1 number and 1 special character
            // If the password does not match, we return a 404 JSON error message
            if (!preg_match('/^(?=.*[^a-zA-Z0-9 ])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/', $jsonData->password)) {
                return $this->json([
                'statut' => 404,
                'message' => 'Password must contains at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
            ], 404);
            }

            // If we pass the condition, we encode the password
            $encodedPassword = $this->passwordEncoder->encodePassword($user, $jsonData->password);

            // We use a Regex to have a certain format for the Email
            // If the Email does not match, we return a 404 JSON error message
            if (! preg_match('/^[-._a-z0-9]+@[-._a-z0-9]+$/', strtolower($jsonData->email))) {
                return $this->json([
                'statut' => 404,
                'message' => "Email adress only allows those special characters (-._) and alphanumeric ( a-z 0-9 )"
            ], 404);
            }

            // If we pass the condition, we set the email in lowercase
            $user->setEmail(strtolower($jsonData->email));
        
            // We control that the 'roles' property is an array and is not empty
            // If the 'roles' property is not an array or is empty, we send a 404 JSON error message
            if (!is_array($jsonData->roles) || empty($jsonData->roles)) {
                return $this->json([
                'statut' => 404,
                'message' => 'Property roles needs to be an array and it should not be empty'
            ], 404);
            }

            // We want to check that the role is a FriendlyUser or a Jobworker
            // If not, we send a 404 JSON error message
            if (!preg_match('/^(FRIENDLY_USER|JOBWORKER)$/', strtoupper($jsonData->roles[0]))) {
                return $this->json([
                'statut' => 404,
                'message' => 'Roles can only be ["FRIENDLY_USER"] or ["JOBWORKER"]'
            ], 404);
            }

            // After our properties are well checked, we set them
            $user->setRoles($jsonData->roles);
            $user->setPassword($encodedPassword);
            $user->setFirstname($jsonData->firstname);
            $user->setLastname($jsonData->lastname);

            // If the image is set and is an empty character string, the image value is null
            if (isset($jsonData->image) && $jsonData->image == "") {
                $jsonData->image = null;
            }

            // We set the image and we allow it to be null
            $user->setImage($jsonData->image ?? null);

            // We retrieve the departement by using his id
            $department = $departmentRepository->find($jsonData->department);

            // We control if the department is null/non existent
            // If it's the case, we send a 404 JSON error message
            if ($department == null) {
                return $this->json([
                'statut' => 404,
                'message' => 'This department does not exist'
            ], 404);
            }

            // If the department is not null, we set it
            $user->setDepartment($department);

            // We retrieve the returned errors by the validator
            // If the validator catches errors, we return a 400 JSON error message
            $errors = $validator->validate($user);
            if (count($errors) > 0) {
                return $this->json($errors, 400);
            }

            // We call the EntityManagerInterface to persist the valid data
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            // The 'try-catch' serves to catch if there is a Unique constraint violation
            // Because our email property is unique
            // If the email already exists, we send a 404 JSON error message
            try {
                $em->flush();
            } catch (UniqueConstraintViolationException $e) {
                return $this->json([
                'statut' => 404,
                'message' => "This email already exist"
            ], 404);
            }

            // We create a new instance of the CheckEmail class
            $checkEmail = new CheckEmail();
            // We generate a token that we set
            $checkEmail->setToken($this->emailService->generateToken());
            // We set the user
            $checkEmail->setUser($user);
            // We set the isConfirmed at false
            $checkEmail->setIsConfirmed(0);

            // We persist and flush the $checkEmail object
            $em->persist($checkEmail);
            $em->flush();
            
            // We send an email to the new user so he can validate his registration
            $this->emailService->sendEmail($user, $checkEmail);
            
            // We return a 201 JSON Create Response
            return $this->json(
                $user,
                201,
                [],
                ['groups' => 'user_add']
            );
        }
        // If the try fails at some point, we return a JSON bad request message
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
     * This method is used in order to edit a User
     * @Route("", name="edit", methods={"PUT"})
     */
    public function edit(Request $request, DepartmentRepository $departmentRepository, ValidatorInterface $validator)
    {
        // We decode the content data of the Request object
        $jsonData = json_decode($request->getContent());

        // We retrieve the current User
        $user = $this->getUser();

        // We check if the password is modified
        if (isset($jsonData->password)) {
            
            // We want the password to have atleast 8 characters, 1 capital letter, 1 lower letter, 1 number and 1 special character
            // If the password does not match, we return a 404 JSON error message
            if (!preg_match('/^(?=.*[^a-zA-Z0-9 ])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/', $jsonData->password)) {
                return $this->json([
                'statut' => 404,
                'message' => 'Password must contains at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
            ], 404);
            }

            // If we pass the condition, we encode the password
            $encodedPassword = $this->passwordEncoder->encodePassword($user, $jsonData->password);
        }
        else {
            // If the password is not modify, we set it to null
            $encodedPassword = null;
        }

        // If the image is set and is not empty, we set it
        // Else, we set a null value
        if (isset($jsonData->image) && !empty($jsonData->image)) {
            $image = $jsonData->image;
        }
        else {
            $image = null;
        }

        // We instantiate a $token variable at null
        $token = null;

        // If an email has been sent and it is different from the one present in the database for the logged in user
        if (isset($jsonData->email) && $user->getEmail() != $jsonData->email)
        {
            // We control if the email has the right format with a Regex
            // If it does not match, we send a 404 JSON error message
            if (! preg_match('/^[-._a-z0-9]+@[-._a-z0-9]+$/', strtolower($jsonData->email))) {
                return $this->json([
                    'statut' => 404,
                    'message' => "Email adress only allows those special characters (-._) and alphanumeric ( a-z 0-9 )"
                ], 404);
            }
            
            // If we pass the condition, we set the email in lowercase
            $user->setEmail(strtolower($jsonData->email));

            // And we create a JWT token for this user
            $token = $this->tokenManager->create($user);
        }

        // If the user tries to modify his role
        // We send a 403 JSON error message for non authorization
        if (isset($jsonData->roles)) {
            return $this->json([
                'statut' => 403,
                'message' => "You don't have the authorization to modify this property"
            ], 403);
        }

        // We allow all the fields to be optionnal, and can be modify one by one
        // If some fields are not modified, they keep their current data
        $user->setRoles(isset($jsonData->roles) ? $jsonData->roles : $user->getRoles());
        $user->setPassword( $encodedPassword !== null ? $encodedPassword : $user->getPassword() );
        $user->setFirstname(isset($jsonData->firstname) ? $jsonData->firstname : $user->getFirstname());
        $user->setLastname(isset($jsonData->lastname) ? $jsonData->lastname : $user->getLastname());
        $user->setImage($image !== null ? $image : $user->getImage());
        $user->setAbout(isset($jsonData->about) ? $jsonData->about : $user->getAbout());
        $user->setUpdatedAt(new \DateTime());

        // If the department is modified, we retrieve it
        if ( isset($jsonData->department) ) {
            $department = $departmentRepository->find($jsonData->department);
            
            // We control if the department is null/non existent
            // If it's the case, we send a 404 JSON error message
            if ($department == null) {
                return $this->json([
                'statut' => 404,
                'message' => 'This department does not exist'
            ], 404);
            }
        }
        
        // If he's not modified, we control that the department is set
        // Else, we keep the current department
        $user->setDepartment(isset($jsonData->department) ? $departmentRepository->find($jsonData->department) : $user->getDepartment());

        // We retrieve the returned errors by the validator
        // If the validator catches errors, we return a 400 JSON error message
        $errors = $validator->validate($user);
        if (count($errors) > 0) {
            return $this->json($errors, 400);
        }
        
        // We persist and flush the $user object
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        // The 'try-catch' serves to catch if there is a Unique constraint violation
        // Because our email property is unique
        // If the email already exists, we send a 404 JSON error message
        try {
            $em->flush();
        } catch (UniqueConstraintViolationException $e) {
            return $this->json([
            'statut' => 404,
            'message' => "This email already exist"
            ], 404);
        }

        // We return a 200 JSON OK Response with the user object and the token
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
     * This method is used in order to delete the current User
     * @Route("", name="delete", methods={"DELETE"})
     */
    public function delete()
    {
        // We call the EntityManagerInterface to remove the current User
        $em = $this->getDoctrine()->getManager();
        $em->remove($this->getUser());
        $em->flush();

        // We return a 200 JSON OK message
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
     * This method is used in order to get a random JobWorker
     * @Route("/jobworker/random", name="jobworker_random", methods={"GET"})
     */
    public function getRandomJobWorker(UserRepository $userRepository)
    {
        // We retrieve all the JobWorkers with specific data
        $jobworker = $userRepository->getAllJobWorkers();

        // We shuffle the object
        shuffle($jobworker);

        // We use the mt_rand function to get a random JobWorker and we store it
        $getOneRandomJobWorker = $jobworker[mt_rand(0, count($jobworker) - 1)];

        // We return a 200 JSON OK Response
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
     * This method is used in order to get details from a JobWorker
     * @Route("/jobworker/{id}", name="jobworker", methods={"GET"}, requirements={"id": "\d+"})
     */
    public function getJobWorkerDetails(UserRepository $userRepository, $id)
    {
        // We get a JobWorker thanks to his id
        $jobWorker = $userRepository->findJobWorkerDetails($id);
        
        // We check that the JobWorker exists
        // If not, we send a 404 JSON error message
        if ($jobWorker == null) {
            return $this->json([
                'statut' => 404,
                'message' => "This id JobWorker is not a JobWorker or does not exist"
            ], 404);
        }

        // If we have the JobWorker, we return a 200 JSON OK Response
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
     * This method is used in order to get details from a JobWorker for the profile page
     * @Route("/jobworker", name="jobworker_profile", methods={"GET"})
     */
    public function getJobWorkerDetailsProfile(UserRepository $userRepository)
    {
        // We retrieve the current logged in JobWorker
        $jobWorker = $userRepository->findJobWorkerDetails($this->getUser()->getId());

        // We return a 200 JSON OK Response
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
     * This method is used in order to get the details for the contact page (admin)
     * @Route("/contacts", name="contacts", methods={"GET"})
     */
    public function getAllContact(UserRepository $userRepository)
    {
        // We retrieve the details from admins
        $admin = $userRepository->findContactDetails();

        // We return a 200 JSON OK Response
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
     * This method is used in order to get the rating from a JobWorker
     * @Route("/jobworker/{id}/rating", name="jobworker_rating", methods={"GET"})
     */
    public function getRatingOfJobworker(UserRepository $userRepository, int $id)
    {
        // We retrieve the JobWorker thanks to his id and his role
        $jobworker = $userRepository->findUserType($id, 'JOBWORKER');

        // If the user is not a JobWorker, we return a 404 JSON error message
        if ($jobworker == null) {
            return $this->json([
                'statut' => 404,
                'message' => "This user is not a Jobworker"
            ], 404);
        }

        // We search for a JobWorker who has rating using his id
        $jobWorkerRating = $userRepository->findJobWorkerRating($id);
        // If the JobWorker has no rating, we send a 404 JSON error message
        if ($jobWorkerRating == null) {
            return $this->json([
                'statut' => 404,
                'message' => "This jobworker has no rating"
            ], 404);
        }

        // Else, we return a 200 JSON OK Response
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
     * This method is used in order to get the list of Services of a JobWorker for which he has no skills
     * @Route("/jobworker/skill/select", name="jobworker_skill_select", methods={"GET"})
     */
    public function selectSkillForJobWorker(UserRepository $userRepository, SerializerInterface $serializer, ServiceRepository $serviceRepository)
    {
        // We identify the JobWorker thanks to his id and his role
        $jobworker = $userRepository->findUserType($this->getUser()->getId(), 'JOBWORKER');
        
        // We check if the user is a JobWorker
        // If he is not, we send a 404 JSON error message
        if ($jobworker == null) {
            return $this->json([
                'statut' => 404,
                'message' => "This user is not a Jobworker"
            ], 404);
        }

        // We retrieve the details of the JobWorker
        $jobWorkerInfo = $userRepository->findJobWorkerDetails($this->getUser()->getId());
        
        // We turn the $jobWorkerInfo object into an array
        $arrayJobWorkerInfo = $serializer->normalize($jobWorkerInfo, null, ['groups' => 'user_jobworker_details']);

        // We retrieve all the services
        $allService = $serviceRepository->findAll();

        // We turn the $allService object into an array
        $arrayServices = $serializer->normalize($allService, null, ['groups' => 'service_browse']);

        // We store the jobWorkers skills into a variable
        $allJobWorkerSkills = $arrayJobWorkerInfo['skills'];

        // We make a loop on $arrayServices which is the list of our Services
        foreach($arrayServices as $index => $service)
        {
            // We make a loop on $allJobworkersSkills which is the list of the jobWorkers skills
            foreach ($allJobWorkerSkills as $skills) {
                // We retrieve the service title
                $serviceName = $service['title'];
                // We store the service's title link to the JobWorker
                $skillServiceName = $skills['service']['title'];
                
                // If the serviceName value is the same as the skillServiceName value, we unset the value stored in $arrayServices
                if ($serviceName == $skillServiceName)
                {
                    unset($arrayServices[$index]);
                }
            }
        }

        // We check if the JobWorkers has skills for every services available
        // If he has every skills for all services, we send a 200 JSON OK message
        if ($arrayServices == null )
        {
            return $this->json([
                'statut' => 200,
                'message' => "This JobWorker already has every skills for all services"
            ], 200);
        }

        // We return a 200 JSON OK message
        return $this->json(
            $arrayServices, 
            200
        );
    }
}