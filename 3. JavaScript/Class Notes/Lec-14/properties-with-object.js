//* When we make an object than 3 properties were written with object, that is Writable, Enumerable & Configurable.
let obj = {};

obj.name = "Madhur";
obj.age = 20;
console.log(obj);

// To know these properties we use, Syntax:- Object.getOwnPropertyDescriptor(objectName,"Key");
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
console.log(Object.getOwnPropertyDescriptor(obj, "age"));

//? How to define these 3 attributes for each key?
/* Syntax:- Object.defineProperty(ObjName, "Key", {
                value : Value that we want to give this key,
                writable : true/false,
                enumerable : true/false,
                configurable : true/false,
            });
*/
let obj1 = {};

Object.defineProperty(obj1, "name", {
  value: "Madhur Purohit",
  writable: true,
  enumerable: true,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(obj1, "name"));

//? How to modify these attributes.
Object.defineProperty(obj1, "name", {
  writable: false, // This can change even if configurable:false because we can change writable:true to writable:false but we can't change writable:false to writable:true.

  //   enumerable: false, // This will throw an error because we can;t change the value of these property due to configurable:false.
});
console.log(Object.getOwnPropertyDescriptor(obj1, "name"));

Object.defineProperty(obj, "name", {
  writable: true, // This can't be changed because of configurable:false, so it will silently fail because we use non-strict mode.
});
console.log(Object.getOwnPropertyDescriptor(obj1, "name"));

//? Enumerable attribute.
const customer = {
  name: "Madhur Purohit",
  age: 24,
  account_number: 95401,
  balance: 5471,
};

const customer2 = Object.create(customer);

Object.defineProperty(customer, "account_number", {
  enumerable: false,
});

for (let key in customer) {
  console.log(key);
}

console.log(customer.account_number);

for (let key in customer2) {
  console.log(key);
}

console.log(customer2.account_number);

//? How to check the attribute of any property of Object.prototype.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));

Object.defineProperty(Object.prototype, "toString", {
  enumerable: true,
});

for (let key in customer2) {
  console.log(key);
}

//? Object.defineProperties():- This method is used to define multiple properties on an object at once, specifying detailed characteristics (like value,writable,enumerable,configurable) for each property.
let person = {};

Object.defineProperties(person, {
  name: {
    value: "Madhur",
    writable: false,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 30,
    writable: true,
    enumerable: false,
    configurable: false,
  },
});

console.log(person);
console.log(person.age);

//? objectName.hasOwnProperty():- This method checks whether a given property exists directly on an object, not on it's prototype chain.
const user = {
  name: "Madhur",
};

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("toString")); // Because it is inherited from Object.prototype.

let user2 = Object.create(user);
user2.age = 24;
user2.balance = 4500;

for (const key in user2) {
  if (user2.hasOwnProperty(key)) {
    console.log(key, user2[key]);
  }
}
