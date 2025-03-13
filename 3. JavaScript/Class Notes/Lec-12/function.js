//* How to declare function & call it?
//? 1. Function without parameter.
/* Syntax:- function functionName(){
                Code Hera.
            };

    Calling:- functionName();
*/
function greet() {
  console.log("Hello, Everyone.");
  console.log("I'm Madhur Purohit.");
  console.log("& I'm a web developer.");
}

greet();

//? 2. Function with parameter.
/* Syntax:- function functionName(parameter1, parameter2,...){
                Code Hera.
            };

    Calling:- functionName(argument1, argument2, ...);
*/
function add(number1, number2) {
  //   console.log(number1 + number2);
  console.log(`${number1} + ${number2} = ${number1 + number2}`);
}

add(3, 4);

//* Multiplication function with return statement,
function multiply(num1, num2) {
  return num1 * num2;
}

// console.log(multiply(20, 7));
let result = multiply(20, 7);
console.log(`20 * 7 = ${result}`);

//* How to built function in a variable format.
const func1 = function () {
  console.log("Hello, Bhailog!");
  return "Fun";
};

func1();
console.log(func1);
console.log(func1());

const func2 = function (num1, num2) {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
};

func2(9, 5);

//* Fat Arrow Function.
/* Syntax:- const/let variableName = (para1, para2) =>{
                Code here.
            };

    calling:- variableName(arg1, arg2)
*/
// Both the below function are same, so when we have only return statement in a function than we directly write it without using {} & return keyword.
const sum = (num1, num2) => {
  return num1 + num2;
};

const sum1 = (num1, num2) => num1 + num2;

console.log(sum(3, 4));
console.log(sum1(3, 4));

//? when we have single parameter than we don't need to write ().
// let cube = num => num * num * num;
let cube = (num) => num * num * num;
console.log(cube(9));

//* How to make a function when we don't know that how many argument is passed.
// Here we use rest operator(...), in rest operator it will take values one by one, & here it will create an array & store all the values in it.
const sumAll = function (...number) {
  // We will sum all these number using for loop.
  console.log(number);
};

sumAll(2, 3, 4, 5);
sumAll(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

//* How to pass object in function.
let person = {
  name: "Madhur",
  age: 24,
  amount: 4500,
};

function fun(obj1) {
  console.log(obj1.name, obj1.age);
}

fun(person);

// we can also destructure object in function parameter.
function fun1({ name, age }) {
  console.log(name, age);
}

fun1(person);

// In function object is pass through pass by value or pass by reference.
let user = {
  name: "Madhur Purohit",
  age: 24,
  mobile_number: 7610,
};

function fun2(obj) {
  console.log(obj);
  obj.name = "Madhur";
  console.log(obj);
}

console.log(user);
fun2(user);
console.log(user);
