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

    /**
     * We use the dependency injection in order to have consistent data
     */
    public function __construct(UserPasswordEncoderInterface $passwordEncoder, ServiceRepository $serviceRepository, DepartmentRepository $departmentRepository, UserRepository $userRepository)
    {
        static::$passwordEncoder = $passwordEncoder;
        static::$services = $serviceRepository->findAll();
        static::$departments = $departmentRepository->findAll();
        static::$users = $userRepository->findByRole("FRIENDLY_USER");
    }

    /**
     * Similar to the FakerFixtures file, we wanted to have customize data for deep tests in the front side
     */
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
        // We call the method that contains the data from the SkillProvider
        $skillsList = $faker->GetDescriptionSkills();
        // We want to create 16 skills
        $numberOfSkill = 16;
        // We want to get those skills links to the gardening service
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $gardeningSkill[] = static::skills($skillsList['jardinage'], 'jardinage', $services[0], $numberOfSkill);
            $skills[] = $gardeningSkill[$i];
        }
        // END OF SKILL OBJECT CREATION

        // BEGIN OF RATING OBJECT CREATION
        // We call the method that contains the data from the RatingProvider
        $ratingList = $faker->getDataRatings();
        // We want to create 16 ratings
        $numberofRating = 16;
        // We loop in order to add the comment and the star for our 16 new Rating objects
        for ($i = 0; $i < $numberofRating; $i++) {
            $number = mt_rand(0, count($ratingList['comment']) - 1);
            
            $rating = new Rating();
            $rating->setComment($ratingList['comment'][$number]);
            $rating->setStar($ratingList['star'][$number]);
            $rating->setCreatedAt(new \DateTime());

            // We store it into an array
            $ratings[] = $rating;

            // Control when using the d:f:l console command
            echo static::$count. " => Objet Rating crée" . PHP_EOL;
            static::$count++;
            if (static::$count > $numberofRating)
            {
                static::$count = 1;
            }
        }
        // END OF RATING OBJECT CREATION

        // BEGIN OF JOBWORKER OBJECT CREATION
        // MALE
        // We call the method that contains the data from the UserProvider
        $aboutList = $faker->getUserAbout();
        // We want to create 8 male JobWorkers
        $numberOfJobWorker = 8;
        // We loop in order to add all the data we need from the UserProvider and from the faker generator for our 8 male JobWorkers
        for ($i = 0; $i < $numberOfJobWorker; $i++) {
            $number = mt_rand(0, count($aboutList['about_male']) - 1);
            
            $jobWorker = new User();
            $passwordEncoder = static::$passwordEncoder->encodePassword($jobWorker, 'derrick');
            $jobWorker->setPassword($passwordEncoder);
            $jobWorker->setEmail($faker->email);
            $jobWorker->setRoles(["JOBWORKER"]);
            $jobWorker->setPassword($passwordEncoder);
            $jobWorker->setFirstname($faker->firstname('male'));
            $jobWorker->setLastname($faker->lastname);
            $jobWorker->setImage($faker->getRandomImage());
            $jobWorker->setAbout($aboutList['about_male'][$number]);
            $jobWorker->setCreatedAt(new \DateTime());
            $jobWorker->setDepartment($departments[mt_rand(0, count($departments) - 1)]);

            // We store it into an array
            $jobWorkers[] = $jobWorker;
            // And we store that array into a $users array
            $users[] = $jobWorkers[$i];

            // Control when using the d:f:l console command
            echo static::$count. " => Objet JobWorker ( homme ) crée" . PHP_EOL;
            static::$count++;
            if (static::$count > $numberOfJobWorker)
            {
                static::$count = 1;
            }
        }

        // FEMALE
        // We call the method that contains the data from the UserProvider
        $aboutList = $faker->getUserAbout();
        // We want to create 8 female JobWorkers
        $numberOfJobWorker = 8;
        // We loop in order to add all the data we need from the UserProvider and from the faker generator for our 8 female JobWorkers
        for ($i = 0; $i < $numberOfJobWorker; $i++) {
            $number = mt_rand(0, count($aboutList['about_female']) - 1);
            
            $jobWorker = new User();
            $passwordEncoder = static::$passwordEncoder->encodePassword($jobWorker, 'derrick');
            $jobWorker->setPassword($passwordEncoder);
            $jobWorker->setEmail($faker->email);
            $jobWorker->setRoles(["JOBWORKER"]);
            $jobWorker->setPassword($passwordEncoder);
            $jobWorker->setFirstname($faker->firstname('female'));
            $jobWorker->setLastname($faker->lastname);
            $jobWorker->setImage($faker->getRandomImage());
            $jobWorker->setAbout($aboutList['about_female'][$number]);
            $jobWorker->setCreatedAt(new \DateTime());
            $jobWorker->setDepartment($departments[mt_rand(0, count($departments) - 1)]);

            // We store it into an array
            $jobWorkers[] = $jobWorker;
            // And we store that array into a $users array
            $users[] = $jobWorkers[$i];

            // Control when using the d:f:l console command
            echo static::$count. " => Objet JobWorker ( femme ) crée" . PHP_EOL;
            static::$count++;
            if (static::$count > $numberOfJobWorker)
            {
                static::$count = 1;
            }
        }

        // END OF JOBWORKER OBJECT CREATION

        // BEGIN OF DEMAND OBJECT CREATION
        // We call the method that contains the data from the DemandProvider
        $demandList = $faker->getDataDemands();
        // We want to create 16 demands
        $numberOfDemands = 16;
        // Gardening Demands

        // We loop in order to have all these demands links to the gardening service
        for ($i = 0; $i < $numberOfDemands; $i++) {
            $gardeningDemands[] = static::demands($demandList['jardinage'], 'jardinage', $services[0], $numberOfDemands);
            $demands[] = $gardeningDemands[$i];
        }
        // END OF DEMAND OBJECT CREATION
        
        // BEGIN RELATION ATTRIBUTION
        $countJobworker = count($jobWorkers);
        // We loop in order to attribute the relation between all of our relations
        for ($i = 0; $i < $countJobworker ; $i++) 
        {
            $jobWorker = $jobWorkers[$i];
            $friendlyUser = $friendlyUsers[$i];
            $skill = $skills[$i];
            $demand = $demands[$i];
            $rating = $ratings[$i];

            // We associate a JobWorker, a FriendlyUser and a Rating for each Demand
            $demand->setJobworker($jobWorker);
            $demand->setFriendlyUser($friendlyUser);
            $demand->setRating($rating);
            // We set a a JobWorker for each Skill
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
            // Control when using the d:f:l console command
            echo static::$count. ' => Persistance des données' . PHP_EOL;
            static::$count++;
            $manager->persist($entity);
        }
        // END PERSIST DATA

        $manager->flush();
    }
    
    /**
     * This method is used in order to link a Skill with a Service
     */
    private static function skills($arrayData, $objectName, $objectService, $count) 
    {
        // We initialize a new Skill object, and we attribute all the needed data and the relation with the service
        $skill = new Skill();
        $skill->setDescription($arrayData[mt_rand(0, count($arrayData) -1 )]);
        $skill->setPrice(static::$faker->getPriceSkills());
        $skill->setService($objectService);
        $skill->setCreatedAt(new \DateTime());

        // Control when using the d:f:l console command
        echo static::$count. " => Objet Skill lié au ". $objectName ." crée" . PHP_EOL;
        static::$count++;
        if (static::$count > $count)
        {
            static::$count = 1;
        }

        return $skill; 
    }

    /**
     * This method is used in order to link a Demand with a Service
     */
    private static function demands($arrayData, $objectName, $objectService, $count) 
    {
        // We initialize a new Demand object, and we attribute all the needed data and the relation with the service
        $demand = new Demand();
        $demand->setBody($arrayData[mt_rand(0, count($arrayData) -1 )]);
        $demand->setReservationDate(new \Datetime(static::$faker->getReservationDate().'T'.static::$faker->getReservationHour()));
        $demand->setReservationHour(new \Datetime(static::$faker->getReservationDate().'T'.static::$faker->getReservationHour()));
        $demand->setStatus(static::$faker->getStatus());
        $demand->setService($objectService);
        $demand->setCreatedAt(new \DateTime());

        // Control when using the d:f:l console command
        echo static::$count. " => Objet Demand lié au ". $objectName ." crée" . PHP_EOL;
        static::$count++;
        if (static::$count > $count)
        {
            static::$count = 1;
        }

        return $demand; 
    }
}
