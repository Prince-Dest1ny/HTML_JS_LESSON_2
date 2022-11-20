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
    document.getElementById("Potatoes").innerHTML = "Potatoes:&nbsp;" + Potatoes;
    if(isTier1Spawned) {
        document.getElementById("Tier1_Minions").innerHTML = "Tier1 minion:&nbsp;" + Tier1_Minions;
    }
    if(isTier2Spawned) {
        document.getElementById("Tier2_Minions").innerHTML = "Tier2 minion:&nbsp;" + Tier2_Minions;
    }
    if(isTier2Spawned) {
        document.getElementById("Tier2_Minions").innerHTML = "Tier2 minion:&nbsp;" + Tier2_Minions;
    }
    if(isTier2Spawned) {
        document.getElementById("Tier2_Minions").innerHTML = "Tier2 minion:&nbsp;" + Tier2_Minions;
    }
    if(isTier2Spawned) {
        document.getElementById("Tier2_Minions").innerHTML = "Tier2 minion:&nbsp;" + Tier2_Minions;
    }
}

function start(){
    Tier1Auto();
    Tier2Auto();
    Tier3Auto();
    Tier4Auto();
    Tier5Auto();   
}

function Tier1Auto(){
    Potatoes += Tier1_Minions * 3;
    updateUI();
}
function Tier2Auto(){
    Potatoes += Tier2_Minions * 3;
    updateUI();
}
function Tier3Auto(){
    Potatoes += Tier3_Minions * 3;
    updateUI();
}
function Tier4Auto(){
    Potatoes += Tier4_Minions * 3;
    updateUI();
}
function Tier5Auto(){
    Potatoes += Tier5_Minions * 3;
    updateUI();
}

function potatoClick(){
    Potatoes += 1;
    updateUI();
    checkTier1Spawn();
}


function Tier1Click(){
    if(Potatoes >= 128){
        Tier1_Minions += 1;
        Potatoes -= 128;
    }
    checkTier2Spawn();
    updateUI();
}

function Tier2Click(){
    if(Potatoes >= 256 && Tier1_Minions >= 1){
        Tier2_Minions += 1;
        Tier1_Minions -= 1;
        Potatoes -= 256;
    }
    checkTier3Spawn()
    updateUI();
}

function Tier3Click(){
    if(Potatoes >= 512 && Tier2_Minions >= 1){
        Tier3_Minions += 1;
        Tier2_Minions -= 1;
        Potatoes -= 512;
    }
    checkTier4Spawn()
    updateUI();
}

function Tier4Click(){
    if(Potatoes >= 2560 && Tier3_Minions >= 1){
        Tier4_Minions += 1;
        Tier3_Minions -= 1;
        Potatoes -= 2560;
    }
    checkTier4Spawn()
    updateUI();
}

function Tier5Click(){
    if(Potatoes >= 7680 && Tier4_Minions >= 1){
        Tier5_Minions += 1;
        Tier4_Minions -= 1;
        Potatoes -= 7680;
    } 
    //checkTier6Spawn()
    updateUI();
}

function spawner(type,cost) {
    var anchor = document.getElementById("main");
    var newType = document.getElementById("type").cloneNode(true);
    newType.childNodes[1].id = type + "Count";
    newType.childNodes[3].id = "button" + type;
    newType.childNodes[1].innerHTML = type + ":&nbsp;0";
    newType.childNodes[3].innerHTML = "Buy&nbsp;" + type + "&nbsp;Cost:&nbsp;" + cost + "&nbsp;Potatoes";
    anchor.appendChild(newType);
}

function checkTier1Spawn() {
    if (Potatoes >= 128 && !isTier1Spawned){
        spawner("Tier1_Minion", 128);
        isTier1Spawned = true;
        document.getElementById("buttonTier1_Minion").onclick = Tier1Click;
    }
}
function checkTier2Spawn() {
    if (Potatoes >= 256 && !isTier2Spawned){
        spawner("Tier2_Minion", 256)
        isTier2Spawned = true;
        document.getElementById("buttonTier2_Minion").onclick = Tier2Click
    }
}
function checkTier3Spawn() {
    if (Potatoes >= 512 && !isTier3Spawned){
        spawner("Tier3_Minion", 512)
        isTier3Spawned = true;
        document.getElementById("buttonTier3_Minion").onclick = Tier3Click
    }
}
function checkTier4Spawn() {
    if (Potatoes >= 2560 && !isTier4Spawned){
        spawner("Tier4_Minion", 2560)
        isTier4Spawned = true;
        document.getElementById("buttonTier4_Minion").onclick = Tier4Click
    }
}
function checkTier5Spawn() {
    if (Potatoes >= 7680 && !isTier5Spawned){
        spawner("Tier5_Minion", 7680)
        isTier5Spawned = true;
        document.getElementById("buttonTier5_Minion").onclick = Tier5Click
    }
}
