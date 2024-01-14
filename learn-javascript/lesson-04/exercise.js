// Exercise 2: Separate Full Name

let fullname = "Jerome Encinares Talavera"

let firstname = fullname.slice(0, fullname.indexOf(' ')).trim()
let middlename = fullname.slice(fullname.indexOf(" "), fullname.lastIndexOf(' ')).trim()
let lastname = fullname.slice(fullname.lastIndexOf(" ")).trim()

console.log(`Full Name: ${fullname}`)
console.log(`First Name: ${firstname}`)
console.log(`Middle Name: ${middlename}`)
console.log(`Last Name: ${lastname}`)

