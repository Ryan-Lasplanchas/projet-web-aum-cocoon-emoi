## Plan :

- /Projet :
  - 🏠 /Accueil — présentation rapide
  - 💆 /Prestations — types de massages + tarifs + durée
  - 👩 /A propos — présentation de la masseuse
  - 📍 /Contact — coordonnées, localisation, horaires
<!-- 
Optionel :
- 📅 Prise de rendez-vous — éventuellement plus tard
- 📷 éventuellement une galerie
- 💬 éventuellement des avis clients  
-->

## Architecture projet:

- clara-bien-etre/
  - app.js
  - package.json
  - controllers/
    - mainController.js
  - routes/
    - router.js
  - views/
    - accueil.ejs
    - prestations.ejs
    - apropos.ejs
    - contact.ejs
  - public/
    - css/
      - style.css
    - js/
      - script.js
  - docs/
    - Organnisation.md
    - donnees-fictives.md

## Fonctionnalités :

### Accueil :

Le visiteur doit immédiatement comprendre :

- qui elle est ;
- ce qu'elle propose ;
- où elle exerce ;
- comment la contacter.

### Prestations :

Par exemple :

Massage relaxant
60 min — XX €

Massage du dos
30 min — XX €

Massage ...
90 min — XX €

### À propos :

Une présentation de la masseuse, éventuellement avec une photo.

### Contact :

On pourrait avoir :

- Téléphone
- Email
- Instagram
- Adresse / zone d'activité
- Horaires

## Etapes :

1. Site statique simple
2. Express + EJS
3. JavaScript côté client
4. Données dynamiques
5. PostgreSQL
6. Prise de rendez-vous, si nécessaire (optionel)

## Technologies utiles :

|Technologie|Utilité|
|:-:|-|
|HTML/CSS|Structure et apparence|
|JavaScript|Interactions côté navigateur|
|Node.js|Exécuter JS côté serveur|
|Express|Routes et serveur web|
|EJS|Générer des pages dynamiques|
|PostgreSQL|Stocker les prestations, rendez-vous, avis...|
|Git|Versionner ton projet|



<!-- 
Brouillon à supprimer : 

aume-cocoon.com

location journaliere / massage-bien etre / 
-->