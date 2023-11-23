const fs = require("fs");

let imagePath = null;

const image = process.argv[2];
if (image === "stars_small") {
  imagePath = "./public/assets/img/stars_small.webp";
} else if (image === "me_small") {
  imagePath = "./public/assets/img/me_small.webp";
}

if (imagePath === null) {
  console.error("No image name provided");
  process.exit(1);
}

const imageBuffer = fs.readFileSync(imagePath);
const imageBase64 = imageBuffer.toString("base64");
const base64String = `data:image/webp;base64,${imageBase64}`;

console.log(base64String);
// let the user know which image was converted
console.log("image name: ", image);
