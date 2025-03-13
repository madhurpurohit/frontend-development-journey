//* Why for...in loop is not used with array.
// As we know that array is object so we can add any property like we add in object. In that case it will treat index as an key so key is print instead of index, which creates confusion that's why we don't use for...in loop with array.
const arr = [10, 20, 30, 40, 50];

arr.name = "Madhur";
arr.age = 24;

console.log(arr.length);
console.log(arr);

for (let key in arr) {
  console.log(key, arr[key]);
}

for (let index = 0; index < arr.length; index++) {
  console.log(index, arr[index]);
}
