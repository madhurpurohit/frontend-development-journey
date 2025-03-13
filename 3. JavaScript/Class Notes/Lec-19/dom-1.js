//* DOM:- It stands for Document Object Model.

//* How to accessing element in JS?
//? Accessing element by id:- Method:- document.getElementById("id");
const accessById = document.getElementById("first");
console.log(accessById);
accessById.id = "MP";

console.log(accessById);

//? Accessing element by class:- Method:- document.getElementByClassName("className");
const accessByClass = document.getElementsByClassName("header1");
console.log(accessByClass);

//? How to change CSS by DOM?
/* Method:- 1. Select the element, like const obj = document.getElementById("first");
            2. obj.style.property = "value" ;
*/
accessById.style.backgroundColor = "#888";
