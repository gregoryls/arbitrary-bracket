import "./style.css";
import bracketEntries from "./items.json";

// const dynamicImage = require(`./img/${imageName}.jpg`);

const testDiv = document.getElementById("test");

// const image1 = require(``);
bracketEntries.forEach((item) => {
  const h2 = document.createElement("h2");
  const img = document.createElement("img");

  h2.textContent = item.name;

  testDiv.append(h2, img);
});
