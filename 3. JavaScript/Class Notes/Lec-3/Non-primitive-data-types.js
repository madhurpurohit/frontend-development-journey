//* Non-primitive data types is Array, Object, Date.

//? Array. Typeof array is object.
let arr = [10, 20, 30];
console.log(arr);
console.log(typeof arr);

let array = [10, 20, 30, "Madhur", "Purohit"];
console.log(array);
console.log(typeof array); // Array is treated as object in JS.

//? Object. It is stored in key:value pair.
let obj = {
  user_name: "Madhur",
  account_number: 1234567899876,
  balance: 420,
};
console.log(obj);
console.log(typeof obj); // It will give object.

//* Function.
let func = function () {
  console.log("Hello Everyone!");
};

func();
console.log(typeof func); // It will give function.
