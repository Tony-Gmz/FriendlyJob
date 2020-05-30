# Légendes pour les données attendues

** => obligatoire

\* => optionnel

:lock: => Route utilisant le JWT Token




***

# DemandController

<details><summary>/api/v1/demands/ ( POST ) :lock:</summary>

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

</details>

<details><summary>/api/v1/demands/{id} ( PUT ) :lock:</summary>

## méthode HTTP = PUT

### Cette route permet de modifier des demandes en bdd

### Les données attendues ( Front => Back)

```json 
{
	*"body" : "Test body demand kek",
	*"reservationDate" : "2020-01-01",
	*"reservationHour" : "16h",
	*"status" : "En attente",
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

</details>

<details><summary>/api/v1/demands/users/{id} ( GET ) :lock:</summary>

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
    "status": "En attente",
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

</details>

<details><summary>/api/v1/demands/ ( DELETE ) :lock:</summary>

## méthode HTTP = DELETE

### Cette route permet de supprimer une demande en bdd

### Les données attendues ( Front => Back)

```json 
{
	**"id":"402"
}
```


### Les données envoyé ( Back => Front )

```json 
{
  "statut": 200,
  "message": "La demande a bien été supprimé."
}
```

</details>

***

# DepartmentController

<details><summary>/api/v1/department ( GET )</summary>

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
</details>

***

# ServiceController

<details><summary>/api/v1/services ( GET )</summary>

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
</details>
<details><summary>/api/v1/services/{id} ( GET )</summary>


## méthode HTTP = GET

### Cette route permet de récuperer un service par son id en bdd

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
</details>

<details><summary>/api/v1/services/{title} ( GET )</summary>


## méthode HTTP = GET

### Cette route permet de récuperer un service par son titre en bdd

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
</details>

<details><summary>/api/v1/services/{id}/jobworker ou /api/v1/services/{id}/jobworker?limit={number} ( GET ) </summary>

## méthode HTTP = GET

### Cette route permet de récuperer tout les jobworker ou X jobworker lié a un service en bdd

### Les données attendues ( Front => Back)

Aucune

### Les données envoyé ( Back => Front )

```json
[
  [
  {
    "id": 1,
    "parentId": null,
    "title": "Photographe d'art",
    "description": "Officiis excepturi eligendi ducimus autem quo atque culpa qui exercitationem odit delectus est ipsum.",
    "image": "http:\/\/www.moulin.com\/",
    "skills": [
      {
        "id": 30,
        "description": "Aut eaque sit soluta labore et molestiae reprehenderit officia excepturi dolores dolor natus.",
        "price": 12,
        "user": {
          "id": 190,
          "email": "lemonnier.dominique@barre.com",
          "roles": [
            "JOBWORKER"
          ],
          "firstname": "Philippine",
          "lastname": "Garcia",
          "image": null,
          "about": "A ea et porro qui quo perspiciatis repellendus vitae reprehenderit excepturi.",
          "department": {
            "id": 62,
            "name": "Loir-et-Cher",
            "number": "95"
          },
          "jobWorkerDemands": [
            {
              "id": 171,
              "rating": {
                "id": 195,
                "comment": "Maiores error quia accusantium perspiciatis repellendus qui praesentium nihil et qui iure laborum qui.",
                "star": 5
              }
            },
            {
              "id": 225,
              "rating": null
            }
          ]
        }
      }
    ]
]
```

</details>

<details><summary>/api/v1/services/{id}/subservices ( GET )</summary>


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
</details>

<details><summary>/api/v1/services/{id}/department/{departmentId}/jobwoker ( GET ) :lock: </summary>

## méthode HTTP = GET

### Cette route permet de récuperer tout les jobworker d'un départment lié a un service en bdd

### Les données attendues ( Front => Back)

Aucune

### Les données envoyé ( Back => Front )

```json
[
  {
    "id": 57,
    "parentId": null,
    "title": "Photographe d'art",
    "description": "Officiis excepturi eligendi ducimus autem quo atque culpa qui exercitationem odit delectus est ipsum.",
    "image": "http:\/\/www.moulin.com\/",
    "skills": [
      {
        "id": 1867,
        "description": "Unde quibusdam magni aut porro quos repellendus repellendus cupiditate ut suscipit.",
        "price": 24,
        "user": {
          "id": 1282,
          "email": "paul.leroux@yahoo.fr",
          "roles": [
            "JOBWORKER"
          ],
          "firstname": "Sabine",
          "lastname": "Bousquet",
          "image": null,
          "about": "Expedita quis ut odio et id consequatur accusantium quia porro minus.",
          "department": {
            "id": 409,
            "name": "Vienne",
            "number": "76"
          },
          "jobWorkerDemands": [
            {
              "id": 1786,
              "rating": null
            },
            {
              "id": 1809,
              "rating": null
            }
          ]
        }
      },
      {
        "id": 2204,
        "description": "Cum aliquam laudantium consequatur libero quia fugit accusantium.",
        "price": 24,
        "user": {
          "id": 1291,
          "email": "cleclercq@tele2.fr",
          "roles": [
            "JOBWORKER"
          ],
          "firstname": "Thibault",
          "lastname": "Legrand",
          "image": null,
          "about": "Sit ducimus minima nulla suscipit id tempore voluptatibus recusandae et deleniti tenetur.",
          "department": {
            "id": 409,
            "name": "Vienne",
            "number": "76"
          },
          "jobWorkerDemands": [
            {
              "id": 1523,
              "rating": {
                "id": 775,
                "comment": "Deserunt voluptatem eos dolor error ut ex nostrum.",
                "star": 4
              }
            },
            {
              "id": 1719,
              "rating": {
                "id": 995,
                "comment": "Aut et aspernatur incidunt soluta officiis quo illum consectetur voluptates tenetur modi enim.",
                "star": 1
              }
            },
            {
              "id": 1932,
              "rating": null
            },
            {
              "id": 1934,
              "rating": null
            }
          ]
        }
      }
    ]
  }
]
```

</details>


***


# UserController

<details><summary>/api/v1/users/{id} ( GET ) :lock:</summary>


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
</details>
<details><summary>/api/v1/users ( POST )</summary>

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
</details>

<details><summary>/api/v1/users/{id} ( PUT ) :lock:</summary>


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

</details>
<details><summary>/api/v1/users/{id} ( DELETE ) :lock:</summary>


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

</details>
<details><summary>/api/v1/users/jobworker/random ( GET )</summary>

## méthode HTTP = GET

### Cette route permet de récupérer un jobworker aléatoire en bdd

### Les données attendues ( Front => Back)

Aucune

### Les données envoyé ( Back => Front )

```json
{
  "id": 120,
  "email": "potier.astrid@chauveau.fr",
  "roles": [
    "JOBWORKER"
  ],
  "firstname": "Nathalie",
  "lastname": "Hebert",
  "image": null,
  "about": "Dolor perspiciatis sit nostrum eum omnis quaerat doloremque.",
  "department": {
    "id": 59,
    "name": "Nord",
    "number": "74"
  },
  "skills": [
    {
      "id": 300,
      "description": "Vel est aut sint omnis sint dolores et molestias voluptatibus earum.",
      "price": 10,
      "service": {
        "id": 1,
        "parentId": null,
        "title": "Jardinage",
        "description": "Vous avez besoin d'une taille de haie ou de faire pousser des pommes ? Choisissez le JobWorker qu'il vous faut !",
        "image": "https:\/\/i.ibb.co\/1bPYLmz\/jardinage.jpg"
      }
    }
  ],
  "jobWorkerDemands": [
    {
      "id": 54,
      "rating": {
        "id": 58,
        "comment": "Et odio rerum ipsum ut quia nulla quae fuga.",
        "star": 3
      }
    }
  ]
}
```

</details>
<details><summary>/api/v1/users/jobworker/{id} ( GET )</summary>


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

</details>
<details><summary>/api/v1/users/contacts ( GET )</summary>


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

</details>
<details><summary>/api/v1/users/jobworker/{id}/rating ( GET )</summary>


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

</details>

# SkillController

<details><summary>/api/v1/skills ( POST ) :lock:</summary>

## méthode HTTP = POST

### Cette route permet de créer une compétence pour un jobworker en bdd

### Les données attendues ( Front => Back)

```json
{
	*"description" : "Test Nouveau Skill",
	**"price" : 20,
	**"user" : 50,
	**"service" : 1
}
```

### Les données envoyé ( Back => Front )

```json
{
  "id": 601,
  "description": "Test Nouveau Skill",
  "price": 20,
  "user": {
    "id": 50,
    "email": "virginie.carlier@guerin.fr",
    "roles": [
      "JOBWORKER"
    ],
    "firstname": "Margaret",
    "lastname": "Coulon",
    "image": null,
    "about": "Veniam enim quae voluptas assumenda dolore explicabo.",
    "department": []
  },
  "service": {
    "id": 1,
    "parentId": null,
    "title": "Photographe d'art",
    "description": "Officiis excepturi eligendi ducimus autem quo atque culpa qui exercitationem odit delectus est ipsum.",
    "image": "http:\/\/www.moulin.com\/"
  }
}
```
</details>
<details><summary>/api/v1/skills/{id} ( PUT ) :lock:</summary>

## méthode HTTP = PUT

### Cette route permet de modifier une compétence pour un jobworker en bdd

### Les données attendues ( Front => Back)

```json
{
	*"description" : "allo",
	*"price" : 55
}

```

### Les données envoyé ( Back => Front )

```json
{
  "id": 601,
  "description": "allo",
  "price": 55
}
```
</details>
<details><summary>/api/v1/skills/{id} ( DELETE ) :lock:</summary>

## méthode HTTP = DELETE

### Cette route permet de supprimer une compétence pour un jobworker en bdd

### Les données attendues ( Front => Back)

Aucune

### Les données envoyé ( Back => Front )

```json
{
  "statut": 200,
  "message": "La compétence a bien été supprimé."
}
```
</details>

# RatingController

<details><summary>/api/v1/ratings ( POST ) :lock:</summary>

## méthode HTTP = POST

### Les données attendues ( Front => Back)

```json
{
	**"comment": "test commentaires",
	**"star": "5",
	**"demand": "218"
}
```

### Les données envoyé ( Back => Front )

```json
{
  "id": 251,
  "comment": "test commentaires",
  "star": 5,
  "demand": {
    "id": 218,
    "body": "Velit eos ea corrupti repudiandae ipsam et sed.",
    "reservationDate": "14-12-2010",
    "reservationHour": "20h",
    "status": "0"
  }
}
```


</details>

## Récuperer un token JWT

<details><summary>/api/login_check</summary>

## méthode HTTP = POST

### Les données attendues ( Front => Back)

```json
{
	"username":"admin.karim@oclock.io",
	"password":"AdminFJ137313."
}
```

### Les données envoyé ( Back => Front )

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImN0eSI6IkpXVCJ9.eyJpYXQiOjE1OTA2Njg3MDcsInJvbGVzIjpbIkFETUlOIl0sInVzZXJuYW1lIjoiYWRtaW4ua2FyaW1Ab2Nsb2NrLmlvIiwiZXhwIjoxNTkwNzU3MjAwLCJpcCI6IjEyNy4wLjAuMSJ9.liQJm2Bf9Yxp9A0m-jDRJ0ZZYTX0rUIUcLA9f-S9VDP1bGeJYXBolf-DRH1Okv7ZTT05Nc2abteTKNexy4Ez79Y8JzW8KlbkQgan7yTHVwTfWs-kBYyeEQb4g8iRiOEzjGwZyABVUA6tGeP3iRXF1TllYfqfJtoqGpzPMq3HVz1p3DMJsgB17vzTDUljjL5SBoh0yG2hxM8cmyHvjYqiBG2UYG3WSgoz7vDg-yyVBScrSsIvoG9wFM1gh-wo4eu8BR5Td-mZbGiP3OiMAmNeZVs5JZEZg55r8-a07iCUwl5VP8inFpta1RZGzhB_c7mKd08pAQ_f9D9POvE0DkzSkfkS5elW398gnw2XJA7tmGltUDyjQxi0qKVhrfkPLp8orduIj-8CbcK5Qt_a1Z1a6v3a6iy88q3CzWKs6oJX26vnEwWyfYiDdREYQ3td_XzJmbqgKxUbo8t-jrRKNPytPy_BVZlw5uZo6FLsC2JbhJ3IDu1WajaIIOH3TW0HUhiOI5TVhior2vtoyxnR14IKw9yX8hHGu2X71PXJDTnfNF7YO5xKdXFBArQsEU448npG9DNf1mEWaotWoLSMlWz6rpz5p9XZg90li7kXY6FjY8hulWUVYBb6mFOV20f-ZOqt3DIJ4onNPM5TEEx2yoxe90IpdDmKzqgPKHCTS-Wf4cg",
  "user": {
    "id": 1,
    "username": "admin.karim@oclock.io",
    "roles": [
      "ADMIN"
    ],
    "firstname": "Karim",
    "lastname": "Maazaoui",
    "image": null,
    "about": "Exercitationem est rem dicta voluptas fuga totam reiciendis qui architecto fugiat nemo omnis consequatur.",
    "department": {
      "id": 1,
      "name": "Nièvre",
      "number": "01"
    },
    "isLogged": true
  }
}
```

### l'entrée token peut être décodé elle donnent comme résultat =>
```json
{
  "iat": 1590668707,
  "roles": [
    "ADMIN"
  ],
  "username": "admin.karim@oclock.io",
  "exp": 1590757200,
  "ip": "127.0.0.1"
}
```


</details>

<details><summary>Les différentes erreurs possible avec la route /api/login_check </summary>


### Mot de passe ou Email erroné
```json
{
  "code": 401,
  "message": "Invalid credentials."
}
```

### Format du json erroné

```json
{
  "type": "https:\/\/tools.ietf.org\/html\/rfc2616#section-10",
  "title": "An error occurred",
  "status": 400,
  "detail": "Bad Request"
}
```

</details>

<details><summary>Les différentes erreurs possible avec les autres routes protégé par JWT</summary>


### Token expiré
```json
{
  "code": 401,
  "message": "Expired JWT Token"
}
```

### Token invalide ( Token mal saisie dans l'en-tête)

```json
{
  "code": 401,
  "message": "Invalid JWT Token"
}
```

### Token non trouvé ( en-tête Authorization : Bearer ) 
```json
{
  "code": 401,
  "message": "JWT Token not found"
}
```


</details>

# Remarque pour l'équipe back

<details><summary>Détails</summary>
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

      delete => Erreur null demand à gérer : X
                Erreur Json mal formé : X


## Department

    remarque => demande au fronteur pour les jobworker par département ?

## Service

    browse => RAS

    read => Erreur Param Converter à gérer : X

    getJobWorkersByServices =>  Revoir Algo récupération moyenne des note pour un jobWorker
                                gérer un id inexistant : X
                                gérer quand parametre get limit est une chaine de caractères

    getSubServiceFromService => Gérer un service sans sous services : X

    getJobWorkersFromDepartmentByServices => Id de service inexistant : tableau vide qui ressort
                                          => Id de département inexistant : tableau vide qui ressort
                                          => ID OK mais tableau vide : Aucun utilisateur pour ce service dans ce département

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

## Skill

    add => Gerer le champ user quand ce n'est pas un jobworker
            (tableau vide + quand id est inexistant => (PDOException  PDOException NotNullConstraintViolationException))
           Gerer le champ service quand le service n'existe pas 
           (PDOException  PDOException NotNullConstraintViolationException)

    edit => Gerer l'optionnalité des champs (pouvoir modifier un seul champ et pas tous en même temps)
            Erreur Paramconverter cause id inexistant
            (NotFoundHttpException)
            Gérer l'erreur int sur le champ price
            (TypeError)
    
    delete => Erreur paramconverter quand on essaie de supprimer un id inexistant            

    Tout ce qui utilise le param converter on pourra mettre un subscriber
    App\Entity\Demand object not found by the @ParamConverter annotation.
    ( NotFoundHttpException )
    Voir les 404 erreur mauvaise URL

## Rating

    add => Gerer l'erreur quand on ajoute un rating sur une demand qui a déjà un rating (DUPLICATE)
            Gerer un rating sur une demande qui n'existe pas

## JWT

  Rajouter subscriber pour json mal formé & invalid credentials ( isLogged = false )

</details>