// ageCheck.js

let age = parseInt(prompt("Enter your age:"));

if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}
