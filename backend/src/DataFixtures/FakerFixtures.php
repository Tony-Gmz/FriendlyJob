<?php

namespace App\DataFixtures;

use App\DataFixtures\Providers\DepartmentProvider;
use App\DataFixtures\Providers\ServiceProvider;
use App\Entity\Department;
use App\Entity\Service;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class FakerFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $faker = Factory::create('fr_FR');

        $faker->seed(1234);

        $faker->addProvider(new ServiceProvider($faker));
        $faker->addProvider(new DepartmentProvider($faker));

        $count = 1;

        $entities = [];
        $services = [];
        $department = [];

        
        // BEGIN OF SERVICES OBJECT CREATION
        $ServicesList = $faker->GetDataServices();

        for ($i = 0; $i < count($ServicesList['parent_id']); $i++) {
            $service = new Service();
            $service->setParentId($ServicesList['parent_id'][$i]);
            $service->setTitle($ServicesList['title'][$i]);
            $service->setDescription($ServicesList['description'][$i]);
            $service->setImage($ServicesList['image'][$i]);
            $service->setCreatedAt(new \DateTime());
            $services[] = $service;

            echo $count. " => Objet Service crée" . PHP_EOL;
            $count++;
            if ($count > count($ServicesList['parent_id']))
            {
                $count = 1;
            }
        }
        // END OF SERVICES OBJECT CREATION

        // BEGIN OF DEPARTMENT OBJECT CREATION
        $departmentList = $faker->getDataDepartment();
        
        for ($i = 0; $i < count($departmentList['name']); $i++) {
            $department = new Department();
            $department->setName($departmentList['name'][$i]);
            $department->setNumber($departmentList['number'][$i]);
            $department->setCreatedAt(new \DateTime());
            $departments[] = $department;

            echo $count. " => Objet Department crée" . PHP_EOL;
            $count++;
            if ($count > count($departmentList['name']))
            {
                $count = 1;
            }
        }
        // END OF SERVICES OBJECT CREATION
        

        // BEGIN FILLING ENTITIES WITH ALL OBJECTS
        foreach ( $services as $service)
        {
            $entities[] = $service;
        }
        foreach ( $departments as $department)
        {
            $entities[] = $department;
        }
        // END FILLING ENTITIES WITH ALL OBJECTS


        // BEGIN PERSIST DATA
        foreach ($entities as $entity)
        {
            echo $count . ' => Persistance des données' . PHP_EOL;
            $count ++;
            $manager->persist($entity);
        }
        // END PERSIST DATA

        $manager->flush();
    }
}