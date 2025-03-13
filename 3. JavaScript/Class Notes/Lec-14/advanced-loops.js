//? for in loop:- The for in loop is used to iterate over the properties (including key, index) of an object/array.
/* Syntax:- for(let variableName in objectName/arrayName){
                Code here;
            }
*/

// For Object:-
let user = {
  name: "Madhur Purohit",
  age: 24,
  gender: "Male",
  city: "Harda",
};

for (let key in user) {
  //   console.log(key); // This will print key only.
  //   console.log(user[key]); // This will print value of that key only.
  console.log(`${key} = ${user[key]}`);
}

//? What is the different between Object.keys(objectName) & for in loop?
// When we inherit the properties than with using Object.keys(objName) we can't access or print the inherit properties. But when we use for in loop than we can also print or use inherit properties.
let obj = Object.create(user);
obj.money = 4500;
obj.id = "MP";
console.log(obj); // This will print only the properties which is present only in obj not in user.
console.log(obj.name); // This can access the properties of user.

console.log(Object.keys(obj));

for (let key in obj) {
  console.log(key);
}
