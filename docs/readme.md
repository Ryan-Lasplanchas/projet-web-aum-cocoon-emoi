
                     app.js
                       │
                       ↓
                    router
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
       accueil    prestations    contact
          │            │            │
          └────────────┼────────────┘
                       ↓
                  controller
                       │
                       ↓
                     model
                       │
                       ↓
                     data

| Notion | Rôle |
| - | - |
| **Node.js** | Exécuter JavaScript côté serveur |
| **Express** | Créer notre serveur et gérer les routes |
| **Router** | Associer une URL à une action |
| **Controller** | Gérer la logique de la page |
| **Model** | Gérer les données |
| **EJS** | Générer du HTML avec des données JavaScript |
| **MVC** | Séparer routes, logique, données et affichage |
| **ES Modules** | Utiliser `import` / `export` |
| **GET** | Demander une page au serveur |
