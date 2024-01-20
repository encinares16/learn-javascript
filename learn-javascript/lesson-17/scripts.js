
//  JS array.filter() method = creates new array with all elements  that pass
//                             the test provide by a function

let ages = [5, 45, 7, 35, 18, 20, 25, 60, 75]
let teens = ages.filter(checkAgeTeen)

teens.forEach(print)

function checkAgeTeen(element){
  return element > 18
}

function print(element){
  console.log(element)
}

