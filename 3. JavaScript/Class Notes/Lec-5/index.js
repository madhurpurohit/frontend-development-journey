let a = 5;
let b = a;
console.log(a);
console.log(b);

b = 20; // If we change the value of b or redefine the value than it will not change the value of a variable.
console.log(a);
console.log(b);

//* Primitive data types: Immutable. // It means we can't change the value of this data types.
//* Non-Primitive data types: Mutable. // It means we can change the value of this data types.

//? Object Example:-
let obj1 = {
  id: 20,
  name: "Madhur",
};

let obj2 = obj1;
console.log(obj1);
console.log(obj2);

// If we want to change the value of id in obj2 than we wrote:- objectName.key = value. This will assign a new value to that particular key.

obj2.id = 30; // If we change any key value in obj2 than it will automatically change the key value in obj1 because we will assign obj1 to obj2, so that obj2 can access & modify the obj1 key values.
console.log(obj1);
console.log(obj2);
