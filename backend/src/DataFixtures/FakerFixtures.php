<?php

namespace App\DataFixtures;

use App\DataFixtures\Providers\DepartmentProvider;
use App\DataFixtures\Providers\RatingProvider;
use App\DataFixtures\Providers\ServiceProvider;
use App\DataFixtures\Providers\SkillProvider;
use App\Entity\Department;
use App\Entity\Rating;
use App\Entity\Service;
use App\Entity\Skill;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class FakerFixtures extends Fixture
{
    private static $faker;
    private static $count = 1;
    private static $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        static::$passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {

        $faker = Factory::create('fr_FR');

        $faker->seed(1234);

        $faker->addProvider(new ServiceProvider($faker));
        $faker->addProvider(new DepartmentProvider($faker));
        $faker->addProvider(new SkillProvider($faker));
        $faker->addProvider(new RatingProvider($faker));

        static::$faker = $faker;

        $entities = [];
        // Services
        $services = [];
        // Department
        $department = [];
        // Skills
        $skills = [];
        $gardening = [];
        $bricolage = [];
        $moving = [];
        $wardenAnimal = [];
        $informatics = [];
        $babysitting = [];
        $carpooling = [];
        $personalAssistance = [];
        // Ratings
        $ratings = [];
        // FriendlyUser
        $friendlyUsers = [];
        // JobWorker
        $jobWorkers = [];
        
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

            echo static::$count. " => Objet Service crée" . PHP_EOL;
            static::$count++;
            if (static::$count > count($ServicesList['parent_id']))
            {
                static::$count = 1;
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

            echo static::$count. " => Objet Department crée" . PHP_EOL;
            static::$count++;
            if (static::$count > count($departmentList['name']))
            {
                static::$count = 1;
            }
        }
        // END OF SERVICES OBJECT CREATION

        // BEGIN OF SKILL OBJECT CREATION
        $skillsList = $faker->GetDescriptionSkills();
        $numberOfSkill = 1;
        // Gardening Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $gardening[] = static::skills($skillsList['jardinage'], 'jardinage', $services[0], $numberOfSkill);
            $skills[] = $gardening[$i];
        }
        // Bricolage Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $bricolage[] = static::skills($skillsList['bricolage'], 'bricolage', $services[1], $numberOfSkill);
            $skills[] = $bricolage[$i];
        }
        // Moving Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $moving[] = static::skills($skillsList['déménagement'], 'déménagement', $services[2], $numberOfSkill);
            $skills[] = $moving[$i];
        }
        // Warden Animal Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $wardenAnimal[] = static::skills($skillsList["garde d'animaux"], "garde d'animaux", $services[3], $numberOfSkill);
            $skills[] = $wardenAnimal[$i];
        }
        // Informatics Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $informatics[] = static::skills($skillsList['informatique'], "informatique", $services[4], $numberOfSkill);
            $skills[] = $informatics[$i];
        }
        // Babysitting Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $babysitting[] = static::skills( $skillsList['babysitting'], 'babysitting', $services[5], $numberOfSkill);
            $skills[] = $babysitting[$i];
        }
        // Carpooling Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $carpooling[] = static::skills($skillsList['co-voiturage'], 'co-voiturage', $services[6], $numberOfSkill);
            $skills[] = $carpooling[$i];
        }
        // PersonnalAssistance Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $personalAssistance[] = static::skills($skillsList['aide à la personne'], "aide à la personne", $services[7], $numberOfSkill);
            $skills[] = $personalAssistance[$i];
        }
        // END OF SERVICES OBJECT CREATION

        // BEGIN OF RATING OBJECT CREATION
        $ratingList = $faker->getDataRatings();
        $numberofRating = 10;
        for ($i = 0; $i < $numberofRating; $i++) {
            $number = mt_rand(0, count($ratingList['comment']) - 1);
            
            $rating = new Rating();
            $rating->setComment($ratingList['comment'][$number]);
            $rating->setStar($ratingList['star'][$number]);
            $rating->setCreatedAt(new \DateTime());
            $ratings[] = $rating;

            echo static::$count. " => Objet Rating crée" . PHP_EOL;
            static::$count++;
            if (static::$count > $numberofRating)
            {
                static::$count = 1;
            }
        }
        // END OF SERVICES OBJECT CREATION

        // BEGIN OF RATING OBJECT CREATION
        $ratingList = $faker->getDataRatings();
        $numberofRating = 10;
        for ($i = 0; $i < $numberofRating; $i++) {
            $number = mt_rand(0, count($ratingList['comment']) - 1);
            
            $rating = new Rating();
            $rating->setComment($ratingList['comment'][$number]);
            $rating->setStar($ratingList['star'][$number]);
            $rating->setCreatedAt(new \DateTime());
            $ratings[] = $rating;

            echo static::$count. " => Objet Rating crée" . PHP_EOL;
            static::$count++;
            if (static::$count > $numberofRating)
            {
                static::$count = 1;
            }
        }
        // END OF SERVICES OBJECT CREATION

        // BEGIN OF USER OBJECT CREATION
        // $aboutList = $faker->getUserData();
        // $numberOfUser = 10;
        // for ($i = 0; $i < $numberOfUser; $i++) {
        //     $number = mt_rand(0, count($aboutList['about']) - 1);
            
        //     $friendlyUser = new User();
        //     $friendlyUser->setEmail();
        //     $friendlyUser->setRoles(["FRIENDLY_USER"]);
        //     $friendlyUser->setPassword($this->passwordEncoder->encodePassword($friendlyUser, 'derrick'));
        //     $friendlyUser->setCreatedAt(new \DateTime());
        //     $friendlyUsers[] = $friendlyUser;

        //     echo static::$count. " => Objet User crée" . PHP_EOL;
        //     static::$count + 2;
        //     if (static::$count > $numberofRating * 2)
        //     {
        //         static::$count = 1;
        //     }
        // }
        // END OF USER OBJECT CREATION
        
        
        
        
        
        
        
        
        
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
            echo static::$count. ' => Persistance des données' . PHP_EOL;
            static::$count++;
            $manager->persist($entity);
        }
        // END PERSIST DATA

        $manager->flush();
    }
    

    private static function skills($arrayData, $objectName, $objectService, $count) {
            
            $skill = new Skill();
            $skill->setDescription($arrayData[mt_rand(0, count($arrayData) -1 )]);
            $skill->setPrice(static::$faker->GetPriceSkills());
            $skill->setService($objectService);
            $skill->setCreatedAt(new \DateTime());

            echo static::$count. " => Objet Skill lié au ". $objectName ." crée" . PHP_EOL;
            static::$count++;
            if (static::$count > $count)
            {
                static::$count = 1;
            }

        return $skill; 
    }
}