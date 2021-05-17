/////RECUPERATION DES DONNEES API PAR MEUBLE/////

//Récupération de l'ID envoyé dans URL
const params = new URLSearchParams(document.location.search);
const product = params.get("id");

console.log(product);

let APIFurnitures = "http://localhost:3000/api/furniture/" + product;

console.log(APIFurnitures);

//Récupération des infos du produit
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
    // Choix au niveau du vernis
    const furnitureVarnish = document.getElementById("varnishProduct");

    data.varnish.forEach((choix) => {
      const varnishId = document.createElement("option");
      varnishId.innerHTML = choix;
      furnitureVarnish.appendChild(varnishId);
      console.log(choix);
    });
    document.querySelector("#priceProduct").innerHTML =
      "<strong>Prix : " + data.price / 100 + " €</strong>";
  })
  .catch((error) => console.log(error)); // Une erreur est survenue

//// AJOUTER AU PANIER ////
// localStorage ou sessionStorage

document.getElementById("basketProduct").addEventListener("click", addProduct);
function addProduct() {
  // localStorage ou sessionStorage

  alert("Votre produit à bien été ajouté au panier");
}

/*
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
  .catch((error) => console.log(error));
*/
