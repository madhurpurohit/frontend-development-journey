//* Object literals:- It means a normal object, because in JS object is the basic unit of everything.

// let user = {
//   username: "DevFlux",
//   loginCount: 11,
//   loggedIn: true,

//   getUserDetails: function () {
//     console.log(`${this.username} details is successfully received.`);
//   },
// };

// console.log(user);
// console.log(user.getUserDetails());

//* new Keyword useCase.

function User(username, loginCount, loggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.loggedIn = loggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

//? In this userTwo overwrite the details, so userOne is also show the userTwo even when we are not calling it.
// let userOne = User("DevFlux", 10, true);
// let userTwo = User("MP", 15, false);
// console.log(userOne);

//? So to prevent this type of behavior we use new keyword. & the new keyword is also known as constructor function. This new keyword make an empty object & this is known as instance.
let userOne = new User("DevFlux", 10, true);
let userTwo = new User("MP", 15, false);
console.log(userOne);
console.log(userTwo);

//! The above code works in 4 steps:-
//* Step1:- Firstly it will create an empty object.
//* Step2:- Than it will call the constructor function, because of new keyword. This will wrap all the arguments & return the object.
//* Step3:- Than because of this keyword all the arguments or values are injected.
//* Step4:- Than it will return the object inside function.

//! What is constructor?
console.log(userOne.constructor); // It will give "Function: [User]" this output. Because constructor is a reference of us means in this it is a reference of User function.
