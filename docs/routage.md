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
| /api/v1/jobworker/random | api_v1_users_jobworker_random | GET | UserController | randomJobWorker | Get a random JobWorker |
| /api/v1/users/check | api_v1_users_check | POST | UserController | checkUser | Verify credentials from one user |
| /api/v1/jobworker/{id} | api_v1_users_jobworker | GET | UserController | getJobWorkerDetails | Get details from one JobWorker |
| /api/v1/contacts | api_v1_users_contacts | GET | UserController | getAllContact | List of all contacts |
| /api/v1/jobworker/{id}/rating | api_v1_users_jobworker_rating | GET | RatingController | getRatingOfJobworker | Get all ratings from one jobWorker |
|||||||
| /api/v1/department | api_v1_department_browse | GET | DepartmentController | browse | List of all department |
|||||||
| /api/v1/services | api_v1_services_browse | GET | ServiceController | browse | List of all services |
| /api/v1/services/{id} | api_v1_services_read | GET | ServiceController | read | See details of one specific service |
| /api/v1/services/{id}/jobworkers | api_v1_services_jobworkers | GET | ServiceController | getJobWorkersByServices | Get all JobWorkers from a Service |
| /api/v1/services/{id}/jobworkers?limit5=on | api_v1_services_jobworkers | GET | ServiceController | getJobWorkersByServices | Get five JobWorkers from a service |
| /api/v1/services/{id}/sub-services | api_v1_services_subservices | GET | ServiceController | getSubServicesFromService | Get Sub-services from one service |
|||||||
| /api/v1/demands/{id} | api_v1_demands_edit | PUT | RequestController | edit | Update one specific request |
| /api/v1/demands/{id} | api_v1_demands_delete | DELETE | RequestController | delete | Delete one specific request |
| /api/v1/demands | api_v1_demands_add | POST | RequestController | add | Add a request |
| /api/v1/demands/users/{id} | api_v1_demands_users | GET | RequestController | getDemandsFromOneUser | Get all demands from one User |
