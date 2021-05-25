//// ALERT ////
//alert("page en cours de travaux");

const userBasketContent = JSON.parse(localStorage.getItem("furniture")); // convertir données JSON en objet JavaScript
console.log("Panier :");
console.log(userBasketContent);
console.log(
  "prix produit 1 ou [0] : " + userBasketContent[0].price / 100 + " €"
);

////******* Calcul prix total panier  ******/////

let priceAdditionnal = [];
/*
userBasketContent.price.forEach((item) => {
  prix.push(item);
});
*/
// récupérer prix de chaque produit
for (p = 0; p < userBasketContent.length; p++) {
  priceAdditionnal.push(userBasketContent[p].price / 100);
}
console.log("prix de tout les produits a additionner : " + priceAdditionnal);

// additionner les prix avec la méthode .reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPrice = priceAdditionnal.reduce(reducer, 0);

// Affichage produit acheté du panier dans HTML
let affichageTotalPrice = document.querySelector("#totalPrice");
affichageTotalPrice.innerText = totalPrice + " €";

console.log("prix total : " + affichageTotalPrice.innerText);
console.log("prix total afficher tableau panier = " + totalPrice + " €");

/*
let total = 0;
let affichageTotalPrice = document.querySelector("#totalPrice");
affichageTotalPrice.innerText = totalPrice + " €";
total = parseInt(priceAdditionnal / 100, 10);
*/

//////********* ??? gérer gestion même produit commandé ??? *******///////

/////******* Affichage Panier vide quand zéro produit commandé ******/////

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
      <td><button id="btnSupprimer"><i class="fas fa-trash-alt"></i></button></td></tr>`;
    console.log(panier);
  });
}

//////////***** FORMULAIRE ******//////

document
  .getElementById("confirmFormulaire")
  .addEventListener("submit", (confirmFormulaire) => {
    confirmFormulaire.preventDefault();

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
    console.log("confirmation formulaire :");
    console.log(confirmFormulaire);

    // Message confirmation commande
    const confirmationFormulaire = () => {
      if (
        window.confirm(`Votre commande a bien été enregistrée
Pour consulter la confirmation appuyer sur "OK"`)
      ) {
        window.location.href = "confirmation.html";
      }
    };

    confirmationFormulaire();
    console.log("confirmation bouton formulaire :");
    console.log(confirmationFormulaire);
  });

//Envoie des données avec la requête POST
function confirmFormulaire(e) {
  e.preventDefault();
  fetch("http://localhost:3000/api/furniture/order", {
    method: "POST", // envoyer les données
    headers: {
      // donnent un peu plus d’information sur notre requête
      Accept: "application/json", //  avec la valeur application/json
      "Content-Type": "application/json", // avec la valeur  application/json
    },
    body: JSON.stringify(postData), //  les données qu’on souhaite envoyer  (en  dynamique)
  }).then((response) => response.json());
  console.log("response : " + response);
}

////********* Lignes ecrites pour aide ou info à vérifier et à supprimer ********//////

//.then((value) => { document.getElementById("").innerText = value.postData.text;

// document.getElementById("form").addEventListener("submit", confirmFormulaire);

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

//////******** gestion du bouton supprimer    *********//////
/*
        //Mise en place de la suppression de l'élément relatif au bouton "supprimé" cliqué
        ({
          let d = 0;
         //remarque : '<button id="btnSupprimer-' + d + '" value="' + d + '" class="btn btn-warning"><i class="fa fa-trash" aria-hidden="true"></i> </button>';
        
        let btnSupprimer = document.getElementById('btnSupprimer-' + d);
        btnSupprimer.onclick = function () {
            userBasketContent.splice(btnSupprimer.value, 1);
            localStorage.setItem("userBasketContent", JSON.stringify(userBasketContent));
            document.location.reload(true);
        if (userBasketContent.length === 0) {
                localStorage.removeItem("userBasketContent");
            }
          };
          d++;
        })
*/
