//* If-else:- It is a conditional statement. If the given condition inside () of if, is true than it will run if() code block, otherwise it will run else code block.
let age = 40;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You aren't eligible.");
}

//? if-else_if-else
if (age < 18) {
  console.log("You are a kid.");
} else if (age >= 18 && age <= 45) {
  console.log("You are young.");
} else {
  console.log("You are old.");
}

//? Switch Case:- If we have multiple conditions than we use switch case, & in this
// let dayCount = 4;
let dayCount = new Date().getDay();

switch (dayCount) {
  case 0:
    console.log("Sunday");
    break;

  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;

  default:
    console.log("Not a valid day.");
    break;
}

// In switch statement evaluates its condition & compares it with each case label using strict equality (===). This means both value & type must match for the case to execute.
// let num = 10;
let num = "10";
let type = typeof num;

switch (num) {
  case 10:
    console.log("Values & type of variable are matched.");
    console.log(`Value is: ${num} & type of value is:${type}`);
    break;

  default:
    console.log("Values & type of variable aren't match.");
    console.log(`Value is: ${num} & type of value is:${type}`);
    break;
}
