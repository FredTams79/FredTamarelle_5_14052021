//// FORMULAIRE /////
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

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

form.addEventListener("input", function () {
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
