import "./style.css";
import bracketEntries from "./items.json";
import * as utils from "./utils.js";

// const dynamicImage = require(`./img/${imageName}.jpg`);

const testDiv = document.getElementById("test");

function nextPowerOfTwo(number) {
  let nextPower;
  if (number > 0) {
    nextPower = 2 ** Math.ceil(Math.log2(number));
  }

  return nextPower;
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

testing(7);

nextPowerOfTwo(4);
nextPowerOfTwo(0);
nextPowerOfTwo(7);
nextPowerOfTwo(-5);
nextPowerOfTwo(-4);
nextPowerOfTwo(8);
