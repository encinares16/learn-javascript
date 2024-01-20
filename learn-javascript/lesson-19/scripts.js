
//  JS array.sort() method

let arrays = [4, 1, 3, 2, 5, 6, 7, 8, 10, 9]

console.log("Unsorted")
arrays.forEach(print)

console.log("\n\nAscending Sort")
arrays = arrays.sort(ascend)
arrays.forEach(print)

console.log("\n\nDescending Sort")
arrays = arrays.sort(descend)
arrays.forEach(print)

function ascend(x, y){
  return x - y
}

function descend(y, x){
  return x - y
}

function print(element){
  return process.stdout.write(`${element} `)
}

