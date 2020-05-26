<?php

namespace App\Controller\Api\V1;

use App\Repository\DepartmentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/department", name="api_v1_department_")
 */
class DepartmentController extends AbstractController
{
    /**
     * @Route("", name="browse", methods={"GET"})
     */
    public function browse(DepartmentRepository $departmentRepository)
    {
       $departments = $departmentRepository->findAll();

        return $this->json(
            $departments, 
            200, 
            [], 
            ['groups' => 'department_browse']
        );
    }
}
