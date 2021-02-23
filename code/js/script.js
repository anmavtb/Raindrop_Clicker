var dropsAmount = 0,
    maxWaterLevel = 10,
    money = 0,
    moneyMultiplier = 1;

function loading() {
    document.getElementById('dropsAmount').innerHTML = dropsAmount + " / " + maxWaterLevel;
    document.getElementById('money').innerHTML = "Argent : " + money + " €";
}

function waterLevel() {
    if (dropsAmount < maxWaterLevel) {
        dropsAmount++;
        document.getElementById('dropsAmount').innerHTML = dropsAmount + " / " + maxWaterLevel;
        document.getElementById("waterLevel").style.height = (100 - ((dropsAmount * 100) / maxWaterLevel)) + "%";
    }
}

function Character(image, demand) {
    this.image = image;
    this.demand = demand;
    this.money = (Math.trunc(demand * moneyMultiplier));
};

Character.prototype.walk = function () {
    alert("eau demandée: " + this.demand + " | argent donné: " + this.money);
};

const VILLAGER_1 = new Character("villager_1", 10);
const VILLAGER_2 = new Character("villager_2", 20);