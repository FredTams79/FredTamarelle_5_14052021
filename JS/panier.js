//// ALERT ////
//alert("page en cours de travaux");

const userBasketContent = JSON.parse(localStorage.getItem("furniture")); // convertir données JSON en objet JavaScript
console.log("localStoragePanier");
console.log(userBasketContent);

// Affichage produit acheté du panier
const basketProductContent = document.querySelector("#basketProductContent");
//console.log(basketProductContent);
const displayBasketContent = [];
//si le panier est vide
if (userBasketContent === null) {
  const basketNull = `
  <div class="table-responsive-sm bg-white my-5 mx-5 py-3 text-center text-primary text-uppercase font-weight-bold"><div>Votre panier est vide</div></div>`;
  basketProductContent.innerHTML = basketNull;
} else {
  // affichage des données localStorage
  // boucle pour ajout produit ligne par ligne
  for (i = 0; i < userBasketContent.length; i++) {
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
      <th scope="row">${userBasketContent.length[i]}</th>
      <td>${userBasketContent.length[i].data.imageUrl}</td>
      <td>${userBasketContent.length[i].data.name}</td>
      <td>${userBasketContent.length[i].choixVarnish}</td>
      <td>${userBasketContent.length[i].data.price / 100} €</td>
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
}

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
