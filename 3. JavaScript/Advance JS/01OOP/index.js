//* Object literals.

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
