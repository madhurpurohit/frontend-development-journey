function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const chai = createUser("chai", 25);
const tea = new createUser("tea", 250);

// In the above code new will tell that there are two more properties/methods available, which is not essentially the part of function, so also consider this tow property.

// console.log(chai.printMe()); // This will show an error, because it didn't know the printMe property.
console.log(tea.printMe());
