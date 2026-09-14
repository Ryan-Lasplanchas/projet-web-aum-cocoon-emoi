# 🌿 Clara Bien-être — Tableau de bord du projet

## 🎯 Objectif du projet

Créer un site vitrine fictif pour **Clara Martin**, praticienne en massages bien-être à **Toulon**.

Le site doit permettre de :

* présenter son activité ;
* présenter ses prestations ;
* permettre aux visiteurs de prendre contact avec elle.

Pas de réservation en ligne pour le moment.

---

# 🧱 Architecture du projet

```text
clara-bien-etre/
├── app.js
├── package.json
│
├── app/
│   ├── controllers/
│   │   └── mainController.js
│   │
│   ├── models/
│   │   └── prestation.js
│   │
│   ├── routes/
│   │   └── router.js
│   │
│   └── views/
│       ├── accueil.ejs
│       └── prestations.ejs
│
└── public/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

---

# 🛠️ Technologies

* HTML / CSS
* JavaScript
* Node.js
* Express
* EJS
* PostgreSQL → **à venir**
* Nodemon → **à configurer plus tard**

---

# ✅ Ce qui est acquis

## 1. Node.js / Express

Compris :

* `express` est un framework pour Node.js ;
* `express()` crée notre application Express ;
* `app` contient notre application Express ;
* `app.listen(3000)` démarre le serveur ;
* `app.get()` permet de déclarer une route ;
* `req` représente la requête ;
* `res` représente la réponse ;
* `res.send()` envoie directement une réponse ;
* `res.render()` rend une vue EJS.

---

## 2. EJS

Configuration comprise :

```js
app.set("view engine", "ejs");
app.set("views", "app/views");
```

Compris également :

```js
res.render("accueil");
```

→ Express cherche :

```text
app/views/accueil.ejs
```

Syntaxe EJS maîtrisée :

```ejs
<%= variable %>
```

→ affiche une valeur.

```ejs
<% code JavaScript %>
```

→ exécute du JavaScript sans l'afficher directement.

---

## 3. Données dynamiques

Compris :

```js
const prestations = [
    {
        nom: "Massage relaxant",
        duree: 60,
        prix: 60
    }
];
```

Un tableau peut contenir plusieurs objets.

Accès à une propriété :

```js
prestation.nom
prestation.duree
prestation.prix
```

Boucle EJS :

```ejs
<% prestations.forEach((prestation) => { %>
    <h2><%= prestation.nom %></h2>
<% }); %>
```

Compris également :

* `prestations[0]` → premier élément du tableau ;
* `.nom` → propriété `nom` de cet élément ;
* `forEach()` → parcourt les éléments du tableau.

---

# 🛣️ 4. Routes

Nous avons appris qu'une route associe :

```text
méthode HTTP + URL
```

à une action.

Exemple :

```js
router.get("/prestations", renderPrestationsPage);
```

Signification :

> Lorsqu'une requête GET arrive sur `/prestations`, utiliser `renderPrestationsPage`.

---

# 📁 5. Router

Nous avons séparé les routes de `app.js`.

Création du router :

```js
const router = express.Router();
```

Puis :

```js
router.get("/", renderHomePage);
router.get("/prestations", renderPrestationsPage);
```

Export :

```js
export default router;
```

Import dans `app.js` :

```js
import router from "./app/routes/router.js";
```

Connexion avec l'application :

```js
app.use(router);
```

### Principe compris

```text
app.js
→ application générale

router.js
→ organisation des routes
```

---

# 🎮 6. Controllers

Nous avons créé :

```text
app/controllers/mainController.js
```

Le controller contient la logique associée à une page.

Exemple :

```js
const renderHomePage = (req, res) => {
    // préparation des données

    res.render("accueil", { nom, prestations });
};
```

Export :

```js
export default renderHomePage;
```

Puis import dans le router :

```js
import renderHomePage from "../controllers/mainController.js";
```

La route peut alors utiliser directement la fonction :

```js
router.get("/", renderHomePage);
```

### Principe compris

```text
Route
→ quelle URL ?

Controller
→ que doit-on faire ?
```

---

# 🗃️ 7. Models

Nous avons commencé à séparer les données du controller.

Création :

```text
app/models/prestation.js
```

Les prestations sont maintenant stockées dans le Model.

Export :

```js
export default prestations;
```

Puis le controller les importe :

```js
import prestations from "../models/prestation.js";
```

Le controller n'a donc plus besoin de contenir directement le tableau.

### Architecture actuelle

```text
Route
   ↓
Controller
   ↓
Model
   ↓
Controller
   ↓
View
```

---

# 🔄 8. Architecture MVC simplifiée

Nous commençons maintenant à utiliser une architecture proche du **MVC** :

```text
             Navigateur
                 ↓
               Route
                 ↓
             Controller
                 ↓
               Model
                 ↓
             Controller
                 ↓
                View
                 ↓
             Navigateur
```

### Responsabilités

| Élément    | Responsabilité                         |
| ---------- | -------------------------------------- |
| Route      | Associe une URL à une action           |
| Controller | Gère la logique et prépare les données |
| Model      | Gère l'accès aux données               |
| View       | Génère le HTML affiché                 |

---

# 🌐 Routes actuelles

| URL            | Controller              | View              |
| -------------- | ----------------------- | ----------------- |
| `/`            | `renderHomePage`        | `accueil.ejs`     |
| `/prestations` | `renderPrestationsPage` | `prestations.ejs` |

Les deux routes fonctionnent actuellement. ✅

---

# 💆 Données actuelles

### Massage relaxant

* Durée : 60 min
* Prix : 60 €

### Massage du dos

* Durée : 30 min
* Prix : 35 €

D'autres prestations fictives pourront être ajoutées ensuite.

---

# 📚 Concepts JavaScript travaillés

* `const`
* tableaux
* objets
* propriétés
* fonctions
* paramètres
* `req` / `res`
* fonctions fléchées
* `forEach()`
* `import`
* `export default`
* passage d'une fonction comme argument
* organisation en plusieurs fichiers

---

# ⏭️ Prochaines étapes

## Étape suivante

Approfondir les **Models** et comprendre pourquoi on utilise des fonctions comme :

```js
getAllPrestations()
```

plutôt que d'exposer directement les données.

## Ensuite

* ajouter les autres pages ;
* améliorer la séparation MVC ;
* travailler le CSS ;
* ajouter du JavaScript côté navigateur ;
* introduire progressivement PostgreSQL ;
* connecter le Model à la base de données ;
* comprendre les requêtes SQL depuis Node.js.

---

# 🧠 Méthode d'apprentissage

Pour chaque nouvelle notion :

1. **Comprendre** ce qu'on cherche à faire.
2. **Réfléchir** avant d'écrire le code.
3. Recevoir un **indice** si nécessaire.
4. **Écrire le code soi-même**.
5. Tester.
6. Corriger les erreurs en comprenant leur cause.
7. Refaire le raisonnement pour devenir autonome.

### Principe du projet

> **Compréhension → raisonnement → pratique → solution**

---

# 📌 État actuel

🟢 Express fonctionne
🟢 EJS fonctionne
🟢 Serveur fonctionnel sur le port 3000
🟢 Page d'accueil fonctionnelle
🟢 Page prestations fonctionnelle
🟢 Routes séparées
🟢 Controllers séparés
🟢 Model `prestation.js` créé
🟢 Données des prestations déplacées dans le Model
🟢 Architecture MVC commencée

🟡 CSS à développer
🟡 JavaScript côté navigateur à développer
🟡 Autres pages à créer
🔴 PostgreSQL pas encore commencé
