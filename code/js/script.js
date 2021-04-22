let dropsAmount = 1000,
    maxWaterLevel = 1000,
    money = 10000,
    moneyMultiplier = 2,
    priceTank = 10,
    charNumber = 0;

let possibleVillagers = [["villager_1.gif", 10], ["villager_2.gif", 25], ["villager_3.gif", 75]];
let allVillagers = [];
let villagerRank = [];
let clone;

let elem = document.getElementById("animVillager");

let id = null;
let pos = 0;
let maxPos = 600;

let Villager = function (image, demand) {
    this.image = image;
    this.demand = demand;
    this.money = (Math.round(this.demand * moneyMultiplier));
    this.walk = function (clone) {
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (pos == maxPos) {
                clearInterval(id);
                maxPos -= 100;
                if (pos == 600) {
                    getWater(allVillagers);
                }
            } else {
                pos += 5;
                clone.style.left = pos + 'px';
            }
        }
    }
}

function update() {
    document.getElementById('dropsAmount').innerHTML = dropsAmount + " / " + maxWaterLevel;
    document.getElementById('money').innerHTML = "Argent : " + money + " €";
    document.getElementById("waterLevel").style.height = (100 - ((dropsAmount * 100) / maxWaterLevel)) + "%";
    document.getElementById("upgradeTank").innerHTML = "Améliorer Réservoir - " + priceTank + " €";
};

function waterLevel() {
    if (dropsAmount < maxWaterLevel) {
        dropsAmount++;
        update();
    }
};

function getWater(allVillagers) {
    if (allVillagers.length != 0) {
        let actualVillager = allVillagers[0];
        if (actualVillager.demand !== 0 && dropsAmount >= actualVillager.demand) {
            dropsAmount -= actualVillager.demand;
            money += actualVillager.money;
            suprVillager(allVillagers);
            update();
        } else {
            console.log(`Pas assez d'eau, il faut au moins ${actualVillager.demand} gouttes.`);
        };
    } else {
        console.log("Il n'y a aucun villageois.");
    }

};

function createVillager(allVillagers) {
    pos = 0;
    if (maxPos >= 100) {
        let thisVillager = randomVillager();
        allVillagers.push(new Villager(thisVillager[0], thisVillager[1]));
        clone = document.createElement("div");
        clone.style.width = "100px";
        clone.style.height = "100px";
        clone.style.position = "absolute";
        clone.style.backgroundImage = "url('images/" + thisVillager[0] + "')";
        clone.style.backgroundPosition = "center";
        clone.style.backgroundSize = "cover";
        elem.appendChild(clone);
        allVillagers[charNumber].walk(clone);
        charNumber++;
    } else {
        console.log("Pas de place");
    }
};

function randomVillager() {
    let randomNumber = Math.floor(Math.random() * possibleVillagers.length);
    return (possibleVillagers[randomNumber]);
};

function suprVillager(allVillagers) {
    allVillagers.splice(0, 1);
    charNumber--;
    elem.firstChild.remove();
    console.log(elem.childNodes.length);
    maxPos = 600;
    for (let i = 0; i < elem.childNodes.length; i++) {
        console.log("--[" + i + "]---");
        console.log(elem.childNodes[i]);
        pos = parseInt(elem.childNodes[i].style.left);
        console.log(pos, maxPos);
        while (elem.childNodes[i].style.left != (maxPos + "px")) {
            pos += 5;
            elem.childNodes[i].style.left = pos + 'px';
        }
        maxPos -= 100;
        console.log(elem.childNodes[i].style.left);
        console.log("--[" + i + "]---");
    }
}

function upgradeTank() {
    if (money >= priceTank) {
        money -= priceTank;
        maxWaterLevel *= 2;
        priceTank *= 2;
        update();
    } else {
        console.log("Pas assez d'argent.");
    }
}