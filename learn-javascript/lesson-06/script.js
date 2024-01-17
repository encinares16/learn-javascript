const ps = require('prompt-sync')
const prompt = ps();

// JS Loops

// while loop
let name
while (name == null || name == '') {
  name = prompt("Enter your name: ")
}
console.log(name)


// do-while loop
let age;
do {
  age = Number(prompt("Enter your age: "))
  console.log(!isNaN(age) ? age : "Not a number")
} while (isNaN(age));


// for loop
let cars = ['Lamborghini', 'Ferrari', 'Subaru']
for (let i = 0; i < cars.length; i++) {
  console.log(`Cars ${i+1}: ${cars[i]}`)
}

