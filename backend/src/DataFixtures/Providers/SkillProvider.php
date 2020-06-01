<?php

namespace App\DataFixtures\Providers;

use Faker\Provider\Base as BaseProvider;

class SkillProvider extends BaseProvider
{
    protected static $skills = [
        'jardinage' => [
            "Paysagiste de métier, je saurais subvenir à tous vos besoins florales et même plus encore.",
            "Passionné de nature, j'ai toujours souhaité mettre mon hobbie à contribution.",
            "D'esprit créatif et rigoureux, l'entretien de vos espaces verts sera aux petits oignons.",
        ],
        'bricolage' => [
            "Etant touche à tout, je bricole beaucoup à mes heures perdues, rien ne me résiste.",
            "Polyvalent avec une bonne maîtrise technique, je réaliserais avec assiduité tout vos petits travaux.",
            "Autonome et sérieux, je suis disponible pour tout vos petits travaux.",
            "Spécialiste en montage de meubles IKEA, je n'ai pas besoin d'en dire plus.",
        ],
        'déménagement' => [
            "Après avoir trop souvent esquiver les demandes de déménagement de mes proches, j'essaie de me racheter une conscience, n'hésitez pas !",
            "Détenteur d'une formation en gestes et postures, je saurais préserver mon dos et mener votre déménagement à bien.",
            "Vous êtes en manque de main d'oeuvre ? Déménageur de métier, je suis disponible pour toutes sortes de déménagement.",
            "Organisé et sérieux, vos biens seront déplacés avec beaucoup d'attention et de tendresse."
        ],
        'garde d\'animaux' => [
            "J'aime les animaux et les animaux m'aiment",
            "Vous devez vous absenter et personne ne peut garder votre petit bout ? Je saurais m'en occuper avec grand plaisir.",
            "Ayant moi même des animaux, j'ai beaucoup d'affection pour eux, je traiterais vos animaux aussi bien que les miens !",
        ],
        'informatique' => [
            "Je baigne dans l'informatique depuis tout petit et serait ravi de pouvoir vous dépanner.",
            "Ayant réparer plusieurs ordinateurs, je suis disponible pour monter votre ordinateur ou remplacer une pièce défectueuse.",
            "Besoin d'un formatage de votre ordinateur, de faire un CV, utilisation pack Office, contactez moi !",
        ],
        'babysitting' => [
            "Disponible pour toutes demandes de babysitting, petit ou grand.",
            "J'ai toujours aimer les enfants et j'en garde depuis longtemps, je serais ravi de pouvoir garder votre ou vos enfants.",
            "Je garde régulièrement des enfants dans le cadre de mon travail et je me ferais un plaisir de pouvoir garder vos bambins.",
        ],
        'soutien scolaire' => [
            "Je suis anglophone, je peux vous aider à progresser en anglais",
            "Actuellement en études en math sup, je serais heureux de pouvoir vous apporter mon aide",
            "Ayant reçu la médaille d'or de mon village en dictée, je suis disponible pour faire de vous un as de la dictée !",
        ],
        'aide à la personne' => [
            "Je livre des repas quotidiennement, si vous ou l'un de vos proches en ont besoin, contactez moi !",
            "Je serais heureux de vous aider pour n'importe quel démarche administrative (impôts, caf ect...)",
            "Je suis disponible pour vous emmener faire vos courses en toute sérénité",
        ],

    ];

    public static function getDescriptionSkills(){
        return static::$skills;
    }

    public static function getPriceSkills(){
        return mt_rand(8,20);
    }
}