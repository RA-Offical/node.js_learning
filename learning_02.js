const names = require("./module_01");
const sayHi = require("./moudle_02");
const data = require("./module_03");
require("./module_04");

sayHi(names.john);
sayHi(names.peter);
console.log(data);
