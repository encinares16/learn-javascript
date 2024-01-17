const ps = require("prompt-sync")
const prompt = ps();

// Print Right Triangle

let symbol = "*"
let numberOfLines = Number(prompt("Enter number of lines: "))
for (let i = 0; i < numberOfLines + 1; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write(symbol)
  } console.log()
}