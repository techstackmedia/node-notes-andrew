/*
require("./utils.js");
const userName = "Andrew";

console.log(userName);
// nde app.js
// - Output
// utils.js
// Andrew
*/

// 2
/*
const userName = require("./utils.js");
console.log(userName);
// Output
// utils.js
// Mike
*/

// 3
/*
const add = require("./utils.js");
const sum = add(4, -2);
console.log(sum);

// Output
// utils.js;
// 2
*/

//
// Challenge: Define and user a function in a new file
//
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns 'Your note'
// 3. Export getNotes function
// 4. From app.js, Load in and call the function printing message to console

const getNotes = require("./notes.js");

const myNote = getNotes();
console.log(myNote);
// Output
// Your notes...
