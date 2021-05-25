//// FORMULAIRE /////

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
  console.log("test mail : " + eMail);
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

////
const postData = {
  contact: {},
  products: ["5be9cc611c9d440000c1421e"],
};

//On récupère les informations du formulaire
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let formulaire = $("form").serializeArray();
  postData.contact = {
    firstName: formulaire[0].value,
    lastName: formulaire[1].value,
    address: formulaire[2].value,
    city: formulaire[3].value,
    email: formulaire[4].value,
  };
  postData.products.push();
  console.log(formulaire);
});
