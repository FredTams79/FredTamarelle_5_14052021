//// ALERT ////
//alert("page en cours de travaux");

const userBasketContent = JSON.parse(localStorage.getItem("furniture")); // convertir données JSON en objet JavaScript
console.log("Panier :");
console.log(userBasketContent);

// Affichage produit acheté du panier
// Ligne prix total
let totalPrice = 0;
totalPrice = totalPrice + parseInt(userBasketContent.price / 100, 10);
console.log("prix : " + totalPrice);
//console.log(basketProductContent);
//si le panier est vide
if (userBasketContent === null) {
  const basketNull = `
  <div class="table-responsive-sm bg-white my-5 mx-5 py-3 text-center text-primary text-uppercase font-weight-bold"><div>Votre panier est vide</div></div>`;
  basketProductContent.innerHTML = basketNull;
} else {
  const basketProductContent = document.querySelector("#basketProductContent");
  userBasketContent.forEach((panier, index) => {
    basketProductContent.innerHTML = `
      <tr><td><img src="${
        panier.imageUrl
      }" class="img-thumbnail w-25 mr-3"></img>${panier.name}</td>
      <td scope="col" class="w-25">${panier.price / 100} €</td>
      <td><button><i class="fas fa-trash-alt"></i></button></td></tr>`;
    console.log(panier);
  });
}

//////////***** FORMULAIRE ******//////
//addEventListener

const postData = {
  contact: {},
  products: ["5be9cc611c9d440000c1421e"],
};

postData.contact = {
  firstName: "John",
  lastName: "Doe",
  address: "inconnu au bataillon",
  city: "Paris",
  email: "johndoe@monmail.com",
};

//fetch avec POST

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

// affichage des données localStorage

// boucle pour ajout produit ligne par ligne

//for (i = 0; i < userBasketContent.length; i++) {
//basketProductContent.innerHTML = userBasketContent[i].name;

/*  console.log("nombre de produit : " + userBasketContent.length);
    const displayBasketContent = [];
    console.log("affichage contenu panier :");
    console.log(displayBasketContent);
    // Ligne prix total
    let totalPrice = 0;
    totalPrice = totalPrice + parseInt(userBasketContent.price / 100, 10);
    console.log("prix : " + totalPrice);
    ////// problème pour ajouter les valeurs du produit dans le tableau /////////
    // + problème avec option vernis
    displayBasketContent =
      displayBasketContent +
      `
  
    <tr>
      <th scope="row">${userBasketContent[i]}</th>
      <td>${userBasketContent[i].imageUrl}</td>
      <td>${userBasketContent[i].name}</td>
      <td>${userBasketContent[i].choixVarnish}</td> 
      <td>${userBasketContent[i].price / 100} €</td>
      <td><i class="fas fa-trash-alt"></i></td>
    </tr>
    <tr class="text-secondary font-weight-bold">
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td>Total :</td>
            <td>1000 €</td>
                  <td class="font-italic">(Livraison Offerte)</td>

    </tr>
    </tbody>
  </table>
</div>`;

    basketProductContent.innerHTML = displayBasketContent;
  }
}*/

/*
// faire un tableau pour mettre les produits ajoutés au click
// Lignes Panier
function basketLine(id, name, varnish, price, qte) {
  this.idArticle = id;
  this.nameArticle = name;
  this.varnishArticle = varnish;
  this.priceArticle = price;
  this.qteArticle = qte;
  //this.addQte = function (qte) {this.qteArticle += qte;}
  console.log(basketLine);
}
this.getPriceLine = function () {
  var resultat = this.priceArticle * this.qteArticle;
  return resultat;
};


//Ajoute le produit dans le panier

function addToBasket(???) {
  let contentBasket = JSON.parse(localStorage.getItem("key"));
  if (contentBasket === false) {
    contentBasket = [];
  }
}

//Produit ajouter au local storage

contentBasket.push(?product?);
localStorage.setItem("key", JSON.stringify(contentBasket));
*/
