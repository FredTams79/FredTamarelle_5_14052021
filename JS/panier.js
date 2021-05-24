//// ALERT ////
//alert("page en cours de travaux");

const userBasketContent = JSON.parse(localStorage.getItem("furniture")); // convertir données JSON en objet JavaScript
console.log("Panier :");

// Affichage produit acheté du panier

//console.log(basketProductContent);
//si le panier est vide
if (userBasketContent === null) {
  const basketNull = `
  <div class="table-responsive-sm bg-white my-5 mx-5 py-3 text-center text-primary text-uppercase font-weight-bold"><div>Votre panier est vide</div></div>`;
  basketProductContent.innerHTML = basketNull;
} else {
  const basketProductContent = document.querySelector("#basketProductContent");
  console.log(userBasketContent);
  userBasketContent.forEach((panier, index) => {
    basketProductContent.innerHTML =
      panier.name + " : " + panier.price / 100 + " €";
    console.log(panier);
  });
}
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
  <div class="table-responsive-sm bg-white my-5 mx-5 text-center">
  <table class="table">
    <thead>
    <tr class="text-primary font-weight-bold text-uppercase">
      <th scope="col"><i class="fas fa-shopping-basket"></i></th>
      <th scope="col" colspan="2">Produit(s)</th>
      <th scope="col">Vernis</th>
      <th scope="col">Prix</th>
      <th scope="col">Supprimer</th>
    </tr>
    </thead>
    <tbody>
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
