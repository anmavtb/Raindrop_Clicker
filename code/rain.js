/*
var div = document.querySelector('#life');
var left = 0;
var updateleft = function() {
    left=left+10
    if (left>700) {
        left=700;
    }
    div.style.left= left+"px";
}
setInterval(updateleft, 60);
*/


/*
var dive = document.querySelector('#life3');
var left = 0;
var updatelefte = function () {
    left = left + 10;
    if (left>500) {
        left = 500;
    }
    dive.style.left = left+"px";
}
setInterval(updatelefte, 60);
*/

var demande = 5;
var monnaie = 100;
var finit = false;
var position = 930;
var fonctionPrete = 0;

/* Perso 2 qui court */
var dive = document.querySelector('#life2');
var left = 0;
var updatelefte = function () {
        left = left + 10;
        if (left > position) {
            left = position;
            fonctionPrete++; /* fonctionPrete + 1 quand l'animation est terminée */
        }
        dive.style.left = left + "px";
        if (fonctionPrete >= 1) { /* Activé dès que l'animation se termine pour la première fois */
            if (finit === false) {
                recupEau(demande, monnaie); /* Récupération de l'eau et payement */
            } else if (finit === true) { /* Activé dès que la récupération d'eau et le payement ont été faits */
                position = 1950;
                setInterval(updatelefte, 60);
                fonctionPrete = -1;
            }
        }
    if (fonctionPrete < 0) {
        left = left + 10;
        if (left > position) {
            left = position;
            fonctionPrete--; /* fonctionPrete - 1 quand l'animation est terminée */
        }
        dive.style.left = left + "px";
        if (fonctionPrete < -1) { /* Activé dès que le personnage sort de l'écran */
            alert("tu vois plus le monsieur");
        }
    }
};
setInterval(updatelefte, 60); /* 1er déplacement du perso */



/* Défiliement de la vie du mec qui court */
var life2 = document.getElementsByClassName('haha')[0];
setInterval(()=> {
    const computedStyle = getComputedStyle(life2);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) 
    life2.style.setProperty('--width',width - .1);
}, 30)


var life = document.getElementsByClassName('haha')[0]
setInterval(()=> {
    const computedStyle = getComputedStyle(life2)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) 
    life2.style.setProperty('--width',width - .1)
}, 20)


/*
var lifeIndicator = document.querySelector('#life div');
var pourcent=0;
addEventListener('timeupdate',function(){
console.log(this.duration);
console.log(this.currentTime);
});
*/