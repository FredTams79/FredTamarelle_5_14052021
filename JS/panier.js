const userBasketContent = JSON.parse(localStorage.getItem("furniture")); // convertir données JSON en objet JavaScript
console.log("Panier :");
console.log(userBasketContent);

/////******* Affichage Panier vide quand zéro produit commandé ******/////
const basketProductContent = document.querySelector("#basketProductContent");
const basketNull = document.querySelector("#basketNull");

//récupération du prix total commande
// Comment éviter erreur null quand panier vide sur innerText ????
let totalPriceConfirmation = document.getElementById("totalPrice").innerText;
console.log("total prix pour page confirmation : " + totalPriceConfirmation);

//si le panier est vide
if (userBasketContent === null) {
  console.log("je suis vide");
  basketNull.innerHTML = `
  <div class="h2 my-5 mx-5 py-3 text-center text-primary text-uppercase font-weight-bold"><div>Votre panier est vide</div></div>`;

  // ne pas afficher le formulaire si panier vide
  document.getElementById("formulaire").style.opacity = 0;
} else {
  userBasketContent.forEach((panier, index) => {
    ////******** ajout des produits achetés *********////
    let productLine = document.createElement("tr");

    productLine.innerHTML = `
      <td><img src="${panier.imageUrl}" class="img-thumbnail w-25 mr-3"></img>${
      panier.name
    }</td>
      <td scope="col" class="w-25">${panier.price / 100} €</td>
      <td><button id="btnSupprimer"><i class="fas fa-trash-alt"></i></button></td>`;
    basketProductContent.appendChild(productLine);

    console.log(panier);

    ////******** gestion du bouton supprimer *********////
    document.getElementById("btnSupprimer").onclick = () => {
      alert("bientôt mis en place !");
    };

    ////********* gérer gestion si même produit commandé *******/////
    //à mettre en place ultérieurement
    ////********* quantité produit *******/////
    //à mettre en place ultérieurement

    ////******* Calcul prix total panier  ******/////

    let priceAdditionnal = [];

    // récupérer prix de chaque produit
    for (p = 0; p < userBasketContent.length; p++) {
      priceAdditionnal.push(userBasketContent[p].price / 100);
    }
    console.log(
      "prix de tout les produits a additionner : " + priceAdditionnal
    );

    // additionner les prix avec la méthode .reduce
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totalPrice = priceAdditionnal.reduce(reducer, 0);

    // Affichage produit acheté du panier dans HTML
    let affichageTotalPrice = document.querySelector("#totalPrice");
    affichageTotalPrice.innerText = totalPrice + " €";

    console.log("prix total : " + affichageTotalPrice.innerText);
    console.log("prix total afficher tableau panier = " + totalPrice + " €");

    //vider le panier une fois commande validée
    localStorage.removeItem("userBasketContent");
  });
}

////--------------- FORMULAIRE ----------------/////

////vérif prénom + RegExp = crée un objet expression rationnelle pour la reconnaissance d'un modèle dans un texte.
let valueFirstName = document.getElementById("firstName");
let alertFirstName = document.getElementById("alert-firstName");
let form = document.querySelector("form");
console.log("prénom formulaire 01 : " + valueFirstName.value);

function validFirstName(firstName) {
  const regfirstName = new RegExp(
    "^([a-zA-Z\u00C0-\u00FF]+([-]{1}[a-zA-Z\u00C0-\u00FF]+)*){3,30}$",
    "g"
  ); //permet les accents : [a-zA-Z\u00C0-\u00FF]

  return regfirstName.test(firstName.toLowerCase()); // tolowercase() = retourne la chaîne de caractères courants en minuscules.
}

form.addEventListener("input", () => {
  //On vérifie le prénom et on affiche un message d'erreur si non valide
  if (validFirstName(valueFirstName.value) === false) {
    alertFirstName.classList.remove("d-none");
    alertFirstName.innerHTML = "<p>Veuillez écrire un prénom valide svp !</p>";
  } else {
    //Si valide, on supprime le message d'erreur
    alertFirstName.classList.add("d-none");
  }
  console.log("prénom formulaire 02 : " + valueFirstName.value);
});

////vérif Nom + RegExp.
let valueLastName = document.getElementById("lastName");
let alertLastName = document.getElementById("alert-lastName");
form = document.querySelector("form");

function validLastName(lastName) {
  const regLastName = new RegExp(
    "^([a-zA-Z\u00C0-\u00FF]+([ |-]{1}[a-zA-Z\u00C0-\u00FF]+)*[a-zA-Z]{0,2}([ |']{1}[a-zA-Z\u00C0-\u00FF]+)*){3,30}$",
    "g"
  );

  return regLastName.test(lastName.toLowerCase()); // tolowercase() = retourne la chaîne de caractères courants en minuscules.
}

form.addEventListener("input", () => {
  //On vérifie le  nom et on affiche un message d'erreur si non valide
  if (validLastName(valueLastName.value) === false) {
    alertLastName.classList.remove("d-none");
    alertLastName.innerHTML = "<p>Veuillez écrire un nom valide svp !</p>";
  } else {
    //Si valide, on supprime le message d'erreur
    alertLastName.classList.add("d-none");
  }
});

////vérif adresse e-mail + RegExp = crée un objet expression rationnelle pour la reconnaissance d'un modèle dans un texte.
let valueEmail = document.getElementById("email");
let alertEmail = document.getElementById("alert-email");
form = document.querySelector("form");

function validEmail(eMail) {
  const regEmail = new RegExp(
    "^[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*[.]{1}[a-z]{2,6}$",
    "i"
  );

  return regEmail.test(eMail.toLowerCase()); // tolowercase() = retourne la chaîne de caractères courants en minuscules.
}

form.addEventListener("input", () => {
  //On vérifie l'eMail et on affiche un message d'erreur si non valide
  if (validEmail(valueEmail.value) === false) {
    alertEmail.classList.remove("d-none");
    alertEmail.innerHTML =
      "<p>Veuillez écrire une adresse mail valide svp !</p>";
  } else {
    //Si valide, on supprime le message d'erreur
    alertEmail.classList.add("d-none");
  }
});

////vérif adresse + RegExp.
let valueAddress = document.getElementById("address");
let alertAddress = document.getElementById("alert-address");
form = document.querySelector("form");

function validAddress(address) {
  const regAddress = new RegExp(
    "^([a-zA-Z0-9\u00C0-\u00FF]+([ |-]{1,3}[a-zA-Z0-9\u00C0-\u00FF]+)*[a-zA-Z]{0,2}([ |']{1}[a-zA-Z0-9\u00C0-\u00FF]+)*){3,50}$",
    "g"
  );

  return regAddress.test(address.toLowerCase()); // tolowercase() = retourne la chaîne de caractères courants en minuscules.
}

form.addEventListener("input", () => {
  //On vérifie l'adresse  et on affiche un message d'erreur si non valide
  if (validAddress(valueAddress.value) === false) {
    alertAddress.classList.remove("d-none");
    alertAddress.innerHTML =
      "<p>Veuillez écrire une adresse et un code postal valide svp !</p>";
  } else {
    //Si valide, on supprime le message d'erreur
    alertAddress.classList.add("d-none");
  }
});

////vérif ville + RegExp.

let valueCity = document.getElementById("city");
let alertCity = document.getElementById("alert-city");
form = document.querySelector("form");

function validCity(city) {
  const regCity = new RegExp(
    "^([a-zA-Z\u00C0-\u00FF]+([ |-]{1}[a-zA-Z\u00C0-\u00FF]+)*[a-zA-Z]{0,2}([ |']{1}[a-zA-Z\u00C0-\u00FF]+)*){3,30}$",
    "g"
  );

  return regCity.test(city.toLowerCase()); // tolowercase() = retourne la chaîne de caractères courants en minuscules.
}

form.addEventListener("input", () => {
  //On vérifie l'adresse  et on affiche un message d'erreur si non valide
  if (validCity(valueCity.value) === false) {
    alertCity.classList.remove("d-none");
    alertCity.innerHTML = "<p>Veuillez écrire une ville valide svp !</p>";
  } else {
    //Si valide, on supprime le message d'erreur
    alertCity.classList.add("d-none");
  }
});

///gestion du formulaire

const postData = {
  contact: {},
  products: [],
};

for (productId of userBasketContent) {
  postData.products.push(productId._id);
}

const formulaireData = JSON.parse(localStorage.getItem("formulaireData"));
const formulaireId = localStorage.getItem("formulaireId");

//On récupère les informations du formulaire
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let formulaire = $("form").serializeArray();
  postData.contact = {
    firstName: formulaire[0].value,
    lastName: formulaire[1].value,
    email: formulaire[2].value,
    address: formulaire[3].value,
    city: formulaire[4].value,
  };

  //Envoie des données avec la requête POST et récupérer un numéro ID
  fetch("http://localhost:3000/api/furniture/order", {
    method: "POST", // envoyer les données
    headers: {
      // donnent un peu plus d’information sur notre requête
      Accept: "application/json", //  avec la valeur application/json
      "Content-Type": "application/json", // avec la valeur  application/json
    },
    body: JSON.stringify(postData), //  les données qu’on souhaite envoyer  (en  dynamique)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("order Id : " + data.orderId);
      //mettre l'ID dans le local storage
      localStorage.setItem("formulaireId", data.orderId);
    });

  //////récupérer les données pour les mettre dans le local storage/////
  formulaireData.push(postData.contact);
  localStorage.setItem("formulaireData", JSON.stringify(formulaireData));
  console.log("Confirmation Cde : ");
  console.log(formulaireData);

  // Message confirmation commande
  const confirmationFormulaire = () => {
    if (
      window.confirm(`Votre commande a bien été enregistrée
Pour consulter la confirmation appuyer sur "OK"`)
    ) {
      window.location.href = `./confirmation.html?id=${formulaireId}&name=${postData.contact.firstName}&total=${totalPriceConfirmation}`;
    }
  };

  confirmationFormulaire();
});

//////récupérer les données pour les mettre dans le local storage/////
// renvoie la valeur de la clé correspondante
if (localStorage.getItem("formulaireData")) {
  console.log("formulaire à remplir");
} else {
  console.log("création de la commande");
  // mettre l'objet postData dans le local storage
  let formulaireEmpty = [];
  localStorage.setItem("formulaireData", JSON.stringify(formulaireEmpty));
}
