const fs = require("fs");
const path = require("path");
const bnl = require("./bnl-min.json");
// const bnl = require("./bnl-full.json");

/**
 * Loads an MP3 file from the specified file name.
 *
 * @param {string} fileName - The name of the MP3 file to load.
 * @returns {Buffer} The contents of the MP3 file.
 * @throws {Error} If the file is not found.
 */
function loadMp3(fileName) {
  const filePath = path.join(__dirname, "mp3s", fileName);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath);
  } else {
    throw new Error("File not found");
  }
}

function main() {
  const [header, quiz, oids] = bnl;
  console.log({ header, quiz, oids });
  // Your code here
}

main();
