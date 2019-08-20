var score = 0;
var elem;
var pos;
var prixgoutteauto = 100;
var argent = 1000;
var taillenuage= 400;
var getNuage = document.getElementById("nuage");
var createDivGoute = document.createElement("div");

class goute{
    constructor(random) {
        this.random = random;
    this.createDivGoute = document.createElement("div");
    this.top = 60;
    this.gouteInterval;
    this.createGoute = ()=>{
        this.createDivGoute.style.width = "100px";
        this.createDivGoute.style.height = "100px";
        this.createDivGoute.className = "gouteDeau";
        this.createDivGoute.background = `url('../images/Goutte_d'eau.png')`;
        this.createDivGoute.backgroundRepeat = "no-repeat";
        this.createDivGoute.backgroundPosition = "center";
        this.createDivGoute.style.right = `${this.random}%`;
        this.createDivGoute.style.top = `${this.top}%`;
        getNuage.appendChild(this.createDivGoute);
        this.gouteInterval = setInterval(this.deplacementGoute, 40);
    };
    
    this.deplacementGoute = ()=>{
        this.createDivGoute.style.top = `${this.top}%`;
        
        this.top +=1;
        if(this.top >= 120){
            clearInterval(this.gouteInterval);
            this.createDivGoute.parentNode.removeChild(this.createDivGoute);
           }
    }
    this.createGoute();
  }
}




document.getElementById("affichage").innerHTML = score + " gouttes";

function clickBouton() {
    var random = Math.floor(Math.random()*20)+30;
    new goute(random);
    elem = document.getElementById("gout");
    pos = 200;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos >= 550) {
            clearInterval(id);
        } else {
            pos += 10;
            elem.style.top = pos + 'px';
        }
    }
    niveauEau();
    console.log(random);
}



function autoClicker() {

     document.getElementById("argent").innerHTML = "Argent = " + (argent-prixgoutteauto) +"€";
       document.getElementById("goutteauto").innerHTML = " goutteauto- " + Math.round(prixgoutteauto) + "€";
    prixgoutteauto++
    
    setInterval(clickBouton,1000);
    
    
}

function getMulti() { 
    
document.getElementById("nuageplusgrand");
document.getElementById("nuage");
nuage.style.width=taillenuage+"px";
taillenuage+=50;   
clickBouton();
}


