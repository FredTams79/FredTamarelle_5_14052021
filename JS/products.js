/////******* RECUPERATION DES DONNEES API PAR MEUBLE *******/////

///Récupération de l'ID envoyé dans URL///
const params = new URLSearchParams(document.location.search);
const product = params.get("id");

let APIFurnitures = "http://localhost:3000/api/furniture/" + product;

if (localStorage.getItem("furniture")) {
  console.log("panier ok");
} else {
  console.log("création du panier");
  let init = [];
  localStorage.setItem("furniture", JSON.stringify(init));
}
let basketContent = JSON.parse(localStorage.getItem("furniture"));

/////Récupération des infos du produit////
fetch(APIFurnitures)
  .then((response) => response.json())
  .then((data) => {
    console.log("data mais dans la promise fetch");
    console.log(data);

    //// nom produit ////
    document.querySelector("#nameProduct").innerHTML =
      "<strong>" + data.name + "</strong>";
    //// image produit /////
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
      console.log("options vernis");
      console.log(choix);
    });
    ///// prix produit /////
    document.querySelector("#priceProduct").innerHTML =
      "<strong>Prix : " + data.price / 100 + " €</strong>";

    /// test ///
    console.log("nom / image / prix du produit / vernis");
    console.log(
      data.name,
      data.imageUrl,
      data.price / 100,
      varnishProduct.value
    );

    ////****** AJOUTER AU PANIER + localStorage ******////

    document
      .getElementById("basketProduct")
      .addEventListener("click", (addProduct) => {
        addProduct.preventDefault(); // empêche l'execution par défaut de l'évenement et de recharger la page au cas où
        basketContent.push(data);
        localStorage.setItem("furniture", JSON.stringify(basketContent));

        ////Récupération de la valeur du vernis choisi par l'utilisateur/////
        let choixVarnish = varnishProduct.value;
        console.log("choixVarnish : " + choixVarnish);
        console.log("panier");
        console.log(data, choixVarnish);

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
        confirmationBasket();
      });
  })

  .catch((error) => console.log("Erreur : " + error)); // Une erreur est survenue

////******* le local storage *********/////
/////Récupération des valeurs JSON pour les mettre dans le panier/////
//const basketContent = JSON.parse(localStorage.getItem("furniture")); // convertir données JSON en objet JavaScript
///******* manque le choix du vernis ********/////
///// Ajout produit si déjà des produits dans le panier ////
/* if (basketContent) {
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
        }*/
