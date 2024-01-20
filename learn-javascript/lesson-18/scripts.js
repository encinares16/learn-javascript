
//  JS array.reduce() method = reduces an array to a single value

let prices = [10, 15, 20, 25, 50, 100, 150, 200]
let total = prices.reduce(checkOut)

function checkOut(total, element){
  return total + element
}

console.log(`The total amount is $${total}`)

