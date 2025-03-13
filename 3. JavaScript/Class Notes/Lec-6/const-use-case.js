//* Use cases of const.
//? Primitive data types.
const a = 10;
// a = 20; // We can't redefine or change the value of const variable, if we do than it will show an error.
// console.log(a);

//? Non-Primitive data types.
const obj = {
  id: 10,
  name: "Madhur Purohit",
};
console.log(obj);

// We can change the value of non-primitive data type even if they are const variable. Because in non-primitive data type the value is stored in heap memory & variable with address of the value from heap is stored in stack memory. So when we change the value the address of the value wouldn't be changed it remains same.
obj.id = 20;
console.log(obj);

// This wil show an error because in this we assign the address of obj1 to obj, & obj is constant. So we can't change the address instead we can change the value.
let obj2 = {
  id: 25,
  balance: 200,
};

// obj = obj2; // This will show an error.
console.log(obj);
console.log(obj2);
