////------ texte confirmation commande + prénom + prix total + n° cde -------/////
///*** renvoie la valeur de la clé correspondante ***///
//Id commande
const formulaireId = localStorage.getItem("formulaireId");
//prénom du client
const formulaireData = JSON.parse(localStorage.getItem("formulaireData"));
//prix total commande
const totalPriceCde = JSON.parse(localStorage.getItem("totalPriceCde"));

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

  ///*** Effacer le Panier et tout le local storage ***///
  function clearPanierId(c) {
    localStorage.removeItem(c);
  }
  clearPanierId("furniture");
  clearPanierId("formulaireData");
  clearPanierId("formulaireId");
  clearPanierId("totalPriceCde");
}
