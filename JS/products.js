/////RECUPERATION DES DONNEES API MEUBLE 1/////
fetch("http://localhost:3000/api/furniture/5be9cc611c9d440000c1421e") //récupére la ressource à l'adress url (statique)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.log(error)); // Une erreur est survenue

///// Récupérer les données des produits par leur _id /////

/*fetch("http://localhost:3000/api/furniture", {
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

const name = document.getElementById("nameProduct").value;
const image = document.getElementById("imageProduct").value;
const description = document.getElementById("descriptionProduct").value;
const varnish = document.getElementById("varnishProduct").value;
const price = document.getElementById("priceProduct").value;
/// Modifier la quantité et prix du produit ///
const quantity = document.getElementById("quantityProduct").value;
/// Envoyer notre choix au panier ///
getElementById("basketProduct");*/

/*//// Récupérer les données des produits par leur _id /////

fetch("http://localhost:3000/api/furniture") //récupére la ressource à l'adress url
  .then((response) => response.json())
  .then(function (data) {
    const furnitureName = document.getElementById("furnitureName");
    return data.map(function (meuble) {
      let div = document.createElement("div");
      let a = document.createElement("a");
      a.setAttribute("href", "products.html?id=" + meuble._id);
      //a.innerHTML = "afficher le produit";
      div.innerHTML = meuble.name;
      div.setAttribute("class", "card-title");
      div.appendChild(a);
      furnitureName.appendChild(div);
    });
  })
  .catch((error) => console.log(error)); // Une erreur est surv
*/
