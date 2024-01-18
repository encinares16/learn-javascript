const ps = require('prompt-sync')
const prompt = ps();

//  callback = passed an argument to another function

multiply(9, 9, displayConsole)

function multiply(x, y, myCallback){
  let product = x * y
  myCallback(product)
}

const sum = (x, y, myCallback) => {
  let total = x + y
  myCallback(total)
}

sum(Number(prompt("Enter first number: ")), Number(prompt("Enter second number: ")), displayConsole)

function displayConsole(output) {
  console.log(output)
}