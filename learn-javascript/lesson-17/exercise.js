//  Filter Age

let ages = [16, 17, 25, ,45 ,30, 32, 68, 55, 18, 21, 28, 8, 11, 90, 60, 72, 23]

// Teens
let teens = ages.filter(checkAgeTeens)
console.log(`Total number of teens: ${teens.length}`)
teens.forEach(print)

function checkAgeTeens(element){
  return element <= 19
}

// Young Adults
let youngAdults = ages.filter(checkAgeYoungAdult)
console.log(`\n\nTotal numbers for young adult: ${youngAdults.length}`)
youngAdults.forEach(print)

function checkAgeYoungAdult(element){
  return element > 19 && element < 30
}

// Adults and Seniors
let adultsAndSeniors = ages.filter(checkAdultsAndSeniors)
console.log(`\n\nTotal numbers for Adults and Seniors: ${adultsAndSeniors.length}`)
adultsAndSeniors.forEach(print)

function checkAdultsAndSeniors(element){
  return element > 30
}
function print(element){
  return process.stdout.write(`${element} `)
}

