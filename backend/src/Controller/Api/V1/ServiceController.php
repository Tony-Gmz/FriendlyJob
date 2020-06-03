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
     * @Route("/{id}/jobworker", name="jobworker", requirements={"id": "\d+"}, methods={"GET"})
     * @Entity("service", expr="repository.find(id)")
     */
    public function getJobWorkersByServices(ServiceRepository $serviceRepository, SerializerInterface $serializer, $id, Service $service)
    {
        if (isset($_GET['limit'])) {
            
            $limit = $_GET['limit'];

            $service = $serviceRepository->findJobworkerByService($service->getId());
            
            $arrayService = $serializer->normalize($service, null, ['groups' => 'service_jobworker']);
            
            shuffle($arrayService[0]['skills']);
            
            for ($i = 0; $i < $limit; $i++) {
                $skillUser[] = $arrayService[0]['skills'][$i];
            }

            $arrayService[0]['skills'] = $skillUser;

            return $this->json($arrayService);
        }

        $service = $serviceRepository->findJobworkerByService($id);

        $arrayService = $serializer->normalize($service, null, ['groups' => 'service_jobworker']);

        return $this->json($arrayService, 200);
    }

    /**
     * @OA\Tag(name="ServiceController")
     * @OA\Response(
     *     response=200,
     *     description="Return a list of JobWorkers from one service id ordered by price"
     * )
     * @OA\Parameter(
     *     name="limit",
     *     in="query",
     *     type="string",
     *     description="Order By DESC price",
     * )
     * @Route("/{id}/jobworker/price", name="jobworker_price", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function getJobWorkersByPrice(ServiceRepository $serviceRepository, Service $service, $id)
    {       
            $orderBy = 'ASC';
            if(isset($_GET['desc'])) {
                $orderBy = 'DESC';
            }

            $service = $serviceRepository->findJobworkerByService($id, null, 1, null, $orderBy);
            //dd($service);

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
     * @Route("/{id}/jobworker/rating", name="jobworker_rating", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function getJobWorkersByRating(ServiceRepository $serviceRepository, Service $service, $id)
    {

            $service = $serviceRepository->findJobworkerByService($id, null, null, $rating = 1);
            //dd($service);

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
     * @Route("/{id}/subservices", name="subservices", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function getSubServicesFromService(SerializerInterface $serializer, ServiceRepository $serviceRepository, $id)
    {
        $subService = $serviceRepository->findSubServiceFromService($id);
        
        $arraySubService = $serializer->normalize($subService, null, ['groups' => 'service_subservices']);

        return $this->json($arraySubService, 200);
    }

    /**
     * @OA\Tag(name="ServiceController")
     * @OA\Response(
     *     response=200,
     *     description="Return all Jobworkers from one department by services",
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
     * @OA\Parameter(
     *     name="limit",
     *     in="query",
     *     type="string",
     *     description="Order By DESC price",
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
        if (isset($_GET['desc'])) {
            $orderBy = 'DESC';
        }


        $jobWorkerPrice = $serviceRepository->findJobworkerByService($serviceId, $departmentId, 1, null, $orderBy);
        //dd($jobWorkerPrice);

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
     * @Route("/{id}/department/{id2}/jobworker/rating", name="department_jobworker_rating", requirements={"id": "\d+", "id2": "\d+"}, methods={"GET"})
     * @Entity("service", expr="repository.find(id)")
     * @Entity("department", expr="repository.find(id2)")
     */
    public function getJobWorkersFromDepartmentByRating(ServiceRepository $serviceRepository, Service $service, Department $department)
    {
        $serviceId = $service->getId();
        $departmentId = $department->getId();

        $jobWorkerRating = $serviceRepository->findJobworkerByService($serviceId, $departmentId, null, 1);
        //dd($service);

        return $this->json(

            $jobWorkerRating, 
            200, 
            [], 
            ['groups' => 'service_jobworker']
        );
    }
    
}
