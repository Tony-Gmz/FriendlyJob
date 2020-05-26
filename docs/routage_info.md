## Routage React

| URL | Route Name |
|---|---|
| path "/" | page d'accueil |
| path "/contact" | page des contacts |
| path "/services" |  liste des services |
| path  "/services/{nom du service en minuscule (slugify)} | service|
| path  "services/aide_a_la_personne/{nom du sous-service en minuscule (slugify)} | sous-service d'aide à la personne|
| path  "/services/{nom du service en minuscule (slugify)}/jobworker"  |liste des jobworker (voir plus)|
| path  "/jobworker/{nom du jobworker en minuscule (slugify)}" | détails d'un jobworker|
| path  "/mesdemandes" | demandes d'un utilisateur
| path  "/profil"  |profil d'un utilisateur|
| path  "/mesdemandes/{id de la demande}/messagerie" | tchat v1.1|
| path  "/404"  |page 404|
| path  "/logout"|  déconnexion|
| path  "/blog" | blog V2|
| path  "/blog/{nom de l'article en minuscule (slugify)} | article du blog V2 |

Les besoins en front en terme d'API :

HomePage "/" =
Route en GET = récuperer tous les services
Route en GET = récuperer un jobworker aléatoirement
Route en GET = récuperer "star" de la table rating affilié au jobWorker

A l'inscription (Modal) =
Route en GET = récuperer la liste des département
Route en POST avec en argument nom, prenom, email, password, rôle, département

A la connexion (Modal) =
Route en POST avec en argument email, password

Services "/services" =
Route en GET = récuperer tous les services

Service spécifique "/services/{nom du service} =
Route en GET = récuperer un service par rapport à son id
Route en GET = récuperer liste des jobworker ayant pour skill l'id du service, trié par note et LIMIT 5
Route en GET = récuperer "star" de la table rating affilié aux jobWorkers

Service d'aide à la personne "/services/aide_a_la_personne
Route en GET = récuperer tous les sous-service d'aide à la personne

Détails d'un sous-service d'aide à la personne "/services/aide_a_la_personne/{nom en minuscule d'un sous-service}"
Route en GET = récuperer le sous-service par rapport à son id
Route en GET = récuperer liste des jobworker ayant pour skill l'id du service, trié par note et LIMIT 5
Route en GET = récuperer "star" de la table rating affilié aux jobWorkers

JobWorker "/services/{nom du service en minuscule (slugify)}/jobworker" =
Route en GET Récupère la liste des jobWorker affilié au services selectionné
Route en GET = récuperer "star" de la table rating affilié aux jobWorkers

Détails jobWorker  "/services/{nom du service en minuscule (slugify)}/jobworker/{nom du jobworker}" =
Route en GET = récupère l'objet complet du jobWorker
Route en GET = recupère le rating du jobWorker

Reservation (modal)
Route en POST avec arguments : service, date, horaire, description, friendlyUser, JobWorker, status

MesDemandes  "/mesdemandes"
Route en GET = récupères toutes les demande de l'utilisateur.
Route en PUT avec arguments : status de la demande (accepté, refusé) (jobworker)
Route en PUT avec argument (string) : raison du refus (jobWorker)
Route en GET status de la demande (friendlyUser)
Route en DELETE avec argument: id de la demande pour supprimer la demande

Profil "/profil"
Route en GET = recupère l'objet user
Route en PUT = modification de l'objet user
Route en DELETE avec argument: id de l'utilisateur  = supprimer le compte de l'utilisateur 

Contact "/contact"
Route en GET = recupèrer les contacts

## Routage Symfony
 
| URL | Route Name | HTTP Method | Controller | Method | Commentary |
|---|---|---|---|---|---|
| / | homepage | GET | MainController | home | Home page |
| /api/v1/login | api_v1_login | GET | SecurityController | login | Connection |
| /api/v1/logout | api_v1_logoutout | GET | SecurityController | logout | Log out|
|||||||
| /api/v1/users/{id} | api_v1_users_read | GET | UserController | read | See details of one specific user |
| /api/v1/users/{id} | api_v1_users_edit | PUT | UserController | edit | Update one specific user |
| /api/v1/users/{id} | api_v1_users_delete | DELETE | UserController | delete | Delete one specific user |
| /api/v1/users | api_v1_users_add | POST | UserController | add | Add a user |
| /api/v1/users/jobworker/random | api_v1_users_jobworker_random | GET | UserController | randomJobWorker | Get a random JobWorker |
| /api/v1/users/check | api_v1_users_check | POST | UserController | checkUser | Verify credentials from one user |
| /api/v1/users/jobworker/{id} | api_v1_users_jobworker | GET | UserController | getJobWorkerDetails | Get details from one JobWorker |
| /api/v1/users/contacts | api_v1_users_contacts | GET | UserController | getAllContact | List of all contacts |
| /api/v1/rating/jobworker/{id} | api_v1_user_rating_jobworker | GET | UserController| getRatingOfJobworker | Get all ratings from one jobWorker |
|||||||
| /api/v1/department | api_v1_department_browse | GET | DepartmentController | browse | List of all department |
|||||||
| /api/v1/services | api_v1_services_browse | GET | ServiceController | browse | List of all services |
| /api/v1/services/{id} | api_v1_services_read | GET | ServiceController | read | See details of one specific service |
| /api/v1/services/{id}/jobworkers | api_v1_services_jobworkers | GET | ServiceController | getJobWorkersByServices | Get all JobWorkers from a Service |
| /api/v1/services/{id}/jobworkers?limit5=on | api_v1_services_jobworkers | GET | ServiceController | getJobWorkersByServices | Get five JobWorkers from a service |
| /api/v1/services/{id}/sub-services | api_v1_services_subservices | GET | ServiceController | getSubServicesFromService | Get Sub-services from one service |
|||||||
| /api/v1/demands/{id} | api_v1_demands_edit | PUT | DemandController | edit | Update one specific demand |
| /api/v1/demands/{id} | api_v1_demands_delete | DELETE | DemandController | delete | Delete one specific demand |
| /api/v1/demands | api_v1_demands_add | POST | DemandController | add | Add a demand |
| /api/v1/demands/users/{id} | api_v1_demands_users | GET | DemandController | getDemandsFromOneUser | Get all demands from one User |



HomePage "/" =
Route en GET = récuperer tous les services
Réponse : /api/v1/services
Route en GET = récuperer un jobworker aléatoirement et "star" de la table rating affilié au jobWorker
Réponse : /api/v1/jobworker/random

A l'inscription (Modal) = 
Route en GET = récuperer la liste des département
Réponse : /api/v1/department
Route en POST avec en argument nom, prenom, email, password, rôle, département
Réponse : /api/v1/users

A la connexion (Modal) = 
Route en POST avec en argument email, password
Réponse : /api/v1/users/check

Services "/services" =
Route en GET = récuperer tous les services
Réponse : /api/v1/services

Détails d'un service  "/services/{nom du service} =
Route en GET = récuperer un service par rapport à son id
Réponse : /api/v1/services/{id}
Route en GET = récuperer liste des jobworker ayant pour skill l'id du service, trié par note et LIMIT 5 et récuperer "star" de la table rating affilié aux jobWorkers
Réponse : /api/v1/services/{id}/jobworkers

Service d'aide à la personne "/services/aide_a_la_personne
Route en GET = récuperer tous les sous-service d'aide à la personne
Réponse : /api/v1/services/{id}/sub-services

Détails d'un sous-service d'aide à la personne "/services/aide_a_la_personne/{nom en minuscule d'un sous-service}"
Route en GET = récuperer le sous-service par rapport à son id
Réponse : /api/v1/services/{id}
Route en GET = récuperer liste des jobworker ayant pour skill l'id du service, trié par note et LIMIT 5 et "star" de la table rating affilié aux jobWorkers
Réponse : /api/v1/services/{id}/jobworkers?limit5=on

JobWorker "/services/{nom du service en minuscule (slugify)}/jobworker" =
Route en GET = récuperer liste des jobworker ayant pour skill l'id du service, trié par note et LIMIT 5 et "star" de la table rating affilié aux jobWorkers
Réponse : /api/v1/services/{id}/jobworkers

Détails jobWorker  "/services/{nom du service en minuscule (slugify)}/jobworker/{nom du jobworker}" =
Route en GET = récupère l'objet complet du jobWorker et récupère le rating du jobWorker
Réponse : /api/v1/jobWorker/{id}

Reservation (modal)
Route en POST avec arguments :  date, horaire, description, statut, friendlyUser, JobWorker, Services
Réponse : /api/v1/demands

MesDemandes  "/mesdemandes"
Route en GET = récupères toutes les demande de l'utilisateur.
Réponse : /api/v1/demands/users/{id}
Route en PUT avec arguments : status de la demande (accepté, refusé) (jobworker)
Réponse : /api/v1/demands/{id}
Route en PUT avec argument (string) : raison du refus (jobWorker)
Réponse : /api/v1/demands/{id}
Route en GET status de la demande (friendlyUser)
Réponse : /api/v1/demands/{id}
Route en DELETE avec argument: id de la demande pour supprimer la demande
Réponse : /api/v1/demands/{id}

Profil "/profil"
Route en GET = recupère l'objet user
Réponse : /api/v1/users/{id}
Route en PUT = modification de l'objet user
Réponse : /api/v1/users/{id}
Route en DELETE avec argument: id de l'utilisateur  = supprimer le compte de l'utilisateur 
Réponse : /api/v1/users/{id}

Contact "/contact"
Route en GET = recupèrer les contacts
Réponse : /api/v1/contacts

## Notes pour le back

### Route
/api/v1/jobworker/random => querybuilder qui filtre par role les jobworker => puis algo random => puis récuperer les notes
/api/v1/users/check => récuperer l'utilisateur par rapport à l'email ( si faux return 401 )
                    => check password ( si faux return 401 )
                    => si tout est ok ( 200 + l'objet user + propriété islogged ( true) )
/api/v1/services/{id}/jobworkers => Récupère tout les jobworker affilié à un service ( + note )
/api/v1/services/{id}/jobworkers?limit5=on => Récupère tout les jobworker affilié à un service ( + note ) avec une limite de 5 jobworkers et trié par note
/api/v1/services/{id}/sub-services => query builder pour mettre en concordance l'id du service et le champ parent_id
/api/v1/jobWorker => Récuperer toutes les infos utiles lié à un job


### Tips important
A voir !
( GET ) => /api/v1/users ( OK ) || /api/v1/users/ ( OK )
( POST ) => /api/v1/users ( C'EST HONTEUX ) || /api/v1/users/ ( OK )