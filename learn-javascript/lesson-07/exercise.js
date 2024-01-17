const ps = require('prompt-sync')
const prompt = ps();

// Find Triangle Hypotenuse

hypotenuse = (sideC) => {
  let sideA = prompt("Enter the value for side A: ")
  let sideB = prompt("Enter the value for side B: ")
  sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
  return console.log(`Hypotenuse: ${sideC}`)
}

hypotenuse();

