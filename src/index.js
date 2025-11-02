import "./style.css";
import bracketEntries from "./items.json";
import * as utils from "./utils.js";

// const dynamicImage = require(`./img/${imageName}.jpg`);

const testDiv = document.getElementById("test");

function nextPowerOfTwo(number) {
  console.log(typeof number);
  if (number <= 0 || number > 52 || typeof number !== "number")
    return undefined;
  const nextPower = 2 ** Math.ceil(Math.log2(number));

  return nextPower;
}

function generateByes(numberOfEntrants) {
  const byeCount = nextPowerOfTwo(numberOfEntrants) - numberOfEntrants;
  console.log(nextPowerOfTwo(numberOfEntrants), byeCount);
  const byeObjs = [];
  for (let i = 0; i < byeCount; i += 1) {
    byeObjs[i] = `bye${i + 1}`;
  }
  return byeObjs;
}
function testing(number) {
  // check using bitwise operator, e.g. 8 = 1000, 7 = 0111.
  // Only works for powers of two, must restrict to integers or possible false positives
  let isNotPowerTwo = true;
  let gapToPowerOfTwo = 0;
  // while (isNotPowerTwo) {
  //   if (Number.isInteger(number) && number > 0 && !(number & (number - 1))) {
  //     console.log("Power");
  //     isNotPowerTwo = false;
  //   }
  //   gapToPowerOfTwo += 1;
  //   number -= 1;
  // }
}
// const image1 = require(``);
bracketEntries.forEach((item) => {
  const h2 = document.createElement("h2");
  const img = document.createElement("img");

  img.src = utils.itemImages[item.name];
  h2.textContent = item.name;

  testDiv.append(h2, img);
});

console.log(generateByes(7));
