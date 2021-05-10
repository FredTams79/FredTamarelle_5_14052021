///// Récupérer les données des produits par leur _id /////

fetch("http://localhost:3000/api/furniture", {
  method: "POST", // envoyer les données
  headers: {
    // donnent un peu plus d’information sur notre requête
    Accept: "application/json", //  avec la valeur application/json
    "Content-Type": "application/json", // avec la valeur  application/json
  },
  body: JSON.stringify("http://localhost:3000/api/furniture" + "_id"), //  les données qu’on souhaite envoyer
})
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// but donner la page du produit [0] : products.html?id=5be9cc611c9d440000c1421e

///// Visualisation des éléments de chaque produits via le localhost /////

const name = document.getElementById("nameProduct").value;
const image = document.getElementById("imageProduct").value;
const description = document.getElementById("descriptionProduct").value;
const varnish = document.getElementById("varnishProduct").value;
const price = document.getElementById("priceProduct").value;
/// Modifier la quantité et prix du produit ///
const quantity = document.getElementById("quantityProduct").value;
/// Envoyer notre choix au panier ///
getElementById("basketProduct");
