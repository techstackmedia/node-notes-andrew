const yargs = require("yargs");
const notes = require("./notes.js");
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
    notes.addNote(argv.title, argv.body);
    // console.log(`Adding a new note`, argv.body);
    // console.log(`Adding a new note`, argv.title);
  },
});
// $ node app.js add... --body="new body" --title='title'
// Adding a new note new body
// Adding a new note title

// console.log(yargs.argv); // or yargs.parse()
yargs.parse(); // parsing all the argumemnt with all the configuration
