// Chapter 2 PS
// Problem No 1
const prompt = require("prompt-sync")();

let age = prompt("What is your age?");
age = Number.parseInt(age);
if (age > 10 && age < 20) {
  console.log("Your age lies between 20 and 30");
} else {
  console.log("Your age doesnt lies between 20 and 30");
}
