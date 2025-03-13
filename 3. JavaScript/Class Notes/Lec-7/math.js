//! Math Properties:- Math is an object in JS.

//? Math.E:- It will give the Euler value, like log base e.
console.log(Math.E);

//? Math.LN10:- It will give the value of log10 base e. Or e^x=10, where x=?
console.log(Math.LN10);

//? Math.PI:- It will give the value of PI.
console.log(Math.PI);

//? Math.random():- It will give random value. 0<=value<1, means it will give decimal values.
console.log(Math.random());

//? Math.floor(X):- Returns the value of X rounded down to its nearest integer.
let num4 = 23.3;
let num5 = 23.6;
console.log(Math.floor(num4));
console.log(Math.floor(num5));

//? Math.ceil(X):- Returns the value of X rounded up to its nearest integer.
console.log(Math.ceil(num4));
console.log(Math.ceil(num5));

//todo How to generate random values from 0 to 9.
console.log(Math.floor(Math.random() * 10));

//todo How to generate random values from 1 to 10.
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.ceil(Math.random() * 10));

//todo How to generate random values from 11 to 20.
console.log(Math.floor(Math.random() * 10) + 11);
console.log(Math.ceil(Math.random() * 10) + 10);

//todo Important:- To generate a random values from minimum value to maximum value, here max=50 & min=40.
//* Formula:- console.log(Math.floor(Math.random()*(max-min+1)+min));
console.log(Math.floor(Math.random() * (50 - 40 + 1) + 40));

//todo HW:- Generate random number for ludo, means 1-6.
console.log(Math.floor(Math.random() * 6 + 1));
