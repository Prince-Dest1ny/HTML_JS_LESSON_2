var Potatoes = 0;
var Tier1_Minions = 0;
var Tier2_Minions = 0;
var Tier3_Minions = 0;
var Tier4_Minions = 0;
var Tier5_Minions = 0;
var Crystals = 0;
var isTier1Spawned = false;
var isTier2Spawned = false;
var isTier3Spawned = false;
var isTier4Spawned = false;
var isTier5Spawned = false;
var isCrystalSpawned = false;

function updateUI() {
    document.getElementById("Potatoes").innerHTML = "Potatoes:nbsp;" + Potatoes;
    if(isTier1Spawned) {
        document.getElementById("Tier1_Minions").innerHTML = "tier1_minion:nbsp;" + Tier1_Minions;
    }
    if(isTier2Spawned) {
        document.getElementById("Tier2_Minions").innerHTML = "tier2_minion:nbsp;" + Tier2_Minions;
    }
}

function potatoClick(){
    Potatoes += 1;
    updateUI();
    
}