console.log(x); // This will ot show an error instead it show undefined, because we can access any variable before initialization when variable is made using var keyword.
var x = 10;

/*  console.log(y); // We can't access any variable before initialization when variable is made using let keyword.
    let y = 10;
*/

// console.log(z); // This also give an error that z is not declared.

//* Hoisting:- It means all the declaration of variables are automatically going to top of the code part.
/* Code we wrote.
    console.log(x);
    console.log(y);
    console.log(z);
    var x = 10;
    let y = 20;
    const z = 30;
*/

/* Code that automatically convert according to JS Internal working.
    var x = undefined;
    let y;
    const z;
    console.log(x);
    console.log(y);
    console.log(z);
    x=10;
    y=20;
    z=30;
*/
