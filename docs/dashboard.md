# 🌸 Projet Clara Bien-être — Dashboard

## 🎯 Objectif du projet

Créer un site vitrine pour **Clara Martin**, praticienne en massages bien-être à Toulon.

Le site doit permettre de :

* présenter son activité ;
* présenter ses prestations ;
* donner les informations de contact ;
* permettre aux visiteurs de la contacter.

Pas de réservation en ligne pour le moment.

---

# 🏗️ Architecture prévue

```text
clara-bien-etre/
├── app.js
├── package.json
│
├── app/
│   ├── controllers/
│   │   └── mainController.js
│   │
│   ├── routes/
│   │   └── router.js
│   │
│   └── views/
│       └── accueil.ejs
│
└── public/
    ├── css/
    │   └── style.css
    │
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
* PostgreSQL → à introduire plus tard
* Nodemon → à configurer lorsque nécessaire

Les dépendances sont installées progressivement, au moment où elles deviennent utiles.

---

# ✅ Étapes terminées

### 1. Définition du projet

* [x] Choix du projet : site vitrine pour une masseuse
* [x] Création des données fictives
* [x] Définition des prestations
* [x] Définition des informations de contact

### 2. Node.js

* [x] Comprendre le rôle de Node.js
* [x] Comprendre le fichier `package.json`
* [x] Comprendre le rôle du fichier d'entrée `app.js`

### 3. Express

* [x] Installation d'Express
* [x] Import d'Express
* [x] Création de l'application avec `express()`
* [x] Comprendre la variable `app`
* [x] Comprendre `app.get()`
* [x] Comprendre `req` et `res`
* [x] Comprendre `res.send()`
* [x] Comprendre `app.listen()`

### 4. EJS

* [x] Installation d'EJS
* [x] Configuration du moteur de vues
* [x] Configuration du dossier `app/views`
* [x] Création de `accueil.ejs`
* [x] Comprendre `res.render()`
* [x] Comprendre la transmission de données d'Express vers EJS

### 5. Données dynamiques

* [x] Créer une variable JavaScript `nom`
* [x] Transmettre `nom` à EJS
* [x] Afficher une variable avec `<%= %>`
* [x] Comprendre la différence entre HTML statique et données dynamiques

### 6. Tableau d'objets

* [x] Comprendre un objet JavaScript
* [x] Comprendre un tableau
* [x] Comprendre un tableau contenant plusieurs objets
* [x] Créer le tableau `prestations`
* [x] Comprendre l'accès à un élément avec son indice
* [x] Comprendre l'accès à une propriété avec `.nom`, `.duree`, `.prix`

Exemple actuel :

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

### 7. Boucle EJS

* [x] Comprendre pourquoi utiliser une boucle
* [x] Découvrir `forEach()`
* [x] Comprendre que `prestation` représente une prestation individuelle
* [x] Comprendre `<% %>`
* [x] Comprendre `<%= %>`
* [x] Afficher dynamiquement les prestations avec `forEach()`

---

# 📍 Étape actuelle

Nous venons de terminer la création d'une boucle permettant d'afficher automatiquement les prestations.

Structure actuelle dans `accueil.ejs` :

```ejs
<% prestations.forEach((prestation) => { %>

    <h2><%= prestation.nom %></h2>

    <p><%= prestation.duree %> min</p>

    <p><%= prestation.prix %> €</p>

<% }); %>
```

### Ce que je dois savoir expliquer

```text
prestations
    ↓
forEach()
    ↓
une prestation à la fois
    ↓
prestation.nom
prestation.duree
prestation.prix
    ↓
HTML généré
```

---

# 🔜 Prochaines étapes

## Organisation de l'application

* [ ] Ajouter les 4 prestations
* [ ] Séparer les routes du fichier `app.js`
* [ ] Créer le dossier `routes`
* [ ] Créer le dossier `controllers`
* [ ] Comprendre le rôle d'un contrôleur
* [ ] Comprendre le chemin :

```text
Navigateur
   ↓
Route
   ↓
Controller
   ↓
Vue EJS
   ↓
HTML
```

## Front-end

* [ ] Créer la structure HTML complète
* [ ] Ajouter le CSS
* [ ] Créer les différentes pages
* [ ] Ajouter du JavaScript côté navigateur

Pages envisagées :

* [ ] Accueil
* [ ] Prestations
* [ ] À propos
* [ ] Contact

## Base de données

PostgreSQL sera introduit **après avoir compris le fonctionnement avec les tableaux JavaScript**.

* [ ] Comprendre pourquoi utiliser une base de données
* [ ] Installer/configurer PostgreSQL lorsque nécessaire
* [ ] Créer la base de données
* [ ] Créer les tables
* [ ] Insérer les données
* [ ] Connecter Node.js à PostgreSQL
* [ ] Récupérer les prestations depuis PostgreSQL
* [ ] Remplacer progressivement le tableau JavaScript par les données de la BDD

---

# 🧠 Méthode d'apprentissage

Pour chaque nouvelle notion :

1. **Comprendre** ce qu'on cherche à faire
2. **Réfléchir** à la solution
3. Recevoir un **indice** si nécessaire
4. Essayer soi-même
5. Corriger et comprendre les erreurs
6. Utiliser la **solution complète** seulement lorsque nécessaire

Objectif principal :

> **Comprendre → raisonner → pratiquer → devenir autonome**

---

# 📊 État actuel

**Projet :** 🟢 En cours

**Express :** 🟢 Compris dans les grandes lignes
**EJS :** 🟢 En cours d'apprentissage
**JavaScript :** 🟡 En cours
**Architecture MVC :** 🔵 À venir
**CSS :** 🔵 À venir
**PostgreSQL :** 🔵 À venir

### Prochaine notion

👉 **Organiser le code avec `routes` et `controllers`**, après avoir vérifié que l'affichage des prestations avec `forEach()` fonctionne correctement.
