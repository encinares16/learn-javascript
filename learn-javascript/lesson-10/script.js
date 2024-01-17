
// JS Iterate an array

let fruits = ['Banana', 'Mango', 'Grapes','Peach', 'Avocado']

for(let i = 0; i < fruits.length; i+=1){
  process.stdout.write(fruits[i] + " ");
} 
console.log()


for(let i = fruits.length-1; i >= 0;i--){
  process.stdout.write(fruits[i] + " ");
}
console.log()

for(let fruit of fruits){
  console.log(fruit)
}
console.log()

let sets =[5, 10, 15, 20, 25]
sets.forEach(element => {
  console.log(element)
});