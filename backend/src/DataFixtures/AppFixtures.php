<?php

namespace App\DataFixtures;

use App\Entity\Department;
use App\Entity\Rating;
use App\Entity\Request;
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
        

        $friendlyUser = new User();
        $friendlyUser->setEmail('lol@oclock.io');
        $friendlyUser->setRoles(['FRIENDLY_USER']);

        $friendlyUser->setPassword($this->passwordEncoder->encodePassword($friendlyUser, 'derrick'));

        $friendlyUser->setFirstname('Karim');
        $friendlyUser->setLastname('Maazaoui');
        
        $friendlyUser->setCreatedAt(new \DateTime());

        $jobWorker = new User();
        $jobWorker->setEmail('lolilol@oclock.io');
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
        $skill->setDescription('Gi fais le ménage tri tri bien');
        $skill->setPrice(40);
        $skill->setCreatedAt(new \DateTime());

        $rating = new Rating();
        $rating->setComment('Très bien fait je valide fort');
        $rating->setStar(4);
        $rating->setCreatedAt(new \DateTime());
        
        
        $service = new Service();
        $service->setTitle('Test Titre Services');
        $service->setDescription('Test Decription Services');
        $service->setimage('Test image Services');
        $service->setCreatedAt(new \DateTime());

        $request = new Request();
        $request->setBody('Test Body Request');
        $request->setReservationDate(new \DateTime());
        $request->setReservationHour("15h30 - 16h00");
        $request->setStatus('Test Status Request');
        $request->setCreatedAt(new \DateTime());

        $friendlyUser->setDepartment($department);
        $jobWorker->setDepartment($department);

        $request->setFriendlyUser($friendlyUser);
        $request->setJobWorker($jobWorker);

        $skill->setUser($jobWorker);
        $skill->setService($service);

        $request->setService($service);
        $request->setRating($rating);

        $entities = [$jobWorker, $friendlyUser, $service, $rating, $request, $skill, $department];

        foreach ($entities as $entity)
        {
            $manager->persist($entity);
        }

        $manager->flush();
    }
}
