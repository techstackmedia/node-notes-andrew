const fs = require("fs");
// {"name":"Andrew","planet":"Earth","age":27}
const obj = {
  name: "Andrew",
  planet: "Earth",
  age: 27,
};
const toStr = JSON.stringify(obj);
const writeData = fs.writeFileSync("2-json.json", toStr);
writeData;

/*
const readData = fs.readFileSync("2-json.json", "utf-8");
console.log(readData);
*/

//
// Challenge: Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. stringify the changed object and overwrite the original data
// Test your work by viewing data in the JSON file

const parseData = JSON.parse(toStr);
/*
or
const readFIleData = fs.readFileSync("2-json.json", "utf-8");
const parseData = JSON.parse(readFIleData);
*/
parseData.name = "Bello";
parseData.age = 28;

const str = JSON.stringify(parseData);
const toJSON = fs.writeFileSync("2-json.json", str);
toJSON;
