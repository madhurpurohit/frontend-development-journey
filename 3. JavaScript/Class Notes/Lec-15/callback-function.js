//* When we call a function & we pass a function reference as an argument in second function than we call this function inside second function, that is known as callback function.
function names(fun) {
  console.log("Hello, I am name");
  fun();
}

function greet() {
  console.log("I am call back function.");
}

//? Method 1st.
names(greet);

//? Method 2nd.
function one(reference) {
  console.log("Hello, inside 1st function.");
  reference();
}
one(function second() {
  console.log("This is call back function.");
});

//? Method 3rd.
const func = function () {
  console.log("3rd Method for call back function");
};

one(func);

//? Method 4th.
names(() => {
  console.log("4th method for call back function");
});

//* setInterval()= This is used to repeatedly execute a function or code block at a specified interval in milliseconds.
//! Syntax:- setInterval(function, time);
function fetchData() {
  console.log("I am fetching data");
}

setInterval(fetchData, 5000);
