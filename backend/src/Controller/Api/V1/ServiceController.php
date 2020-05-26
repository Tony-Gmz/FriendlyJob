<?php

namespace App\Controller\Api\V1;

use App\Entity\Service;
use App\Repository\ServiceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/services", name="api_v1_services_")
 */
class ServiceController extends AbstractController
{
    /**
     * @Route("/", name="browse", methods={"GET"})
     */
    public function browse(ServiceRepository $serviceRepository, SerializerInterface $serializer)
    {
        $services = $serviceRepository->findAll();

        $arrayServices = $serializer->normalize($services, null, ['groups' => 'service_browse']);

        return $this->json($arrayServices, 200);
    }

    /**
     * @Route("/{id}", name="read", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function read(Service $service, SerializerInterface $serializer)
    {
        $arrayService = $serializer->normalize($service, null, ['groups' => 'service_read']);

        return $this->json($arrayService, 200);
    }

    /**
     * @Route("/{id}/jobworker", name="jobworker", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function getJobWorkersByServices(ServiceRepository $serviceRepository, SerializerInterface $serializer, $id)
    {
        if (isset($_GET['limit'])) {
            
            $limit = 5;

            $service = $serviceRepository->findJobworkerByService($id, $limit);
            
            $arrayService = $serializer->normalize($service, null, ['groups' => 'service_jobworker']);

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

    
}
