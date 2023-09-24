const _ = require("lodash");

const array = [1, [2, [3, [4]]]];

const newFlatArray = array.flatMap((value) => value);

const newLodAshFlatArray = _.flattenDeep(array);
console.log(newLodAshFlatArray);

console.log("Hello People");
