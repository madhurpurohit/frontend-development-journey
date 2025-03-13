let b = 10;

function greet() {
  let a = 20;

  function meet() {
    console.log(a);
    console.log(typeof a);
    console.log(b);
  }

  return meet;
}

const num = greet();
console.log(num);
num();
