const ps = require('prompt-sync')
const prompt = ps();

// Multiplication Table

let numbers = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9, 10]
let table1 = numbers.map(multiply)

table1.forEach(print)

function multiply(element){
  return element * 10
}

function print(output){
  return console.log(output)
}

