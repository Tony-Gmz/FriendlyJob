<?php

namespace App\DataFixtures;

use App\Entity\Demand;
use App\Entity\Department;
use App\Entity\Rating;
use App\Entity\Service;
use App\Entity\Skill;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        // This Fixtures file is not used anymore

        // We set a count at 0
        $count = 0;
        // We set a limit at 10
        $j = 10;
        
        // We initialize a loop
        for ($i = 0; $i < $j; $i++) {

            // We create a new FriendlyUser object
            // We set data
            $friendlyUser = new User();
            $friendlyUser->setEmail('lol'.$count.'@oclock.io');
            $friendlyUser->setRoles(['FRIENDLY_USER']);
            $friendlyUser->setPassword($this->passwordEncoder->encodePassword($friendlyUser, 'derrick'));
            $friendlyUser->setFirstname('Karim');
            $friendlyUser->setLastname('Maazaoui');
            $friendlyUser->setCreatedAt(new \DateTime());

            // We create a new JobWorker object
            // We set data
            $jobWorker = new User();
            $jobWorker->setEmail('lolilol'.$count.'@oclock.io');
            $jobWorker->setRoles(['JOBWORKER']);
            $jobWorker->setPassword($this->passwordEncoder->encodePassword($jobWorker, 'derrick'));
            $jobWorker->setFirstname('Jolan');
            $jobWorker->setLastname('Lazzari');
            $jobWorker->setCreatedAt(new \DateTime());
        
            // We create a new Department object
            // We set data
            $department = new Department();
            $department->setName('Bas-Rhin');
            $department->setNumber(67);
            $department->setCreatedAt(new \DateTime());

            // We create a new Skill object
            // We set data
            $skill = new Skill();
            $skill->setDescription('Gi fais le ménage tri tri bien'.$count.'');
            $skill->setPrice(40);
            $skill->setCreatedAt(new \DateTime());

            // We create a new Skill object
            // We set data
            $skill1 = new Skill();
            $skill1->setDescription('Je taille la pelouse'.$count.'');
            $skill1->setPrice(30);
            $skill1->setCreatedAt(new \DateTime());

            // We create a new Rating object
            // We set data
            $rating = new Rating();
            $rating->setComment('Très bien fait je valide fort'.$count.'');
            $rating->setStar(4);
            $rating->setCreatedAt(new \DateTime());

            // We create a new Rating object
            // We set data
            $rating1 = new Rating();
            $rating1->setComment('Très bien fait je valide fort'.$count.'');
            $rating1->setStar(4);
            $rating1->setCreatedAt(new \DateTime());
        
            // We create a new Service object
            // We set data
            $service = new Service();
            $service->setTitle('Test Titre Services'.$count.'');
            $service->setDescription('Test Decription Services'.$count.'');
            $service->setimage('Test image Services'.$count.'');
            $service->setCreatedAt(new \DateTime());

            // We create a new Service object
            // We set data
            $service1 = new Service();
            $service1->setTitle('Test Titre 2 Services'.$count.'');
            $service1->setDescription('Test 2 Decription Services'.$count.'');
            $service1->setimage('Test 2 image Services'.$count.'');
            $service1->setCreatedAt(new \DateTime());

            // We create a new Demand object
            // We set data
            $demand = new Demand();
            $demand->setBody('Test Body Request'.$count.'');
            $demand->setReservationDate(new \DateTime());
            $demand->setReservationHour(new \DateTime());
            $demand->setStatus('Test Status Request'.$count.'');
            $demand->setCreatedAt(new \DateTime());

            // We create a new Demand object
            // We set data
            $demand1 = new Demand();
            $demand1->setBody('Test Body Request'.$count.'');
            $demand1->setReservationDate(new \DateTime());
            $demand1->setReservationHour(new \DateTime());
            $demand1->setStatus('Test Status Request'.$count.'');
            $demand1->setCreatedAt(new \DateTime());

            // We associate the department to our users
            $friendlyUser->setDepartment($department);
            $jobWorker->setDepartment($department);

            // We associate the demand to our users
            $demand->setFriendlyUser($friendlyUser);
            $demand->setJobWorker($jobWorker);

            // We associate the demand to our users
            $demand1->setFriendlyUser($friendlyUser);
            $demand1->setJobWorker($jobWorker);

            // We associate the skill to our users
            $skill->setUser($jobWorker);
            $skill->setService($service);

            // We associate the skill to our users
            $skill1->setUser($jobWorker);
            $skill1->setService($service);

            // We associate the demand to our users
            $demand->setService($service);
            $demand->setRating($rating);

            // We associate the demand to our users
            $demand1->setService($service1);
            $demand1->setRating($rating1);

            // We store all of our entities into one
            $entities = [$jobWorker, $friendlyUser, $service, $service1, $rating, $rating1, $demand, $demand1, $skill, $skill1, $department];

            // We loop on it and persist
            foreach ($entities as $entity) {
                $manager->persist($entity);
            }

            
            $count++;
        }
        
        $manager->flush();
    }
}
