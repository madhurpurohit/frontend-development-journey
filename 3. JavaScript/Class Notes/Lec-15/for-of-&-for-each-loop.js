//? for...of loop:- It is used to iterate over the values of an iterable object, such as arrays, strings or other iterable object's except object, so don't use it on object. Because object is not iterable.
const arr = [10, 20, 30, 40, 50];
for (let value of arr) {
  console.log(value);
}

let str = "Madhur Purohit";
for (let value of str) {
  console.log(value);
}

//* But what if we want to iterate over an object through for...of loop.
let obj = {
  name: "Madhur",
  age: 24,
};

for (let value of Object.values(obj)) {
  console.log(value);
}

for (let value of Object.keys(obj)) {
  console.log(value);
}

//? forEach loop:- This method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array. It doesn't return any value, instead it just modify or print the value from original array.
/* 1st Syntax:- const/let vName=arrayName.forEach((curElem/value, index, arr)=>{
                    Code here.
                });

    2nd Syntax:- arrayName.forEach(callback function);
*/

let arr1 = [10, 20, 30, 40, 50];
arr1.forEach(function (num) {
  console.log(num);
});

arr1.forEach((num) => {
  // We can also write this in single line because here 1 parameter & 1 line of code is presented.
  console.log(num);
});

arr1.forEach((num, index) => {
  console.log(num, index);
});

arr1.forEach((num, index, arr2) => {
  arr2[index] = num * 2;
});

console.log(arr1);

function print(num) {
  console.log(num);
}

arr1.forEach(print);

//* Filter method:- This method creates a new array with all elements that pass the test implemented by the provided function.
/* 1st Syntax:- arrayName.filter(callback Function);
   2nd Syntax:- arrayName.filter(callback Function, this Argument);
   3rd syntax:- arrayName.filter((value,index,newArrayName)=>{
                    return statement;
                });
*/

let arr3 = [10, 22, 33, 41, 50, 60];
const result = arr3.filter((value) => {
  return value % 2 == 0;
});

console.log(result);

const result1 = arr3.filter((value, index, newArr) => {
  return newArr[index] % 2 == 1;
});
console.log(result1);

// Another real life example.
const students = [
  { name: "Madhur", age: 24, marks: 99 },
  { name: "Sam", age: 26, marks: 70 },
  { name: "John", age: 32, marks: 33 },
  { name: "Rock", age: 14, marks: 85 },
  { name: "Peter", age: 18, marks: 50 },
];

// const above50 = students.filter((obj) => obj.marks > 50);
const above50 = students.filter(({ marks }) => marks > 50); // Here we destructure the object directly.

console.log(above50);

//* Map method:- It creates new array from calling a function for every array element.map() does not change the original array.
//! Syntax:- arrayName.map(callback function);
let arr5 = [10, 20, 30, 40, 50, 60];
const modifyArray = arr5.map((value, index, arr) => {
  return value * value;
});

console.log(arr5);
console.log(modifyArray);
