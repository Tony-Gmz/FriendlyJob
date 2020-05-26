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
        $count = 0;
        $j = 10;
        
        for ($i = 0; $i < $j; $i++) {
            $friendlyUser = new User();
            $friendlyUser->setEmail('lol'.$count.'@oclock.io');
            $friendlyUser->setRoles(['FRIENDLY_USER']);

            $friendlyUser->setPassword($this->passwordEncoder->encodePassword($friendlyUser, 'derrick'));

            $friendlyUser->setFirstname('Karim');
            $friendlyUser->setLastname('Maazaoui');
        
            $friendlyUser->setCreatedAt(new \DateTime());

            $jobWorker = new User();
            $jobWorker->setEmail('lolilol'.$count.'@oclock.io');
            $jobWorker->setRoles(['JOBWORKER']);

            $jobWorker->setPassword($this->passwordEncoder->encodePassword($jobWorker, 'derrick'));

            $jobWorker->setFirstname('Jolan');
            $jobWorker->setLastname('Lazzari');
        
            $jobWorker->setCreatedAt(new \DateTime());
        
            $department = new Department();
            $department->setName('Bas-Rhin');
            $department->setNumber(67);
            $department->setCreatedAt(new \DateTime());

            $skill = new Skill();
            $skill->setDescription('Gi fais le ménage tri tri bien'.$count.'');
            $skill->setPrice(40);
            $skill->setCreatedAt(new \DateTime());

            $skill1 = new Skill();
            $skill1->setDescription('Je taille la pelouse'.$count.'');
            $skill1->setPrice(30);
            $skill1->setCreatedAt(new \DateTime());

            $rating = new Rating();
            $rating->setComment('Très bien fait je valide fort'.$count.'');
            $rating->setStar(4);
            $rating->setCreatedAt(new \DateTime());

            $rating1 = new Rating();
            $rating1->setComment('Très bien fait je valide fort'.$count.'');
            $rating1->setStar(4);
            $rating1->setCreatedAt(new \DateTime());
        
        
            $service = new Service();
            $service->setTitle('Test Titre Services'.$count.'');
            $service->setDescription('Test Decription Services'.$count.'');
            $service->setimage('Test image Services'.$count.'');
            $service->setCreatedAt(new \DateTime());

            $service1 = new Service();
            $service1->setTitle('Test Titre 2 Services'.$count.'');
            $service1->setDescription('Test 2 Decription Services'.$count.'');
            $service1->setimage('Test 2 image Services'.$count.'');
            $service1->setCreatedAt(new \DateTime());

            $demand = new Demand();
            $demand->setBody('Test Body Request'.$count.'');
            $demand->setReservationDate(new \DateTime());
            $demand->setReservationHour("15h30 - 16h00");
            $demand->setStatus('Test Status Request'.$count.'');
            $demand->setCreatedAt(new \DateTime());

            $demand1 = new Demand();
            $demand1->setBody('Test Body Request'.$count.'');
            $demand1->setReservationDate(new \DateTime());
            $demand1->setReservationHour("15h30 - 16h00");
            $demand1->setStatus('Test Status Request'.$count.'');
            $demand1->setCreatedAt(new \DateTime());

            $friendlyUser->setDepartment($department);
            $jobWorker->setDepartment($department);

            $demand->setFriendlyUser($friendlyUser);
            $demand->setJobWorker($jobWorker);

            $demand1->setFriendlyUser($friendlyUser);
            $demand1->setJobWorker($jobWorker);

            $skill->setUser($jobWorker);
            $skill->setService($service);

            $skill1->setUser($jobWorker);
            $skill1->setService($service);

            $demand->setService($service);
            $demand->setRating($rating);

            $demand1->setService($service1);
            $demand1->setRating($rating1);

            $entities = [$jobWorker, $friendlyUser, $service, $service1, $rating, $rating1, $demand, $demand1, $skill, $skill1, $department];

            foreach ($entities as $entity) {
                $manager->persist($entity);
            }

            
            $count++;
        }
        
        //$manager->flush();
    }
}
