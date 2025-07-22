// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   greeting() {
//     console.log(`Welcome, ${this.username}`);
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const devFlux = new User("DevFlux", "devflux@gmail.com", "123");

// console.log(devFlux);
// devFlux.greeting();
// console.log(devFlux.encryptPassword());
// console.log(devFlux.changeUsername());

//* Behind the scene of the class User.

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const devFlux = new User("DevFlux", "devflux@gmail.com", "123");

console.log(devFlux);
console.log(devFlux.changeUsername());
console.log(devFlux.encryptPassword());
