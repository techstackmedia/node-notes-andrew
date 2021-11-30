import { argv } from "process";

argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

/* 
0: /Users/decagon/.nvm/versions/node/v17.1.0/bin/node
1: /Users/decagon/Documents/mead/4-File-System-and-Command-Line-Args-Notes-App/16-Argument-Parsing-with-Yargs-Part-I/notes-app/app.js
*/
