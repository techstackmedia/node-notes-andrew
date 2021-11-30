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
// $ node app.js add --title="shopping list"
yargs.command({
  command: "add",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  describe: "Add a new note",
  handler: function (argv) {
    console.log("Adding a new note!", argv);
  },
});
// $ node app.js add --title
// { _: [ 'add' ], title: '', '$0': 'app.js' }

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
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log(`Reading a note ${argv.title}`); // argv.title
  },
});
// Reading a note Reading...

//
// Challenge: Add an option for the add command
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work

yargs.command({
  command: "add...",
  describe: "Adding a note",
  builder: {
    body: {
      describe: "Body Note",
      demandOption: true,
      type: "string",
    },
    title: {
      describe: "Title Note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log(`Adding a new note`, argv.body);
    console.log(`Adding a new note`, argv.title);
  },
});
// $ node app.js add... --body="new body" --title='title'
// Adding a new note new body
// Adding a new note title

// console.log(yargs.argv); // or yargs.parse()
yargs.parse(); // parsing all the argumemnt with all the configuration
