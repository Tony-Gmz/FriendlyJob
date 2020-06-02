<?php

namespace App\Controller\Api\V1;

use App\Entity\Department;
use App\Repository\DepartmentRepository;
use Nelmio\ApiDocBundle\Annotation\Model;
use Swagger\Annotations as OA;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/department", name="api_v1_department_")
 */
class DepartmentController extends AbstractController
{
    /**
     * @OA\Tag(name="DepartmentController")
     * @OA\Response(
     *     response=200,
     *     description="Return the list of the departments",
     *     @Model(type=Department::class, groups={"department_browse"})
     * )
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
