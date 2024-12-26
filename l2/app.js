//module.js
const greet = require("./greet.js"); //commonjs
//console.log(greet); //[Function: greet]
greet(`Tim`);
greet(`Skyy`);



// function sum(a, b) {
//   return a + b;
// }

// function greetWithSum(text, a, b, sum) {
//   const result = sum(a, b);
//   console.log(text, result);
// }

// console.log(sum(25, 20));

// greetWithSum("Hello, I am greeting with SUM", 25, 20, sum);
