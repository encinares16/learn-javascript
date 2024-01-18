// const ps = require('prompt-sync')
// const prompt = ps();

//  array.forEach() = executes a provided callback function once for each array element

let names = ["luffy", "zoro", 'sanji']

names.forEach(capitalize)
names.forEach(print)

function capitalize(element, index, array){
  array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(element){
  console.log(element)
}


let city = ["M", "A", "N", "I", "L", "A"]

city.forEach(output)

function output(element){
  process.stdout.write(element + " ");
}


// reversing an array
console.log("\n")
for (let i = city.length - 1; i >= 0 ; i--) {
  process.stdout.write(city[i] + " ")
}
