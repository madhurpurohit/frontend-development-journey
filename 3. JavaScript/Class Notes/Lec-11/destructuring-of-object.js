//? Destructuring of an object:- It means get the values individually.
//! Syntax:- let/const {key:variableName, key:variableName, ...} = ObjectName;
let obj = {
  name: "Madhur",
  money: 4500,
  balance: 400,
  age: 24,
};

// const { name, balance } = obj; // When we use const than we can't modify name or balance directly. In this name & balance are variable, means a key of object which is equal to name it's value give to name variable.
let { name, balance } = obj;
name = "Madhur Purohit"; // This will only change the name variable but the object remain same because in object name is key, & here name is variable.
console.log(name, balance);
console.log(obj);

// We can change this variable name also.
let { name: full_name, balance: acc_bal, age } = obj;
console.log(full_name, acc_bal, age);

//* If we want to destructure name or age & we want that balance & mony will transfer or assign to another object than:-
let obj1 = {
  name1: "Madhur",
  age1: 24,
  balance1: 400,
  money1: 4500,
};

const { name1, age1, ...obj2 } = obj1;
console.log(name1, age1, obj2, obj1);

// Destructuring of array.
const arr = [3, 2, 1, 5, 10];
const [first, second, , third] = arr; //In this we don't want to assign any variable to value 1, that's why we leave a blank space.
console.log(first, second, third);

const [one, two, ...arr2] = arr;
console.log(one, two, arr2, arr);

//? How to destructure a nested object.
let obj3 = {
  full_name: "Madhur",
  dob: 2001,
  insights: {
    hobby: "Playing Games",
    car: "Rolls Royce Phantom & Bugatti Chevron",
    fruit: "Mango & Strawberry",
  },
};

// const { insights: information } = obj3; // Inside information object which name is insights is stored.
// How to destructure directly.
const {
  insights: { hobby, car },
} = obj3;

console.log(hobby, car);

//todo How to print arr[0] with the help of destructuring.
let obj4 = {
  full_name: "Madhur",
  dob: 2001,
  arr: [2, 40, 60, 80, 100],
  insights: {
    hobby: "Playing Games",
    car: "Rolls Royce Phantom & Bugatti Chevron",
    fruit: "Mango & Strawberry",
  },
};

// 1st Method.
const { arr: arr1 } = obj4;
console.log(arr1);

const [first_value] = arr1;
console.log(first_value);

// 2nd Method.
const {
  arr: [index_0],
} = obj4;
console.log(index_0);

// To access 4th value of array.
const {
  arr: [, , , fourth],
} = obj4;
console.log(obj4.arr);
console.log(fourth);
