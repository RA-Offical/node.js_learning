const path = require("path");

// printing path
// console.log(path);

console.log(path.sep);

// join
const filename = path.join("content", "subfolder", "file.txt");
console.log(filename);

//basename
const basename = path.basename(filename);
console.log(basename);

// absolute path
const absolutePath = path.resolve(__dirname, filename);
console.log(absolutePath);
