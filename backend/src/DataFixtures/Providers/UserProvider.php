<?php

namespace App\DataFixtures\Providers;

use Faker\Provider\Base as BaseProvider;
use Symfony\Component\HttpClient\HttpClient;

class UserProvider extends BaseProvider
{
    private static $client;

    public function __construct()
    {
        static::$client = HttpClient::create();
    }

    protected static $users = [
        
        'about' => [
            "Ira-t-il porter cette lettre et une autre planète, auquel cas je vous dis là, j'espère bien ne point recevoir de consolation. Préférez-vous le cérémonial parce que vous n'avez trouvé personne. Vents, qui tombe jusqu'à terre et fit le mort.",
            "Entré dans le salon lui parut interminable. Ose-t-il ainsi faire l'hypocrite avec le ciel ? Ferez-vous dans trois mois ou dans un siècle de philanthropie, négligeaient de me l'envoyer.",
            "Brièvement, elle répondait à peine. Montre, monsieur, il est défendu de mentir. Petite flâneuse, me dit-il.",
            "Choisissez parmi nous quelqu'un comme elle... Descendez, voilà l'essentiel ; et c'était même en ce qu'il fit plein jour. Pesons le gain et la perte en officiers était considérable.",
            "Remarquant que le voile jeté sur une planche voisine, un rire à faire trembler de peur, comme celui des océans polaires, brillait un rayon d'espérance. Pitié pour elle, rien n'avait pu lui reprocher jusque-là. Frère, petit mangeur parlant des bonnes choses.",
            "Dusses-tu te faire écraser, lui simple sous-lieutenant de la garde s'étaient portés à l'arme qu'elle rend à notre vie. Dit-il, puis se couvrir des nuées de vapeurs que le vent du navire en question, je vais forcer. Fine et grave, calculé pour concentrer sur la table du souper, le père, la lippe dehors.",
            "Six familles principales occupaient les pays qu'ils fussent pleins. Quelques-unes d'entre elles ont, dans la tristesse infinies qui lui étreignaient le coeur. Juin commençait, les soldats qui doivent être les ennemis des chrétiens étaient les seuls ornements.",
            "Aurait-il été jaloux de la chasse. Donne-le à tes chiens parce que tu peux gagner bien plus que par raisonnement, la trouvant mal en chair, ne servant pas sous leurs véritables noms. Amiral, si vous vous étonnez de ma tristesse est arrivée par ma folie.",
            "Considérons maintenant la seconde partie de sa garde-robe, et m'ôtait le temps d'envoyer un homme dans la clarté des étoiles, et secouait ses étoiles en pluie d'argent pendaient à ses côtés, sur lesquelles on fait sécher les figues. Ligne à ligne, entre l'île sédentaire et l'île en long et en large, pieds nus et se giflaient sans bruit. Tracassé quelquefois dans mes opérations commerciales.",
            "Transportée dans un lieu propre à conter des aventures. Accoutumé dès ma jeunesse toutes les vérités dont une créature est plus parfaite. Vos robots sont-ils réglés pour ne rien celer, les trois autres agents et l'officier s'élança hors de l'hôtel où serait le lanternon d'une église et son clocher à trois quarts de réservoir.",
            "Disposez de moi, ravis du beau temps, les réflexions viennent en foule ; elles m'aiment ! Dis, tu ne crains rien : tu seras partout bien reçu. Puissant début de la saison nouvelle.",
            "Réconforté par cette amitié sincère qui nous oblige à procurer autant qu'il m'arrivait de mourir... Étalée partout, la souveraineté vienne à changer de logement. Continuez, continuez, monsieur, dit-il.",
            "Descendez, brave homme, il se regarda d'un oeil avide, puis se répare. Mêlez à cela, dirigez là toutes vos forces à présent. Disons un peu ce que c'était pernicieux, infâme, quels malheurs ta trahison va attirer sur mon illustre maître ?",
            "Remontez votre manche, je vous emmène. Dis-lui qu'il peut créer à volonté. Fin de ma dernière lettre, ma chère demoiselle ?",
            "Ajoutez que, si une entente pouvait intervenir un jour, ce n'était vraiment plus utile, pour se quereller. Excusez-nous, cher vicomte, que vous connaissiez tout ça ? Lire un poète, à l'égard des oeufs de poisson, lui aussi, des premiers-nés de son troupeau au jour où il s'agit ?",
            "Sommes-nous une troupe ou une horde de sauterelles. Doté d'intelligence, affinés par la phtisie. Dispersés dans les rochers de la côte est tournée au midi.",
            "Bénéfice de la loi mosaïque ; par exemple, devrait aller plus vite demain. Autour des parterres, les jardiniers en auraient fait un bon champ de bataille ! Çà et là une tradition, un mythe, écraser de la fumée.",
            "Troisièmement, ça m'est bien revenu tout entier pour la délivrance de permis d'importation représentaient des rentes économiques. Apaisé à nouveau, mais ce jour-là seulement que je vous faisais donc bien peur ? Malheur aux générations qui, les yeux brillants.",
            "Cherchez donc un succès honnête, et à certaines saveurs. Effrayés du cri précurseur, ils se regardaient, ils se sont gelés pendant le froid hiver. Malheur aux vitres des cabarets...",
            "Entendu, monsieur, répondit-elle doucement, j'ai inventé ce tour pour échapper aux fatigues de l'après-midi se passa dans l'appartement. Revendication : la nouvelle loi. Égarée, sanglotante, le prenant par le bras ; mais, insensé que tu es ici, c'est vous autres qui êtes foutus...",
            "Utilité de la boîte, en sortit plusieurs feuilles de parquet étaient soulevées. Uniquement parce que j'aime. Égaré dans une foule de petits princes remplacèrent les invasions des barbares, que le tabernacle fut dressé.",
            "Examen de la caisse à secret de la serrure : mais elles n'étaient que les instruments humains de l'équipage respectaient sa solitude. Parlons argent, parlons de nous... Informez-vous de ces clients dont les noms suivent, qui, poussé de branche durable ; en d'autres mains ?",
        ],
    ];

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

    public static function getUserAbout()
    {
        return static::$users;
    }

    public static function getAdminData()
    {
        return static::$admins;
    }

    public static function getRandomImage()
    {
        $url = "https://i.picsum.photos/id/".mt_rand(0, 1050)."/640/480.jpg";
        
        $response = static::$client->request('GET', $url);
        
        $statusCode = $response->getStatusCode();

        if ($statusCode == 404) {
            return static::getRandomImage();
        }
        else {
            return $url;
        }   
    }
}