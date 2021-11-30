const yargs = require("yargs");
// console.log(yargs.argv); // { _: [], '$0': 'app.js' }
// In terminal run
// $ node app.js add --title="Things to buy"
// console.log(yargs.argv);
// { _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }
// node app.js --help
// customize yargs version
yargs.version("1.1.0");
// $ node app.js --version

// add, remove, read, list

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});
// { _: [ 'add' ], '$0': 'app.js' }

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note...", // optional
  handler() {
    console.log("Reoving a note");
  },
});

//
// Challenge: Add two new commands
//
// 1. Setup command to support "list" command (print placeholder message for now)
// 2. Setup command to support "read" command (print placeholder message for now)
// 3. Test your work by running both commands and ensure correct output

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    console.log("Listing out all note");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler() {
    console.log(`Reading a note`);
  },
});

console.log(yargs.argv);
