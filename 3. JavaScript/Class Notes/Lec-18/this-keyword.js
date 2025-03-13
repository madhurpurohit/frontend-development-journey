//* This keyword.

/*  1: Global Context (Outside Any Function)
    In browsers: window
    In Node.js: Module's exports object
*/
console.log(this);

var a = 10;
console.log(this.a); // In terminal:- undefined & in Console:- 10.

//? By default we run a code in non-strict mode.
b = 10; // This will run in non-strict mode but in strict mode it will show an error.
console.log(b);

/*  2:Inside a Function 
    i: (Non-Strict Mode)
    When this is used inside a regular function, it refers to the global object.
    ii: Strict Mode
    this will be undefined inside a function.
*/
function greet() {
  console.log(this);
}

greet();

//? To enabling strict mode, we wrote:- ("use strict"); at top of the code part.
// "use strict";

function meet() {
  console.log(this);
}

meet();

// console.log(b); // This will show an error.

/*  3: Inside a Method (Object Context)
    When this is used inside an object’s method, it refers to the object that owns the method.
*/
let obj = {
  name: "Madhur",
  age: 24,
  greet: function () {
    console.log(this); // It points to object in which it is presented.
    // console.log(name); // It will show an error because name is not the part of greet function.
    console.log(this.name);
  },
};

obj.greet();

/* Arrow functions don’t have their own this. 
    Instead, they inherit this from the surrounding (lexical) scope.
*/
let obj1 = {
  name: "Madhur",
  age: 24,
  meet: () => {
    console.log(this); // Here this will inherit from lexical scope & it's lexical scope means obj1 scope, which is global scope. So it also act as global scope.

    console.log(this.name); // this will points to global scope & in global scope there is nothing like name key that's why it will show undefined.
  },
};

obj1.meet();

/*  Inside a Constructor or Class
    In constructors and classes, this refers to the instance of the object being created.
*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let x = new Person("MP", 20);
console.log(x);
