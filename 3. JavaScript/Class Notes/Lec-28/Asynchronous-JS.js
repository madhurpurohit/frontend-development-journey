//* JS is a single threaded synchronous language.
//* & JS is behave like asynchronous.

console.log("10");

//? How to make JS asynchronous.
//! setTimeout is not a part of JS instead it is a part of WebAPI, so it will not executed by JS engine. That's why it is not showing synchronous nature of JS.
setTimeout(() => {
  console.log("20");
}, 2000);

console.log("30");

//? Synchronous task.
console.log("10");

const timer = Date.now();

while (Date.now() - timer < 2000) {
  // Will take 2s time.
}

console.log("20");

console.log("30");
