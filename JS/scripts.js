/*!
 * Start Bootstrap - Business Casual v6.0.0 (https://startbootstrap.com/theme/business-casual)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
 */
///// Highlights current date on contact page/////
$(".list-hours li").eq(new Date().getDay()).addClass("today");

/////RECUPERATION DES DONNEES API MEUBLES/////
fetch("http://localhost:3000/api/furniture") //récupére la ressource à l'adress url
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.log(error)); // Une erreur est survenue

/////RECUPERATION DES DONNEES API MEUBLE 1/////
fetch("http://localhost:3000/api/furniture/5be9cc611c9d440000c1421e") //récupére la ressource à l'adress url
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.log(error)); // Une erreur est survenue
