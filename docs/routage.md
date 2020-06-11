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
 
| URL | Route Name | HTTP Method | Controller | Method | Commentary | JWT ? |
|---|---|---|---|---|---|---|
| /api/login_check | api_login_check | POST | X | login | Connection to obtain a token and more user data | :x: |

| URL | Route Name | HTTP Method | Controller | Method | Commentary | JWT ? |
|---|---|---|---|---|---|---|
| /api/v1/users | api_v1_users_read | GET | UserController | read | See details of one specific user | :lock: |
| /api/v1/users | api_v1_users_edit | PUT | UserController | edit | Update one specific user | :lock: |
| /api/v1/users | api_v1_users_delete | DELETE | UserController | delete | Delete one specific user | :lock: |
| /api/v1/users/add | api_v1_users_add | POST | UserController | add | Add a user | :x: |
| /api/v1/users/jobworker/random | api_v1_users_jobworker_random | GET | UserController | randomJobWorker | Get a random JobWorker | :x: |
| /api/v1/users/jobworker/{id} | api_v1_users_jobworker | GET | UserController | getJobWorkerDetails | Get details from one JobWorker | :x: |
| /api/v1/users/jobworker | api_v1_users_jobworker | GET | UserController | getJobWorkerDetailsProfile | Get details from one JobWorker with his JWT Token | :lock: |
| /api/v1/users/contacts | api_v1_users_contacts | GET | UserController | getAllContact | List of all contacts | :x: |
| /api/v1/users/jobworker/{id}/rating | api_v1_users_jobworker_rating | GET | UserController | getRatingOfJobworker | Get all ratings from one jobWorker |
| /api/v1/users/jobworker/{id}/rating | api_v1_users_jobworker_skill_select | GET | UserController | selectSkillForJobWorker | Get all the services for which a jobWorker has no skills at all| :lock: |

| URL | Route Name | HTTP Method | Controller | Method | Commentary | JWT ? |
|---|---|---|---|---|---|---|
| /api/v1/department | api_v1_department_browse | GET | DepartmentController | browse | List of all department | :x: |

| URL | Route Name | HTTP Method | Controller | Method | Commentary | JWT ? |
|---|---|---|---|---|---|---|
| /api/v1/services | api_v1_services_browse | GET | ServiceController | browse | List of all services | :x: |
| /api/v1/services/{id} | api_v1_services_read_id | GET | ServiceController | readByID | See details of one specific service with his id | :x: |
| /api/v1/services/{title} | api_v1_services_read_title | GET | ServiceController | readByTitle | See details of one specific service with his title | :x: |
| /api/v1/services/{id}/jobworkers(?limit={number}) | api_v1_services_jobworkers | GET | ServiceController | getJobWorkersByServices | Get all JobWorkers from a Service or X JobWorkers from a service| :x: |
| /api/v1/services/{id}/sub-services | api_v1_services_subservices | GET | ServiceController | getSubServicesFromService | Get Sub-services from one service | :x: |
| /api/v1/services/{id}/jobworkers/price(?orderby={ASC or DESC})  | api_v1_services_jobworker_price | GET | ServiceController | getJobWorkersByPrice | Get all JobWorkers from a Service by price ordered by price (in ASC or DESC)  | :x: |
| /api/v1/services/{id}/jobworkers/rating | api_v1_services_jobworker_rating | GET | ServiceController | getJobWorkersByRating | Get all JobWorkers from a Service by rating | :x: |
| /api/v1/services/{id}/jobworkers/department/{id2}/jobworker | api_v1_services_department_jobworker | GET | ServiceController | getJobWorkersFromDepartmentByServices | Get all JobWorkers from a Service in a department | :lock: |
| /api/v1/services/{id}/jobworkers/department/{id2}/jobworker/price?orderby={ASC or DESC} | api_v1_services_department_jobworker_price | GET | ServiceController | getJobWorkersFromDepartmentByPrice | Get all JobWorkers from a Service in a department ordered by price ( in ASC or DESC ) | :lock: |
| /api/v1/services/{id}/jobworkers/department/{id2}/jobworker/rating | api_v1_services_department_jobworker_rating | GET | ServiceController | getJobWorkersFromDepartmentByRating | Get all JobWorkers from a Service in a department ordered by rating | :lock: |

| URL | Route Name | HTTP Method | Controller | Method | Commentary | JWT ? |
|---|---|---|---|---|---|---|
| /api/v1/demands/{id} | api_v1_demands_edit | PUT | DemandController | edit | Update one specific demands | :lock: |
| /api/v1/demands/{id} | api_v1_demands_delete | DELETE | DemandController | delete | Delete one specific demands | :lock: |
| /api/v1/demands | api_v1_demands_add | POST | DemandController | add | Add a demands | :lock: |
| /api/v1/demands/users/{id} | api_v1_demands_users | GET | DemandController | getDemandsFromOneUser | Get all demands from one User | :lock: |

| URL | Route Name | HTTP Method | Controller | Method | Commentary | JWT ? |
|---|---|---|---|---|---|---|
| /api/v1/skills | api_v1_skills_add | POST | SkillController | add | Add one specific skill | :lock: |
| /api/v1/skills/{id} | api_v1_skills_edit | PUT | SkillController | edit | Modify one specific skill | :lock: |
| /api/v1/skills/{id} | api_v1_skills_delete | DELETE | SkillController | delete | Delete one specific skill | :lock: |

| URL | Route Name | HTTP Method | Controller | Method | Commentary | JWT ? |
|---|---|---|---|---|---|---|
| /api/v1/ratings | api_v1_ratings_add | POST | RatingController | add | Add one specific rating | :lock: |

| URL | Route Name | HTTP Method | Controller | Method | Commentary | JWT ? |
|---|---|---|---|---|---|---|
| / | documentation | GET | DocumentationController | homepage | Access to homepage | :x: |
| /confirmation?token={token}| confirm_email | GET | EmailController | confirmEmail | Allows to confirm the email of a user | :x: |
| /admin | easyadmin | GET | X | X | Access to easy admin back office | :x: |
| /doc | app.swagger_ui  | GET | X | X | Access to nelmio api documentation | :x: |