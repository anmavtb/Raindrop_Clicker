let dropsAmount = 0,
    maxWaterLevel = 100,
    money = 0,
    moneyMultiplier = 1,
    priceTank = 10,
    charNumber = 0;

let possibleVillagers = [["villager_1.gif", 10], ["villager_2.gif", 25], ["villager_3.gif", 75]];
let allVillagers = [];
let villagerRank = [];
let villagers = document.getElementById('villagers');
let clone;

let id = null;
let pos = 0;
let maxPos = 600;

function update() {
    document.getElementById('dropsAmount').textContent = dropsAmount + " / " + maxWaterLevel;
    document.getElementById('money').innerHTML = "Argent : " + money + " €";
    document.getElementById("waterLevel").style.height = (100 - ((dropsAmount * 100) / maxWaterLevel)) + "%";
    document.getElementById("upgradeTank").innerHTML = "Améliorer Réservoir - " + priceTank + " €";
};

// let Villager = function (image, demand) {
//     this.image = image;
//     this.demand = demand;
//     this.money = (Math.round(this.demand * moneyMultiplier));
// }

function randomVillager() {
    let randomNumber = Math.floor(Math.random() * possibleVillagers.length);
    return (possibleVillagers[randomNumber]);
};

function createVillager(allVillagers) {
    let thisVillager = randomVillager();
    allVillagers.push(new Villager(thisVillager[0], thisVillager[1]));

    clone = document.createElement("div");
    clone.className = "villager";
    villagers.appendChild(clone);

    let villagerText = document.createElement("div");
    villagerText.className = "villager-text";
    clone.appendChild(villagerText);

    clone.style.backgroundImage = "url(images/" + thisVillager[0] + ")";
    clone.style.transition = "all 5s linear";

    villagerText.textContent = thisVillager[1];

    setTimeout(function () {
        clone.style.left = "47%";
    }, 50);

    charNumber++;
};

function getWater(allVillagers) {
    let actualVillager = allVillagers[0];
    if (actualVillager.demand !== 0 && dropsAmount >= actualVillager.demand) {
        dropsAmount -= actualVillager.demand;
        money += actualVillager.money;
        suprVillager(allVillagers);
        update();
    } else {
        console.log(`Pas assez d'eau, il faut au moins ${actualVillager.demand} gouttes.`);
    };
};

function waterLevel() {
    if (dropsAmount < maxWaterLevel) {
        dropsAmount++;
        update();
    }
};

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