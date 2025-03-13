console.log("HEllo Coder Army");

//* In callback queue setTimeout, setInterval, DOM, eventListener etc. are present.
//* Event Loop:- It's task is whenever the call stack is empty means there is no GEC, than put the callback functions one by one inside call stack from callback queue, & execute them.
setTimeout(() => {
  const a = 2 + 4;
  console.log(a);
}, 5000);

setInterval(() => {
  console.log("I am fast");
}, 2000);

let b = 20;
let arr = [20, 30, 11];

for (let i of arr) console.log(i * b);
