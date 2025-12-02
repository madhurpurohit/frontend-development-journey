//* Method1:- Normal Composition where we accept two functions only.
function add(a, b) {
  return a + b;
}

function square(val) {
  return val * val;
}

//todo Composite function in old way.
function compositionTwoFunction(fn1, fn2) {
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

const task = compositionTwoFunction(add, square);
console.log("Old Way Normal Composition: ", task(2, 3));

//todo Composite function in new way.
const compositionTwoFunctionNew = (fn1, fn2) => (a, b) => fn2(fn1(a, b));
const taskNew = compositionTwoFunction(add, square);
console.log("New Way Normal Composition: ", taskNew(3, 3));

//* Method2:- Infinite Composition where we accept any number of functions.
function squareRoot(val) {
  return Math.sqrt(val);
}

function multiply(args) {
  return args[0] * args[1];
}

function composeInfinite(...fns) {
  return function (...value) {
    return fns.reduce((fn1, fn2) => fn2(fn1), value);
  };
}

const taskInfinite = composeInfinite(multiply, squareRoot);
console.log("Old Way Infinite Composition: ", taskInfinite(4, 4));
