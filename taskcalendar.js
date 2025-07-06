// taskCalendar.js

let day = prompt("Enter a day of the week:").toLowerCase();

switch (day) {
  case "monday":
    console.log("Your task for Monday is: Finish your assignments.");
    break;
  case "tuesday":
    console.log("Your task for Tuesday is: Attend group study.");
    break;
  case "wednesday":
    console.log("Your task for Wednesday is: Review your notes.");
    break;
  case "thursday":
    console.log("Your task for Thursday is: Work on your project.");
    break;
  case "friday":
    console.log("Your task for Friday is: Submit your homework.");
    break;
  case "saturday":
    console.log("Your task for Saturday is: Relax and recharge.");
    break;
  case "sunday":
    console.log("Your task for Sunday is: Prepare for the week ahead.");
    break;
  default:
    console.log("Invalid day. Please enter a valid day of the week.");
}
