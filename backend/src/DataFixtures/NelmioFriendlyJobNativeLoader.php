<?php

//src/DataFixtures/NelmioFriendlyJobNativeLoader.php

namespace App\DataFixtures;

use App\DataFixtures\Providers\UniqueElementProvider;
use Faker\Factory as FakerGeneratorFactory;
use Faker\Generator as FakerGenerator;
use Nelmio\Alice\Faker\Provider\AliceProvider;
use Nelmio\Alice\Loader\NativeLoader;


class NelmioFriendlyJobNativeLoader extends NativeLoader
{
    /**
     * Comme on étend une classe existante, on peut écraser ces méthodes avec les notres
     * Il faut s'assurer que cette méthode retourne le même type d'objet
     * D'origine, createFakerGenerator fournit un objet de la classe Faker\Generator
     *
     * @return FakerGenerator
     */
    protected function createFakerGenerator(): FakerGenerator
    {
        // Comme on crée le generateur nous même, on peut choisir la langue !
        $generator = FakerGeneratorFactory::create('fr_FR');
        // On a créé un générateur ordinaire de Faker, mais il faut lui ajouter le provider de Alice
        $generator->addProvider(new AliceProvider());
        
        //! Le seed permet de récuperer une valeur qui permettra de générer toujours les même donneés utiles pour avoir une bdd fixe !
        $generator->seed($this->getSeed());

        return $generator;
    }
}