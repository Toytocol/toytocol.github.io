
/* =========================
   BOOT SCREEN
========================= */

window.addEventListener("load", () => {

setTimeout(() => {

const bootScreen = document.getElementById("boot-screen");

if(bootScreen){
bootScreen.style.display = "none";
}

}, 4000);

});

/* =========================
   RANDOM ALERT SYSTEM
========================= */

const alerts = [

"⚠ MEME INSTABILITY DETECTED",
"⚠ SIGNAL FROM PAW-TIVE INTERCEPTED",
"⚠ SCAM CLUSTER IDENTIFIED",
"⚠ TUNA RESERVES CRITICAL",
"⚠ TIMELINE CORRUPTION DETECTED",
"⚠ UNAUTHORIZED SHITPOSTING DETECTED"

];

function randomAlert(){

const bar = document.querySelector(".alert-bar");

if(bar){

const randomMessage =
alerts[Math.floor(Math.random() * alerts.length)];

bar.innerHTML = randomMessage;

}

}

setInterval(randomAlert, 5000);

/* =========================
   TERMINAL TYPING EFFECT
========================= */

const terminalLines = document.querySelectorAll(".terminal p");

terminalLines.forEach((line, index) => {

line.style.opacity = "0";

setTimeout(() => {

line.style.transition = "0.5s";
line.style.opacity = "1";

}, index * 500);

});

/* =========================
   RANDOM AGENT COUNT
========================= */

function updateAgents(){

const fakeCount =
Math.floor(Math.random() * 900) + 100;

document.title =
`TOYTOCOL // ${fakeCount} AGENTS ACTIVE`;

}

setInterval(updateAgents, 3000);

/* =========================
   SECRET LOGO EASTER EGG
========================= */

let logoClicks = 0;

const logo = document.querySelector(".logo");

if(logo){

logo.addEventListener("click", () => {

logoClicks++;

if(logoClicks >= 5){

alert(
"ACCESS GRANTED // DEEP ARCHIVE UNLOCKED"
);

logoClicks = 0;

}

});

}

/* =========================
   RANDOM INTELLIGENCE FEED
========================= */

const intelMessages = [

"Unknown transmission detected.",
"Meme cascade event possible.",
"Agent PAW-TIVE remains active.",
"Unauthorized liquidity movement detected.",
"Timeline instability increasing.",
"Protocol integrity holding."

];

function addIntelMessage(){

const feed = document.querySelector(".intel-feed");

if(feed){

const item = document.createElement("div");

item.classList.add("intel-item");

const time = new Date().toLocaleTimeString();

item.innerHTML = `

<span>[${time}]</span>
<p>
${intelMessages[Math.floor(Math.random() * intelMessages.length)]}
</p>

`;

feed.prepend(item);

if(feed.children.length > 6){

feed.removeChild(feed.lastChild);

}

}

}

setInterval(addIntelMessage, 7000);

/* =========================
   CONSOLE MESSAGE
========================= */

console.log(`

TOYTOCOL ACTIVE

MEME PRESERVATION PROTOCOL INITIALIZED

WARNING:
UNAUTHORIZED ACCESS MAY RESULT IN
TIMELINE INSTABILITY.

`);

/* =========================
   LIVE CLOCK
========================= */

function updateClock(){

const now = new Date();

const time =
now.toLocaleTimeString();

const clock =
document.getElementById("live-time");

if(clock){

clock.innerHTML =
`UTC ${time}`;

}

}

setInterval(updateClock,1000);

/* =========================
   LIVE INTEL FEED
========================= */

const intelFeed =
document.querySelector(".intel-feed");

const intelLogs = [

"Market volatility increasing.",
"Signal from unknown node detected.",
"Timeline corruption event logged.",
"Unauthorized archive access denied.",
"Meme integrity failure prevented.",
"Agent PAW-TIVE location unstable.",
"Containment field weakening.",
"9 LIVES protocol preparing.",
"Global meme anomaly detected."

];

function addIntelLog(){

if(!intelFeed) return;

const item =
document.createElement("div");

item.classList.add("intel-item");

const time =
new Date().toLocaleTimeString();

const randomLog =
intelLogs[
Math.floor(
Math.random() * intelLogs.length
)
];

item.innerHTML = `

<span>[${time}]</span>
<p>${randomLog}</p>

`;

intelFeed.appendChild(item);

if(intelFeed.children.length > 8){

intelFeed.removeChild(
intelFeed.children[1]
);

}

}

setInterval(addIntelLog, 4000);


/* =========================
   SECRET TERMINAL SYSTEM
========================= */

const commandInput =
document.getElementById("command-input");

const terminalResponse =
document.getElementById("terminal-response");

const commandDatabase = {

"paw-tive":
"SIGNAL DETECTED // LAST KNOWN LOCATION UNKNOWN",

"life_09":
"ACCESS RESTRICTED // FINAL LIFE PROTOCOL LOCKED",

"2016":
"CONTAINMENT BREACH ARCHIVE CORRUPTED",

"toytocol":
"MEME PRESERVATION PROTOCOL ACTIVE",

"agent":
"ACTIVE AGENTS ONLINE: 847",

"archive":
"ARCHIVE LINK UNSTABLE"

};

if(commandInput){

commandInput.addEventListener(
"keydown",

function(event){

if(event.key === "Enter"){

const value =
commandInput.value
.toLowerCase()
.trim();

if(commandDatabase[value]){

terminalResponse.innerHTML =
commandDatabase[value];

}else{

terminalResponse.innerHTML =
"UNKNOWN COMMAND";

}

commandInput.value = "";

}

});

}
