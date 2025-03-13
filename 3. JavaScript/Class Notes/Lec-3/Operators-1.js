//* Operators In JS.

//? Arithmetic Operator. (+,-,*,/,%,++,--).

console.log(6 * 3 + 18 / 6 - 9); // This is consider as bad habit.
// 1. 18+18/6-9.
// 2. 18+3-9.
// 3. 21-9
// 4. 12

console.log((6 * (3 + 18)) / 6 - 9);
// 1. (((6 * 21)/6)-9)
// 2. ((126/6)-9)
// 3. (21-9)
// 4. 12

// Arithmetic operator precedence. It will firstly goes from top to bottom & than left to right.
// Divide Multiply.
// Addition Subtraction.

//todo Modulus Operator.
console.log(20 % 3); // It will give remainder.

//todo pre Increment & decrement.
let sum = 50;
++sum;
console.log(sum);

--sum;
console.log(sum);

//todo post Increment & decrement.
let sum1 = 20;
sum1++;
console.log(sum1);

sum1--;
console.log(sum1);

//? Assignment Operator. (=,+=,-=,*=,/=).
let x = 20;
console.log(x);

x -= 10; // x = x-10.
console.log(x);

x += 10; // x = x+10.
console.log(x);

x /= 10; // x = x/10.
console.log(x);

x *= 10; // x = x*10.
console.log(x);

x %= 10; // x = x%10.
console.log(x);
