
// JS 2D Array

let tools = ["hammer", "grinder", "ruler"]
let equipment = ["blocks", "sand", "cement"]
let woods = ["oakwood", "mahogany", "narra"]
let shop = [tools, equipment, woods]

for(let category of shop){
  for(let items of category){
    console.log(items)
  }
}