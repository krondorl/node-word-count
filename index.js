/**
 * @license
 * Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
 * https://creativecommons.org/licenses/by-nc-nd/4.0/
 * Made by Adam Burucs in 2023.
 *
 * Please see LICENSE file in the repo root folder.
 */

// @ts-check
import fs from "node:fs/promises";

/**
 * Count words in given text file
 *
 * @param {String} fileName
 * @return {Promise<number>}
 */
async function countWords(fileName) {
  const file = await fs.open(fileName);
  let count = 0;

  for await (const line of file.readLines()) {
    let splitLine = line.split(" ");
    count += splitLine.length;
  }

  return count;
}

const fileName = "./enchiridion-hun.txt";

console.log(" ");
console.log("Text file word counter");
console.log(" ");
console.log("File ", fileName);

countWords(fileName)
  .then((count) => {
    console.log("Word count: ", count);
  })
  .catch(() => {
    console.error("Error when counting word in file.");
  });

console.log(" ");
