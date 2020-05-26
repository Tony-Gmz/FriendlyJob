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
        $loader = new NelmioFriendlyJobNativeLoader();
        $entities = $loader->loadFile(__DIR__.'/fixtures.yaml')->getObjects();

        $count = 1;
        
        foreach ($entities as $entity) {
            
            if ($entity instanceof User) {
                $encodedPassword = $this->passwordEncoder->encodePassword($entity, 'derrick');
                $entity->setPassword($encodedPassword);

                
                if ($entity->getRoles()[0] == 'JOBWORKER' ) {
                    $jobworkers[] = $entity;
                }
                //! Ajout mot de passe personnalisé pour l'admin ( Je sais tu va me détester JOLAN =P)
                elseif ($entity->getRoles()[0] == 'ADMIN') {
                    $encodedPassword = $this->passwordEncoder->encodePassword($entity, $_ENV['ADMIN_PASSWORD'] );
                    $entity->setPassword($encodedPassword);
                }
                //!=================
                else {
                    $friendlyUsers[] = $entity;
                }
            }

            if ($entity instanceof Demand) {
                $demands[] = $entity;
            }

            if ($entity instanceof Rating) {
                $ratings[] = $entity;
            }

            if ($entity instanceof Service) {
                $services[] = $entity;
            }

            echo $count . ' Récupération des entité dans des variable'. PHP_EOL;
            $count ++;
        };
        
        $count = 1;

        foreach ($demands as $demand)
        {
            shuffle($friendlyUsers);
            shuffle($jobworkers);
            shuffle($ratings);

            $demand->setFriendlyUser($friendlyUsers[0]);
            $demand->setJobWorker($jobworkers[0]);
            $demand->setRating($ratings[0]);

            echo $count . ' Ecriture des demandes' . PHP_EOL;
            $count ++;
        }

        $count = 1;

        foreach ($entities as $entity) {

            echo $count . ' Persistance des données' . PHP_EOL;
            $count ++;

            $manager->persist($entity);
        }
        
        $manager->flush();

        $services[count($services) - 1]->setParentId($services[0]->getId());
        $services[count($services) - 2]->setParentId($services[0]->getId());
        $services[count($services) - 3]->setParentId($services[0]->getId());

        $manager->flush();
    }
}
