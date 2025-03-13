// Data Types in JS.

//* How to declare the variable.
//? let variableName = value; OR var variableName = value; OR const variableName = value;

//todo Their are two types of data types.
//* Primitive Data Types:- Number, String, Boolean, BigInt, Null, Undefined, Symbol.
//? In this Number means whole number. & number will get 64 bit.
let intNumber = 10;
console.log(intNumber);

//* With the help of typeof we can easily find type of an variable.
console.log(typeof intNumber);
console.log(typeof 10);

let floatNumber = 10.5;
console.log(floatNumber);
console.log(typeof floatNumber);

//? String.
let stringName = "Madhur";
console.log(stringName);

console.log("String");
console.log(typeof "Mad");

//? Boolean.
let boolValue = true;
console.log(boolValue);

console.log(typeof boolValue);
console.log(typeof false);

//? NULL.
let userName = null;
console.log(userName);
console.log(typeof userName); // It will give null as an object because in JS null is treat as an object.

//? Undefined.
let account;
console.log(account); // It will give undefined because we didn't give any value or assign a value.
console.log(typeof account);

//? BigInt.
let bigNumber = 123456789123456789123456789;
console.log(bigNumber); // It will wrap up the number & didn't give the exact value that we have entered.
console.log(typeof bigNumber); // It will give number.

let bigNumber1 = 123456789123456789123456789n; // For bigInt we use n after number value.
console.log(bigNumber1);
console.log(typeof bigNumber1); // It will give give bigint.
