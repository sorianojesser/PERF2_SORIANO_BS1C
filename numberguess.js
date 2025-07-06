// numberGuess.js

let correctNumber = 3;
let guess;

while (guess !== correctNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));

  if (guess > correctNumber) {
    console.log("Too high!");
  } else if (guess < correctNumber) {
    console.log("Too low!");
  } else {
    console.log("Correct!");
  }
}
