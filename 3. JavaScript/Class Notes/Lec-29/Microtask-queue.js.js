console.log("I am first");

//* Microtask Queue:- In this promises & MutationObserver callback are presented, & when call stack is free than event loop always give first priority to microtask queue callback function, after that it will give the priority to callback queue.
fetch("https://youtube.com").then(() => console.log("Hello"));

console.log("I am last");
