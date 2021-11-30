import validator from "validator";
// const validator = require('validator');

// isEmail(str[, option])

console.log(validator.isEmail("andrew@example.com")); // true
console.log(validator.isURL("https://example.com")); // true

console.log(validator.isEmail("example.com")); // false
console.log(validator.isEmail("http://...")); // false
