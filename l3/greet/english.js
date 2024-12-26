const langJson = require('./greeting.json'); //json{} always received in object{} format

function greet() {
  console.log("Howdy 🤠");
}

console.log(langJson.greetings.German) //Hallo

module.exports = { greet, age: 29 };
