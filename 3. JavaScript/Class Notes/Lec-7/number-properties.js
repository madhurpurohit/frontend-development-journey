//* How to create number variable.
let number1 = 231;
let number2 = new Number(231);
let number3 = new Number(231);

console.log(number1);
console.log(number2);

console.log(number1 == number2); // It will give true. We know that number1 is number & number2 is object, so number2 will be converted into number than it will compare that's why it will give true.
console.log(number2 == number3); // it will give false. We know that number2 is object & number3 is also object, so it will directly compare both but both stores different address of values from heap, that's why it will give false.

//! Operation's that will apply on number.
let num = 254.789;
let num1 = 254.747;
let num2 = 254.75;
let num3 = 254.7448;

//? toFixed(): It will return he number with specific decimal places which is given in toFixed(). & before giving the number it will round of the number.
console.log(num.toFixed(3));
console.log(num1.toFixed(1));
console.log(num2.toFixed(1));
console.log(num3.toFixed(1));

//? toPrecision():- It means how many digits we want to print or return. For decimal number it will round-off the digit.
console.log(num.toPrecision(3));
console.log(num.toPrecision(5));
console.log(num.toPrecision(2));

//? toExponential():- It means how many digits we want after decimal, but firstly it convert the number into a decimal number which exclude the first digit & include all digit after decimal point.
console.log(num.toExponential(2));
console.log(num.toExponential(4));

//? toString():- It will convert number into string.
console.log(num.toString());
console.log(typeof num.toString());
console.log(String(num));
console.log(typeof String(num));

//? valueOf():- It will simply give the value.
console.log(num.valueOf());
