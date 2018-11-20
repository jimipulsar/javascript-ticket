/* km da percorrere */
var km = prompt("Quanti km devi percorrere?");

var costo_biglietto = 0.21 * km;

console.log(costo_biglietto);


/* eta richiesta */

var eta = prompt("Qual è la tua età?");

console.log(eta);

/* Prezzo scontato per under 18 */

if (eta < 18 ) {
  var prezzoscontato = costo_biglietto * 0.8;
  prezzoscontato = prezzoscontato.toFixed(2);
  alert("Il totale da pagare ammonta a euro " + prezzoscontato);

}

/* Prezzo scontato per under 18 */

else if (eta > 65) {
  var prezzoscontato = costo_biglietto * 0.6;
  prezzoscontato = prezzoscontato.toFixed(2);
  alert("Il totale da pagare ammonta a euro " + prezzoscontato);
}

else {
  costo_biglietto = costo_biglietto.toFixed(2);
  alert("Il totale da pagare ammonta a euro " + costo_biglietto);
}
