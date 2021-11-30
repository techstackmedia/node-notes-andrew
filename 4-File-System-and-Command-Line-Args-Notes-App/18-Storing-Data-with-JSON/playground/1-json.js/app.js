const fs = require("fs");
/*
1
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

// obj to string
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// Opposite of JSON.stringify
const parseData = JSON.parse(bookJSON);
console.log(parseData.author);
*/

// 2
/*
const bookJSON = JSON.stringify(book);
fs.writeFileSync("1-json.json", bookJSON);
*/

// Since we have written to file, we can comment out the code above.

const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer);
/*
<Buffer 7b 22 74 69 74 6c 65 22 3a 22 45 67 6f 20 69 73 20 74 68 65 20 45 6e 65 6d 79 22 2c 22 61 75 74 68 6f 72 22 3a 22 52 79 61 6e 20 48 6f 6c 69 64 61 79 ... 2 more bytes>
*/
console.log(dataBuffer.toString()); // or use utf-8
// {"title":"Ego is the Enemy","author":"Ryan Holiday"}

const dataJSON = fs.readFileSync("1-json.json", "utf-8");
// console.log(dataJSON);
// {"title":"Ego is the Enemy","author":"Ryan Holiday"}

const data = JSON.parse(dataJSON);
console.log(data.title); // Ego is the Enemy
// links.mead.io/json-sample
