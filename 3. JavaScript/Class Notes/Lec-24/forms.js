const form = document.querySelector("form");

//* Click event.
//? If we want that When we click on input field than it will take the value of that input field, than we use click event.
// form.addEventListener("click", (event) => {
//   // console.log(event); // This will give a pointer event.
//   console.log(event.target);
//   console.log(event.target.value);
// });

//* Input event.
//? If we want that When we write a single letter inside input field than it will take the value of every letter inside input field, than we use input event.
form.addEventListener("input", (event) => {
  console.log(event.target.value);
});

//* Change event.
//? If we want that When we write inside input field than it will take the value of that input field, when we loses focus or click outside of input field, than we use change event. It will only trigger if input field has been changed.
form.addEventListener("change", (event) => {
  console.log(event.target.value);
});

//* Focus event.
//? The focus event in JavaScript is triggered when an element, such as an input field, textarea, or button, gains focus. This usually happens when the user clicks on the element or navigates to it using the Tab key.
const elementFocus = document.getElementById("second");
elementFocus.addEventListener("focus", (e) => {
  console.log(e.target.value);
});

//* Focusin event.
//? If we want that focus event must follow the bubble behavior than we use focusin instead of using focus.
form.addEventListener("focusin", (e) => {
  console.log(e.target.value);
});

//* Blur event.
//? The blur event is triggered when an element loses focus. For example, when the user clicks or tabs out of an input field or interactive element.
elementFocus.addEventListener("blur", (e) => {
  console.log(e.target.value);
});

//* Focusout event.
//? If we want that focus event must follow the bubble behavior than we use focusout instead of using blur.
form.addEventListener("focusout", (e) => {
  console.log(e.target.value);
});

//* Submit event.
//? The submit event is triggered when a form is submitted, either by clicking a <button type="submit"> or pressing Enter in an input field within the form. It’s typically used to validate form data or prevent the default form submission to handle it manually (e.g., via JavaScript and AJAX).
form.addEventListener("submit", (e) => {
  console.log("Submitted");
});

//* Reset event.
//? The reset event is triggered when a form is reset. This happens when the user clicks a <button type="reset"> or calls the form.reset() method in JavaScript. It clears all form fields and restores their default values.
form.addEventListener("reset", (e) => {
  console.log("Reset");
});
