const imageContext = import.meta.webpackContext("./img", {
  recursive: false,
  regExp: /\.(png|jpe?g|svg)$/i,
});

const itemImages = {};
imageContext.keys().forEach((key) => {
  // remove prefix and extension from image file names
  const fileName = key.replace("./", "").replace(/\.[^/.]+$/, "");
  itemImages[fileName] = imageContext(key);
});

export { itemImages };
