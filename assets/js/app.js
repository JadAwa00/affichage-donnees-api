// Endpoint imposé par le TP
const API_URL = "https://randomuser.me/api/?results=50";

// document.getElementById() va chercher dans le DOM l'élément qui a l'id "usersTableBody".
const tableBody = document.getElementById("usersTableBody");

// fetch(API_URL) envoie une requête HTTP (méthode GET par défaut) vers l'URL donnée.
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.table(data.results);

    // On appelle notre fonction pour construire le tableau HTML,
    afficherUtilisateurs(data.results);
  })

  .catch((error) => {
    console.log("Erreur lors de la récupération des données :", error);
  });

// La fonction reçoit le tableau "users"
function afficherUtilisateurs(users) {
  // .forEach() parcourt chaque élément du tableau "users" un par un.
  users.forEach((user) => {

    const nomComplet = `${user.name.title} ${user.name.last} ${user.name.first}`;
    const genreIcon = user.gender === "male" ? "♂" : "♀";
    const genreClass = user.gender === "male" ? "male" : "female";
    const codePays = user.nat.toLowerCase();
    const ligne = document.createElement("tr");

    // .innerHTML permet d'injecter directement du code HTML à l'intérieur de l'élément.
    ligne.innerHTML = `
      <td>${user.login.username}</td>
      <td><span class="gender-icon ${genreClass}">${genreIcon}</span></td>
      <td>${nomComplet}</td>
      <td><img src="${user.picture.medium}" alt="${nomComplet}" class="user-photo"></td>
      <td>${user.location.city}</td>
      <td><span class="fi fi-${codePays}"></span> ${user.location.country}</td>
    `;

    // On insère la ligne créée à l'intérieur du <tbody>.
    tableBody.appendChild(ligne);
  });
}
