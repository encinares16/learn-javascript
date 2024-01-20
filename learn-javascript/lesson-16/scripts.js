
// JS array.map() methods - executes a provided callback function once for each
//                          array elements and creates a new array

let numbers = [1,2,3,4,5,6,7,8,9,10]

let squares = numbers.map(power)
squares.forEach(print)


// Power
function power(element){
  return Math.pow(element, 2)
}

// Cube
let cubes = numbers.map(cube)
cubes.forEach(print)

function cube(element){
  return Math.pow(element, 3)
}

function print(output){
  console.log(output)
}