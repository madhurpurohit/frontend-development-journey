//* Type Conversion.
//todo any data type to number.

//? String to Number.
let acc_bal = "100";
let num = Number(acc_bal);

console.log(acc_bal);
console.log(num);

console.log(typeof acc_bal);
console.log(typeof num);

//? Boolean to Number.
let x = true;
let y = false;

console.log(Number(x));
console.log(Number(y));

let account = "100xs";
console.log(Number(account)); // It will give NaN because it will not convert into number.

//? Null to Number.
let z = null;
console.log(Number(z));

//? Undefined to Number.
let a;
console.log(Number(a));

//todo any data type to String.

//? Number to String.
let num1 = 20;
console.log(String(num1));
console.log(typeof num1);

//? Boolean to String.
let t = true;
let f = false;

console.log(String(t)); // It will convert true into "true".
console.log(String(f)); // It will convert false into "false".

//? Null to String.
let n = null;
console.log(String(n));

//? Undefined to String.
let m;
console.log(String(m));

//todo any data type to boolean.

//? String to Boolean.
let str = "abc";
console.log(Boolean(str));

let str1 = " ";
console.log(Boolean(str1)); // It will give true because it gets ASCII value. & every character which is get ASCII Value.

let str2 = "";
console.log(Boolean(str2));

//? Number to Boolean.
let num2 = 10;
console.log(Boolean(num2));

let num3 = 0;
console.log(Boolean(num3)); // This will give false because 0 is treated as false in boolean.

//? Null to Boolean.
let n1 = null;
console.log(Boolean(n1)); // This will also give false because null means 0.

//? Undefine to Boolean.
let u;
console.log(Boolean(u)); // This will give false because we don't assign any value.
