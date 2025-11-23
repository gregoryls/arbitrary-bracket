import "./style.css";
import bracketEntries from "./items.json";
import * as utils from "./utils.js";

// const dynamicImage = require(`./img/${imageName}.jpg`);
// TODO handle final loser bracket vs winner challenge round
// check loser bracket length

const selectionDisplayDiv = document.getElementById("selectionDisplay");
const roundDisplay = document.getElementById("roundDisplay");
const results = {};
let winnerRoundCount = 1;
let winnerRoundCount2 = 1;
let loserRoundCount = 0;
let pairArray = [];
let winnerBracketWinners = [];
let winnerBracketLosers = [];
let loserBracketWinners = [];
let currentRound = "winner";
let nextRound = "loser";

function nextPowerOfTwo(number) {
  if (number <= 0 || number > 52 || typeof number !== "number")
    return undefined;
  const nextPower = 2 ** Math.ceil(Math.log2(number));

  return nextPower;
}

function getWinnerRoundCount(numberOfEntrants) {
  const totalCount = nextPowerOfTwo(numberOfEntrants);
  const rounds = Math.log2(totalCount);
  return rounds;
}

function getLoserRoundCount(numberOfEntrants) {
  const totalCount = nextPowerOfTwo(numberOfEntrants);
  const rounds =
    Math.log2(totalCount) + Math.ceil(Math.log2(Math.log2(totalCount)));
  return rounds;
}

function generateByes(numberOfEntrants) {
  const byeCount = nextPowerOfTwo(numberOfEntrants) - numberOfEntrants;
  const byeObjs = [];
  for (let i = 0; i < byeCount; i += 1) {
    byeObjs[i] = `bye${i + 1}`;
  }
  return byeObjs;
}
function generateBracketPairings(bracketEntries, byeEntries, otherEntries) {
  const pairings = [];
  // optional handling of blending winner bracket losers with loser bracket winners
  if (otherEntries) {
    for (let i = 0; i < bracketEntries.length; i += 1) {
      pairings[i] = {
        entry1: bracketEntries[i],
        entry2: otherEntries[i],
      };
    }
    return pairings;
  }
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
  // TODO add current match number
  const pairingsCopy = structuredClone(pairings);
  for (const pair of pairingsCopy) {
    const entry1 = entryDiv(pair.entry1);
    const entry2 = entryDiv(pair.entry2);
    entry1.id = "entry1";
    entry2.id = "entry2";

    roundDisplay.innerHTML = "";
    if (currentRound === "winner") {
      roundDisplay.textContent = `Round of ${pairings.length * 2}`;
    }
    if (currentRound === "loser") {
      roundDisplay.textContent = `Loser Round ${loserRoundCount}`;
    }
    selectionDisplayDiv.innerHTML = "";
    selectionDisplayDiv.append(entry1, entry2);

    const { winner, loser } = await waitForSelection(
      entry1,
      pair.entry1,
      entry2,
      pair.entry2,
    );

    // console.log("w,l", winner, loser);
    winner.win = true;
    loser.win = false;

    selectionDisplayDiv.innerHTML = "";
  }

  if (currentRound === "winner") {
    results[`winnerRound${winnerRoundCount}`] = pairingsCopy;
  }
  if (currentRound === "loser") {
    results[`loserRound${loserRoundCount}`] = pairingsCopy;
  }

  console.log("results", results);
}

function getResultArray(roundType, roundCount, winStatus) {
  // roundType = 'winner' or 'loser'
  // roundCount = integer
  // winStatus = true or false
  const result = [];
  for (const match of results[`${roundType}Round${roundCount}`]) {
    for (const entry of Object.keys(match)) {
      // capture wins
      if (winStatus) {
        if (match[entry].win) result.push(match[entry]);
      }

      // capture losses
      if (!winStatus) {
        if (!match[entry].win) result.push(match[entry]);
      }
    }
  }
  return result;
}

async function test(pairings) {
  const maxWinnerRounds = getWinnerRoundCount(bracketEntries.length);
  const maxLoserRounds = getLoserRoundCount(bracketEntries.length);
  console.log(winnerRoundCount);
  await displayBracketPairings(pairings);
  if (winnerRoundCount < maxWinnerRounds) {
    const winnerBracketWinners = getResultArray(
      "winner",
      winnerRoundCount,
      true,
    );

    winnerRoundCount += 1;

    pairArray = generateBracketPairings(winnerBracketWinners, []);
    await test(pairArray);
  }

  if (
    (winnerRoundCount = maxWinnerRounds) &&
    loserRoundCount < maxLoserRounds
  ) {
    currentRound = "loser";
    if (loserRoundCount === 0) {
      // handle first loser round generated only from winner bracket
      const winnerBracketLosers = getResultArray(
        "winner",
        winnerRoundCount2,
        false,
      );
      pairArray = generateBracketPairings(winnerBracketLosers, []);
      // TODO fix count increments

      winnerRoundCount2 += 1;
      loserRoundCount += 1;
      await test(pairArray);
    }
    const winnerBracketLosers = getResultArray(
      "winner",
      winnerRoundCount2,
      true,
    );
    const loserBracketWinners = getResultArray("loser", loserRoundCount, true);

    if (loserBracketWinners.length > winnerBracketLosers.length) {
      // handle offset rounds where loser bracket needs to catch up
      pairArray = generateBracketPairings(loserBracketWinners, []);

      loserRoundCount += 1;
      await test(pairArray);
    }
    pairArray = generateBracketPairings(
      winnerBracketLosers,
      [],
      loserBracketWinners,
    );

    // normal operation ends here
    winnerRoundCount2 += 1;
    loserRoundCount += 1;
    await test(pairArray);
  }
}

pairArray = generateBracketPairings(
  bracketEntries,
  generateByes(bracketEntries.length),
);

test(pairArray);
