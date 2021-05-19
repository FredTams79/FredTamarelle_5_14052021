/////RECUPERATION DES DONNEES API PAR MEUBLE/////

/////Récupération de l'ID envoyé dans URL/////
const params = new URLSearchParams(document.location.search);
const product = params.get("id");

//console.log(product);

let APIFurnitures = "http://localhost:3000/api/furniture/" + product;

//console.log(APIFurnitures);
const furnitureVarnish = varnishProduct;

/////Récupération des infos du produit////
fetch(APIFurnitures)
  .then((response) => response.json())
  .then((data) => {
    //    console.log(data);
    document.querySelector("#nameProduct").innerHTML =
      "<strong>" + data.name + "</strong>";
    document.querySelector(
      "#imageId"
    ).innerHTML = `<img class="img-fluid" src="${data.imageUrl}" alt="photo de ${data.name}" />`;
    document.querySelector("#descriptionProduct").innerHTML = data.description;
    ////Choix des vernis////
    const varnishProduct = document.getElementById("varnishProduct");

    data.varnish.forEach((choix) => {
      const varnishId = document.createElement("option");
      varnishId.innerHTML = choix;
      varnishProduct.appendChild(varnishId);
      //console.log(choix);
    });
    document.querySelector("#priceProduct").innerHTML =
      "<strong>Prix : " + data.price / 100 + " €</strong>";
  })
  .catch((error) => console.log("Erreur : " + error)); // Une erreur est survenue

//// AJOUTER AU PANIER + localStorage////

document
  .getElementById("basketProduct")
  .addEventListener("click", (addProduct) => {
    addProduct.preventDefault();

    ////Récupération des valeurs du produit choisi par l'utilisateur/////
    let choixVarnish = furnitureVarnish.value;
    let userAddProduct = {
      url: data.imageUrl,
      id: data._id,
      name: data.name,
      varnish: choixVarnish,
      quantity: 1,
      price: data.price / 100,
    };
    console.log(choixVarnish);
    console.log(userAddProduct);
    ///// Message confirmation ajout produit au panier /////
    const confirmationBasket = () => {
      if (
        window.confirm(`Votre "${data.name}" avec vernis "${choixVarnish}" a bien été ajouté(e) au panier
Consultez le panier "OK" ou
Continuez votre visite sur notre site "ANNULER"`)
      ) {
        window.location.href = "panier.html";
      } else {
        window.location.href = "index.html";
      }
    };

    /////Récupération des valeurs JSON pour les mettre dans le panier/////
    const basketContent = JSON.parse(localStorage.getItem("key"));

    ///// Ajout produit si déjà des produits dans le panier ////
    if (basketContent) {
      basketContent.push(userAddProduct);
      localStorage.setItem("key", JSON.stringify(basketContent));
      console.log(basketContent);
      confirmationBasket();
      ///// Ajout nouveau produit dans le panier /////
    } else if (basketContent == false) {
      basketContent = [];
      basketContent.push(userAddProduct);
      /////Envoie du panier au local storage//////
      localStorage.setItem("key", JSON.stringify(basketContent));
      confirmationBasket();
    } else {
      localStorage.setItem("key", JSON.stringify([userAddProduct]));
      confirmationBasket();
    }
    console.log(basketContent);
  });
/*
 ///// Ajout du même produit et vernis dans le panier/////
  alert(
    "Vous avez déjà ajouter ce produit avec ce choix de vernis dans le panier"
  );
  /////et si plus de produit en stock ?????/////
*/
/*
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(key, localStorage.getItem(key));
}
*/

/*!
 *fetch("http://localhost:3000/api/furniture", {
 * method: "POST", // envoyer les données
 *headers: {
 * // donnent un peu plus d’information sur notre requête
 *Accept: "application/json", //  avec la valeur application/json
 *"Content-Type": "application/json", // avec la valeur  application/json
 *},
 *body: JSON.stringify("http://localhost:3000/api/furniture" + "_id"), //  les données qu’on souhaite envoyer  (dynamique)
 *})
 *  .then((response) => response.json())
 *  .then((response) => console.log(response))
 *  .catch((error) => console.log(error));
 */
