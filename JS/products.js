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
    console.log(data.name);
    console.log(data.imageUrl);
    console.log(data.price / 100);
    console.log(varnishProduct.value);

    //// AJOUTER AU PANIER + localStorage////

    document
      .getElementById("basketProduct")
      .addEventListener("click", (addProduct) => {
        addProduct.preventDefault(); // empêche l'execution par défaut de l'évenement

        ////Récupération de la valeur du vernis choisi par l'utilisateur/////
        let choixVarnish = furnitureVarnish.value;
        console.log("choixVarnish");
        console.log(choixVarnish);

        let userAddProduct = [
          `image: ${data.imageUrl}, nom: ${
            data.name
          }, choix Vernis: ${choixVarnish}, prix: ${data.price / 100}`,
        ];

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
        console.log(userAddProduct);

        ///// Ajout produit si déjà des produits dans le panier ////
        if (basketContent) {
          basketContent.push(userAddProduct);
          localStorage.setItem("furniture", JSON.stringify(basketContent)); // convertir objet JavaScript en JSON
          confirmationBasket();
          ///// Ajout nouveau produit dans le panier /////
        } else if (basketContent == false) {
          basketContent = [];
          basketContent.push(userAddProduct);
          /////Envoie du panier au local storage//////
          localStorage.setItem("furniture", JSON.stringify(basketContent));
          confirmationBasket();
        } else {
          localStorage.setItem("furniture", JSON.stringify([userAddProduct]));
          confirmationBasket();
        }
      });
  })

  .catch((error) => console.log("Erreur : " + error)); // Une erreur est survenue
