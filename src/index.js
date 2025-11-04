import "./style.css";
import bracketEntries from "./items.json";
import * as utils from "./utils.js";

// const dynamicImage = require(`./img/${imageName}.jpg`);

const testDiv = document.getElementById("test");

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
function bracketPairings(bracketEntries, byeEntries) {
  const pairings = [];
  for (let i = 0; i < byeEntries.length; i += 1) {
    pairings[i] = {
      entry1: bracketEntries[i],
      entry2: { name: byeEntries[i] },
    };
  }
  for (
    // offset condition by +1 or it will miss the middle-seed pairing
    let i = byeEntries.length, j = -1;
    i < 1 + (bracketEntries.length - byeEntries.length) / 2;
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

async function waitForSelection(entry1, entry2) {
  return new Promise((resolve) => {
    const handler = (winner) => {
      entry1.removeEventListener("click", onEntry1);
      entry2.removeEventListener("click", onEntry2);
      resolve(winner);
    };

    const onEntry1 = () => handler(entry1);
    const onEntry2 = () => handler(entry2);

    entry1.addEventListener("click", onEntry1);
    entry2.addEventListener("click", onEntry2);
  });
}

async function displayBracketPairings(pairings) {
  for (const pair of pairings) {
    const entry1 = entryDiv(pair.entry1);
    const entry2 = entryDiv(pair.entry2);
    entry1.id = "entry1";
    entry2.id = "entry2";

    testDiv.innerHTML = "";
    testDiv.append(entry1, entry2);

    const winner = await waitForSelection(entry1, entry2);
    console.log(winner);
  }
}

const round1Pairs = bracketPairings(
  bracketEntries,
  generateByes(bracketEntries.length),
);

console.log(Object.keys(round1Pairs[0]).length);
displayBracketPairings(round1Pairs);
