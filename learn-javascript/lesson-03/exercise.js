const ps = require('prompt-sync')
const prompt = ps();

// Exercise 1 : Check number if odd or even

let number = prompt("Enter a number: ")
let result = number % 2;

if(result == 0) {
  console.log(`The number you entered '${number}' is an EVEN number`)
} else if (result == 1){
  console.log(`The number you entered '${number}' is an ODD number`)
}
else if(result != NaN){
  console.log(`The number you input '${number}' is not a number`)
}