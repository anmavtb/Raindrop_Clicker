var prixRecipient = 100;
var finit = false;

/* % de niveau d'eau inversé  */
var lvlEauInv = 100;

/* Niveau d'eau maximal du récipient */
var lvlEauMax = 10;

/* Nombre de gouttes dans le récipient */
var nbrGouttes = 0;

var posEau = document.getElementById("niveauEau");


/* Fait "monter" le niveau d'eau d'un certain pourcentage */
function niveauEau() {
    if (nbrGouttes < lvlEauMax) {
        nbrGouttes ++;
        lvlEauInv = (100 - ((nbrGouttes * 100) / lvlEauMax));
        document.getElementById('nbrGouttes').innerHTML = nbrGouttes + " / " + lvlEauMax;
        posEau.style.height = lvlEauInv + "%";
    }
}

/* Amélioration de la taille du récipient */
function upRecipient() {
    if (argent >= prixRecipient) {
        argent -= prixRecipient;
        lvlEauMax += 10;
        prixRecipient *= 1.1;
        lvlEauInv = (100 - ((nbrGouttes * 100) / lvlEauMax));
        document.getElementById("nbrGouttes").innerHTML = nbrGouttes + " / " + Math.round(lvlEauMax);
        document.getElementById("argent").innerHTML = "Argent = " + Math.round(argent) + "€";
        posEau.style.height = lvlEauInv + "%";
        document.getElementById("upMenuRecipient").innerHTML = "Récipient | " + Math.round(prixRecipient) + "€";
    }
}

/* Récupération de l'eau par la population */
function recupEau(demande, monnaie) {
    if (demande !== 0 && nbrGouttes >= demande) {
        nbrGouttes -= demande;
        argent += monnaie;
        finit = true;
        lvlEauInv = (100 - ((nbrGouttes * 100) / lvlEauMax));
        document.getElementById('nbrGouttes').innerHTML = nbrGouttes + " / " + lvlEauMax;
        document.getElementById("argent").innerHTML = "Argent = " + Math.round(argent) + "€";
        posEau.style.height = lvlEauInv + "%";
        return finit;
    }
}