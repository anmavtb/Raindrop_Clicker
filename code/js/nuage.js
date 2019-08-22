var score = 0;
var elem;
var pos;
var prixgoutteauto = 1000;
prixNuage = 500;
var argent = 1000;
var taillenuage = 400;
var getNuage = document.getElementById("nuage");
var createDivGoute = document.createElement("div");
var topnuage = -10;
var gouttefoisdeux = 1;
nuage.style.left = (750 + "px");
nuage.style.top = (0 + "px");



class goute{
    constructor(random) {
        this.random = random;
        this.createDivGoute = document.createElement("div");
        this.top = 60;
        this.gouteInterval;
        this.createGoute = () => {
            this.createDivGoute.style.width = "100px";
            this.createDivGoute.style.height = "100px";
            this.createDivGoute.className = "gouteDeau";
            this.createDivGoute.background = `url('/images/Goutte_d'eau.png')`;
            this.createDivGoute.backgroundRepeat = "no-repeat";
            this.createDivGoute.backgroundPosition = "center";
            this.createDivGoute.style.right = `${this.random}%`;
            this.createDivGoute.style.top = `${this.top}%`;
            getNuage.appendChild(this.createDivGoute);
            this.gouteInterval = setInterval(this.deplacementGoute, 40);
        };
        this.deplacementGoute = ()=> {
            this.createDivGoute.style.top = `${this.top}%`;
            this.top += 5;
            if(this.top >= 120) {
                clearInterval(this.gouteInterval);
                this.createDivGoute.parentNode.removeChild(this.createDivGoute);
            }
        }
        this.createGoute();
    }
}



function clickBouton() {
    for (i = 0; i < gouttefoisdeux; i++) {
        var random = Math.floor(Math.random() * 20) + 30;
        new goute(random);
        niveauEau();
    }
}



function autoClicker() {
    if (argent >= prixgoutteauto) {
        argent -= prixgoutteauto;
        prixgoutteauto *= 1.5;
        document.getElementById("argent").innerHTML = "Argent = " + argent + "€";
        document.getElementById("goutteauto").innerHTML = "Chaman | " + Math.round(prixgoutteauto) + "€";
        setInterval(clickBouton, 1000);
    }
}



function getMulti() {
    if (argent >= prixNuage) {
        argent -= prixNuage;
        prixNuage *= 1.2;
        taillenuage += 10;
        topnuage += 10;
        document.getElementById("nuageplusgrand");
        document.getElementById("nuage");
        nuage.style.top=topnuage + "px";
        nuage.style.width=taillenuage + "px";
        gouttefoisdeux += 1;
        document.getElementById("argent").innerHTML = "Argent = " + argent + "€";
        document.getElementById("nuageplusgrand").innerHTML = "Nuage | " + Math.round(prixNuage) + "€";
    }
}