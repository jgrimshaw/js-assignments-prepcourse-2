// if statements
var raining = true;
var cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


// if else statement
var cold = false;

if (cold) {
  console.log("Make sure you pick up a scarf!");
} else {
  console.log("Short sleeves are fine.");
}


// if | else if | else
var temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won\'t cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you\'re ready to go outside!");


// && operator
var isCitizen = true;
var age = 20;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


// || operator
var temp = 60;
if (temp < -40 || temp > 40) {
  console.log("Maybe going outside isn\'t such a great idea ...")
}


// ! operator
var raining = false;

if (!raining) {
  console.log("Leave your umbrella at home!");
}




