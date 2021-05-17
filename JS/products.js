//// ALERT ////
//alert("page en cours de travaux");

/////RECUPERATION DES DONNEES API MEUBLE 1/////
/*fetch("http://localhost:3000/api/furniture/5be9cc611c9d440000c1421e") //récupére la ressource à l'adress url (statique)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.log(error)); // Une erreur est survenue*/

///// Récupérer des données des produits par leur _id et envoyé dans l'URL /////

const params = new URLSearchParams(document.location.search);
const product = params.get("id");

console.log(product);

let APIFurnitures = "http://localhost:3000/api/furniture/" + product; //"http:....furniture/${product}"

console.log(APIFurnitures);

fetch(APIFurnitures)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#nameProduct").innerHTML =
      "<strong>" + data.name + "</strong>";
    document.querySelector(
      "#imageId"
    ).innerHTML = `<img class="img-fluid" src="${data.imageUrl}" alt="photo de ${data.name}" />`;
    document.querySelector("#descriptionProduct").innerHTML = data.description;
    /*selectionner element qui va recevoir les declinaisons
   creer un element li 
appeler l'element créé et lui envoyer les attributs ou data desiré*/
    const furnitureVarnish = document.getElementById("varnishProduct");

    data.varnish.forEach((choix) => {
      const varnishId = document.createElement("option");
      varnishId.innerHTML = choix;
      furnitureVarnish.appendChild(varnishId);
    });
    // document.querySelector("#varnishProduct").innerHTML = data.varnish;
    document.querySelector("#priceProduct").innerHTML =
      "<strong>Prix : " + data.price / 100 + " €</strong>";
  })
  .catch((error) => console.log(error)); // Une erreur est survenue

//// AJOUTER AU PANIER ////
document.getElementById("basketProduct").addEventListener("click", addProduct);
function addProduct() {
  alert("Votre produit à bien été ajouté au panier");
  // localStorage ou sessionStorage
}

/*
          
            class=""
        
fetch("http://localhost:3000/api/furniture", {
  method: "POST", // envoyer les données
  headers: {
    // donnent un peu plus d’information sur notre requête
    Accept: "application/json", //  avec la valeur application/json
    "Content-Type": "application/json", // avec la valeur  application/json
  },
  body: JSON.stringify("http://localhost:3000/api/furniture" + "_id"), //  les données qu’on souhaite envoyer  (dynamique)
})
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.log(error));*/

/*// but donner la page du produit [0] : products.html?id=5be9cc611c9d440000c1421e

///// Visualisation des éléments de chaque produits via le localhost /////
const ApiFurnitures = "http://localhost:3000/api/furniture" + "_id";

const name = document.getElementById("nameProduct");
const image = document.getElementById("imageProduct");
const description = document.getElementById("descriptionProduct");
const varnish = document.getElementById("varnishProduct");
const price = document.getElementById("priceProduct");
/// Modifier la quantité et prix du produit ///
const quantity = document.getElementById("quantityProduct");
/// Envoyer notre choix au panier ///
const basketProduct = document.getElementById("basketProduct");*/

//// Récupérer les données des produits par leur _id /////
