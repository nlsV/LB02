var gewicht = 0;
var trinkmenge = 0;
var alkohol = 0;
var vol = 0;
var zeit = 0;
var promille = 0;
var g = 0;
var i = 0;
var löschen = "";

function rechnen() {

    var gewicht = document.eingabe.igewicht.value;
    var vol = document.eingabe.iprozent.value;
    var trinkmenge = document.eingabe.imenge.value;
    var zeit = document.eingabe.izeit.value;

    var alkohol = trinkmenge * vol / 100 * 0.8;

    if (i == 1) {
        var g = 0.7;
    } else if (i == 2) {
        var g = 0.6
    };
    var promille = alkohol / (gewicht * g) * 0.9 - (0.1 * zeit);
    if (promille < 0) {
        promille = 0
    };
    if (promille > 0.3) {
        popup.style.display = "block";
        alert("Du darfst nicht fahren!")
    } else if (promille < 0.3) {
        popup.style.display = "block";
        alert("Du darfst ohne weiteres fahren.")
    };

    document.eingabe.ipromille.value = Math.round(promille * 100) / 100;
}