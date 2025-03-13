//* Type Inference in TypeScript refers to the ability of the TypeScript compiler to automatically determine the type of a variable based on the value assigned to it. This means that even if you don't explicitly specify a type, TypeScript can infer the most appropriate type and apply it.

let num: number = 10;
let x = 20;

// x = "Madhur"; // This gives an error.

let str = "Madhur";
// str = 10; // This gives an error.

let money; // Here money type is any means it is act like JS variable where we can give any value of any data type.

money = 10;
money = "Madhur";

console.log(money.toUpperCase());

//* Represents any type of value. When a variable has the any type, it can be assigned any value, and no type checking is done.
let answer: any = 10;
answer = "year";

//* The unknown type is safer than any because you cannot perform operations on an unknown value without first narrowing its type through type checks.
let value: unknown;
value = 40;
value = "Hello, Everyone!";

// console.log(value.toUpperCase()); // These will give error because on unknown value we can't apply any operation.

//? To apply operation on unknown data type value we firstly check it's data type & than we can apply operation.
if (typeof value === "string")
    console.log(value.toUpperCase());

if (typeof value === "number")
    console.log(value.toFixed(2));

//* Non-Primitive Data Type.
//? Array Data Type:-
//! Syntax:- let variableName:dataType[] = [Values...];

let arr: number[] = [10, 20, 30];

let arr1 = ["Madhur", "Purohit"]; // This will automatically infer the data type through it's value.

let arr2 = ["Madhur", 10, 20]; // This will automatically become string & number union data type.

let arr4: (string | number)[] = ["madhur", 10, 20]; // Here (|) this symbol means union.

// We can perform array operations.
arr4.push("Purohit");
arr4.push(50);

// arr4.push(true); // This will give error because we can't push another data type value.

let arr3: (string | number | boolean)[] = ["Madhur", 10, true];

//* Tuples:- Tuples are arrays with a fixed number of elements of specific types.
//! Syntax:- let variableName:[element data type]=[values];

let tuple: [string, number] = ["Madhur", 10];
// The above code means there are only 2 elements first element must be string data type & second element must be number data type.

//* Compile-time refers to the phase when the source code is translated into machine code or an intermediate format (e.g., bytecode). This is done by a compiler.

/*  Errors detected at this phase are called compile-time errors.
    Examples of compile-time errors include:
    Syntax errors (e.g., missing semicolons).
    Type mismatches (e.g., assigning a string to a variable declared as a number in TypeScript).
    Variable declarations without initialization (if required by the language).
*/

//* Runtime refers to the phase when the program is executed after it has been compiled (or interpreted).

/*  Errors detected during this phase are called runtime errors.
    Examples of runtime errors include:
    Dividing by zero.
    Accessing undefined variables or null references.
    Running out of memory.
    Examples of Runtime Activities:

    Executing code instructions.
    Handling user inputs.
    Interacting with APIs or databases
*/

//* Objects.
//? Implicitly means automatically infer the data type by value.
let obj1 = {
    name: "Madhur",
    age: 24,
    gender: "Male",
};

//? Explicitly means we define the data type of value.
// This is also known as inline object.
let obj2: { name: string, age: number, gender: string } = {
    name: "Madhur",
    age: 24,
    gender: "Male",
};

//? Another way to create object.
let person: { name: string, age: number, balance: number };

person = {
    name: "Madhur",
    age: 24,
    balance: 4510,
};

//? What is aliases?
// In this customer is a data type.
type customer = {
    name: string,
    age: number,
    id: string,
};

// In this c1 variable data type is customer.
let c1: customer = {
    name: "Madhur",
    age: 24,
    id: "0850CS211",
};

//? Another methods. This method is used mostly.
// When we made two interface with same name, than it will automatically merge it.
interface admin{
    name: string,
    age: number,
    position: string,
}

interface admin{
    balance:number,
}

let obj3: admin = {
    name: "Madhur",
    age: 24,
    position: "Founder",
    balance: 4520,
};