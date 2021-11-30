// 1
// console.log(process.argv);
// now run node app.js Andrew
// argument vector - an array containing all the arguments provided
/*
[
  '/Users/decagon/.nvm/versions/node/v17.1.0/bin/node', // path to nodejs executable
  '/Users/decagon/Documents/mead/4-File-System-and-Command-Line-Args-Notes-App/15-Getting-Input-from-Users/app.js', // path to app.js
  'Andrew' // value we provided
]
*/

// 2
// console.log(process.argv[2]);
// In terminal specify the action - if to add or remove a note
// node app.js add

// 3
const command = process.argv[2];
if (command === "add") {
  console.log("Adding note!");
} else {
  console.log("Removing note");
}
// $ node app.js add
// $ node app.js remove

// If adding a note specify the note title and body
// If removing a note specify the title
// Next
// - In terminal do this
// $ node app.js add --title="This is my title"
console.log(process.argv);
/* 
[
  '/Users/decagon/.nvm/versions/node/v17.1.0/bin/node',
  '/Users/decagon/Documents/mead/4-File-System-and-Command-Line-Args-Notes-App/15-Getting-Input-from-Users/app.js',
  'add',
  '--title=This is my title'
]
*/
// parsing command line argument we need more robust npm package to do this for use - next topic.
