/*!
 * Start Bootstrap - Business Casual v6.0.0 (https://startbootstrap.com/theme/business-casual)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
 */
///// Highlights current date on contact page = Met en évidence la date du jour sur la page de contact/////
$(".list-hours li").eq(new Date().getDay()).addClass("today");

/////****** Récupérer les données API des produits ******/////

fetch("http://localhost:3000/api/furniture") //récupére la ressource à l'adress url
  .then((response) => response.json())
  .then(function (data) {
    const furnitureProducts = document.getElementById("furnitureProducts");
    return data.map(function (meuble) {
      const furnitureProduct = document.createElement("div");
      const imageProduct = document.createElement("img");
      const furnitureDetail = document.createElement("div");
      const furnitureName = document.createElement("h4");
      const furnitureDescription = document.createElement("p");
      const furniturePrice = document.createElement("p");
      const productLink = document.createElement("a");

      furnitureProduct.setAttribute(
        "class",
        "card col-lg-3 col-sm-5 col-10 px-0 mx-1 mb-3"
      );
      imageProduct.setAttribute("class", "card-img-top");
      imageProduct.setAttribute("src", meuble.imageUrl);
      imageProduct.setAttribute("alt", "photo de " + meuble.name);
      furnitureDetail.setAttribute(
        "class",
        "card-body d-flex flex-column justify-content-between"
      );
      furnitureName.setAttribute("class", "card-title");
      furnitureName.setAttribute("style", "color:#e6a756;");
      furnitureDescription.setAttribute("class", "card-text");
      furniturePrice.setAttribute("class", "card-price");
      productLink.setAttribute("href", "products.html?id=" + meuble._id);
      productLink.setAttribute("class", "btn btn-primary");

      furnitureName.innerHTML = meuble.name;
      furnitureDescription.innerHTML = meuble.description;
      furniturePrice.innerHTML = "Prix : " + meuble.price / 100 + " €";
      productLink.innerHTML =
        '<i class="fas fa-arrow-circle-down fa-2x"></i></br>Voir la page :</br>' +
        meuble.name;

      furnitureProducts.appendChild(furnitureProduct);
      furnitureProduct.appendChild(imageProduct);
      furnitureProduct.appendChild(furnitureDetail);
      furnitureDetail.appendChild(furnitureName);
      furnitureDetail.appendChild(furnitureDescription);
      furnitureDetail.appendChild(furniturePrice);
      furnitureDetail.appendChild(productLink);
    });
  })
  .catch((error) => {
    console.log("Erreur : " + error);
    alert("HTTP 500 : erreur serveur"); // Une erreur est survenue
  });
