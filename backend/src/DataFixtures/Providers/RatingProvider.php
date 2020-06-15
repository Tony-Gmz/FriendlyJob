<?php

namespace App\DataFixtures\Providers;

use Faker\Provider\Base as BaseProvider;

/**
 * This provider is used to call consistent data concerning the Ratings
 */
class RatingProvider extends BaseProvider
{
    // We set a protected property and store the data inside
    protected static $ratings = [
        'comment' => [
            "Je suis très satisfait.",
            "Bon boulot.",
            "Je suis content du travail fourni.",
            "C'est une expérience que je retenterais à coup sûr.",
            "Je suis moyennement satisfait du travail fourni.",
            "Je ne suis pas satisfait.",
            "Je ne ferais plus appel à cette personne.",
            "Prestation très clean.",
            "Nice !",
            "Ok !",
            "Pas bon !",
            "Globalement satisfait",
            "Peut mieux faire",
            "Je suis assez déçu de ce JobWorker",
            "Je ne recommande pas ce JobWorker",
            "Ce JobWorker est remarquable !"
        ],
        'star' => [
            5,
            4,
            4,
            5,
            3,
            1,
            1,
            5,
            4,
            4,
            2,
            4,
            3,
            2,
            1,
            5,
        ]
    ];

    /**
     * This method will be called to transmit the data from the property for the fixtures
     */
    public static function getDataRatings()
    {
        return static::$ratings;
    }
}