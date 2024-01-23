
//  arrow function = compact alternative to a traditional function


// traditional function expression
const printMyName = function(firstname){
  console.log(`Firstname: ${firstname}`)
}
printMyName("Jerome")


// arrow function
const print = (lastname) => {
  console.log(`Lastname: ${lastname}`)
}
print("Encinares")

// Option 2 remove '{}': if your function uses only an arguments or a single statement 
const option2 = lastname => console.log(`Lastname: ${lastname}`)
option2("Encinares")


// calculate percentage
const percentage = function(x, y){
  return x / y * 100;
}

console.log(`${percentage(25, 100)}%`)