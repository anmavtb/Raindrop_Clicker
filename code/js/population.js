var difficult = 1;
var posPerso = 0;
var posFinale = 930;
var pers = document.getElementById("perso");
var fonctionT = 0;
var priseEau = false;


function Personnage(demande, monnaie, vie, image) {
    this.demande = demande; // Nombre de gouttes demandées //
    this.monnaie = monnaie; // Argent qu'il va payer //
    this.vie = vie; // Temps qu'il va rester //
    this.image = image; // Sa tête //
}

var perso1 = new Personnage(2, 20, 150, "images/haha.gif"); // Naufragé //
var perso2 = new Personnage(10, 100, 100, "images/haha2.gif"); // Taliban //
var perso3 = new Personnage(50, 500, 50, "images/haha3.gif"); // Femme //

/*
alert("perso1 : " + perso1.demande + " | " + perso1.monnaie + " | " + perso1.vie + " | " + perso1.image);
alert("perso2 : " + perso2.demande + " | " + perso2.monnaie + " | " + perso2.vie + " | " + perso2.image);
alert("perso3 : " + perso3.demande + " | " + perso3.monnaie + " | " + perso3.vie + " | " + perso3.image);
*/



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



var avancement = function () {
    posPerso += 10;
    if (posPerso >= posFinale) {
        posPerso = posFinale;
        fonctionT = 1;
        Passage();
    } else {
        pers.style.left = posPerso + "px";
    }
};



var perteVie = function () {
    if (perso1.vie === 0) {
        
    }
};



function Passage(perso) {
    document.getElementById("perso");
    man.style.backgroundImage = "perso.image";
    if (document.getElementById("perso").classList.contains("disabled")) { // Rend visible le personnage si il ne l'est pas
        perso.style.display = "contents";
        document.getElementById("perso").classList.toggle("disabled");
    } else {
        setInterval(avancement, 60);
        if (fonctionT >= 1) {
            clearInterval(avancement);
            if (priseEau === true) {
                posFinale = 1950;
                setInterval(avancement, 60);
                if (fonctionT >= 2) {
                    clearInterval(avancement);
                    document.getElementById("perso").classList.toggle("disabled"); // Rend invisible le personnage
                    perso.style.display = "disabled";
                    pers.style.left = 0 + "px";
                    Game();
                }
            } else {
                recupEau(perso.demande, perso.monnaie);
            }
        }
    }
}



function Game() {
    switch (getRandomInt(difficult)) {
    case 0:
        console.log("switch bon");
        Passage(perso1);
        break;
    case 1:
        Passage(perso2);
        break;
    case 2:
        Passage(perso3);
        break;
    default:
        alert("Y'a un problème Billy !");
    }
}



Game();