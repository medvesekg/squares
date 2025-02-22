const { calculateSquares } = require("./squares.js");

const height = Number(process.argv[2]);
const width = Number(process.argv[3]);

console.log(calculateSquares(height, width));
