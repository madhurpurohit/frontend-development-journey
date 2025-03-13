//* How to create Object.
const obj = {
  name: "Madhur",
  balance: 450,
  gender: "Male",
  age: 24,
};

console.log(obj);
// In object key is treated as string & also it will stored as an string.

//* How to access any value in object?
//! Syntax:- objectName.key  OR objectName["Key"]
console.log(obj.name);
console.log(obj["age"]);

// In object we can't give space in key name, for that we have to initialize key in string format. We can give 0 as an key but this will be accessed through string method.
let obj1 = {
  0: 245,
  1: 4587,
  "account number": 45297,
  undefined: 20,
  null: "Purohit",
};

console.log(obj1["0"]);
console.log(obj1[1]);
console.log(obj1["account number"]);

console.log(obj1.undefined); // console.log(obj[undefined]);  OR  console.log(obj["undefined"]);
console.log(obj1.null); // console.log(obj[null]);  OR  console.log(obj["null"]);

//* In another method of creating an object, we can further add, update or delete any property easily.
const person = new Object();

//? Property Add.
person.name = "Madhur";
person.age = 25;
console.log(person);

//? Property Delete. In this key & value both have deleted.
delete person.name;
console.log(person);

//? Property Modify/Update.
person.age = 35;
console.log(person);

//* Third method to create object using class.
class People {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

let per1 = new People("Madhur", 25, "Male");
console.log(per1);
let per2 = new People("Purohit", 24, "Male");
console.log(per2);

//* Common methods for object.
let public = {
  name: "Madhur",
  age: 35,
  account_balance: 5480,
  gender: "Male",
};

//? To fetch all keys.
let keysArr = Object.keys(public); // This will return an array, so store it in any variable.
console.log(keysArr);

//? To fetch all values.
let valuesArr = Object.values(public);
console.log(valuesArr);

//? To fetch key & value both.
const keyValueArr = Object.entries(public);
console.log(keyValueArr);

//? To combine tw objects.
//! Syntax:- Object.assign(Source, ObjectName1, ObjectName2);
let obj2 = { a: 1, b: 2 };
let obj3 = { c: 4, d: 4 };

const combineObj = Object.assign(obj2, obj3); // This will also change the obj1, but obj2 remains same.
console.log(combineObj);
console.log(obj2);

let combineObj1 = Object.assign({}, obj2, obj3);
console.log(combineObj1);
