//* How to define a type of any variable.
//! Syntax:- let/const variableName:typeOfData = Value;

//* Number Data Type:-
let a: number = 10;
let b: number = 20;

//? If we update the value of a with another data type than it will show an error.
// a = "Madhur";

//* String Data Type:-
let str: string = "Madhur";

//* Boolean Data Type:-
let isExist: boolean = true;

//* BigInt Data Type:-
let bigNumber: bigint = 123456789n; // It will show error because we define target="ES2016", & bigInt is present in "ES2020" & after that. If we want to convert TS into JS than it will convert it, but it will show the line of code which is given an error.

//* Null Data Type:-
let c: null = null;

//* Undefined Data Type:-
let d: undefined = undefined;

//? If we want to live convert TS into JS than how to do?
// If we want that when we wrote any line of code into TS file, it will live convert into JS than we use a command into terminal. But this will only work when the file is saved.
//! Command:- tsc --watch

// To stop the live conversion of TS into JS than press Ctrl+C, inside terminal.
let names: string = "Madhur";
let age: number = 24;

