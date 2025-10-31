import "./style.css";
import bracketEntries from "./items.json";
import * as utils from "./utils.js";

// const dynamicImage = require(`./img/${imageName}.jpg`);

const testDiv = document.getElementById("test");

console.log(utils.itemImages);
// const image1 = require(``);
bracketEntries.forEach((item) => {
  const h2 = document.createElement("h2");
  const img = document.createElement("img");

  img.src = utils.itemImages[item.name];
  h2.textContent = item.name;

  testDiv.append(h2, img);
});
