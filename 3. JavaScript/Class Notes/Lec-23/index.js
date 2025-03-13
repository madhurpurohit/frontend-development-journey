const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//* Event Bubbling & Capturing.
//! Method:- element.addEventListener('event', callback function, capture);
// In this capture value is false by default, that's why bubbling works by default. But if we wrote true in place of capture than capturing works for this element only.

// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("Grand Parent Clicked.");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked.");
//   },
//   true
// );

// child.addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked.");
//   },
//   true
// );

//? How to know which event is triggered between bubbling & capturing?
//? event.target:- It gives the element which is actually triggered the event.
//? event.currentTarget:- It gives the element which is actually clicked.
grandParent.addEventListener(
  "click",
  (e) => {
    console.log("Grand Parent Clicked.");
    // console.log(e.target);
    console.log(e.currentTarget);
  },
  true
);

parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked.");
    // console.log(e.target);
    console.log(e.currentTarget);
  },
  false
);

child.addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked.");
    // console.log(e.target);
    console.log(e.currentTarget);
  },
  true
);
