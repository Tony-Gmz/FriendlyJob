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
     * @Route("", name="browse", methods={"GET"})
     */
    public function browse(ServiceRepository $serviceRepository, SerializerInterface $serializer)
    {
        $services = $serviceRepository->findAll();

        $arrayServices = $serializer->normalize($services, null, ['groups' => 'service_browse']);

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
     * @Route("/{id}", name="read_id", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function readById(Service $service, SerializerInterface $serializer)
    {
        $arrayService = $serializer->normalize($service, null, ['groups' => 'service_read']);

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
     * @Route("/{title}", name="read_title", methods={"GET"})
     */
    public function readByTitle(Service $service, SerializerInterface $serializer)
    {
        $arrayService = $serializer->normalize($service, null, ['groups' => 'service_read']);

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
     * @Route("/{id}/jobworker", name="jobworker", requirements={"id": "\d+"}, methods={"GET"})
     * @Entity("service", expr="repository.find(id)")
     */
    public function getJobWorkersByServices(ServiceRepository $serviceRepository, SerializerInterface $serializer, Service $service)
    {

        $service = $serviceRepository->findJobworkerByService($service->getId());

        //! Condition pour vérifier que le service contient bien des utilisateur ( non null )
        if ($service == null) {
            return $this->json([
                'statut' => 404,
                'message' => "There are no users for this service"
            ], 404);
        }

        if (isset($_GET['limit'])) {

            //! Regex pour vérifier que limit soit un int
            if ( ! preg_match('/^\d+$/', $_GET['limit']) ) {
                return $this->json([
                    'statut' => 404,
                    'message' => "Limit option need to be an integer"
                ], 404);
            }
            
            $limit = $_GET['limit'];
            
            $arrayService = $serializer->normalize($service, null, ['groups' => 'service_jobworker']);
            
            shuffle($arrayService[0]['skills']);
            
            for ($i = 0; $i < $limit; $i++) {
                $skillUser[] = $arrayService[0]['skills'][$i];
            }

            $arrayService[0]['skills'] = $skillUser;

            return $this->json($arrayService);
        }

        $arrayService = $serializer->normalize($service, null, ['groups' => 'service_jobworker']);

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
     * @Route("/{id}/jobworker/price", name="jobworker_price", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function getJobWorkersByPrice(ServiceRepository $serviceRepository, Service $service, $id)
    {       
            $orderBy = 'ASC';
            if(isset($_GET['orderby'])) {

                $orderBy = strtoupper($_GET['orderby']);

                //! Regex pour vérifier que orderby soit égale ASC ou DESC
                if ( ! preg_match('/^(ASC|DESC)$/', $orderBy) ) {
                    return $this->json([
                        'statut' => 404,
                        'message' => "OrderBy option need to be ASC or DESC"
                    ], 404);
                }
            }

            $service = $serviceRepository->findJobworkerByService($id, null, 1, null, $orderBy);
            
            //! Condition pour vérifier que le service contient bien des utilisateur ( non null )
            if ($service == null) {
                return $this->json([
                    'statut' => 404,
                    'message' => "There are no users for this service"
                ], 404);
            }

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
     * @Route("/{id}/jobworker/rating", name="jobworker_rating", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function getJobWorkersByRating(ServiceRepository $serviceRepository, Service $service, $id)
    {

            $service = $serviceRepository->findJobworkerByService($id, null, null, $rating = 1);
            
            //! Condition pour vérifier que le service contient bien des utilisateur ( non null )
            if ($service == null) {
                return $this->json([
                    'statut' => 404,
                    'message' => "There are no users for this service"
                ], 404);
            }

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
     * @Route("/{id}/subservices", name="subservices", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function getSubServicesFromService(SerializerInterface $serializer, ServiceRepository $serviceRepository, $id)
    {
        $subService = $serviceRepository->findSubServiceFromService($id);

        //! Condition pour vérifier que le sous services existe
        if ($subService == null) {
            return $this->json([
                'statut' => 404,
                'message' => "There are no sub-services for this service"
            ], 404);
        }
        
        $arraySubService = $serializer->normalize($subService, null, ['groups' => 'service_subservices']);

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
     * @Route("/{id}/department/{id2}/jobworker", name="department_jobworker", requirements={"id": "\d+", "id2": "\d+"}, methods={"GET"})
     * @Entity("service", expr="repository.find(id)")
     * @Entity("department", expr="repository.find(id2)")
     */
    public function getJobWorkersFromDepartmentByServices(Service $service, Department $department, ServiceRepository $serviceRepository)
    {   
        $serviceId = $service->getId();
        $departmentId = $department->getId();
        
        $jobWorkerService = $serviceRepository->findJobworkerByService($serviceId, $departmentId);

        //! Condition pour vérifier que le service contient bien des utilisateur pour un département ( non null )
        if ($jobWorkerService == null) {
            return $this->json([
                'statut' => 404,
                'message' => "There are no users for this service in this department"
            ], 404);
        }

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
     * @Route("/{id}/department/{id2}/jobworker/price", name="department_jobworker_price", requirements={"id": "\d+", "id2": "\d+"}, methods={"GET"})
     * @Entity("service", expr="repository.find(id)")
     * @Entity("department", expr="repository.find(id2)")
     */
    public function getJobWorkersFromDepartmentByPrice(ServiceRepository $serviceRepository, Service $service, Department $department)
    {
        $serviceId = $service->getId();
        $departmentId = $department->getId();

        $orderBy = 'ASC';
            if(isset($_GET['orderby'])) {

                $orderBy = strtoupper($_GET['orderby']);

                //! Regex pour vérifier que orderby soit égale ASC ou DESC
                if ( ! preg_match('/^(ASC|DESC)$/', $orderBy) ) {
                    return $this->json([
                        'statut' => 404,
                        'message' => "OrderBy option need to be ASC or DESC"
                    ], 404);
                }
        }

        $jobWorkerPrice = $serviceRepository->findJobworkerByService($serviceId, $departmentId, 1, null, $orderBy);
        
        //! Condition pour vérifier que le service contient bien des utilisateur pour un département ( non null )
        if ($jobWorkerPrice == null) {
            return $this->json([
                'statut' => 404,
                'message' => "There are no users for this service in this department"
            ], 404);
        }

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
     * @Route("/{id}/department/{id2}/jobworker/rating", name="department_jobworker_rating", requirements={"id": "\d+", "id2": "\d+"}, methods={"GET"})
     * @Entity("service", expr="repository.find(id)")
     * @Entity("department", expr="repository.find(id2)")
     */
    public function getJobWorkersFromDepartmentByRating(ServiceRepository $serviceRepository, Service $service, Department $department)
    {
        $serviceId = $service->getId();
        $departmentId = $department->getId();

        $jobWorkerRating = $serviceRepository->findJobworkerByService($serviceId, $departmentId, null, 1);
        
        //! Condition pour vérifier que le service contient bien des utilisateur pour un département ( non null )
        if ($jobWorkerRating == null) {
            return $this->json([
                'statut' => 404,
                'message' => "There are no users for this service in this department"
            ], 404);
        }

        return $this->json(

            $jobWorkerRating, 
            200, 
            [], 
            ['groups' => 'service_jobworker']
        );
    }
    
}
