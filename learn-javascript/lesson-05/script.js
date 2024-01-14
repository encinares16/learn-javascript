const ps = require('prompt-sync')
const prompt = ps();

// JS If Else Statement

let name = prompt("Enter your name: ")
let age = prompt("Enter your age: ");

if(age > 18){
  console.log(`Hi ${name}, you are old enough`)
} else {
  console.log(`Sorry ${name}, you are still a teen`)
}

// Shorthand If Else Statement
console.log("\nShorthand If Else")
console.log(age > 18 ? `Hi ${name}, you are old enough` : `Sorry ${name}, you are still a teen`)