import chalk from "chalk";
// const chalk = require('chalk');
//
// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "success!" to the console in green
// 4. Test your work
//
// Bonus: Use docs to mess around with other style. Make text bold and inverse
console.log(chalk.bgGreen.black.bold.inverse("Success!"));
// styles (modifiers and colors) - inverse, underline, dim, reset, italic, hidden, strikethrough, visible, red
// the chain of order doesn't matter
