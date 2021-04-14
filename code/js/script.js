let dropsAmount = 0,
    maxWaterLevel = 10,
    money = 0,
    moneyMultiplier = 2,
    priceTank = 10,
    charNumber = 0;

let possibleVillagers = [["villager_1.gif", 10], ["villager_2.gif", 25], ["villager_3.gif", 75]];
let allVillagers = [];

let Villager = function (image, demand) {
    this.image = "images/" + image;
    this.demand = demand;
    this.money = (Math.round(this.demand * moneyMultiplier));
    this.walk = function () {
        let id = null;
        let elem = document.getElementById("animVillager");
        elem.image = this.image;
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (pos == 500) {
                clearInterval(id);
            } else {
                pos+=5;
                elem.style.left = pos + 'px';
            }
        }
    };
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
            allVillagers.splice(0, 1);
            console.log(allVillagers);
            update();
        } else {
            console.log(`Pas assez d'eau, il faut au moins ${actualVillager.demand} gouttes.`);
        };
    } else {
        console.log("Il n'y a aucun villageois.");
    }

};

function createVillager() {
    if (charNumber == undefined) {
        charNumber = 0;
    }
    let thisVillager = randomVillager();
    allVillagers.push(new Villager(thisVillager[0], thisVillager[1]));
    console.log(allVillagers);
    allVillagers[charNumber].walk();
    charNumber++;
};

function randomVillager() {
    min = 0;
    max = possibleVillagers.length - 1;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return (possibleVillagers[randomNumber]);
};

function suprVillager(allVillagers) {
    allVillagers.splice(0, 1);
    console.log(allVillagers);
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