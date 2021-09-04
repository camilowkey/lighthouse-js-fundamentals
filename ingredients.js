const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let x = 0;
while (x < ingredients.length) {
  console.log(ingredients[x]);
  x++;
}

console.log("------------------------------------------------")
// Write a for loop that prints out the contents of ingredients:

for (let y = 0; y < ingredients.length; y++) {
  console.log(ingredients[y]); 
}


console.log("------------------------------------------------")

//tried using for... of loop

for (let y of ingredients) {
  console.log(y);
} 

console.log("------------------------------------------------")

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let y = ingredients.length - 1; y >= 0; y--) {   
  console.log(ingredients[y]);
}

/* 
y = ingredients.length is 8, we subtract -1 because the element index counts as 0-7, 
y must be greater than 0 to work and we stop at 0 so that way it will stop at the last element of array
next y-- to make code go from right to left, console print elemnts 1 by 1 with ingredients[y]; 
*/

