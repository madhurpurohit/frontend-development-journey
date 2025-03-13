//* Why we need a callback function.
//? Common function that we use to explain callback function.
function greet(name) {
  console.log(`Hello ${name}`);
}

function meet(name) {
  console.log(`Hello ${name}, I will meet you in Indore.`);
}

//? Without callback function.

function fetchUser() {
  console.log("Fetching user data.......");

  setTimeout(() => {
    console.log("\nWithout Using Callback Function.");

    console.log("Data fetched successfully.");
    const name = "Madhur";

    // Here we call explicitly, means we have to change the function name.
    greet(name);
    meet(name);
  }, 2000);
}

fetchUser();

//? With callback function.

function fetchUser1(callback) {
  console.log("Fetching user data.......");

  setTimeout(() => {
    console.log("\nUsing Callback Function.");

    console.log("Data fetched successfully.");
    const name = "Madhur";

    // Here we use the parameter which we pass in function as pass by reference, this parameter stores the address where function stores.
    callback(name);
  }, 4000);
}

fetchUser1(greet);
fetchUser1(meet);

//todo Real Life Example:-
function greet1(obj) {
  console.log(`Hello ${obj.name}`);
}

function meet1(obj) {
  console.log(`Hello ${obj.name}, I will meet you in ${obj.city}.`);
}

function editName(obj) {
  console.log(`Hello ${obj.name}, user can edit his name.`);
}

function printAge(obj) {
  console.log(`User age: ${obj.age}`);
}

function fetchUser2(callback) {
  setTimeout(() => {
    console.log("\nFetching user data.....");
  }, 8000);

  setTimeout(() => {
    console.log("\nUser data fetched successfully.");
    const obj = {
      name: "Madhur Purohit",
      age: 24,
      city: "Harda",
    };

    callback(obj);
  }, 10000);
}

fetchUser2(greet1);
fetchUser2(meet1);
fetchUser2(editName);
fetchUser2(printAge);
