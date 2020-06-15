<?php

namespace App\DataFixtures\Providers;

use Faker\Provider\Base as BaseProvider;

/**
 * This provider is used to call consistent data concerning the Demands
 */
class DemandProvider extends BaseProvider
{
    // We set a protected property and store the data inside
    protected static $demands = [
        'jardinage' => [
            "J'aurais besoin de vos services pour tailler ma haie",
            "J'aurais besoin de vos services pour tondre mon gazon"
        ],
        'bricolage' => [
            "J'aurais besoin de vos services pour changer le siphon de mon lavabo",
            "J'aurais besoin de vos services pour monter un meuble"
        ],
        'déménagement' => [
            "J'aurais besoin de vos services pour m'aider à déménager"
        ],
        'garde d\'animaux' => [
            "J'aurais besoin de vos services pour garder mon chien",
            "J'aurais besoin de vos services pour garder mon chat"
        ],
        'informatique' => [
            "J'aurais besoin de vos services pour formater mon ordinateur",
            "J'aurais besoin de vos services pour me confectionner un CV"
        ],
        'babysitting' => [
            "J'aurais besoin de vos services pour garder mon garçon",
            "J'aurais besoin de vos services pour garder ma fille",
            "J'aurais besoin de vos services pour garder mes enfants",
        ],
        'soutien scolaire' => [
            "Pouvez-vous aider mon fils de 8 ans qui a des difficultés en mathématiques ?",
            "Pouvez-vous aider ma fille de 12 ans qui a des difficultés en français ?",
            "J'ai des difficultés en anglais, pouvez-vous m'aider ?",
        ],
        'aide à la personne' => [
            "J'aurais besoin de votre aide pour accompagner ma maman faire les courses",
            "J'aurais besoin de votre aide pour faire ma déclaration d'impôts",
            "J'aurais besoin de votre aide pour livrer un repas chez moi",
        ],
        'status' => [
            'En attente',
            'Acceptée',
            'Annulée',
            'Refusée',
            'Terminée'
        ],
    ];

    /**
     * This method will be called to transmit the data from the property for the fixtures
     */
    public static function getDataDemands(){
        return static::$demands;
    }

    /**
     * This method will be called to transmit a random date for the reservation
     */
    public static function getReservationDate()
    {
        $year = date("2020");
        $month = mt_rand(1, 5);
        $day = mt_rand(1, 28);

        $randomDate = $day . '-' . $month . '-' . $year;

        return $randomDate;
    }

    /**
     * This method will be called to transmit a random hour for the reservation
     */
    public static function getReservationHour()
    {
        return mt_rand(6, 21) .":00";
    }

    /**
     * This method will be called to transmit a random status for a demand
     */
    public static function getStatus()
    {
        $status = static::$demands['status'];
        $status = $status[mt_rand(0, count($status) - 1)];

        return $status;
    }
}