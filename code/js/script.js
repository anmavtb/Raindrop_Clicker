var dropsAmount = 0,
    maxWaterLevel = 10,
    money = 0,
    moneyMultiplier = 1;

const VILLAGER_1 = new Character("villager_1.gif", 10);
const VILLAGER_2 = new Character("villager_2.gif", 25);
const VILLAGER_3 = new Character("villager_3.gif", 75);

function update() {
    document.getElementById('dropsAmount').innerHTML = dropsAmount + " / " + maxWaterLevel;
    document.getElementById('money').innerHTML = "Argent : " + money + " €";
    document.getElementById('dropsAmount').innerHTML = dropsAmount + " / " + maxWaterLevel;
    document.getElementById("waterLevel").style.height = (100 - ((dropsAmount * 100) / maxWaterLevel)) + "%";
}

function waterLevel() {
    if (dropsAmount < maxWaterLevel) {
        dropsAmount++;
        update();
    }
}

function Character(image, demand) {
    this.image = "images/" + image;
    this.demand = demand;
    this.money = (Math.trunc(demand * moneyMultiplier));
};

Character.prototype.walk = function () {
    alert("image: " + this.image + " | eau demandée: " + this.demand + " | argent donné: " + this.money);
};

function getWater(Character) {
    if (Character.demand !== 0 && dropsAmount >= Character.demand) {
        dropsAmount -= Character.demand;
        money += Character.money;
        update();
    } else {
        console.log("Pas assez d'eau, il faut au moins " + Character.demand + " gouttes.")
    };
};