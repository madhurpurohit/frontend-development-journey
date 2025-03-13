//* Shallow Copy:- A shallow copy creates a new object or array but only copies the references for nested objects or arrays. If the original data structure has nested objects, the shallow copy will still reference those same nested objects, not duplicate them.
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = obj1; // This will copy through reference.
obj2.a = 10; // In shallow copy this will also change in obj1.a automatically.
console.log(obj1, obj2);

//* Deep Copy:- A deep copy creates a completely independent copy of the original object or array, including all nested objects. Modifying the original or the copy won't affect the other.
let obj3 = structuredClone(obj1); // This will create separate copies, means address of both object is difference.
obj3.a = 30;
console.log(obj1, obj3);

//? Nested Object:- It means object inside objects.
let user = {
  name: "Madhur",
  balance: 5000,
  address: {
    pincode: 461331,
    city: "Harda",
    district: "Harda",
  },
};

console.log(user);

// Print the nested object.
console.log(user.address);

// Access the nested object key.
console.log(user.address.city);

//* Why we mostly use structuredClone() method neither assign() nor spread operator method.
//? assign() method:- When we have a non-nested object than it will create a deep copy, but when we have nested object than it will create a deep copy of main object & shallow copy of nested object(Object that is presented inside main object).
//? Spread Operator:- This will do the same implementation or work like assign() method.
console.log(user);

let user2 = Object.assign({}, user);
user2.name = "Purohit"; // This will only change the user2, not the user.
console.log(user.name);
console.log(user2.name);

user2.address.pincode = 12345; // This will change both the object because it is nested object.
console.log(user.address.pincode);
console.log(user2.address.pincode);

//? To prevent any modification to an object. Here we use Object.freeze(). But this property is not applicable on nested object, for that we would need to recursively freeze each nested object.
let pen = {
  type: "Ball-pen",
  manufacturing_year: 2024,
  price: 5,
  company_details: {
    name: "Wall mount",
    address: "120,Near airport, Delhi",
  },
};

// To freeze an object.
Object.freeze(pen);

// Attempt to add.
pen.warranty = 2; // This will fail silently in non-strict mode, means where we don't use exception handling.
console.log(pen.warranty);

pen.company_details.city = "Delhi"; // This will add city because it is nested object.
console.log(pen.company_details.city);

// Attempt to delete.
delete pen.manufacturing_year; // This will laos fail silently.
console.log(pen.manufacturing_year);

delete pen.company_details.address; // This will delete address because it is nested object.
console.log(pen.company_details.address);

// Attempt to modify.
pen.type = "Jel"; // This will fail silently also.
console.log(pen.type);

pen.company_details.name = "Cello"; // This will modify name because it is nested object.
console.log(pen.company_details.name);

//? To prevent adding or removing properties but allow modification of existing properties. Here we use Object.seal().
const car = {
  speed: 200,
  mileage: 25,
  company_details: {
    brand: "Toyota",
    model: "Corolla",
  },
};

// seal an object.
Object.seal(car);

// Attempt to add.
car.year = 2023; // This will fail silently in non-strict mode, means where we don't use exception handling.
console.log(car.year);

car.company_details.type = "Petrol"; // This will add type because it is nested object.
console.log(car.company_details);

// Attempt to  delete.
delete car.speed; // This will fail silently.
console.log(car.speed);

delete car.company_details.type; // This will delete type because it is nested object.
console.log(car.company_details);

// Attempt to modify.
console.log(`Car mileage before modifying is: ${car.mileage}`);

car.mileage = 30; // This is allowed.
console.log(`Car mileage after modifying is: ${car.mileage}`);

console.log(`Car model before modifying is: ${car.company_details.brand}`);

car.company_details.brand = "Honda"; // This will also modify.
console.log(`Car model after modifying is: ${car.company_details.brand}`);

//? How to write function inside object.
let user1 = {
  name: "Madhur",
  money: 202,
  greet: function () {
    // return "Hello Coder";
    console.log("Hello Coder");
  },
  meet: function () {
    return 20;
  },
};

// To access function.
user1.greet();

console.log(user1.meet()); // Because function return value not print anything.
