//* Scope of variable:- It means the code block where we use the variable or it's modified value.
/* let, const is block-scoped. The variable is accessible only within the block ({...}) where it is declared, & not accessible outside of block.
var is function-scoped. The variable is accessible throughout the entire function where it is declared. If declared outside a function, it becomes globally scoped.

we can redefine var variable with same variable name, but we can't redefine let & const variable with same variable name.

Global Scope:- Global scope means it is accessible throughout the code.
Local Scope:- Local scope means functional scope & it is accessible only inside function code.
Block scope:- It means code inside {}. In this let & const is only accessible inside block code, but var can accessible globally means outside of this {}. Block scope is like if-else, switch etc, but exclude , loops & object.
*/
let b = 10;
{
  b = 12;
  let c = 50;
  console.log(b);
  console.log(c);
}
console.log(b);
// console.log(c); // This will show an error, because it is outside of block-code, where it declared.

{
  let b = 120;
  console.log(b);
}
console.log(b);

console.log(`\nvar variable keyword:`);
var d = 100;
var d = 90;
{
  var d = 150;
  var e = 450;
  console.log(d);
  console.log(e);
}

console.log(d);
console.log(e);

// console.log(f); // This will show error, because we can't access the variable without it's initialization.
let f = 19; // const f = 19;

console.log(g); // It will not show any error, & it will print undefined.
var g = 202;

greet();
function greet() {
  console.log("Hello");
}

// meet(); // This will show an error because variable function is not accessible without initialize before calling it.
const meet = function () {
  console.log("Hii!");
};
