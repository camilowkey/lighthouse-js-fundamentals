/*
const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");       */


/* Temperature conditional example: 

const temperature = -5;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/


//voting example with logical operator

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}



//Temperature additional example with logical operator

let temperature = 100;

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}



//raining example showing the reversal effect of the logical operator " ! " | raining is false, meaning !raining is true, 
//console will print "Leave your umbrella at home!"

let raining = false; 

if (!raining) {
  console.log("Leave your umbrella at home!");
}

















