# projet-web-aum-cocoon-emoi

# 🌿 Projet Clara Bien-être

## 🎯 Objectif du projet

Créer un site vitrine pour une masseuse fictive, **Clara Martin**, afin de présenter son activité de massages bien-être et permettre aux visiteurs de la contacter.

Le projet sert également d'exercice pour pratiquer :

* HTML / CSS
* JavaScript
* Node.js
* Express
* EJS
* PostgreSQL

---

## 🏗️ Architecture du projet

```text
clara-bien-etre/
├── app.js
├── package.json
├── app/
│   ├── controllers/
│   ├── routes/
│   └── views/
│       └── accueil.ejs
└── public/
    ├── css/
    └── js/
```

---

# ✅ Étapes réalisées

## 1. Définition du projet

* [x] Définir le projet de site vitrine
* [x] Définir l'activité : massages bien-être
* [x] Définir le nom : Clara Bien-être
* [x] Définir les informations fictives de Clara
* [x] Définir les prestations
* [x] Définir les pages principales du site

---

## 2. Mise en place de Node.js

* [x] Créer le projet Node.js
* [x] Comprendre le rôle de `package.json`
* [x] Comprendre le rôle de `app.js`
* [x] Comprendre la différence entre `app.js` et `index.js`
* [x] Configurer les modules ES avec `"type": "module"`

### Notions comprises

* Node.js permet d'exécuter du JavaScript en dehors du navigateur.
* `package.json` contient notamment les informations et dépendances du projet.
* `app.js` sert ici de point d'entrée et contient la configuration de l'application.

---

## 3. Mise en place d'Express

* [x] Installer Express
* [x] Importer Express
* [x] Créer une application Express
* [x] Créer une première route
* [x] Démarrer le serveur

### Code étudié

```js
import express from "express";

const app = express();
```

### Notions comprises

* Express est un framework web pour Node.js.
* `express()` crée une application Express.
* `app` contient cette application.
* `app.get()` permet de définir le comportement d'une route GET.
* `app.listen()` démarre le serveur et lui permet d'écouter les requêtes.

---

## 4. Première route

* [x] Créer la route `/`
* [x] Comprendre `req`
* [x] Comprendre `res`
* [x] Tester une réponse avec `res.send()`

### Notions comprises

```js
app.get("/", (req, res) => {
    // traitement de la requête
});
```

* `req` représente la requête reçue.
* `res` représente la réponse que le serveur va envoyer.

---

## 5. Mise en place d'EJS

* [x] Installer EJS
* [x] Configurer EJS comme moteur de vues
* [x] Configurer le dossier `app/views`
* [x] Créer `accueil.ejs`
* [x] Utiliser `res.render()`

### Configuration étudiée

```js
app.set("view engine", "ejs");
app.set("views", "app/views");
```

### Notions comprises

* EJS permet de générer du HTML à partir de données JavaScript.
* `res.render("accueil")` demande à Express de rendre `accueil.ejs`.
* `app.set("views", "app/views")` indique où se trouvent les vues.

---

## 6. Transmission de données à EJS

* [x] Créer une variable JavaScript
* [x] Transmettre cette variable à EJS
* [x] Afficher une variable dans EJS

### Exemple étudié

```js
const nom = "Clara";

res.render("accueil", { nom });
```

Dans EJS :

```ejs
<h1>Bienvenue chez <%= nom %> Bien-être !</h1>
```

### Notions comprises

`<%= nom %>` permet à EJS d'insérer la valeur de la variable `nom` dans le HTML généré.

---

# 🚧 Étape en cours

## 7. Affichage dynamique des prestations

Objectif : ne plus écrire chaque prestation directement dans le HTML.

### À faire

* [ ] Créer un tableau JavaScript contenant les prestations
* [ ] Comprendre un tableau d'objets
* [ ] Transmettre le tableau à EJS
* [ ] Découvrir la boucle `forEach`
* [ ] Afficher automatiquement chaque prestation dans `accueil.ejs`

Exemple de structure envisagée :

```js
const prestations = [
    {
        nom: "Massage relaxant",
        duree: 60,
        prix: 60
    },
    {
        nom: "Massage du dos",
        duree: 30,
        prix: 35
    }
];
```

---

# 📋 À venir

## 8. Organisation du projet

* [ ] Comprendre les routes
* [ ] Comprendre les controllers
* [ ] Séparer progressivement les responsabilités
* [ ] Mettre en place les dossiers `routes` et `controllers`

## 9. Front-end

* [ ] Créer le CSS
* [ ] Créer la mise en page
* [ ] Ajouter du JavaScript côté navigateur
* [ ] Rendre le site responsive

## 10. PostgreSQL

* [ ] Comprendre pourquoi utiliser une base de données
* [ ] Installer/configurer PostgreSQL lorsque nécessaire
* [ ] Créer la base de données
* [ ] Créer les tables
* [ ] Insérer les données
* [ ] Effectuer des requêtes SQL
* [ ] Connecter Node.js à PostgreSQL
* [ ] Remplacer progressivement les données JavaScript par les données de la base

---

# 🧠 Méthode d'apprentissage

Pour chaque nouvelle notion :

1. **Comprendre** ce que l'on cherche à faire
2. **Réfléchir** à la stratégie
3. **Essayer** soi-même
4. Recevoir un **indice** si nécessaire
5. Corriger le code
6. Comprendre pourquoi la solution fonctionne

L'objectif est de comprendre le fonctionnement du projet et de devenir progressivement autonome, plutôt que de simplement recopier du code.

---

# 📌 État actuel

**Technologies utilisées :**

* HTML ✅
* Node.js ✅
* Express ✅
* EJS ✅
* JavaScript 🟡
* PostgreSQL ⏳
* CSS ⏳

**Prochaine étape :**

> Créer un tableau d'objets `prestations` et apprendre à le parcourir avec `forEach` dans EJS.
