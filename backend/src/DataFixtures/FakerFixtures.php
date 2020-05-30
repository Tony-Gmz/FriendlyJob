<?php

namespace App\DataFixtures;

use App\DataFixtures\Providers\DemandProvider;
use App\DataFixtures\Providers\DepartmentProvider;
use App\DataFixtures\Providers\RatingProvider;
use App\DataFixtures\Providers\ServiceProvider;
use App\DataFixtures\Providers\SkillProvider;
use App\DataFixtures\Providers\UserProvider;
use App\Entity\Demand;
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
        $faker->addProvider(new UserProvider($faker));
        $faker->addProvider(new DemandProvider($faker));

        static::$faker = $faker;

        $entities = [];
        // Services
        $services = [];
        // Department
        $department = [];
        // Skills
        $skills = [];
        $gardeningSkill = [];
        $bricolageSkill = [];
        $movingSkill = [];
        $wardenAnimalSkill = [];
        $informaticsSkill = [];
        $babysittingSkill = [];
        $carpoolingSkill = [];
        $personalAssistanceSkill = [];
        // Ratings
        $ratings = [];
        // Users
        $users = [];
        // Admin
        $adminUsers = [];
        // FriendlyUser
        $friendlyUsers = [];
        // JobWorker
        $jobWorkers = [];
        // Demands
        $demands = [];
        $gardeningDemands = [];
        $bricolageDemands = [];
        $movingDemands = [];
        $wardenAnimalDemands = [];
        $informaticsDemands = [];
        $babysittingDemands = [];
        $carpoolingDemands = [];
        $personalAssistanceDemands = [];
        
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
        $numberOfSkill = 8;
        // Gardening Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $gardeningSkill[] = static::skills($skillsList['jardinage'], 'jardinage', $services[0], $numberOfSkill);
            $skills[] = $gardeningSkill[$i];
        }
        // Bricolage Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $bricolageSkill[] = static::skills($skillsList['bricolage'], 'bricolage', $services[1], $numberOfSkill);
            $skills[] = $bricolageSkill[$i];
        }
        // Moving Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $movingSkill[] = static::skills($skillsList['déménagement'], 'déménagement', $services[2], $numberOfSkill);
            $skills[] = $movingSkill[$i];
        }
        // Warden Animal Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $wardenAnimalSkill[] = static::skills($skillsList["garde d'animaux"], "garde d'animaux", $services[3], $numberOfSkill);
            $skills[] = $wardenAnimalSkill[$i];
        }
        // Informatics Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $informaticsSkill[] = static::skills($skillsList['informatique'], "informatique", $services[4], $numberOfSkill);
            $skills[] = $informaticsSkill[$i];
        }
        // Babysitting Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $babysittingSkill[] = static::skills( $skillsList['babysitting'], 'babysitting', $services[5], $numberOfSkill);
            $skills[] = $babysittingSkill[$i];
        }
        // Carpooling Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $carpoolingSkill[] = static::skills($skillsList['co-voiturage'], 'co-voiturage', $services[6], $numberOfSkill);
            $skills[] = $carpoolingSkill[$i];
        }
        // PersonnalAssistance Skill
        for ($i = 0; $i < $numberOfSkill; $i++) {
            $personalAssistanceSkill[] = static::skills($skillsList['aide à la personne'], "aide à la personne", $services[7], $numberOfSkill);
            $skills[] = $personalAssistanceSkill[$i];
        }
        // END OF SKILL OBJECT CREATION

        // BEGIN OF RATING OBJECT CREATION
        $ratingList = $faker->getDataRatings();
        $numberofRating = 64;
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

       // BEGIN OF ADMIN OBJECT CREATION

       $adminData = $faker->getAdminData();
       for ($i = 0; $i < count($adminData['email']); $i++) {
           $adminUser = new User();
           $passwordEncoder = static::$passwordEncoder->encodePassword($adminUser, $_ENV['ADMIN_PASSWORD']);
           $adminUser->setPassword($passwordEncoder);
           $adminUser->setEmail($adminData['email'][$i]);
           $adminUser->setRoles(["ADMIN"]);
           $adminUser->setPassword($passwordEncoder);
           $adminUser->setFirstname($adminData['firstname'][$i]);
           $adminUser->setLastname($adminData['lastname'][$i]);
           $adminUser->setImage($faker->imageUrl);
           $adminUser->setCreatedAt(new \DateTime());
           $adminUser->setDepartment($departments[$adminData['department'][$i]]);

           $adminUsers[] = $adminUser;
           $users[] = $adminUsers[$i];

           echo static::$count. " => Objet FriendlyUser crée" . PHP_EOL;
           static::$count++;
           if (static::$count > count($adminData['email']))
           {
               static::$count = 1;
           }
       }
       // END OF ADMIN OBJECT CREATION

       // BEGIN OF FRIENDLYUSER OBJECT CREATION
       $numberOfFriendlyUser = 64;
       for ($i = 0; $i < $numberOfFriendlyUser; $i++) {
           
           $friendlyUser = new User();
           $passwordEncoder = static::$passwordEncoder->encodePassword($friendlyUser, 'derrick');
           $friendlyUser->setPassword($passwordEncoder);
           $friendlyUser->setEmail($faker->email);
           $friendlyUser->setRoles(["FRIENDLY_USER"]);
           $friendlyUser->setPassword($passwordEncoder);
           $friendlyUser->setFirstname($faker->firstname);
           $friendlyUser->setLastname($faker->lastname);
           $friendlyUser->setImage($faker->imageUrl);
           $friendlyUser->setCreatedAt(new \DateTime());
           $friendlyUser->setDepartment($departments[mt_rand(0, count($departments) - 1)]);

           $friendlyUsers[] = $friendlyUser;
           $users[] = $friendlyUsers[$i];

           echo static::$count. " => Objet FriendlyUser crée" . PHP_EOL;
           static::$count++;
           if (static::$count > $numberOfFriendlyUser)
           {
               static::$count = 1;
           }
       }
       // END OF FRIENDLYUSER OBJECT CREATION

       // BEGIN OF JOBWORKER OBJECT CREATION
       $aboutList = $faker->getUserAbout();
       $numberOfJobWorker = 64;
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
           $jobWorker->setImage($faker->imageUrl);
           $jobWorker->setAbout($aboutList['about'][$number]);
           $jobWorker->setCreatedAt(new \DateTime());
           $jobWorker->setDepartment($departments[mt_rand(0, count($departments) - 1)]);

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
        $numberOfDemands = 8;
        // Gardening Demands
        for ($i = 0; $i < $numberOfDemands; $i++) {
            $gardeningDemands[] = static::demands($demandList['jardinage'], 'jardinage', $services[0], $numberOfDemands);
            $demands[] = $gardeningDemands[$i];
        }
        // Bricolage Demands
        for ($i = 0; $i < $numberOfDemands; $i++) {
            $bricolageDemands[] = static::demands($demandList['bricolage'], 'bricolage', $services[1], $numberOfDemands);
            $demands[] = $bricolageDemands[$i];
        }
        // Moving Demands
        for ($i = 0; $i < $numberOfDemands; $i++) {
            $movingDemands[] = static::demands($demandList['déménagement'], 'déménagement', $services[2], $numberOfDemands);
            $demands[] = $movingDemands[$i];
        }
        // Warden Animal Demands
        for ($i = 0; $i < $numberOfDemands; $i++) {
            $wardenAnimalDemands[] = static::demands($demandList["garde d'animaux"], "garde d'animaux", $services[3], $numberOfDemands);
            $demands[] = $wardenAnimalDemands[$i];
        }
        // Informatics Demands
        for ($i = 0; $i < $numberOfDemands; $i++) {
            $informaticsDemands[] = static::demands($demandList['informatique'], "informatique", $services[4], $numberOfDemands);
            $demands[] = $informaticsDemands[$i];
        }
        // Babysitting Demands
        for ($i = 0; $i < $numberOfDemands; $i++) {
            $babysittingDemands[] = static::demands( $demandList['babysitting'], 'babysitting', $services[5], $numberOfDemands);
            $demands[] = $babysittingDemands[$i];
        }
        // Carpooling Demands
        for ($i = 0; $i < $numberOfDemands; $i++) {
            $carpoolingDemands[] = static::demands($demandList['co-voiturage'], 'co-voiturage', $services[6], $numberOfDemands);
            $demands[] = $carpoolingDemands[$i];
        }
        // PersonnalAssistance Demands
        for ($i = 0; $i < $numberOfDemands; $i++) {
            $personalAssistanceDemands[] = static::demands($demandList['aide à la personne'], "aide à la personne", $services[7], $numberOfDemands);
            $demands[] = $personalAssistanceDemands[$i];
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
        foreach ( $services as $service)
        {
            $entities[] = $service;
        }
        foreach ( $departments as $department)
        {
            $entities[] = $department;
        }
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
        $demand->setReservationDate(new \Datetime(static::$faker->getReservationDate()));
        $demand->setReservationHour(static::$faker->getReservationHour());
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