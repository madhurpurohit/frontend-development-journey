//* If we have many button's & when we click on any button than the bg color is changed according to the id of that button.
// Method-1

// const redBg = document.getElementById("red");
// const greenBg = document.getElementById("green");
// const blueBg = document.getElementById("blue");
// const orangeBg = document.getElementById("orange");
// const purpleBg = document.getElementById("purple");

// // const body = document.querySelector("body");
// const body = document.body; // It will select body.

// function colorChanger(value) {
//   body.style.backgroundColor = "value";
// }

// redBg.addEventListener("click", () => {
//   body.style.backgroundColor = "red";
// });

// greenBg.addEventListener("click", () => {
//   body.style.backgroundColor = "green";
// });

// blueBg.addEventListener("click", () => {
//   body.style.backgroundColor = "blue";
// });

// orangeBg.addEventListener("click", () => {
//   body.style.backgroundColor = "orange";
// });

// purpleBg.addEventListener("click", () => {
//   body.style.backgroundColor = "purple";
// });

//? Method-2
// const btn = document.querySelectorAll("button");
// const body = document.body;

// // Below loop makes all the instance with event listener of the buttons.
// btn.forEach((val) => {
//   val.addEventListener("click", () => {
//     body.style.backgroundColor = val.id;
//   });
// });

//* Event delegation:- Delegate the event through bubbling or capturing. In simple word we apply the event listener on parent instead of child & access child element of this parent element.
const root = document.getElementById("root");

root.addEventListener("click", (e) => {
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.tagName);
  // console.log(e.target.className);
  console.log(e.target.id);
  if (e.target.tagName == "BUTTON")
    document.body.style.backgroundColor = e.target.id;
});
