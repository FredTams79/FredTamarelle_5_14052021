////------ texte confirmation commande + prénom + prix total + n° cde -------/////
///*** renvoie la valeur de la clé correspondante ***///
const formulaireData = JSON.parse(localStorage.getItem("formulaireData"));
console.log("Confirmation Cde : ");
//console.log(formulaireData.firstName);
const formulaireId = localStorage.getItem("formulaireId");
console.log("Confirmation Id : ");
console.log(formulaireId);
const totalPriceCde = JSON.parse(localStorage.getItem("totalPriceCde"));
console.log("Confirmation Total Prix Cde : ");
console.log(totalPriceCde);

if (formulaireId == null || formulaireData.firstName == null) {
  // Message d'erreur si commande non définie
  const erreurServeurCde = () => {
    if (
      window.confirm(`Erreur : il n'y a pas de commande encore validée !
      Veuillez revenir à la page d'acceuil en cliquant sur "OK" svp`)
    ) {
      window.location.href = "index.html";
    } else {
      window.location.href = "index.html";
    }
  };
  erreurServeurCde();
} else {
  const textConfirmationCde = document.querySelector("#textConfirmationCde");
  textConfirmationCde.innerHTML = `<h3 class="border-0">
          Merci&nbsp;
          <span class="font-weight-bold text-info">${formulaireData.firstName}</span
          >&nbsp;pour votre achat !&nbsp;
          <span class="badge badge-primary badge-pill ml-3"
            ><i class="fas fa-dolly-flatbed"></i
          ></span>
        </h3>
        <h4 class="border-0">
          Votre commande n°&nbsp;<span class="font-weight-bold text-info"
            >${formulaireId}</span
          >&nbsp;d'un montant total de :&nbsp;<span
            class="font-weight-bold text-info"
            >${totalPriceCde}</span
          >
        </h4>
        <h4 class="border-0 mb-3">
          a bien été prise en compte, vous recevrez un e-mail de confirmation
          ainsi que le délais de livraison.
        </h4>
        <a href="index.html">
          <button
            id="returnAcceuil"
            class="intro-button mx-auto btn btn-primary btn-xl btn-text h-25"
            type="submit"
            value="Valider"
          >
            <i class="fas fa-home"></i>&nbsp;&nbsp;Revenir à la page d'accueil !
          </button></a
        >`;

  ///*** Supprimer le Panier et le formulaire du local storage ***///
  function clearPanierId(c) {
    localStorage.removeItem(c);
  }
  clearPanierId("furniture");
  clearPanierId("formulaireData");
  clearPanierId("formulaireId");
  clearPanierId("totalPriceCde");
}
