/*
var div = document.querySelector('#life');
var left = 0
var updateleft = function(){

    left=left+10
    if (left>700) {
        left=700
    } 
    div.style.left= left+"px"
 
} 
setInterval(updateleft,60)*/

 

/*var dive = document.querySelector('#life3');
var left = 0
var updatelefte = function (){

    left=left+10
    if (left>500) {
        left=500
    } 
    dive.style.left= left+"px"
} 
setInterval(updatelefte,60)*/



var dive = document.querySelector('#life2');
var left = 0;
var updatelefte = function () {
    left = left + 10;
    if (left > 800) {
        left = 800;
    }
    dive.style.left = left + "px";
} 
setInterval(updatelefte, 60);


var life2 = document.getElementsByClassName('haha') [0]
setInterval(()=> {
    const computedStyle = getComputedStyle(life2);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) 
    life2.style.setProperty('--width',width - .1);
},20)

var life = document.getElementsByClassName('haha') [0]
setInterval(()=> {
    const computedStyle = getComputedStyle(life2)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) 
    life2.style.setProperty('--width',width - .1)
},20)


/*var lifeIndicator = document.querySelector('#life div');
var pourcent=0;
addEventListener('timeupdate',function(){
console.log(this.duration);
console.log(this.currentTime);
});*/