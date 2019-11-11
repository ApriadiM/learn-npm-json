const chalk = require("chalk");

// ---

const name = "Apriadi";
console.log(chalk.white(name));

// ---

const info = chalk.keyword("red");

const names = ["Maya", "Rahmat", "Abro"];
names.forEach(name => {
  console.log(info(name));
});
//sdsfedfdf
// Feel free to have some experiments with JavaScript in Node.js
