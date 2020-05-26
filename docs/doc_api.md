# Légendes pour les données attendues

** => obligatoire

\* => optionnel

***

# DemandController

## /api/v1/demands/

## méthode HTTP = POST

### Cette route permet d'enregistrer des demandes en bdd

### Les données attendues ( Front => Back)

```json 
{
	**"body" : "Test body demand LAL",
	**"reservationDate" : "2020-01-01",
	**"reservationHour" : "16h",
	*"status" : "En attente",
	**"service" : 1,
	**"friendlyUser" : 300,
	**"jobWorker" : 150
}
```

### Les données envoyé ( Back => Front )

```json 
{
  "id": 502,
  "body": "Test body demand LAL",
  "reservationDate": "01-01-2020",
  "reservationHour": "16h",
  "status": "En attente",
  "createdAt": "2020-05-26T16:01:57+02:00",
  "updatedAt": null,
  "service": {
    "id": 1,
    "parentId": null,
    "title": "Pilote fluvial",
    "description": "Beatae esse et ex fuga quis voluptatem quod est aliquid.",
    "image": "http:\/\/www.tanguy.com\/"
  },
  "friendlyUser": {
    "id": 300,
    "email": "denis24@gaillard.com",
    "firstname": "Théophile",
    "lastname": "Guilbert",
    "image": null,
    "department": {
      "id": 12,
      "name": "Gers",
      "number": "52"
    },
    "about": null
  },
  "jobWorker": {
    "id": 150,
    "email": "maryse.dupre@masson.fr",
    "firstname": "Luce",
    "lastname": "Costa",
    "image": null,
    "department": {
      "id": 1,
      "name": "Nièvre",
      "number": "01"
    },
    "about": null
  }
}
```

## /api/v1/demands/{id}

## méthode HTTP = PUT

### Cette route permet de modifier des demandes en bdd

### Les données attendues ( Front => Back)

```json 
{
	*"body" : "Test body demand kek",
	*"reservationDate" : "2020-01-01",
	*"reservationHour" : "16h",
	*"status" : "En attente",
	**"service" : 1,
	**"friendlyUser" : 200,
	**"jobWorker" : 150
}
```

### Les données envoyé ( Back => Front )

```json 
{
  "id": 502,
  "body": "Test body demand LAL",
  "reservationDate": "01-01-2020",
  "reservationHour": "16h",
  "status": "En attente",
  "createdAt": "2020-05-26T16:01:57+02:00",
  "updatedAt": null,
  "service": {
    "id": 1,
    "parentId": null,
    "title": "Pilote fluvial",
    "description": "Beatae esse et ex fuga quis voluptatem quod est aliquid.",
    "image": "http:\/\/www.tanguy.com\/"
  },
  "friendlyUser": {
    "id": 300,
    "email": "denis24@gaillard.com",
    "firstname": "Théophile",
    "lastname": "Guilbert",
    "image": null,
    "department": {
      "id": 12,
      "name": "Gers",
      "number": "52"
    },
    "about": null
  },
  "jobWorker": {
    "id": 150,
    "email": "maryse.dupre@masson.fr",
    "firstname": "Luce",
    "lastname": "Costa",
    "image": null,
    "department": {
      "id": 1,
      "name": "Nièvre",
      "number": "01"
    },
    "about": null
  }
}
```

## /api/v1/demands/users/{id}

## méthode HTTP = GET

### Cette route permet de récupèrer les demandes d'un seul utilisateur ( JobWorker ou FriendlyUser) en bdd

### Les données attendues ( Front => Back)

Aucune

### Les données envoyé ( Back => Front )

```json 
[
  {
    "id": 246,
    "body": "Praesentium expedita nemo non nobis natus animi quia ipsum magnam quisquam.",
    "reservationDate": "24-09-2010",
    "reservationHour": "16h",
    "status": "3",
    "service": {
      "id": 3,
      "parentId": null,
      "title": "Pyrotechnicien",
      "description": "Omnis aut aut quibusdam consequatur a praesentium et.",
      "image": "http:\/\/marques.fr\/similique-dolorum-modi-qui-eos-consequatur"
    },
    "friendlyUser": {
      "id": 250,
      "email": "leger.frederique@laposte.net",
      "firstname": "Gabriel",
      "lastname": "Perrin",
      "image": null,
      "department": {
        "id": 80,
        "name": "Savoie",
        "number": "87"
      },
      "about": null
    },
    "jobWorker": {
      "id": 148,
      "email": "bperon@cohen.fr",
      "firstname": "Philippe",
      "lastname": "Renault",
      "image": null,
      "department": {
        "id": 48,
        "name": "Finistère",
        "number": "11"
      },
      "about": null
    }
  }
]
```

## /api/v1/demands/{id}

## méthode HTTP = DELETE

### Cette route permet de supprimer une demande en bdd

### Les données attendues ( Front => Back)

Aucune


### Les données envoyé ( Back => Front )

```json 
{
  "statut": 200,
  "message": "La demande a bien été supprimé."
}
```

***
<br><br>

# DepartmentController

## /api/v1/department

## méthode HTTP = GET

### Cette route permet de récuperer tout les départements en bdd

### Les données attendues ( Front => Back)

Aucune


### Les données envoyé ( Back => Front )

```json 
[
  {
    "id": 1,
    "name": "Nièvre",
    "number": "01"
  },
  {
    "id": 2,
    "name": "Sarthe",
    "number": "94"
  },
  {
    "id": 3,
    "name": "Mayotte",
    "number": "87"
  }
]
```

***
<br><br>

# ServiceController

## /api/v1/services

## méthode HTTP = GET

### Cette route permet de récuperer tout les services en bdd

### Les données attendues ( Front => Back)

Aucune


### Les données envoyé ( Back => Front )

```json 
[
  {
    "id": 1,
    "parentId": null,
    "title": "Pilote fluvial",
    "description": "Beatae esse et ex fuga quis voluptatem quod est aliquid.",
    "image": "http:\/\/www.tanguy.com\/"
  },
  {
    "id": 2,
    "parentId": null,
    "title": "Pédologue",
    "description": "Ratione dignissimos maxime soluta fugit tenetur doloremque quae magni et.",
    "image": "http:\/\/leleu.org\/voluptates-tenetur-aspernatur-maxime-sint-consequatur-reiciendis"
  }
]
```

## /api/v1/services/{id}

## méthode HTTP = GET

### Cette route permet de récuperer un service en bdd

### Les données attendues ( Front => Back)

Aucune


### Les données envoyé ( Back => Front )

```json 
{
  "id": 1,
  "parentId": null,
  "title": "Pilote fluvial",
  "description": "Beatae esse et ex fuga quis voluptatem quod est aliquid.",
  "image": "http:\/\/www.tanguy.com\/"
}
```

## /api/v1/services/{id}/jobworker
## /api/v1/services/{id}/jobworker?limit=on

## méthode HTTP = GET

### Cette route permet de récuperer tout les jobworker ou 5 jobworker lié a un service en bdd

### Les données attendues ( Front => Back)

Aucune


### Les données envoyé ( Back => Front )

```json 
[
  {
    "id": 1,
    "parentId": null,
    "title": "Pilote fluvial",
    "description": "Beatae esse et ex fuga quis voluptatem quod est aliquid.",
    "image": "http:\/\/www.tanguy.com\/",
    "skills": [
      {
        "user": {
          "id": 70,
          "email": "vallet.tristan@wanadoo.fr",
          "roles": [
            "JOBWORKER"
          ],
          "firstname": "Suzanne",
          "lastname": "Fouquet",
          "image": null,
          "department": {
            "id": 70,
            "name": "Nord",
            "number": "12"
          },
          "about": null
        }
      }
    ]
]
```

# ServiceController

## /api/v1/services

## méthode HTTP = GET

### Cette route permet de récuperer tout les services en bdd

### Les données attendues ( Front => Back)

Aucune


### Les données envoyé ( Back => Front )

```json 
[
  {
    "id": 1,
    "parentId": null,
    "title": "Pilote fluvial",
    "description": "Beatae esse et ex fuga quis voluptatem quod est aliquid.",
    "image": "http:\/\/www.tanguy.com\/"
  },
  {
    "id": 2,
    "parentId": null,
    "title": "Pédologue",
    "description": "Ratione dignissimos maxime soluta fugit tenetur doloremque quae magni et.",
    "image": "http:\/\/leleu.org\/voluptates-tenetur-aspernatur-maxime-sint-consequatur-reiciendis"
  }
]
```

## /api/v1/services/{id}/subservices

## méthode HTTP = GET

### Cette route permet de récuperer tout les sous-services à un services en bdd

### Les données attendues ( Front => Back)

Aucune


### Les données envoyé ( Back => Front )

```json 
[
  {
    "id": 6,
    "parentId": 1,
    "title": "Agent d'enquêtes",
    "description": "Dolorem libero repellat ipsum ducimus distinctio explicabo et qui expedita ex possimus.",
    "image": "http:\/\/www.lemaitre.com\/consectetur-quam-sint-debitis-vero-natus"
  },
  {
    "id": 7,
    "parentId": 1,
    "title": "Essayeur-retoucheur",
    "description": "Maxime ad qui mollitia est nostrum illo quod vero sint ea pariatur.",
    "image": "https:\/\/gillet.org\/laboriosam-est-nihil-dolore-dolore.html"
  },
  {
    "id": 8,
    "parentId": 1,
    "title": "Pédologue",
    "description": "In voluptatem deserunt accusamus qui est quod ratione quidem odit unde.",
    "image": "http:\/\/www.lopes.fr\/est-autem-est-incidunt-a-aut"
  }
]
```

***
<br><br>


# UserController

## /api/v1/users/{id}

## méthode HTTP = GET

### Cette route permet de récupérer des informations d'un utilisateur en bdd

### Les données attendues ( Front => Back)

Aucune

### Les données envoyé ( Back => Front )

```json
{
  "id": 31,
  "email": "aperrin@bonneau.org",
  "roles": [
    "JOBWORKER"
  ],
  "firstname": "Tristan",
  "lastname": "Schneider",
  "image": null,
  "department": {
    "id": 16,
    "name": "Gironde",
    "number": "92"
  },
  "about": null
}
```

## /api/v1/users

## méthode HTTP = POST

### Cette route permet de créer un utilisateur en bdd

### Les données attendues ( Front => Back)

```json
{
	**"email" : "kek@oclock.io",
	**"roles" : ["FRIENDLY_USER"],
	**"password" : "lol",
	**"firstname" : "Thibault",
	**"lastname" : "Clusel",
	*"image" : "kek",
	**"department" : 11
}
```

### Les données envoyé ( Back => Front )

```json
{
  "id": 405,
  "email": "kek@oclock.io",
  "roles": [
    "FRIENDLY_USER"
  ],
  "firstname": "Thibault",
  "lastname": "Clusel",
  "image": "kek",
  "department": {
    "id": 11,
    "name": "Loire",
    "number": "31"
  },
  "about": null
}
```

## /api/v1/users/{id}

## méthode HTTP = PUT

### Cette route permet de d'éditer un utilisateur en bdd

### Les données attendues ( Front => Back)

```json
{
	*"email" : "kek@oclock.io",
	*"roles" : ["FRIENDLY_USER"],
	*"password" : "lol",
	*"firstname" : "Thibault",
	*"lastname" : "Clusel",
	*"image" : "kek",
    *"about" : "random text",
	*"department" : 11
}
```

### Les données envoyé ( Back => Front )

```json
{
  "id": 405,
  "email": "kek@oclock.io",
  "roles": [
    "FRIENDLY_USER"
  ],
  "firstname": "Thibault",
  "lastname": "Clusel",
  "image": "kek",
  "department": {
    "id": 11,
    "name": "Loire",
    "number": "31"
  },
  "about": "random text"
}
```

## /api/v1/users/{id}

## méthode HTTP = DELETE

### Cette route permet de supprimer un utilisateur en bdd

### Les données attendues ( Front => Back)

Aucune

### Les données envoyé ( Back => Front )

```json
{
  "statut": 200,
  "message": "L'utilisateur a bien été supprimé."
}
```

## /api/v1/users/jobworker/random

## méthode HTTP = GET

### Cette route permet de récupérer un jobworker aléatoire en bdd

### Les données attendues ( Front => Back)

Aucune

### Les données envoyé ( Back => Front )

```json
{
  "id": 85,
  "email": "christiane.garcia@orange.fr",
  "roles": [
    "JOBWORKER"
  ],
  "firstname": "Sabine",
  "lastname": "Hebert",
  "image": null,
  "department": {
    "id": 52,
    "name": "Gers",
    "number": "92"
  },
  "skills": [
    {
      "id": 103,
      "description": "At soluta sint omnis ullam est eos unde.",
      "price": 29,
      "service": {
        "id": 2,
        "parentId": null,
        "title": "Pédologue",
        "description": "Ratione dignissimos maxime soluta fugit tenetur doloremque quae magni et.",
        "image": "http:\/\/leleu.org\/voluptates-tenetur-aspernatur-maxime-sint-consequatur-reiciendis"
      }
    },
    {
      "id": 38,
      "description": "Iure quo sit ratione beatae et quis mollitia et facere eum.",
      "price": 12,
      "service": {
        "id": 7,
        "parentId": 1,
        "title": "Essayeur-retoucheur",
        "description": "Maxime ad qui mollitia est nostrum illo quod vero sint ea pariatur.",
        "image": "https:\/\/gillet.org\/laboriosam-est-nihil-dolore-dolore.html"
      }
    },
    {
      "id": 514,
      "description": "Perspiciatis pariatur quidem et distinctio necessitatibus sint vitae vel aperiam molestiae.",
      "price": 22,
      "service": {
        "id": 7,
        "parentId": 1,
        "title": "Essayeur-retoucheur",
        "description": "Maxime ad qui mollitia est nostrum illo quod vero sint ea pariatur.",
        "image": "https:\/\/gillet.org\/laboriosam-est-nihil-dolore-dolore.html"
      }
    }
  ],
  "about": null
}
```

## /api/v1/users/jobworker/{id}

## méthode HTTP = GET

### Cette route permet de récupérer les informations d'un jobworker en bdd

### Les données attendues ( Front => Back)

Aucune

### Les données envoyé ( Back => Front )

```json
{
  "id": 85,
  "email": "christiane.garcia@orange.fr",
  "roles": [
    "JOBWORKER"
  ],
  "firstname": "Sabine",
  "lastname": "Hebert",
  "image": null,
  "department": {
    "id": 52,
    "name": "Gers",
    "number": "92"
  },
  "skills": [
    {
      "id": 103,
      "description": "At soluta sint omnis ullam est eos unde.",
      "price": 29,
      "service": {
        "id": 2,
        "parentId": null,
        "title": "Pédologue",
        "description": "Ratione dignissimos maxime soluta fugit tenetur doloremque quae magni et.",
        "image": "http:\/\/leleu.org\/voluptates-tenetur-aspernatur-maxime-sint-consequatur-reiciendis"
      }
    },
    {
      "id": 38,
      "description": "Iure quo sit ratione beatae et quis mollitia et facere eum.",
      "price": 12,
      "service": {
        "id": 7,
        "parentId": 1,
        "title": "Essayeur-retoucheur",
        "description": "Maxime ad qui mollitia est nostrum illo quod vero sint ea pariatur.",
        "image": "https:\/\/gillet.org\/laboriosam-est-nihil-dolore-dolore.html"
      }
    },
    {
      "id": 514,
      "description": "Perspiciatis pariatur quidem et distinctio necessitatibus sint vitae vel aperiam molestiae.",
      "price": 22,
      "service": {
        "id": 7,
        "parentId": 1,
        "title": "Essayeur-retoucheur",
        "description": "Maxime ad qui mollitia est nostrum illo quod vero sint ea pariatur.",
        "image": "https:\/\/gillet.org\/laboriosam-est-nihil-dolore-dolore.html"
      }
    }
  ],
  "about": null
}
```

## /api/v1/users/contacts

## méthode HTTP = GET

### Cette route permet de récupérer les informations des créateur du site en bdd

### Les données attendues ( Front => Back)

Aucune

### Les données envoyé ( Back => Front )

```json
[
  {
    "id": 4,
    "email": "admin.tony@oclock.io",
    "roles": [
      "ADMIN"
    ],
    "firstname": "Tony",
    "lastname": "Gomez",
    "image": null,
    "about": null
  }
]

```

## /api/v1/users/jobworker/{id}/rating

## méthode HTTP = GET

### Cette route permet de récupérer les notes et commentaires d'un jobworker avec son id en bdd

### Les données attendues ( Front => Back)

Aucune

### Les données envoyé ( Back => Front )

```json
[
  {
    "id": 436,
    "email": "ublanchard@courtois.com",
    "roles": [
      "JOBWORKER"
    ],
    "firstname": "Martin",
    "lastname": "Bailly",
    "image": null,
    "department": {
      "id": 155,
      "name": "Deux-Sèvres",
      "number": "22"
    },
    "jobWorkerDemands": [
      {
        "id": 585,
        "body": "Error dolor voluptatem voluptatem autem illo dolor tempora est tempora sunt fugiat id quam.",
        "reservationDate": "13-06-1984",
        "reservationHour": "9h",
        "status": "0",
        "rating": {
          "id": 341,
          "comment": "Eveniet est sapiente non aliquam minus delectus eius pariatur molestias labore iusto a molestiae.",
          "star": 5
        },
        "service": {
          "id": 29,
          "parentId": null,
          "title": "Pilote fluvial",
          "description": "Beatae esse et ex fuga quis voluptatem quod est aliquid.",
          "image": "http:\/\/www.tanguy.com\/"
        }
      }
    ],
    "about": null
  }
]

```

## /api/v1/users/check

## méthode HTTP = GET

### Cette route permet de récupérer les infos d'un utilisateur lié au TOKEN JWT bdd

### Les données attendues ( Front => Back)


#### Sur la route api/login_check :

```json
{
	"username":"michele.lopez@tele2.fr",
	"password":"derrick"
}
```

### La route api/login_check retourne :

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTA1MDg2ODMsImV4cCI6MTU5MDU0NDY4Mywicm9sZXMiOlsiQURNSU4iXSwidXNlcm5hbWUiOiJhZG1pbi5qb2xhbkBvY2xvY2suaW8ifQ.JHsHta3dxTDsBsBuEiqVOnWz64N_KUgaz7fxQWPD8IoAa2HzgGDRJy6_fW2Ysu8JTa-W-JOCx7m4VLNl9QX_PMnvg_IXAyqPXW-O5Wwa2vrRufcyZYZLLQrOJ1N1NMm2VtyWBpZUXMDdokXBFcORcChGvDTf7w0D3qEe-91DdwG7gg-wd_OxN5odCDNJqnXaT493SUGPNerJJ8g511LFVoHIVY4rfIgA66Zg4dnFf4Cz4H42YkLXv6akMgk93AQWgQnoSZWaW1ofkPryPbgA1_Yr46Bu1z3dQrm2cgV-CMvvLtzBGlirSTawt8O6L0RgMZy5khJcRtquOTLmQAVQ1e9cCphz0KHENZwiGgswUVMedCGUTqIrE9VpVb7sakv08n2BIgCVlOjkz1Q2Rotzg-H76b1ijSYMfgfz-LCg6OnllBnHsmQv8fwLHE3fQNHRqGHq7WNEuKMbJNq6s49nwS_6y4uAch95avjQs5iS0qEmmxxm1I0ASEm5eiOxbRIIBhBRN52bmxbRCFOqdKRiQHHGYX3d9E9mGLm2yMw9D7vOoLBjR5u0IcQD_5J2nOYs7MswEfCauO9M-yR6pgY7xsgAHOJAvBLql-6ZOSWGCfqezw5FYS_VhA7Zt_Olon2PjC792x0ERpWd3JT9uGhFsW8nnBhrCPwABUTdZ692moo"
}
```

### Puis insérer le token ci-dessus dans une en-tête HTTP sur la route /api/v1/users/check
Authorization  => Bearer (le token)

### Les données envoyé ( Back => Front )

```json
{
  "user": {
    "id": 5,
    "email": "michele.lopez@tele2.fr",
    "roles": [
      "JOBWORKER"
    ],
    "isLogged": true
  }
}
```

# Remarque pour l'équipe back

## Demand

add =>  status optionnelle : OK
        friendly user sûr : OK
        Jobworker sûr : OK
        Erreur NULL sur friendly User ou JobWorker ou Service : X
        ( PDOException > PDOException > NotNullConstraintViolationException )

edit => rendre tout les champ optionnelle ( Service à discuter ) ( sauf FriendlyUSER, JobWorker)  : X
        Erreur NULL sur friendly User ou JobWorker ou Service : X
        ( PDOException > PDOException > NotNullConstraintViolationException )
        Utilisation de la queryBuilder findUserType : X ( à discuter )
        Changement de service : X ( à discuter )
        Erreur Param Converter à gérer : X

getDemandsFromOneUser => gérer un id inexistant : X

delete => Erreur Param Converter à gérer : X


## Department

 remarque => demande au fronteur pour les jobworker par département ?

## Service

    browse => RAS

    read => Erreur Param Converter à gérer : X

    getJobWorkersByServices =>  Revoir Algo récupération moyenne des note pour un jobWorker
                                gérer un id inexistant : X

    getSubServiceFromService => Gérer un service sans sous services : X

## User

    read => Erreur Param Converter à gérer : X

    add => Erreur NULL sur département : X
        ( PDOException > PDOException > NotNullConstraintViolationException )
        Erreur Unique sur email : X /!\
        ( PDOException > PDOException > UniqueConstraintViolationException )
        Duplicate entry 'kefzzgeyz@oclock.io' for key 'UNIQ_8D93D649E7927C74'
        Vérification les champ bien présent dans le json
    
    edit => Erreur NULL sur département : X
        ( PDOException > PDOException > NotNullConstraintViolationException )
        Erreur Unique sur email : X /!\
        ( PDOException > PDOException > UniqueConstraintViolationException )
        Duplicate entry 'kefzzgeyz@oclock.io' for key 'UNIQ_8D93D649E7927C74'
        tous les champs peuvent être optionnelle : Voir Commentaires

    delete => Erreur Param Converter à gérer : X

    randomJobWorker => remarque ( remonter la propriété about de notre table user )

    getJobWorkerDetails => Erreur id inexistant : X

    getAllContact => rien

    getRatingOfJobworker => Gérer erreur id inexistant []
                            Discuter de l'envoie du tableau ou non avec le rating null ( LeftJoin )

    checkUser => Erreur déja gérer via les subscriber ( à revoir )

Tout ce qui utilise le param converter on pourra mettre un subscriber
App\Entity\Demand object not found by the @ParamConverter annotation.
( NotFoundHttpException )
Voir les 404 erreur mauvaise URL