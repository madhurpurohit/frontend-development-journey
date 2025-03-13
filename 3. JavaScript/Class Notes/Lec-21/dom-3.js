//* How to create an element?
//! Method: document.createElement("tag");
const element = document.createElement("li");

//? Hot to write text inside newly created element?
element.innerHTML = "TS";

//? How to attach newly created element into HTML?
//! Method: parentNode.appendChild(elementName);
const parent = document.getElementById("root");

// parent.appendChild(element);

// We can also do the same work using function.
function attach(content) {
  const element = document.createElement("li");
  element.innerHTML = content;

  const element1 = document.createElement("li");
  element1.innerHTML = content + "V2.0";

  const parent1 = document.getElementById("root");

  parent1.appendChild(element1); // In this we can only attach one element at a time.

  parent1.append(element, element1); // In this we can give multiple element at once.
}

attach("TS");
// attach("React");
// attach("Git & Github");
// attach("Node.js");
// attach("Express.js");

//* How to create an text node?
//? Text Node=> It means a text which is not surrounded by any tag & is written inside body. In this blank space, new line, comment is also considered.
//! Method:- document.createTextNode("text");

const text = document.createTextNode("Hello, Ji");

parent.appendChild(text);

//* How to create attribute node?
//! Method:- document.createAttribute("attributeName");

const attribute = document.createAttribute("id");

//? How to insert value into attribute node?
//! Method:- element.value="values";

attribute.value = "first";

//? How to attach newly created attribute node?
const curr_list = document.querySelector("li");
curr_list.setAttributeNode(attribute);

//? How to access second list or other list?
const parent2 = document.getElementById("root");
const accessList = parent2.children[1];

const attribute1 = document.createAttribute("id");
attribute1.value = "second";
accessList.setAttributeNode(attribute1);

//* How to Access Attribute?
//? To know the attribute value.
//! Method: element.getAttribute("attributeName");
console.log(parent2.getAttribute("id"));
console.log(parent2.getAttribute("style"));

//? To set attribute & it's value.
//! Method: element.setAttribute("attributeName", "value");
parent2.setAttribute("style", "list-style:none");

//? To remove attribute.
//! Method: element.removeAttribute("attributeName");
parent2.removeAttribute("style");

//* How to add node  to the DOM?
//? prepend:- If we want to insert an element at the start of an element.
//! Method: prepend();
const addStart = document.createElement("li");
addStart.innerHTML = "What is Internet ?";

parent2.prepend(addStart);

//? insert before:- If we want to insert an element before an specific than firstly select the element in which we want to insert before.
//! Method: parentNode.insertBefore(newNode, referenceNode);
const addRandom = document.createElement("li");
addRandom.innerHTML = "OS";

const child = parent2.children[2];
parent2.insertBefore(addRandom, child);

//? Replace child:- If we want to replace an existing element with newly created element or with existing element also.
//! Method: parentNode.replaceChild(createdElement, replaceElement);

parent2.replaceChild(addRandom, child);

// We can do the same with innerHTML.
// parent2.innerHTML += "TS"; // This will add this at the end of the parent, instead of replacing the whole code.

//? insert adjacent element:- It has 4 operations that is:-
//! Method: selectParent.insertAdjacentElement("Operation", addElement);
const element2 = document.createElement("h2");
element2.innerHTML = "Before Begin";

// 1. beforebegin: Before the element itself.
parent2.insertAdjacentElement("beforebegin", element2);

// 2. afterbegin: Inside the element, before its first child.
const element3 = document.createElement("p");
element3.innerHTML = "After Begin";

parent2.insertAdjacentElement("afterbegin", element3);

// 3. beforeend: Inside the element, after its last child.
const element4 = document.createElement("h2");
element4.innerHTML = "Before End";

parent2.insertAdjacentElement("beforeend", element4);

// 4. afterend: After the element itself.
const element5 = document.createElement("p");
element5.innerHTML = "After End";

parent2.insertAdjacentElement("afterend", element5);

//? insert adjacent html:- It is same as insertAdjacentElement(), but the main difference is that here we give an HTML code in string format not text.
element2.insertAdjacentHTML(
  "beforebegin",
  "<h1>Topics for web development</h1>"
);

//* Remove:- To remove an node or element.
//! Method: element.remove();
element5.remove();

//* Remove Child:- To remove a specified child node from its parent.
//! Method:- parentNode.removeChild(Node);
const remove = document.getElementById("item-3");
parent2.removeChild(remove);
