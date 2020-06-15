<?php

namespace App\DataFixtures\Providers;

use Faker\Provider\Base as BaseProvider;
use Symfony\Component\HttpClient\Exception\RedirectionException;
use Symfony\Component\HttpClient\HttpClient;

/**
 * This provider is used to call consistent data concerning the Users
 */
class UserProvider extends BaseProvider
{
    private static $client;

    public function __construct()
    {
        static::$client = HttpClient::create();

    }

    // We set a protected property and store the data inside
    protected static $users = [
        
        'about_male' => [
            "J'aime prendre mon café chez Starbucks et les films d'action.",
            "Je suis très sportif, c'est ma raison de vivre.",
            "Grand fan d'oeuvre cinématographique en tout genre. #Spielberg",
            "J'ai sauvé un chaton de la noyade.",
            "Tous les héros ne portent pas de cape, moi si.",
            "Plus jeune, je rêvais d'être un soldat, aujourd'hui je suis vétérinaire et je sauve des vies.",
            "J'entretiens diverses passions comme le théâtre, les voyages, et quelques activités sportives.",
            "J'ai 24 ans, je suis étudiant, et je cherche à arrondir mes fins de mois.",
            "Je suis ici par simple curiosité, mais j'ai quand même quelques qualités.",
            "Je suis très débrouillard, touche à tout, je suis le JobWorker qu'il vous faut !",
            "Je m'ennuie, donc n'hésitez pas à faire appel à moi.",
            "Vegan for life !",
            "J'aime les chansons mexicaines, arriba !",
            "Fin écouteur de musique classique, et adepte de la Zumba.",
            "Fan de Marvel, et de super-héros.",
            "J'adore les jeux-vidéos et les sous-marins.",
            "Je suis maître de guilde sur World Of Warcraft",
            "J'aime aller à des concerts avec des amis, j'aime le rap et la variété française.",
            "Grand adepte de sensations fortes, mes prestations vous feront virevolter !",
            "CEO of Twitter America, non j'plaisante.",
            "Marathonien du dimanche, netflix & chill.",
            "J'aime les câpres et les choux de bruxelles.",
            "J'aime la chasse et les sorties en mirador.",
            "Issue d'une formation de comptable, je sais compter deux par deux et lasser mes chaussures.",
            "FriendlyJob c'est trop bien !",
        ],

        'about_female' => [
            "J'adore la coupe de cheveux à Thibault Clusel.",
            "Sportive et fan de canoë-kayak !",
            "J'aime voyager et la moto.",
            "Gentille et avec un grand sens de l'humour !",
            "Rigoureuse et enthousiaste, je saurais vous offrir une prestation de qualité.",
            "J'aime les choses simple de la vie.",
            "Bonjour, j'ai 27 ans, étudiante en droit, je cherche une activité pour arrondir les fins de mois.",
            "Grande passionnée d'informatique et de séries, je suis une vraie geek !",
            "Fan de jeux-vidéos, je gagne à tous les tournois de Mario Kart.",
            "J'aime m'occuper des animaux et des enfants.",
            "J'apprécie les sorties entre amies et faire la fête !",
            "J'adore concevoir des choses de mes propres mains.",
            "J'aime toutes les activités qui concernent la musique.",
            "Très sportive, j'aime faire du basket et du cheval.",
            "J'apprécie les sorties au cinéma avec mes copines.",
            "Disponible pour toutes demandes concernant mes compétences",
            "N'hésitez pas à me mettre 5 étoiles !",
            "Bonjour, je suis nouvelle ici et serait très heureuse de pouvoir vous aider.",
            "Je suis une adepte de bons vins et de shopping.",
            "Enthousiaste et motivée, je souhaite avoir un complément de revenu et suis disponible pour toutes vos demandes.",
            "J'ai toujours la pêche !",
            "J'aime la bonne nourriture et les bons moments de la vie.",
            "Contente d'avoir pu découvrir FriendlyJob, super concept !",
            "Polyvalente et rigoureuse, je saurais être votre JobWorker idéal !",
            "#TeamPlaid #TeamChocolatChaud",
        ],
    ];

    // We set a protected property and store the data inside (admins)
    protected static $admins = [
        
        'email' => [
            'admin.jolan@oclock.io',
            'admin.karim@oclock.io',
            'admin.thibault@oclock.io',
            'admin.tony@oclock.io',
        ],

        'firstname' => [
            'Jolan',
            'Karim',
            'Thibault',
            'Antony',
        ],

        'lastname' => [
            'Lazzari',
            'Maazaoui',
            'Clusel',
            'Gomez'
        ],

        'department' => [
            '67',
            '12',
            '75',
            '12'
        ],
        
        'image' => [
            'https://i.vippng.com/png/small/91-914118_goku-png-dbz-chibi-dragon-ball-z-son.png',
            'https://i.vippng.com/png/small/87-870948_hand-clipart-incredible-hulk-hulk-age-of-ultron.png',
            'https://i.vippng.com/png/small/240-2405419_chibi-super-saiyan-blue-vegeta-by-rayzorblade189-da64uni.png',
            'https://i.vippng.com/png/small/230-2300287_final-fantasy-xiii-2-releases-before-versus-xiii.png'
        ],

    ];

    /**
     * This method will be called to transmit the data from the property for the fixtures ($users)
     */
    public static function getUserAbout()
    {
        return static::$users;
    }

    /**
     * This method will be called to transmit the data from the property for the fixtures ($admins)
     */
    public static function getAdminData()
    {
        return static::$admins;
    }

    /**
     * This method is used to generate a random image
     */
    public static function getRandomImage()
    {

        $url = "https://picsum.photos/640/480";

        try {
            static::$client->request('GET', $url, ['max_redirects' => 0]);
        
        } catch (RedirectionException $e) {
            $redirectUrl = $e->getResponse()->getInfo()['redirect_url'];
            return $redirectUrl;
        }
    }
}