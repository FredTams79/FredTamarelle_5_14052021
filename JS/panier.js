//// ALERT ////
alert("page en cours de travaux");

// Lignes Panier
function basketLine(id, name, varnish, price, qte) {
  this.idArticle = id;
  this.nameArticle = name;
  this.varnishArticle = varnish;
  this.priceArticle = price;
  this.qteArticle = qte;
  /*this.addQte = function (qte) {
    this.qteArticle += qte;*/
  console.log(basketLine);
}
this.getPriceLine = function () {
  var resultat = this.priceArticle * this.qteArticle;
  return resultat;
};
