// JS toLocaleString() = returns a string with a language 
//                       sensitive representation of number

//                        locale = default value: undefined

let myNumber = 1234567.8900

let USD = myNumber.toLocaleString("en-US", {style: "currency", currency: "USD"})
let EUR = myNumber.toLocaleString("de-DE", {style: "currency", currency: "EUR"})

console.log(USD)
console.log(EUR)

let number = 1;
let percent = number.toLocaleString(undefined, {style: "percent"})
console.log(percent)

number = 37.5;
let units = number.toLocaleString(undefined, {style: "unit", unit: "celsius"})
console.log(units)
