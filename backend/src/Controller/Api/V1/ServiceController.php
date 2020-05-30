<?php

namespace App\Controller\Api\V1;

use App\Entity\Department;
use App\Entity\Service;
use App\Repository\ServiceRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Entity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/services", name="api_v1_services_")
 */
class ServiceController extends AbstractController
{
    /**
     * @Route("", name="browse", methods={"GET"})
     */
    public function browse(ServiceRepository $serviceRepository, SerializerInterface $serializer)
    {
        $services = $serviceRepository->findAll();

        $arrayServices = $serializer->normalize($services, null, ['groups' => 'service_browse']);

        return $this->json($arrayServices, 200);
    }

    /**
     * @Route("/{id}", name="read_id", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function readById(Service $service, SerializerInterface $serializer)
    {
        $arrayService = $serializer->normalize($service, null, ['groups' => 'service_read']);

        return $this->json($arrayService, 200);
    }

    /**
     * @Route("/{title}", name="read_title", methods={"GET"})
     */
    public function readByTitle(Service $service, SerializerInterface $serializer)
    {
        $arrayService = $serializer->normalize($service, null, ['groups' => 'service_read']);

        return $this->json($arrayService, 200);
    }

    /**
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
     * @Route("/{id}/subservices", name="subservices", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function getSubServicesFromService(SerializerInterface $serializer, ServiceRepository $serviceRepository, $id)
    {
        $subService = $serviceRepository->findSubServiceFromService($id);
        
        $arraySubService = $serializer->normalize($subService, null, ['groups' => 'service_subservices']);

        return $this->json($arraySubService, 200);
    }

    /**
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
    
}
