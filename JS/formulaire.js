//// FORMULAIRE /////

//récupération du prix total commande

let totalPriceConfirmation = document.getElementById("totalPrice").innerText;
console.log("total prix pour page confirmation : " + totalPriceConfirmation);

////vérif adresse e-mail + RegExp = crée un objet expression rationnelle pour la reconnaissance d'un modèle dans un texte.
let valueEmail = document.getElementById("email");
let alertEmail = document.getElementById("alert-email");
let form = document.querySelector("form");

function validEmail(eMail) {
  const reg = new RegExp(
    "^[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*[.]{1}[a-z]{2,6}$",
    "i"
  );

  return reg.test(eMail.toLowerCase()); // tolowercase() = retourne la chaîne de caractères courants en minuscules.
  console.log("test mail : ");
  console.log(eMail);
}

form.addEventListener("input", () => {
  //On vérifie l'adresse  et on affiche un message d'erreur si non valide
  if (validEmail(valueEmail.value) === false) {
    alertEmail.classList.remove("d-none");
    alertEmail.innerHTML =
      "<p>Veuillez écrire une adresse mail valide svp !</p>";
  } else {
    //Si valide, on supprime le message d'erreur
    alertEmail.classList.add("d-none");
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
