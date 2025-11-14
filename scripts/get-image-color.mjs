import fs from "fs";
import { PNG } from "pngjs";

function avgColor(data) {
  let r = 0,
    g = 0,
    b = 0,
    a = 0,
    count = 0;
  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3] / 255;
    // skip fully transparent pixels
    if (alpha === 0) continue;
    r += data[i] * alpha;
    g += data[i + 1] * alpha;
    b += data[i + 2] * alpha;
    a += alpha;
    count++;
  }
  if (a === 0 || count === 0) return { r: 0, g: 0, b: 0 };
  return { r: Math.round(r / a), g: Math.round(g / a), b: Math.round(b / a) };
}

function toHex({ r, g, b }) {
  return (
    "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")
  );
}

const path = process.argv[2] || "./src/assets/icons/Integrations.png";

if (!fs.existsSync(path)) {
  console.error("File not found:", path);
  process.exit(2);
}

fs.createReadStream(path)
  .pipe(new PNG())
  .on("parsed", function () {
    const c = avgColor(this.data);
    console.log("Average RGB:", c);
    console.log("Hex:", toHex(c));
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
