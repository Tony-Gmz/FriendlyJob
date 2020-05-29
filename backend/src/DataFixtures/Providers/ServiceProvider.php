<?php

namespace App\DataFixtures\Providers;

use Faker\Provider\Base as BaseProvider;

class ServiceProvider extends BaseProvider
{
    protected static $services = [
        'parent_id' => [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ],
        'title' => [
            'Jardinage',
            'Bricolage',
            'Déménagement',
            'Garde d\'animaux',
            'Informatique',
            'Babysitting',
            'Covoiturage',
            'Aide à la personne',
        ],
        'description' => [
            "Vous avez besoin d'une taille de haie ou de faire pousser des pommes ? Choisissez le JobWorker qu'il vous faut !",
            "Si pour vous, monter un meuble IKEA est aussi obscur que le curling, ce service est fait pour vous !",
            "Parce que porter une machine à laver est bien plus simple à plusieurs, n'hésitez plus !",
            "Vous partez en vacances et vos proches sont allergique aux animaux ? Nos spécialistes en garde d'animaux sont là pour vous !",
            "Votre ordinateur ne s'allume plus ? L'écran bleu de la mort vous guette ? Les patins de votre souris ne glissent plus ? Nos JobWorkers se feront un plaisir de vous dépanner !",
            "Si, comme les animaux, vos proches sont allergique aux enfants, foncez !",
            "Vous avez besoin de prendre l'air, de partir en vacances, ou juste de prendre vos distances avec conjoint(e), ce service est fait pour vous !",
            "Livraison de repas, visite à domicile, démarches administratives, veillez sur l'un de vos proches ?
            Pas de problème ! Nos JobWorkers qualifiés se feront un plaisir de vous aider !",
        ],
        'image' => [
            'https://i.ibb.co/1bPYLmz/jardinage.jpg',
            'https://i.ibb.co/jhR4T65/Bricolage.jpg',
            'https://i.ibb.co/jG7c7KJ/demenagement.jpg',
            'https://i.ibb.co/rMB52Bb/gardeanimaux.jpg',
            'https://i.ibb.co/3YtgX26/informatique.jpg',
            'https://i.ibb.co/6RkgSB6/babysitting.png',
            'https://i.ibb.co/BwMSMng/covoiturage.jpg',
            'https://i.ibb.co/XL7Bn9h/aide.jpg',
        ],

    ];

    public static function GetDataServices(){
        return static::$services;
    }
}