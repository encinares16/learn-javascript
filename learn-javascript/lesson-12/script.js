
// JS Spread Operator '...'   allows an iterable such as an array or string
//                            to be expanded in places where zero or more 
//                            arguments are expected. (unpacks the elements)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(...numbers)

console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

let class1 = ["Goku", "Vegeta", "Trunks"]
let class2 = ["Naruto", "Sasuke", "Kakashi"]
let class3 = ["Luffy", "Zoro", "Sanji"]

let school = []

school.push(...class1, ...class2, ...class3)

console.log(...school)
console.log(`Total Students: ${school.length-1}`)



