// passwordPrompt.js

let correctPassword = "correctPassword";
let input;

do {
  input = prompt("Enter your password:");
  if (input !== correctPassword) {
    console.log("Incorrect, try again.");
  }
} while (input !== correctPassword);

console.log("Access granted.");
