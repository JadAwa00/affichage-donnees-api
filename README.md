# 🌐 TP API - Random User Generator

Application web frontend permettant de consommer l'API publique [RandomUser.me](https://randomuser.me/) pour afficher dynamiquement une liste de 50 utilisateurs sous forme de tableau interactif et stylisé.

---

## 📸 Aperçu

Le tableau généré affiche pour chaque utilisateur :
- **Username** : Identifiant unique de connexion
- **Genre** : Symbole visuel coloré (♂ en bleu / ♀ en rose)
- **Nom** : Civilité, Nom et Prénom
- **Photo** : Avatar arrondi
- **Ville** : Localisation de la personne
- **Pays** : Nom du pays accompagné de son drapeau national

---

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique du tableau et de la page
- **CSS3** : Styles personnalisés (avatars ronds, icônes de genre, drapeaux)
- **JavaScript (Vanilla / ES6+)** :
  - Consommation d'API avec l'API `fetch()` (promesses `.then()` / `.catch()`)
  - Manipulation dynamique du DOM (`document.createElement`, `innerHTML`, `appendChild`)
- **Bibliothèques & dépendances externes** :
  - [Bootstrap 5.3](https://getbootstrap.com/) : Mise en page responsive et classes de tableau (`table-striped`, `table-hover`, `shadow-sm`)
  - [flag-icons](https://github.com/lipis/flag-icons) : Affichage dynamique des drapeaux via le code national ISO (`user.nat`)

---

## 📂 Structure du projet

```text
├── index.html          # Structure HTML principale
├── assets/
│   ├── css/
│   │   └── style.css   # Styles personnalisés (photos, icônes, badges)
│   └── js/
│       └── app.js      # Requête Fetch et injection DOM
└── README.md           # Documentation du projet
