<?php

namespace App\Controller\Api\V1;

use App\Entity\Department;
use App\Entity\Service;
use App\Repository\ServiceRepository;
use Nelmio\ApiDocBundle\Annotation\Model;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Entity;
use Swagger\Annotations as OA;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/services", name="api_v1_services_")
 */
class ServiceController extends AbstractController
{
    /**
     * @OA\Tag(name="ServiceController")
     * @OA\Response(
     *     response=200,
     *     description="Return the list of the services",
     *     @OA\Schema(
     *      type="array",
     *      @Model(type=Service::class, groups={"service_browse"})
     *     ) 
     * )
     * This method is used in order to list all the Services
     * @Route("", name="browse", methods={"GET"})
     */
    public function browse(ServiceRepository $serviceRepository, SerializerInterface $serializer)
    {
        // We search for all the services data thanks to the Repository
        $services = $serviceRepository->findAll();

        // We turn the $services object into an array
        $arrayServices = $serializer->normalize($services, null, ['groups' => 'service_browse']);

        // We return our array into a JSON 200 OK Response
        return $this->json($arrayServices, 200);
    }

    /**
     * @OA\Tag(name="ServiceController")
     * @OA\Response(
     *     response=200,
     *     description="Return one service with his id",
     *     @Model(type=Service::class, groups={"service_read"})
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
     * This method is used in order to read a Service with his id
     * @Route("/{id}", name="read_id", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function readById(Service $service, SerializerInterface $serializer)
    {
        // We turn the $service object into an array
        $arrayService = $serializer->normalize($service, null, ['groups' => 'service_read']);

        // We return our array into a JSON 200 OK Response
        return $this->json($arrayService, 200);
    }

    /**
     * @OA\Tag(name="ServiceController")
     * @OA\Response(
     *     response=200,
     *     description="Return one service with his title",
     *     @Model(type=Service::class, groups={"service_read"})
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
     * This method is used in order to read a Service with his title
     * @Route("/{title}", name="read_title", methods={"GET"})
     */
    public function readByTitle(Service $service, SerializerInterface $serializer)
    {
        // We turn the $service object into an array
        $arrayService = $serializer->normalize($service, null, ['groups' => 'service_read']);

        // We return our array into a JSON 200 OK Response
        return $this->json($arrayService, 200);
    }

    /**
     * @OA\Tag(name="ServiceController")
     * @OA\Response(
     *     response=200,
     *     description="Return a list of JobWorkers from one service id"
     * )
     * @OA\Parameter(
     *     name="limit",
     *     in="query",
     *     type="integer",
     *     description="Limit number of jobworker",
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
     * This method is used in order to get a JobWorker by his service
     * @Route("/{id}/jobworker", name="jobworker", requirements={"id": "\d+"}, methods={"GET"})
     * @Entity("service", expr="repository.find(id)")
     */
    public function getJobWorkersByServices(ServiceRepository $serviceRepository, SerializerInterface $serializer, Service $service)
    {
        // We retrieve all the details from JobWorkers thanks to their Services
        $service = $serviceRepository->findJobworkerByService($service->getId());

        // If the service has no users (null), we return a 404 JSON error message
        if ($service == null) {
            return $this->json([
                'statut' => 404,
                'message' => "There are no users for this service"
            ], 404);
        }

        // We verify that a parameter GET 'limit' is set
        if (isset($_GET['limit'])) {

            // We check with a Regex that the 'limit' parameter is an integer
            // If not, we send a 404 JSON error message
            if ( ! preg_match('/^\d+$/', $_GET['limit']) ) {
                return $this->json([
                    'statut' => 404,
                    'message' => "Limit option need to be an integer"
                ], 404);
            }
            
            // We set up a parameter GET in order to limit a number of JobWorkers
            $limit = $_GET['limit'];
            
            // We turn the $service object into an array
            $arrayService = $serializer->normalize($service, null, ['groups' => 'service_jobworker']);
            
            // We shuffle our array containing all the JobWorkers who have this skills service
            shuffle($arrayService[0]['skills']);
            
            // We loop on the same array to recover a $limit (number of JobWorkers)
            // We put it in a $skillUser array
            for ($i = 0; $i < $limit; $i++) {
                $skillUser[] = $arrayService[0]['skills'][$i];
            }

            // We overwrite the array entry with the filtered JobWorkers in the loop
            $arrayService[0]['skills'] = $skillUser;

            // We return the results as JSON
            return $this->json($arrayService);
        }

        // Even if there is no GET parameter, we still turn the $service object into an array
        $arrayService = $serializer->normalize($service, null, ['groups' => 'service_jobworker']);

        // We return a 200 JSON OK Response
        return $this->json($arrayService, 200);
    }

    /**
     * @OA\Tag(name="ServiceController")
     * @OA\Response(
     *     response=200,
     *     description="Return a list of JobWorkers from one service id ordered by price"
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
     * @OA\Parameter(
     *     name="orderby",
     *     in="query",
     *     type="string",
     *     description="Order By DESC price example : ( /endpoint?orderby=DESC or ASC )",
     * )
     * This method is used in order to get a JobWorker by his price
     * @Route("/{id}/jobworker/price", name="jobworker_price", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function getJobWorkersByPrice(ServiceRepository $serviceRepository, Service $service, $id)
    {
        // We set an $orderBy variable with an 'ASC' value
        $orderBy = 'ASC';

        // If the parameter GET 'orderby' is set
        if(isset($_GET['orderby'])) {

            // The parameter GET value will automatically be in Uppercase
            $orderBy = strtoupper($_GET['orderby']);

            // We use a Regex to check if $orderBy value is 'ASC' or 'DESC'
            // If not, we return a 404 JSON error message
            if ( ! preg_match('/^(ASC|DESC)$/', $orderBy) ) {
                return $this->json([
                    'statut' => 404,
                    'message' => "OrderBy option need to be ASC or DESC"
                ], 404);
            }
        }

        // We retrieve all the details from JobWorkers thanks to their Services, ordered by Price
        $service = $serviceRepository->findJobworkerByService($id, null, 1, null, $orderBy);
        
        // If the service has no users (null), we return a 404 JSON error message
        if ($service == null) {
            return $this->json([
                'statut' => 404,
                'message' => "There are no users for this service"
            ], 404);
        }

        // If the service has users, we return a 200 JSON OK Response
        return $this->json(

            $service, 
            200, 
            [], 
            ['groups' => 'service_jobworker']
        );
    }

    /**
     * @OA\Tag(name="ServiceController")
     * @OA\Response(
     *     response=200,
     *     description="Return a list of JobWorkers from one service id ordered by rating"
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
     * This method is used in order to get a JobWorker by his rating
     * @Route("/{id}/jobworker/rating", name="jobworker_rating", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function getJobWorkersByRating(ServiceRepository $serviceRepository, Service $service, $id)
    {
        // We retrieve all the details from JobWorkers thanks to their Services, filtered by the rating
        $service = $serviceRepository->findJobworkerByService($id, null, null, $rating = 1);
        
        // If the service has no users (null), we return a 404 JSON error message
        if ($service == null) {
            return $this->json([
                'statut' => 404,
                'message' => "There are no users for this service"
            ], 404);
        }

         // If the service has users, we return a 200 JSON OK Response
        return $this->json(
            $service, 
            200, 
            [], 
            ['groups' => 'service_jobworker']
        );
    }

    /**
     * @OA\Tag(name="ServiceController")
     * @OA\Response(
     *     response=200,
     *     description="Return sub-services from one service",
     *     @Model(type=Service::class, groups={"service_subservices"})
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
     * This method is used in order to get sub-services from one service
     * @Route("/{id}/subservices", name="subservices", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function getSubServicesFromService(SerializerInterface $serializer, ServiceRepository $serviceRepository, $id)
    {
        // We retrieve all the sub-services from one service
        $subService = $serviceRepository->findSubServiceFromService($id);

        // If the sub-service is null/non-existent, we return a 404 JSON error message
        if ($subService == null) {
            return $this->json([
                'statut' => 404,
                'message' => "There are no sub-services for this service"
            ], 404);
        }
        
        // If the sub-service exists, we turn the $subService object into an array
        $arraySubService = $serializer->normalize($subService, null, ['groups' => 'service_subservices']);

        // We return a 200 JSON OK Response
        return $this->json($arraySubService, 200);
    }

    /**
     * @OA\Tag(name="ServiceController")
     * @OA\Response(
     *     response=200,
     *     description="Return all Jobworkers from one department by services",
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
     * This method is used in order to get JobWorkers by Services from one specific department
     * @Route("/{id}/department/{id2}/jobworker", name="department_jobworker", requirements={"id": "\d+", "id2": "\d+"}, methods={"GET"})
     * @Entity("service", expr="repository.find(id)")
     * @Entity("department", expr="repository.find(id2)")
     */
    public function getJobWorkersFromDepartmentByServices(Service $service, Department $department, ServiceRepository $serviceRepository)
    {   
        // We retrieve the service and department id
        $serviceId = $service->getId();
        $departmentId = $department->getId();
        
        // We search for JobWorkers with services and department
        $jobWorkerService = $serviceRepository->findJobworkerByService($serviceId, $departmentId);

        // We verify that the service contains users for a department
        // If not, we send a 404 JSON error message
        if ($jobWorkerService == null) {
            return $this->json([
                'statut' => 404,
                'message' => "There are no users for this service in this department"
            ], 404);
        }

        // If the service contains users for a department
        // We return a 200 JSON OK Response
        return $this->json(
            $jobWorkerService, 
            200, 
            [], 
            ['groups' => 'service_jobworker']
        );
    }

    /**
     * @OA\Tag(name="ServiceController")
     * @OA\Response(
     *     response=200,
     *     description="Return a list of JobWorkers from one department by services id ordered by price"
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
     * @OA\Parameter(
     *     name="orderby",
     *     in="query",
     *     type="string",
     *     description="Order By DESC price example : ( /endpoint?orderby=DESC or ASC )",
     * )
     * This method is used in order to get JobWorkers by Price from one specific department
     * @Route("/{id}/department/{id2}/jobworker/price", name="department_jobworker_price", requirements={"id": "\d+", "id2": "\d+"}, methods={"GET"})
     * @Entity("service", expr="repository.find(id)")
     * @Entity("department", expr="repository.find(id2)")
     */
    public function getJobWorkersFromDepartmentByPrice(ServiceRepository $serviceRepository, Service $service, Department $department)
    {
        // We retrieve the service and department id
        $serviceId = $service->getId();
        $departmentId = $department->getId();

        // We set an $orderBy variable with an 'ASC' value
        $orderBy = 'ASC';

        // If the parameter GET 'orderby' is set
        if(isset($_GET['orderby'])) {

            // The parameter GET value will automatically be in Uppercase
            $orderBy = strtoupper($_GET['orderby']);

            // We use a Regex to check if $orderBy value is 'ASC' or 'DESC'
            // If not, we return a 404 JSON error message
            if ( ! preg_match('/^(ASC|DESC)$/', $orderBy) ) {
                return $this->json([
                    'statut' => 404,
                    'message' => "OrderBy option need to be ASC or DESC"
                ], 404);
            }
        }

        // We retrieve all the details from JobWorkers thanks to their Services and the department, ordered by Price
        $jobWorkerPrice = $serviceRepository->findJobworkerByService($serviceId, $departmentId, 1, null, $orderBy);
        
        // We verify that the service contains users for a department
        // If not, we send a 404 JSON error message
        if ($jobWorkerPrice == null) {
            return $this->json([
                'statut' => 404,
                'message' => "There are no users for this service in this department"
            ], 404);
        }

        // If the service contains users for a department
        // We return a 200 JSON OK Response
        return $this->json(
            $jobWorkerPrice, 
            200, 
            [], 
            ['groups' => 'service_jobworker']
        );
    }

    /**
     * @OA\Tag(name="ServiceController")
     * @OA\Response(
     *     response=200,
     *     description="Return a list of JobWorkers from one department by services id ordered by price"
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
     * This method is used in order to get JobWorkers by Rating from one specific department
     * @Route("/{id}/department/{id2}/jobworker/rating", name="department_jobworker_rating", requirements={"id": "\d+", "id2": "\d+"}, methods={"GET"})
     * @Entity("service", expr="repository.find(id)")
     * @Entity("department", expr="repository.find(id2)")
     */
    public function getJobWorkersFromDepartmentByRating(ServiceRepository $serviceRepository, Service $service, Department $department)
    {
        // We retrieve the service and department id
        $serviceId = $service->getId();
        $departmentId = $department->getId();

        // We retrieve all the details from JobWorkers thanks to their Services and the department filtered by the Rating
        $jobWorkerRating = $serviceRepository->findJobworkerByService($serviceId, $departmentId, null, 1);
        
        // We verify that the service contains users for a department
        // If not, we send a 404 JSON error message
        if ($jobWorkerRating == null) {
            return $this->json([
                'statut' => 404,
                'message' => "There are no users for this service in this department"
            ], 404);
        }

        // If the service contains users for a department
        // We return a 200 JSON OK Response
        return $this->json(
            $jobWorkerRating, 
            200, 
            [], 
            ['groups' => 'service_jobworker']
        );
    }
    
}
