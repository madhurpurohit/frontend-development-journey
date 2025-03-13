//? Comparison Operator. (==,===,!=,!==,>,>=,<,<=).

// == It will compare that two value is equal or not, it doesn't consider the typeof that values.
console.log("== Operator.");

let num = 10;
let num1 = "10";
console.log(num == num1); // It will give 1, because 10 is equal to 10 although both have different type but it's value is same so it will give 1.

let number = 20;
let number1 = 20;
console.log(number == number1);

let str = "madhur";
let str1 = "Madhur";
console.log(str == str1);

//! When we compare null & undefined than always it will give true. & null with other datatypes or anything it will always give 0.
console.log(null == undefined); // Here null means 0 & undefined means 0, that's why it will give true.
console.log(null == 0); // It will give false/0, because it only give 1/true if null==undefined.

console.log(" ");

// === It will give 1 if & only if both the given values have same & also it's type is also same otherwise it will give 0.
console.log("=== Operator.");

let num2 = 10;
let num3 = "10";
console.log(num2 === num3);

let number2 = 20;
let number3 = 20;
console.log(number2 === number3);

let str2 = "madhur";
let str3 = "Madhur";
console.log(str2 === str3);

//! When we strictly compare null & undefined than always it will give false. & null with other datatypes or anything it will always give 0.
console.log(null === undefined); // Here null type is object but undefined type is undefined & both have different type that's why it will give false/0.

console.log(" ");

// (!=) It will give 1 if both values is not equal otherwise 0, but it will not consider the type of values.
console.log("!= Operator.");

let num4 = 10;
let num5 = "10";
console.log(num4 != num5);

let number4 = 20;
let number5 = 19;
console.log(number4 != number5);

let str4 = "madhur";
let str5 = "Madhur";
console.log(str4 != str5);
console.log(" ");

// (!==) It will give 1 if both values is not equal & the typeof that values is also not equal, otherwise it will give 1.
console.log("!== Operator.");

let num6 = 10;
let num7 = "10";
console.log(num6 !== num7);

let number6 = 20;
let number7 = 20;
console.log(number6 !== number7);

let str6 = "madhur";
let str7 = "Madhur";
console.log(str6 !== str7);
console.log(" ");

// > It will give 1 if the left side value is greater than right side value, otherwise it will give 0.
console.log("> Operator.");

let num8 = 10;
let num9 = "11";
console.log(num8 > num9);

let number8 = 20;
let number9 = 20;
console.log(number8 > number9);

let str8 = "madhur";
let str9 = "Madhur";
console.log(str8 > str9);
console.log(" ");

// >= It will give 1 if the left side value is greater than or equal to right side value, otherwise it will give 0.
console.log(">= Operator.");

let num10 = 10;
let num11 = "10";
console.log(num10 >= num11);

let number10 = 20;
let number11 = 19;
console.log(number10 >= number11);

let str10 = "madhur";
let str11 = "Madhur";
console.log(str10 >= str11);
console.log(" ");

// < It will give 1 if the left side value is less than right side value, otherwise it will give 0.
console.log("< Operator.");

let num12 = 10;
let num13 = "11";
console.log(num12 < num13);

let number12 = 20;
let number13 = 21;
console.log(number12 < number13);

let str12 = "madhur";
let str13 = "Madhur";
console.log(str12 < str13);
console.log(" ");

// <= It will give 1 if left side value is less than or equal to right side value, otherwise it will give 0.
console.log("<= Operator.");

let num14 = 10;
let num15 = "10";
console.log(num14 <= num15);

let number14 = 20;
let number15 = 21;
console.log(number14 <= number15);

let str14 = "madhur";
let str15 = "Madhur";
console.log(str14 <= str15);
console.log(" ");

//! Some extra question.

// Other cases with null then it will implicitly apply type conversion.
console.log("null compare with other.");

console.log(null < 0);
console.log(null > 0);
console.log(null <= 0);
console.log(null >= 0);

console.log(" ");

// Here when undefined is convert than it became NaN which means it is not a number. That's why it will always give false.
console.log("undefined compare with others.");

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined <= 0);
console.log(undefined >= 0);

console.log(" ");

// When we compare NaN with NaN than it will always give false because both NaN can caused due to different situation or reason.
console.log("NaN compare with NaN.");

console.log(NaN == NaN);

console.log(" ");
