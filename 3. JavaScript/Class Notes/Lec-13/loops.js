//* Loops:- When we want to run the same piece of code or some task that has repeat frequently than we use loops.
//? For Loop
/* syntax:- for(initialization, condition, iteration){
                Code here.
            }

            In initialization we only use let, because if we use const than value of this variable can't be modified so it will throw an error.
*/
// for (let num = 0; num <= 20; num++) {
//   console.log(`${num}. Hello, everyone`);
// }

//todo Sum of values from 0 to 10.
// If we have single line of code inside for loop than we use don't use {}, directly write the one line of code.
let sum = 0;
for (let num = 1; num <= 10; num++) sum += num;

console.log(sum);

//? Nested for loop:- loop inside loop.
// If we use console.log("*") than it will always print on newline.
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

//? while loop
/* Syntax:- initialization;
            while(condition){
                Code here;

                iteration;
            }
*/
let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

//? do-while loop:- When we want that our code runs at least one time even if condition is false.
/* Syntax:- Initialization;
            do{
              Code here;
              Iteration;
            }while(condition);
*/
let num1 = 0;
do {
  console.log(num1);
  num1++;
} while (num1 < 0);

//todo How to print or access array element.
let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//todo How to access or print each values.
const user = {
  name: "Madhur",
  age: 24,
  amount: 5000,
  city: "Harda",
};

// One method to print each value.
console.log(Object.values(user));

// Second method to print each element.
const keys = Object.keys(user); // It will store all the keys in array format.
for (let i = 0; i < keys.length; i++) {
  console.log(user[keys[i]]);
}
