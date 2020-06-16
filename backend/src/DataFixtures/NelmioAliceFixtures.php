<?php

namespace App\DataFixtures;


use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\NelmioFriendlyJobNativeLoader;
use App\Entity\Demand;
use App\Entity\Rating;
use App\Entity\Service;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class NelmioAliceFixtures extends Fixture
{

    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        // We call the loader
        $loader = new NelmioFriendlyJobNativeLoader();
        // We link the fixtures.yaml file in order to get a lot of random data
        $entities = $loader->loadFile(__DIR__.'/fixtures.yaml')->getObjects();

        // We set a count at 1
        $count = 1;
        
        // We loop on all of our entities
        foreach ($entities as $entity) {
            
            // If the entity is a User entity, we encode the password and we set it
            if ($entity instanceof User) {
                $encodedPassword = $this->passwordEncoder->encodePassword($entity, 'derrick');
                $entity->setPassword($encodedPassword);

                // If the role is a JOBWORKER, we store him into an array
                if ($entity->getRoles()[0] == 'JOBWORKER' ) {
                    $jobworkers[] = $entity;
                }
                // If the role is an ADMIN, we encode a new password and we set it
                elseif ($entity->getRoles()[0] == 'ADMIN') {
                    $encodedPassword = $this->passwordEncoder->encodePassword($entity, $_ENV['ADMIN_PASSWORD'] );
                    $entity->setPassword($encodedPassword);
                }
                // We store the friendlyUsers into an array
                else {
                    $friendlyUsers[] = $entity;
                }
            }

            // If the entity is a Demand entity, we store it into an array
            if ($entity instanceof Demand) {
                $demands[] = $entity;
            }

            // If the entity is a Rating entity, we store it into an array
            if ($entity instanceof Rating) {
                $ratings[] = $entity;
            }

            // If the entity is a Service entity, we store it into an array
            if ($entity instanceof Service) {
                $services[] = $entity;
            }

            // Control for the fixtures loader
            echo $count . ' Récupération des entités dans des variable'. PHP_EOL;
            $count ++;
        };
        
        // We set a count at 1
        $count = 1;

        // We initialize a loop for the demands
        foreach ($demands as $demand)
        {
            // We shuffle
            shuffle($friendlyUsers);
            shuffle($jobworkers);
            shuffle($ratings);

            // We associate the shuffled entity to the demand Entity
            $demand->setFriendlyUser($friendlyUsers[0]);
            $demand->setJobWorker($jobworkers[0]);
            $demand->setRating($ratings[0]);

            // Control for the fixtures loader
            echo $count . ' Ecriture des demandes' . PHP_EOL;
            $count ++;
        }

        // We set a count at 1
        $count = 1;

        // We initialize a loop on all of our entities
        foreach ($entities as $entity) {

            // Control for the fixtures loader
            echo $count . ' Persistance des données' . PHP_EOL;
            $count ++;

            // And we persist
            $manager->persist($entity);
        }
        
        $manager->flush();

        // Treatment in order to have sub-services for one service
        $services[count($services) - 1]->setParentId($services[0]->getId());
        $services[count($services) - 2]->setParentId($services[0]->getId());
        $services[count($services) - 3]->setParentId($services[0]->getId());

        $manager->flush();
    }
}
