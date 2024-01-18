
//  JS Rest Parameter '...'
//  
//  rest parameters = represents an indefinite number of parameters
//                    (packs arguments into an array)


let a = 2
let b = 4
let c = 5
let d = 6
let e = 10


function sum(...numbers){
  let total = 0
  for(let number of numbers){
    total += number
  }
  return total
}

function product(a, b){
  return product = a * b
}

console.log(sum(product(10, 2), a, b, c, d, e))
