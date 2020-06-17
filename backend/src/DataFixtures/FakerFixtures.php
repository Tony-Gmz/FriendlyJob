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

/**
 * This method is used in order to have consistent data for our application
 */
public function load(ObjectManager $manager)
{
    $faker = Factory::create('fr_FR');

    $faker->seed(1234);

    // We add all of our providers
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
    $homeworkSupportSkill = [];
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
    $homeworkSupportDemands = [];
    $personalAssistanceDemands = [];
    
    // BEGIN OF SERVICES OBJECT CREATION
    // We call the method that contains the data from the ServiceProvider
    $ServicesList = $faker->GetDataServices();

    // We loop in order to add all the data we need from the ServiceProvider
    for ($i = 0; $i < count($ServicesList['parent_id']); $i++) {
        $service = new Service();
        $service->setParentId($ServicesList['parent_id'][$i]);
        $service->setTitle($ServicesList['title'][$i]);
        $service->setDescription($ServicesList['description'][$i]);
        $service->setImage($ServicesList['image'][$i]);
        $service->setCreatedAt(new \DateTime());
        $services[] = $service;

        // Control when using the d:f:l console command
        echo static::$count. " => Objet Service crée" . PHP_EOL;
        static::$count++;
        if (static::$count > count($ServicesList['parent_id']))
        {
            static::$count = 1;
        }
    }
    // END OF SERVICES OBJECT CREATION

    // BEGIN OF DEPARTMENT OBJECT CREATION
    // We call the method that contains the data from the DepartmentProvider
    $departmentList = $faker->getDataDepartment();
    
    // We loop in order to add all the data we need from the DepartmentProvider
    for ($i = 0; $i < count($departmentList['name']); $i++) {
        $department = new Department();
        $department->setName($departmentList['name'][$i]);
        $department->setNumber($departmentList['number'][$i]);
        $department->setCreatedAt(new \DateTime());
        $departments[] = $department;

        // Control when using the d:f:l console command
        echo static::$count. " => Objet Department crée" . PHP_EOL;
        static::$count++;
        if (static::$count > count($departmentList['name']))
        {
            static::$count = 1;
        }
    }
    // END OF SERVICES OBJECT CREATION

    // BEGIN OF SKILL OBJECT CREATION
    // We call the method that contains the data from the SkillProvider
    $skillsList = $faker->GetDescriptionSkills();
    // We want to create 16 Skills per type
    $numberOfSkill = 16;
    // Gardening Skill
    // We associate the Skills to the gardening Service
    for ($i = 0; $i < $numberOfSkill; $i++) {
        $gardeningSkill[] = static::skills($skillsList['jardinage'], 'jardinage', $services[0], $numberOfSkill);
        $skills[] = $gardeningSkill[$i];
    }
    // Bricolage Skill
    // We associate the Skills to the Bricolage Service
    for ($i = 0; $i < $numberOfSkill; $i++) {
        $bricolageSkill[] = static::skills($skillsList['bricolage'], 'bricolage', $services[1], $numberOfSkill);
        $skills[] = $bricolageSkill[$i];
    }
    // Moving Skill
    // We associate the Skills to the Moving Service
    for ($i = 0; $i < $numberOfSkill; $i++) {
        $movingSkill[] = static::skills($skillsList['déménagement'], 'déménagement', $services[2], $numberOfSkill);
        $skills[] = $movingSkill[$i];
    }
    // Warden Animal Skill
    // We associate the Skills to the Warden Animal Service
    for ($i = 0; $i < $numberOfSkill; $i++) {
        $wardenAnimalSkill[] = static::skills($skillsList["garde d'animaux"], "garde d'animaux", $services[3], $numberOfSkill);
        $skills[] = $wardenAnimalSkill[$i];
    }
    // Informatics Skill
    // We associate the Skills to the Informatic Service
    for ($i = 0; $i < $numberOfSkill; $i++) {
        $informaticsSkill[] = static::skills($skillsList['informatique'], "informatique", $services[4], $numberOfSkill);
        $skills[] = $informaticsSkill[$i];
    }
    // Babysitting Skill
    // We associate the Skills to the Babysitting Service
    for ($i = 0; $i < $numberOfSkill; $i++) {
        $babysittingSkill[] = static::skills( $skillsList['babysitting'], 'babysitting', $services[5], $numberOfSkill);
        $skills[] = $babysittingSkill[$i];
    }
    // Homework Support Skill
    // We associate the Skills to the Homework Support Service
    for ($i = 0; $i < $numberOfSkill; $i++) {
        $homeworkSupportSkill[] = static::skills($skillsList['soutien scolaire'], 'soutien scolaire', $services[6], $numberOfSkill);
        $skills[] = $homeworkSupportSkill[$i];
    }
    // PersonnalAssistance Skill
    // We associate the Skills to the PersonalAssistance Service
    for ($i = 0; $i < $numberOfSkill; $i++) {
        $personalAssistanceSkill[] = static::skills($skillsList['aide à la personne'], "aide à la personne", $services[7], $numberOfSkill);
        $skills[] = $personalAssistanceSkill[$i];
    }
    // END OF SKILL OBJECT CREATION

    // BEGIN OF RATING OBJECT CREATION
    // We call the method that contains the data from the RatingProvider
    $ratingList = $faker->getDataRatings();
    // We want to create 128 ratings
    $numberofRating = 128;
    // We loop in order to add the comment and the star for our 128 new Rating objects
    for ($i = 0; $i < $numberofRating; $i++) {
        $number = mt_rand(0, count($ratingList['comment']) - 1);
        
        $rating = new Rating();
        $rating->setComment($ratingList['comment'][$number]);
        $rating->setStar($ratingList['star'][$number]);
        $rating->setCreatedAt(new \DateTime());
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

    // BEGIN OF ADMIN OBJECT CREATION
    // We call the method that contains the admin data from the UserProvider
    $adminData = $faker->getAdminData();
    // We loop in order to add all the data we need from the UserProvider
    for ($i = 0; $i < count($adminData['email']); $i++) {
        $adminUser = new User();
        $passwordEncoder = static::$passwordEncoder->encodePassword($adminUser, $_ENV['ADMIN_PASSWORD']);
        $adminUser->setPassword($passwordEncoder);
        $adminUser->setEmail($adminData['email'][$i]);
        $adminUser->setRoles(["ROLE_ADMIN"]);
        $adminUser->setPassword($passwordEncoder);
        $adminUser->setFirstname($adminData['firstname'][$i]);
        $adminUser->setLastname($adminData['lastname'][$i]);
        $adminUser->setImage($adminData['image'][$i]);
        $adminUser->setCreatedAt(new \DateTime());
        $adminUser->setDepartment($departments[$adminData['department'][$i]]);

        // We store it into an array
        $adminUsers[] = $adminUser;
        // And we store that array into a $users array
        $users[] = $adminUsers[$i];

        // Control when using the d:f:l console command
        echo static::$count. " => Objet Admin crée" . PHP_EOL;
        static::$count++;
        if (static::$count > count($adminData['email']))
        {
            static::$count = 1;
        }
    }
    // END OF ADMIN OBJECT CREATION

    // BEGIN OF FRIENDLYUSER OBJECT CREATION
    // We want to create 128 friendlyUser
    $numberOfFriendlyUser = 128;
    // We loop in order to add all the data we need from the UserProvider and from the faker generator for our 128 FriendlyUser
    for ($i = 0; $i < $numberOfFriendlyUser; $i++) {
        
        $friendlyUser = new User();
        $passwordEncoder = static::$passwordEncoder->encodePassword($friendlyUser, 'derrick');
        $friendlyUser->setPassword($passwordEncoder);
        $friendlyUser->setEmail($faker->email);
        $friendlyUser->setRoles(["FRIENDLY_USER"]);
        $friendlyUser->setPassword($passwordEncoder);
        $friendlyUser->setFirstname($faker->firstname);
        $friendlyUser->setLastname($faker->lastname);
        $friendlyUser->setImage($faker->getRandomImage());
        $friendlyUser->setCreatedAt(new \DateTime());
        $friendlyUser->setDepartment($departments[mt_rand(0, count($departments) - 1)]);

        // We store it into an array
        $friendlyUsers[] = $friendlyUser;
        // And we store that array into a $users array
        $users[] = $friendlyUsers[$i];

        // Control when using the d:f:l console command
        echo static::$count. " => Objet FriendlyUser crée" . PHP_EOL;
        static::$count++;
        if (static::$count > $numberOfFriendlyUser)
        {
            static::$count = 1;
        }
    }
    // END OF FRIENDLYUSER OBJECT CREATION

    // BEGIN OF JOBWORKER OBJECT CREATION
    
    // MALE
    // We call the method that contains the data from the UserProvider
    $aboutList = $faker->getUserAbout();
    // We want to create 64 male JobWorkers
    $numberOfJobWorker = 64;
    // We loop in order to add all the data we need from the UserProvider and from the faker generator for our 64 male JobWorkers
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
    // We want to create 64 female JobWorkers
    $numberOfJobWorker = 64;
    // We loop in order to add all the data we need from the UserProvider and from the faker generator for our 64 female JobWorkers
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
    // Bricolage Demands
    // We loop in order to have all these demands links to the bricolage service
    for ($i = 0; $i < $numberOfDemands; $i++) {
        $bricolageDemands[] = static::demands($demandList['bricolage'], 'bricolage', $services[1], $numberOfDemands);
        $demands[] = $bricolageDemands[$i];
    }
    // Moving Demands
    // We loop in order to have all these demands links to the moving service
    for ($i = 0; $i < $numberOfDemands; $i++) {
        $movingDemands[] = static::demands($demandList['déménagement'], 'déménagement', $services[2], $numberOfDemands);
        $demands[] = $movingDemands[$i];
    }
    // Warden Animal Demands
    // We loop in order to have all these demands links to the warden animal service
    for ($i = 0; $i < $numberOfDemands; $i++) {
        $wardenAnimalDemands[] = static::demands($demandList["garde d'animaux"], "garde d'animaux", $services[3], $numberOfDemands);
        $demands[] = $wardenAnimalDemands[$i];
    }
    // Informatics Demands
    // We loop in order to have all these demands links to the informatic service
    for ($i = 0; $i < $numberOfDemands; $i++) {
        $informaticsDemands[] = static::demands($demandList['informatique'], "informatique", $services[4], $numberOfDemands);
        $demands[] = $informaticsDemands[$i];
    }
    // Babysitting Demands
    // We loop in order to have all these demands links to the babysitting service
    for ($i = 0; $i < $numberOfDemands; $i++) {
        $babysittingDemands[] = static::demands( $demandList['babysitting'], 'babysitting', $services[5], $numberOfDemands);
        $demands[] = $babysittingDemands[$i];
    }
    // Homework Support Demands
    // We loop in order to have all these demands links to the homework support service
    for ($i = 0; $i < $numberOfDemands; $i++) {
        $homeworkSupportDemands[] = static::demands($demandList['soutien scolaire'], 'soutien scolaire', $services[6], $numberOfDemands);
        $demands[] = $homeworkSupportDemands[$i];
    }
    // PersonnalAssistance Demands
    // We loop in order to have all these demands links to the personnal assistance service
    for ($i = 0; $i < $numberOfDemands; $i++) {
        $personalAssistanceDemands[] = static::demands($demandList['aide à la personne'], "aide à la personne", $services[7], $numberOfDemands);
        $demands[] = $personalAssistanceDemands[$i];
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
