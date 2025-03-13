//? Logical Operator. (&&,||,!).

// (&&) Logical AND. It will give 1 if both have 1 or true or something else instead of 0, otherwise it will give 0 if one of the value is 0 or false.
console.log("&& operator.");

let age = 18;
let money = 420;
console.log(age >= 18 && money > 200);
console.log(age > 18 && money > 200);

console.log(" ");

// (||) Logical OR. It will give 1 if one of the both value have 1 or true or something else instead of 0, otherwise if both values have 0 or false, than it will give 0.
console.log("|| Operator.");

console.log(age >= 18 || money > 200);
console.log(age > 18 || money > 200);
console.log(age > 18 || money < 200);

console.log(" ");

// (!) Logical NOT. It will give 1 if the value is 1 or true or something else instead of 0, & if the value is 0 or false than it will give 0.
console.log("! Operator.");

console.log(!age);
console.log(!0);
console.log(!1);

console.log(" ");

//? Bitwise Operator. (&,|,^,>>,<<);
// Here Bitwise means firstly convert both operand into binary than compare it bit by bit.

console.log("& operator.");

console.log(4 & 5);
console.log(2 & 2);

console.log("| operator.");

console.log(4 | 5);
console.log(2 | 2);

console.log("^ Operator.");

console.log(4 ^ 5);
console.log(2 ^ 2); // In ^ (XOR) when both operand have same than it will give 0, In XOR when both bit have same than it will give 0 & if both bit have different than it will give 1.
console.log("1" ^ 1);

console.log(" ");

console.log("<< (left shift) Operator.");
// Here (left operand * (2 ^ right operand)).
console.log(5 << 3); // In this 5 in binary 101.00000, so here 3 zero after decimal will go left side of decimal. So it will became 10100 which means 40.

console.log(" ");

console.log(">> (right shift) Operator.");
// Here (left operand / (2 ^ right operand)).
console.log(8 >> 2); // In this 2 in binary 1000.0000, so here 2 digit before decimal will go right side of decimal. So it will became 10.00 which means 2.

console.log(7 >> 2); // In this 111.000, So it will became 1.11 which means 1.

console.log(" ");
