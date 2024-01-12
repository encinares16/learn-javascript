const ps = require('prompt-sync')
const prompt = ps();

// JS Variables
let username = prompt("Name: ")
let age = prompt("Age: ")
let yearGraduated = prompt("Year Graduated: ")

yearGraduated = 2024
console.log(`\n\nName: ${username} \nAge: ${age} \nGraduate: ${yearGraduated}`);


