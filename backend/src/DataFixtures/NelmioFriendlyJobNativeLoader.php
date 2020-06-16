<?php

namespace App\DataFixtures;

use Nelmio\Alice\Faker\Provider\AliceProvider;
use Nelmio\Alice\Loader\NativeLoader;
use Faker\Factory as FakerGeneratorFactory;
use Faker\Generator as FakerGenerator;

class NelmioFriendlyJobNativeLoader extends NativeLoader
{
    /**
     * This method is used as a loader for the NelmioAliceFixtures
     */
    protected function createFakerGenerator(): FakerGenerator
    {
        $generator = FakerGeneratorFactory::create('fr_FR');
        $generator->addProvider(new AliceProvider());

        $generator->seed($this->getSeed());

        return $generator;
    }
}
