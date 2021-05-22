//// AJOUTER AU PANIER + localStorage////

document
  .getElementById("basketProduct")
  .addEventListener("click", (addProduct) => {
    addProduct.preventDefault(); // empêche l'execution par défaut de l'évenement

    ////Récupération des valeurs du produit choisi par l'utilisateur/////
    let choixVarnish = furnitureVarnish.value;
    console.log("choixVarnish");
    console.log(choixVarnish);

    /*let userAddProduct = {
    
      varnish: choixVarnish,
      quantity: 1,
      price: data.price / 100,
  };*/
    //console.log("userAddProduct");
    // console.log(userAddProduct);

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

    ////******* le local storage *********/////
    /////Récupération des valeurs JSON pour les mettre dans le panier/////
    const basketContent = JSON.parse(localStorage.getItem("furniture")); // convertir données JSON en objet JavaScript
    console.log("panier");
    console.log(basketContent);

    ///// Ajout produit si déjà des produits dans le panier ////
    if (basketContent) {
      basketContent.push(data);
      localStorage.setItem("furniture", JSON.stringify(basketContent)); // convertir objet JavaScript en JSON
      confirmationBasket();
      ///// Ajout nouveau produit dans le panier /////
    } else if (basketContent == false) {
      basketContent = [];
      basketContent.push(data);
      /////Envoie du panier au local storage//////
      localStorage.setItem("furniture", JSON.stringify(basketContent));
      confirmationBasket();
    } else {
      localStorage.setItem("furniture", JSON.stringify([data]));
      confirmationBasket();
    }
  });

///// Ajout du même produit et vernis dans le panier/////
alert(
  "Vous avez déjà ajouter ce produit avec ce choix de vernis dans le panier"
);

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
