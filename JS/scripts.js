/*!
 * Start Bootstrap - Business Casual v6.0.0 (https://startbootstrap.com/theme/business-casual)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
 */
///// Highlights current date on contact page/////
$(".list-hours li").eq(new Date().getDay()).addClass("today");

///// Récupérer les données des produits par leur _id /////

fetch("http://localhost:3000/api/furniture") //récupére la ressource à l'adress url
  .then((response) => response.json())
  .then(function (data) {
    const furnitureName = document.getElementById("furnitureName");
    return data.map(function (meuble) {
      //let div = document.createElement("div");
      let a = document.createElement("a");
      a.setAttribute("href", "products.html?id=" + meuble._id);
      a.innerHTML = meuble.name;
      //div.innerHTML = meuble.name;
      a.setAttribute("class", "card-title");
      //div.appendChild(a);
      furnitureName.appendChild(a);
      console.log(meuble.name);
    });
  })
  .catch((error) => console.log(error)); // Une erreur est survenue
