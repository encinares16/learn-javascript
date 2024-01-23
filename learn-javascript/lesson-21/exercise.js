
//  Calculate Percentage

const percentage = (x, y) => {
  return x / y * 100;
}
console.log(`${percentage(25, 100)}%`)

// Calculate Average

let grades = [80, 85, 90, 95, 98, 88, 85, 90]

function average(){
  let total = 0
  for(let grade of grades){
    total += grade
  }
  return total
} 

console.log(Math.ceil(average(...grades) / grades.length))





