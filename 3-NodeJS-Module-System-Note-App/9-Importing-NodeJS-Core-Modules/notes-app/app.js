// fs.writeFileSync("notes.txt", "This file was created by Node.js"); // func
// we need to require to load the functionality of fs
const fs = require("fs");
// fs.writeFileSync("notes.txt", "This file was created by Node.js");
// text content will be overridden
fs.writeFileSync("notes.txt", "My name is Andrew.");

// stick with the convension fs... the doc is a helpful resource

//
// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

fs.appendFileSync("notes.txt", " Append this text to the previous text...");
