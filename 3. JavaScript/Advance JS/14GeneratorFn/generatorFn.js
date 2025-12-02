//* How to create our own iterator function?

function myIteratorFunction(start = 0, end = Infinity, step = 1) {
  let nextStart = start;
  let iterationCount = 0;

  return {
    next() {
      let result;

      if (iterationCount < end) {
        result = { value: nextStart, done: false };
        nextStart = nextStart + step;
        iterationCount++;
        return result;
      }

      return { value: iterationCount, done: true };
    },
  };
}

const myIterator = myIteratorFunction(1, 10, 2);
let result = myIterator.next();

console.log("Custom Iterator Function: ");

while (!result.done) {
  console.log(result.value);
  result = myIterator.next();
}

//* Generator function:- It is a function which is used to create an iterator.
function* iterator() {
  yield 2;
  yield 4;
  yield 6;
  yield 8;
  yield 10;
  yield 12;
  yield 14;
}

const print = iterator();

console.log("\n\nGenerator Function: ");
for (let value of print) {
  console.log(value);
}
