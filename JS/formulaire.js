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
