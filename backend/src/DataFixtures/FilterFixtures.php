<?php

namespace App\DataFixtures;

use App\DataFixtures\Providers\DemandProvider;
use App\DataFixtures\Providers\RatingProvider;
use App\DataFixtures\Providers\SkillProvider;
use App\DataFixtures\Providers\UserProvider;
use App\Entity\Demand;
use App\Entity\Rating;
use App\Entity\Skill;
use App\Entity\User;
use App\Repository\DepartmentRepository;
use App\Repository\ServiceRepository;
use App\Repository\UserRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class FilterFixtures extends Fixture
{
    private static $faker;
    private static $count = 1;
    private static $passwordEncoder;
    private static $services;
    private static $departments;
    private static $users;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, ServiceRepository $serviceRepository, DepartmentRepository $departmentRepository, UserRepository $userRepository)
    {
        static::$passwordEncoder = $passwordEncoder;
        static::$services = $serviceRepository->findAll();
        static::$departments = $departmentRepository->findAll();
        static::$users = $userRepository->findByRole("FRIENDLY_USER");
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        $faker->seed(1234);

        $faker->addProvider(new SkillProvider($faker));
        $faker->addProvider(new RatingProvider($faker));
        $faker->addProvider(new UserProvider($faker));
        $faker->addProvider(new DemandProvider($faker));

        static::$faker = $faker;
        
        $entities = [];
        // Services
        $services = static::$services;
        // Department
        $departments = static::$departments;
        // Skills
        $skills = [];
        $gardeningSkill = [];
        // Ratings
        $ratings = [];
        // Users
        $users = [];
        // FriendlyUser
        $friendlyUsers = static::$users;
        // JobWorker
        $jobWorkers = [];
        // Demands
        $demands = [];
        $gardeningDemands = [];

        // BEGIN OF SKILL OBJECT CREATION
        $skillsList = $faker->GetDescriptionSkills();
        $numberOfSkill = 16;
        // Gardening Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $gardeningSkill[] = static::skills($skillsList['jardinage'], 'jardinage', $services[0], $numberOfSkill);
            $skills[] = $gardeningSkill[$i];
        }
        // END OF SKILL OBJECT CREATION

        // BEGIN OF RATING OBJECT CREATION
        $ratingList = $faker->getDataRatings();
        $numberofRating = 16;
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
        // END OF RATING OBJECT CREATION

       // BEGIN OF JOBWORKER OBJECT CREATION
       $aboutList = $faker->getUserAbout();
       $numberOfJobWorker = 16;
       for ($i = 0; $i < $numberOfJobWorker; $i++) {
           $number = mt_rand(0, count($aboutList['about']) - 1);
           
           $jobWorker = new User();
           $passwordEncoder = static::$passwordEncoder->encodePassword($jobWorker, 'derrick');
           $jobWorker->setPassword($passwordEncoder);
           $jobWorker->setEmail($faker->email);
           $jobWorker->setRoles(["JOBWORKER"]);
           $jobWorker->setPassword($passwordEncoder);
           $jobWorker->setFirstname($faker->firstname);
           $jobWorker->setLastname($faker->lastname);
           $jobWorker->setImage($faker->getRandomImage());
           $jobWorker->setAbout($aboutList['about'][$number]);
           $jobWorker->setCreatedAt(new \DateTime());
           $jobWorker->setDepartment($departments[67]);

           $jobWorkers[] = $jobWorker;
           $users[] = $jobWorkers[$i];

           echo static::$count. " => Objet JobWorker crée" . PHP_EOL;
           static::$count++;
           if (static::$count > $numberOfJobWorker)
           {
               static::$count = 1;
           }
       }

       // END OF JOBWORKER OBJECT CREATION

        // BEGIN OF DEMAND OBJECT CREATION
        $demandList = $faker->getDataDemands();
        $numberOfDemands = 16;
        // Gardening Demands
        for ($i = 0; $i < $numberOfDemands; $i++) {
            $gardeningDemands[] = static::demands($demandList['jardinage'], 'jardinage', $services[0], $numberOfDemands);
            $demands[] = $gardeningDemands[$i];
        }
        // END OF DEMAND OBJECT CREATION
        
        // BEGIN RELATION ATTRIBUTION
        $countJobworker = count($jobWorkers);
        for ($i = 0; $i < $countJobworker ; $i++) 
        {
            $jobWorker = $jobWorkers[$i];
            $friendlyUser = $friendlyUsers[$i];
            $skill = $skills[$i];
            $demand = $demands[$i];
            $rating = $ratings[$i];

            $demand->setJobworker($jobWorker);
            $demand->setFriendlyUser($friendlyUser);
            $demand->setRating($rating);
            $skill->setUser($jobWorker);
        }
        // END RELATION ATTRIBUTION

        // BEGIN FILLING ENTITIES WITH ALL OBJECTS
        shuffle($skills); 
        shuffle($ratings);
        shuffle($demands);
        foreach ( $skills as $skill)
        {
            $entities[] = $skill;
        }
        foreach ( $ratings as $rating)
        {
            $entities[] = $rating;
        }
        foreach ( $users as $user)
        {
            $entities[] = $user;
        }
        foreach ( $demands as $demand)
        {
            $entities[] = $demand;
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
            $skill->setPrice(static::$faker->getPriceSkills());
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

    private static function demands($arrayData, $objectName, $objectService, $count) {
            
        $demand = new Demand();
        $demand->setBody($arrayData[mt_rand(0, count($arrayData) -1 )]);
        $demand->setReservationDate(new \Datetime(static::$faker->getReservationDate().'T'.static::$faker->getReservationHour()));
        $demand->setReservationHour(new \Datetime(static::$faker->getReservationDate().'T'.static::$faker->getReservationHour()));
        $demand->setStatus(static::$faker->getStatus());
        $demand->setService($objectService);
        $demand->setCreatedAt(new \DateTime());

        echo static::$count. " => Objet Demand lié au ". $objectName ." crée" . PHP_EOL;
        static::$count++;
        if (static::$count > $count)
        {
            static::$count = 1;
        }

    return $demand; 
    }
}
