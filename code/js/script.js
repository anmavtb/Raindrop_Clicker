let dropsAmount = 0,
    maxWaterLevel = 100,
    money = 0,
    moneyMultiplier = 1,
    priceTank = 10,
    charNumber = 0;

let possibleVillagers = [["villager_1.gif", 10], ["villager_2.gif", 25], ["villager_3.gif", 75]];
let allVillagers = [];
let villagerRank = [];
let clone;

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
    document.getElementById('dropsAmount').textContent = dropsAmount + " / " + maxWaterLevel;
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
    let thisVillager = randomVillager();
    allVillagers.push(new Villager(thisVillager[0], thisVillager[1]));
    clone = document.createElement("div");
    clone.style.position = "absolute";
    clone.style.backgroundPosition = "center";
    clone.style.backgroundSize = "cover";
    clone.classList.add("villager");
    clone.style.width = "100px";
    clone.style.height = "100px";
    clone.style.left = "-150px";
    clone.style.top = "600px";
    clone.style.backgroundImage = "url('images/villager_1.gif')";
    clone.style.transition = "all 5s linear";
    document.body.appendChild(clone);

    setTimeout(function () {
        clone.style.left = "47%";
    }, 50);

    allVillagers.push(clone);

    //     elem.appendChild(clone);
    //     allVillagers[charNumber].walk(clone);
    //     charNumber++;
    // } else {
    //     console.log("Pas de place");
    // }
};

function randomVillager() {
    let randomNumber = Math.floor(Math.random() * possibleVillagers.length);
    return (possibleVillagers[randomNumber]);
};

function suprVillager(allVillagers) {
    console.log("Not yet implemented");
    
    // allVillagers.splice(0, 1);
    // charNumber--;
    // elem.firstChild.remove();
    // console.log(elem.childNodes.length);
    // maxPos = 600;
    // for (let i = 0; i < elem.childNodes.length; i++) {
    //     console.log("--[" + i + "]---");
    //     console.log(elem.childNodes[i]);
    //     pos = parseInt(elem.childNodes[i].style.left);
    //     console.log(pos, maxPos);
    //     while (elem.childNodes[i].style.left != (maxPos + "px")) {
    //         pos += 5;
    //         elem.childNodes[i].style.left = pos + 'px';
    //     }
    //     maxPos -= 100;
    //     console.log(elem.childNodes[i].style.left);
    //     console.log("--[" + i + "]---");
    // }
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