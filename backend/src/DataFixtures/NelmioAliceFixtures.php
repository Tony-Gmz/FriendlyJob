<?php

namespace App\DataFixtures;


use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\NelmioFriendlyJobNativeLoader;
use App\Entity\Demand;
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
        
        //importe le fichier de fixtures et récupère les entités générés
        $entities = $loader->loadFile(__DIR__.'/fixtures.yaml')->getObjects();
        
        $count = 1;
        //empile la liste d'objet à enregistrer en BDD
        foreach ($entities as $entity) {
            
            if ($entity instanceof User) {
                // Pour ajouter le mdp encodé à un utilisateur on peut lui donner directement ce qu'on à obtenue
                // avec la commande bin/console security:encode-password
                // $entity->setPassword('$argon2id$v=19$m=65536,t=4,p=1$P5zK8BE0sHCmTDf8MH0RVQ$NGAMrBwQMa4GNnu3ebegYh80p668DCfaDqtwgEBsXm4');
                $encodedPassword = $this->passwordEncoder->encodePassword($entity, 'derrick');
                $entity->setPassword($encodedPassword);
            }

            echo $count . PHP_EOL;
            $count ++;

            $manager->persist($entity);
        };

        //enregistre
        $manager->flush();
    }
}
