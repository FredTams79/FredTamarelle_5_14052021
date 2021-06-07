////********* Lignes ecrites pour aide ou info à vérifier et à supprimer ********//////

//---------- boucle pour ajout produit ligne par ligne ---------//

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
*/

/*

//Produit ajouter au local storage

contentBasket.push(?product?);
localStorage.setItem("key", JSON.stringify(contentBasket));
*/

//////******** gestion du bouton supprimer    *********//////
/*
        //Mise en place de la suppression de l'élément relatif au bouton "supprimé" cliqué
          let d = 0;
         //remarque : '<button id="btnSupprimer-${d}" value="${d}"></button>';
        
        let btnSupprimer = document.getElementById('btnSupprimer-' + d);
        btnSupprimer.onclick = function () {
            userBasketContent.splice(btnSupprimer.value, 1);
            localStorage.setItem("userBasketContent", JSON.stringify(userBasketContent));//Mise à jour du nouveau panier avec suppression de l'article
            document.location.reload();   //recharge la page
        if (userBasketContent.length === 0) {
                localStorage.removeItem("userBasketContent");
            }
          };
          d++;
*/
//function deleteFunction() {document.getElementById("btnSupprimer").deleteRow(0);}
//function deleteItem() {localStorage.removeItem("userBasketContent");}
//Supprimer un produit du panier :
//"removeArticle".addEventListener("click", (event) => {this.btnSupprimer();})

///***récupérer les données pour les mettre dans le local storage***///
// renvoie la valeur de la clé correspondante
/*if (localStorage.getItem("formulaireData")) {
  console.log("formulaire à remplir");
} else {
  console.log("création de la commande");
  // mettre l'objet postData dans le local storage
  let formulaireEmpty = [];
  localStorage.setItem("formulaireData", JSON.stringify(formulaireEmpty));
}
*/

//const params = new URLSearchParams(document.location.search);
//const firstNameCde = params.get("name");
//const totalPriceCde = params.get("total");

//----------Termes et Conditions-------------//
/*
let valueTermesConditions =
  document.getElementById("termes-conditions").checked;
let alertTermesConditions = document.getElementById("alert-termesConditions");
//form = document.querySelector("form");
console.log("termes - conditions : " + valueTermesConditions);

form.addEventListener("input", () => {
  //On vérifie l'adresse  et on affiche un message d'erreur si non valide
  if (valueTermesConditions === false) {
    alertTermesConditions.classList.remove("d-none");
    alertTermesConditions.innerHTML =
      "<p>Veuillez accepter les termes et conditions svp !</p>";
  } else {
    //Si valide, on supprime le message d'erreur
    alertTermesConditions.classList.add("d-none");
    alertTermesConditions = document.getElementById(
      "alert-termesConditions"
    ).disabled = true;
    console.log("termes - conditions true ?: " + alertTermesConditions);
  }
});*/
/*
if ($("input[name=termes-conditions]").is(":checked")) {
  alert("jQuery true");
} else {
  alert("jQuery false");
}*/

/*
  document.getElementById("test").onclick = function () {
    myCheckbox();
  };

  function myCheckbox() {
    //alertTermesConditions.classList.add("d-none");
    document.getElementById("test").innerText = "YOU CLICKED ME!";
  }


  //test termes et conditions
const btnCde = document.getElementById("termes-conditions").checked;

//On vérifie si la case termes et conditions est cochée
function myCheckbox() {
  if (btnCde == false) {
    //alert("Veuillez cocher la case svp !");
    document.getElementById("myCheckbox").classList.remove("d-none");
    document.getElementById("myCheckbox").innerHTML =
      "<p>Veuillez cocher la case svp !</p>";
  } else {
    document.getElementById("termes-conditions").onclick = function () {
      myCheckbox();
    };
    document.getElementById("myCheckbox").style.opacity = 0;
  }
  console.log("case coché : " + btnCde);
}
*/

///***case termes et conditions***///
/*const btnCde = document.getElementById("termes-conditions").checked;

//On vérifie si la case termes et conditions est cochée
function myCheckbox() {
  if (btnCde === false) {
    alert("Veuillez accepter les termes et conditions svp !");
  } else {
    btnCde = true;
  }
}
console.log("case coché : " + btnCde);
*/
