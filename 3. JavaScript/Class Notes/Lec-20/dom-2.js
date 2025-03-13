//* Accessing by CSS selector:-
//? Single Element:- Method:- document.querySelector("selector");
let selectByTag = document.querySelector("h1");
let selectById = document.querySelector("#first");
let selectByClass = document.querySelector(".header1");

selectByClass.innerHTML = "Kaise ho app log";
console.log(selectByClass);

//? Multiple Element:-Method:- document.querySelectorAll("selector");
let selectByClass2 = document.querySelectorAll(".header1");

console.log(selectByClass2); // This will give a NodeList.

console.log(selectByClass2[0]); // This will give the first element.

//? How to iterate over a NodeList.
// Method-1
for (let i = 0; i < selectByClass2.length; i++) console.log(selectByClass2[i]);

// Method-2
for (let val of selectByClass2) console.log(val);

// Method-3
selectByClass2.forEach((val) => {
  console.log(val);
});

//? How to convert NodeList into array.
Array.from(selectByClass2);

//* Accessing by Tag name:- Method: document.getElementsByTagName(tagName)
// In this we can use length, for loop or for..of loop directly but we can't use forEach , map, filter etc. But we can convert it into array using Array.from();
let tagName = document.getElementsByTagName("h1");
console.log(tagName);

//* Accessing Using Relationships
const list = document.querySelector("li");
//? Parent Node:- Method: element.parentNode or element.parentElement
console.log(list.parentNode);
console.log(list.parentElement);

//? Child Node:- Method: element.childNodes (includes text nodes) or element.children (only element node).
const par = document.querySelector("ul");
console.log(par.childNodes);
console.log(par.children);

//? First child & Last Child:- Methods: element.firstChild, element.lastChild,
// element.firstElementChild, element.lastElementChild
console.log(par.firstChild);
console.log(par.lastChild);

console.log(par.firstElementChild);
console.log(par.LastElementChild);

//? Sibling child:- Methods: element.nextSibling, element.previousSibling
// Element Siblings: element.nextElementSibling, element.previousElementSibling

//? Difference between innerHTML, innerText, textContent.
const difference = document.getElementById("diff");

console.log(difference.innerHTML); // This will print all the text & element, which is present inside this tag, id or class.

console.log(difference.innerText); // This will print only the text which is shown on webpage with the use of this tag.

console.log(difference.textContent); // This will print only the text part either it is present inside this or inside element , & element is also present inside this.
