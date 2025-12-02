function multiply(x, y, z) {
  console.log("Without Currying: ", x * y * z);
}

multiply(2, 3, 5);

function multiplyCarried(x) {
  return function (y) {
    return function (z) {
      console.log("With Currying: ", x * y * z);
    };
  };
}

multiplyCarried(2)(3)(5);

function multiplyInfiniteCarried(x) {
  return function (y) {
    if (y) return multiplyInfiniteCarried(x * y);
    console.log("Infinite Currying: ", x);
  };
}

multiplyInfiniteCarried(1)(2)(3)(4)(5)();

//* How it actually used in the real world. So below is the normal method, but we will use currying here.
// function multiplyByTwo(x) {
//     return x * 2
// }

// function multiplyByFour(x) {
//     return x * 4
// }

// function multiplyByNine(x) {
//     return x * 9
// }

//* Method1:- Using Currying with the help of closures.
function multiplyByN(x) {
  return function (y) {
    console.log(`Closure Multiply by ${x === 4 ? "Four" : "Five"}`, x * y);
  };
}

const multiplyByFour = multiplyByN(4);
const multiplyByFive = multiplyByN(5);

//* Now if we want to multiply any number by 4 than we use multiplyByFour function, & if we want to multiply any number by 5 than we use multiplyByFive function.

multiplyByFour(10);
multiplyByFive(10);

//* How to check the closure, we use console.dir() method. Where dir gives all the properties of that object, inside the objects when we open scopes than we can see closures.
console.dir(multiplyByFour);

//* Method2:- Using Currying with the help of bind method.
function multiplyBind(a, b) {
  console.log(`Bind2 Multiply by ${a === 4 ? "Four" : "Five"}`, a * b);
}

const multiplyByFour3 = multiplyBind.bind(this, 4);
const multiplyByFive3 = multiplyBind.bind(this, 5);

multiplyByFour3(100);
multiplyByFive3(100);
