"use strict";
b = 10; // This will run in non-strict mode but in strict mode it will show an error.
console.log(b);

function meet() {
  console.log(this);
}

meet();

let obj = {
  name: 10,
};
Object.freeze(obj);
obj.name = 30; // In non-strict mode it fails silently fails, but in strict mode it show error message.
console.log(obj);
