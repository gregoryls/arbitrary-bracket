import "./style.css";
import bracketEntries from "./items.json";
import * as utils from "./utils.js";

// const dynamicImage = require(`./img/${imageName}.jpg`);

const selectionDisplayDiv = document.getElementById("selectionDisplay");
const roundDisplay = document.getElementById("roundDisplay");
const results = {};
let winnerRoundCount = 1;
let loserRoundCount = 1;
let pairArray = [];
let winners = [];
let losers = [];
let currentRound = "Winner";

function nextPowerOfTwo(number) {
  if (number <= 0 || number > 52 || typeof number !== "number")
    return undefined;
  const nextPower = 2 ** Math.ceil(Math.log2(number));

  return nextPower;
}

function generateByes(numberOfEntrants) {
  const byeCount = nextPowerOfTwo(numberOfEntrants) - numberOfEntrants;
  const byeObjs = [];
  for (let i = 0; i < byeCount; i += 1) {
    byeObjs[i] = `bye${i + 1}`;
  }
  return byeObjs;
}
function generateBracketPairings(bracketEntries, byeEntries) {
  const pairings = [];
  for (let i = 0; i < byeEntries.length; i += 1) {
    pairings[i] = {
      entry1: bracketEntries[i],
      entry2: { name: byeEntries[i] },
    };
  }
  for (
    let i = byeEntries.length, j = -1;
    i < nextPowerOfTwo(bracketEntries.length) / 2;
    i += 1, j -= 1
  ) {
    pairings[i] = {
      entry1: bracketEntries[i],
      entry2: bracketEntries.at(j),
    };
  }
  return pairings;
}

function entryDiv(entryObj) {
  const entryWrap = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");

  h2.textContent = entryObj.name;
  p.textContent = entryObj.description;
  if (utils.itemImages[entryObj.name]) {
    img.src = utils.itemImages[entryObj.name];
  }

  entryWrap.append(h2, p, img);

  return entryWrap;
}

async function waitForSelection(entry1Div, entry1Obj, entry2Div, entry2Obj) {
  return new Promise((resolve) => {
    const handler = (winner, loser) => {
      entry1Div.removeEventListener("click", onEntry1);
      entry2Div.removeEventListener("click", onEntry2);
      resolve({ winner, loser });
    };
    // add comments
    const onEntry1 = () => handler(entry1Obj, entry2Obj);
    const onEntry2 = () => handler(entry2Obj, entry1Obj);

    entry1Div.addEventListener("click", onEntry1);
    entry2Div.addEventListener("click", onEntry2);
  });
}

async function displayBracketPairings(pairings) {
  const pairingsCopy = structuredClone(pairings);
  for (const pair of pairingsCopy) {
    const entry1 = entryDiv(pair.entry1);
    const entry2 = entryDiv(pair.entry2);
    entry1.id = "entry1";
    entry2.id = "entry2";

    roundDisplay.innerHTML = "";
    roundDisplay.textContent = `Round of ${pairings.length * 2}`;
    selectionDisplayDiv.innerHTML = "";
    selectionDisplayDiv.append(entry1, entry2);

    const { winner, loser } = await waitForSelection(
      entry1,
      pair.entry1,
      entry2,
      pair.entry2,
    );
    winner.win = true;
    loser.win = false;
    winners.push(winner);
    losers.push(loser);
    selectionDisplayDiv.innerHTML = "";
  }
  results[`winnerRound${winnerRoundCount}`] = pairingsCopy;
  console.log(results);
}

async function test(pairings) {
  winners = [];
  losers = [];

  await displayBracketPairings(pairings);
  console.log("win lose arrays", winners, losers);
  if (winners.length > 1) {
    if (currentRound === "Winner") {
      pairArray = generateBracketPairings(losers, []);
      currentRound = "Loser";
    } else {
      pairArray = generateBracketPairings(winners, []);
      currentRound = "Winner";
    }
    await test(pairArray);
  }
}

pairArray = generateBracketPairings(
  bracketEntries,
  generateByes(bracketEntries.length),
);
console.log("pair array", pairArray);
console.log(currentRound);
test(pairArray);
