function setUserName(username) {
  // Complex DB Calls.
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password) {
  setUserName(username); // 1st point
  setUserName.call(username); // 2nd point
  setUserName.call(this, username); // 3rd point

  this.email = email;
  this.password = password;
}

const userOne = new createUser("DevFlux", "DevFlux123@gmail.com", "1234@");

console.log(userOne);
