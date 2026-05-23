
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
   TERMINAL TYPE EFFECT
========================= */

function typeMessage(text){

if(!terminalResponse)
return;

terminalResponse.innerHTML="";

let i=0;

const typing=

setInterval(()=>{

terminalResponse.innerHTML+=
text.charAt(i);

i++;

if(i>=text.length){

clearInterval(
typing
);

}

},35);

}
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
"FINAL LIFE PROTOCOL DETECTED",

"2016":
"CONTAINMENT BREACH ARCHIVE FOUND",

"1998":
"ORIGIN PROTOCOL FOUND",

"agent_zero":
"UNKNOWN AGENT DETECTED",

"9lives":
"LIFE CYCLE SYSTEM FOUND",

"archive":
"ARCHIVE LINK STABLE"

};

const popup =
document.getElementById(
"signal-popup"
);

popup.classList.add(
"show"
);

setTimeout(()=>{

document.body.classList.remove(
"panic-mode"
);

popup.classList.remove(
"show"
);

},3000);

}

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

typeMessage(
commandDatabase[value]
);

/* SECRET PAGES */

if(value==="1998"){

window.location.href=
"origin.html";

}

if(value==="agent_zero"){

window.location.href=
"agent.html";

}

if(value==="9lives"){

window.location.href=
"lives.html";

}

if(archive){

archive.style.display=
"block";

}

}

}

}



/* =========================
   BUTTON ACTIONS
========================= */

const archiveBtn =
document.getElementById(
"archiveBtn"
);

const fileBtn =
document.getElementById(
"fileBtn"
);

const terminalResponse =
document.getElementById(
"terminal-response"
);

if(archiveBtn){

archiveBtn.addEventListener(
"click",

()=>{

typeMessage(
"ARCHIVE LINK ESTABLISHED // ACCESS LEVEL: LIMITED"
);

}

);

}

if(fileBtn){

fileBtn.addEventListener(
"click",

()=>{

terminalResponse.innerHTML=
"FILE 001 OPENED...";

);

/* =========================
   BOOT SCREEN
========================= */

window.addEventListener(
"load",

()=>{

setTimeout(()=>{

const boot=
document.getElementById(
"boot-screen"
);

boot.style.opacity="0";

setTimeout(()=>{

boot.style.display="none";

},1000);

},3000);

});

}

/* =========================
   LIVE CLOCK
========================= */

const liveTime =
document.getElementById(
"live-time"
);

function updateClock(){

const now=new Date();

const h=
String(now.getHours())
.padStart(2,"0");

const m=
String(now.getMinutes())
.padStart(2,"0");

const s=
String(now.getSeconds())
.padStart(2,"0");

if(liveTime){

liveTime.innerHTML=
`UTC ${h}.${m}.${s}`;

}

}

setInterval(
updateClock,
1000
);

updateClock();


/* =========================
   THREAT SYSTEM
========================= */

const threatBox =
document.querySelector(
".threat-box"
);

const threatLevels=[

"LOW",
"GUARDED",
"ELEVATED",
"HIGH",
"SEVERE",
"UNSTABLE"

];

function randomThreat(){

const level=

threatLevels[
Math.floor(
Math.random()
*threatLevels.length
)
];

if(threatBox){

threatBox.innerHTML=

`THREAT LEVEL:
${level}`;

}

}

setInterval(
randomThreat,
7000
);

/* =========================
   LIVE INTELLIGENCE EVENTS
========================= */

const terminalMessages=[

"Signal from unknown node detected",

"Containment field weakening",

"Meme cascade event possible",

"Protocol integrity holding",

"Unauthorized liquidity movement detected",

"Timeline corruption event logged",

"Global meme anomaly detected",

"Unknown transmission detected",

"Meme integrity failure prevented"

];

/* =========================
   GLOBAL ELEMENTS
========================= */

const terminalResponse=
document.getElementById(
"terminal-response"
);

const commandInput=
document.getElementById(
"command-input"
);

const alertBar=
document.querySelector(
".alert-bar"
);

function intelligenceEvent(){

const randomMessage=

terminalMessages[
Math.floor(
Math.random()*
terminalMessages.length
)
];

if(terminalResponse){

terminalResponse.innerHTML=

"> "+randomMessage;

}

}

setInterval(
intelligenceEvent,
10000
);

/* =========================
   RANDOM SYSTEM ALERTS
========================= */

const alerts=[

"UNAUTHORIZED SHITPOSTING DETECTED",

"MEME CASCADE IMMINENT",

"PAN-TIVE SIGNAL INTERCEPTED",

"ARCHIVE BREACH ATTEMPT",

"UNKNOWN AGENT ACTIVITY",

"CHAOS ENGINE INSTABILITY"

];

const alertBar=
document.querySelector(
".alert-bar"
);

function randomAlert(){

const random=

alerts[
Math.floor(
Math.random()
*
alerts.length
)
];

if(alertBar){

alertBar.innerHTML=

"⚠ " + random + " ⚠";

alertBar.classList.add(
"danger-alert"
);

setTimeout(()=>{

alertBar.classList.remove(
"danger-alert"
);

},3000);

}

}

setInterval(
randomAlert,
15000
);


/* =========================
   STATUS SYSTEM
========================= */

const systemStatus=
document.getElementById(
"systemStatus"
);

const protocolStatus=
document.getElementById(
"protocolStatus"
);

const threatStatus=
document.getElementById(
"threatStatus"
);

const systemMessages=[

"> SYSTEM ONLINE",
"> SYSTEM SYNCING",
"> NODE STABLE",
"> SIGNAL VERIFIED"

];

const protocolMessages=[

"> PROTOCOL ACTIVE",
"> PROTOCOL MONITORING",
"> ARCHIVE LINKED",
"> MEME ENGINE ACTIVE"

];

const threatMessages=[

"> THREAT DETECTED",
"> THREAT LOW",
"> THREAT ESCALATING",
"> THREAT CONTAINED"

];

function randomItem(array){

return array[
Math.floor(
Math.random()
*
array.length
)
];

}

function updateStatus(){

if(systemStatus){

systemStatus.innerHTML=

randomItem(
systemMessages
);

}

if(protocolStatus){

protocolStatus.innerHTML=

randomItem(
protocolMessages
);

}

if(threatStatus){

threatStatus.innerHTML=

randomItem(
threatMessages
);

}

}

setInterval(
updateStatus,
8000
);

updateStatus();

/* =========================
   INTERFACE FEEDBACK
========================= */

const buttons=

document.querySelectorAll(
"button"
);

buttons.forEach(button=>{

button.addEventListener(

"click",

()=>{

button.classList.add(
"button-active"
);

setTimeout(()=>{

button.classList.remove(
"button-active"
);

},150);

}

);

});


const terminal=

document.querySelector(
".secret-terminal"
);

function flashTerminal(){

if(terminal){

terminal.classList.add(
"terminal-flash"
);

setTimeout(()=>{

terminal.classList.remove(
"terminal-flash"
);

},300);

}

}

setInterval(
flashTerminal,
12000
);

/* =========================
   ACTIVITY DETECTION
========================= */

const ping=
document.getElementById(
"activity-ping"
)||null;

function triggerPing(){

if(!ping) return;

const x=
Math.random()*80+10;

const y=
Math.random()*70+10;

ping.style.left=
x+"%";

ping.style.top=
y+"%";

ping.classList.add(
"active"
);

setTimeout(()=>{

ping.classList.remove(
"active"
);

},2000);

}

setInterval(
triggerPing,
9000
);

/* =========================
   SIGNAL LOCATIONS
========================= */

const signalLabel=
document.getElementById(
"signal-label"
)||null;

const locations=[

"COPENHAGEN",
"TOKYO",
"NEW YORK",
"SINGAPORE",
"BERLIN",
"SEOUL",
"UNKNOWN NODE",
"MEME CLUSTER"

];

function randomSignal(){

if(
!signalLabel||
!ping
)return;

const x=
Math.random()*70+10;

const y=
Math.random()*60+10;

const place=

locations[
Math.floor(
Math.random()*
locations.length
)
];

signalLabel.innerHTML=

place+
"<br>SIGNAL DETECTED";

signalLabel.style.left=
x+"%";

signalLabel.style.top=
y+"%";

signalLabel.classList.add(
"show"
);

setTimeout(()=>{

signalLabel.classList.remove(
"show"
);

},3000);

}

setInterval(
randomSignal,
12000);

/* =========================
   BOOT TERMINAL SYSTEM
========================= */

const bootTerminal=

document.getElementById(
"boot-terminal"
);

const bootLines=[

"> BOOTING PROTOCOL...",

"> CONNECTING TO MEME GRID...",

"> VERIFYING CHAOS ENGINE...",

"> LOADING AGENT DATABASE...",

"> SIGNALS SYNCHRONIZED...",

"> ACCESS GRANTED"

];

function runBoot(){

if(!bootTerminal)
return;

bootTerminal.innerHTML="";

bootLines.forEach(

(line,index)=>{

setTimeout(()=>{

bootTerminal.innerHTML+=

`<p>${line}</p>`;

},index*700);

}

);

}

runBoot();


   
