const form = document.querySelector("form");

//* Method-1 to access form data.
//? If we want to access the form data than we will select each & every element which is presented inside form. After that we use element.value, to access the value of that particular element.
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const first = document.getElementById("first");
//   console.log(first.value); // To get the value of user name.

//   const second = document.getElementById("second");
//   console.log(second.value);

//   const third = document.getElementById("third");
//   console.log(third.value);

//   const result = document.getElementById("result");
//   result.style.display = "block";
//   result.innerHTML = `${first.value} ${second.value} is a Web Developer.`;
// });

// form.addEventListener("reset", () => {
//   const result = document.getElementById("result");
//   result.style.display = "none";
// });

//* Method-2 If we have lots of input field than how can we access the form data.
//? In this we use FormData object.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  console.log(formData); // It will print FormData object.

  console.log(formData.keys()); // It will give all the keys, but console don't show it.

  console.log(Array.from(formData.keys())); // It will convert into array, & console will print it.

  console.log(Array.from(formData.values())); // It will give values & convert into array, & console will print it.

  //* How to iterate.
  for (let keys of formData.keys()) {
    console.log(keys); // It will give the name attribute value.
  }

  // How to get data into key-value pair & it is arranged in array format.
  for (let keys of formData.entries()) {
    console.log(keys);
  }

  // How to get only values from above method.
  for (let [keys, value] of formData.entries()) {
    console.log(keys, value);
  }
});
