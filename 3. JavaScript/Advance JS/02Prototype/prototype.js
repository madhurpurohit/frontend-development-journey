// let myName = "DevFlux     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHero = ["thor", "spiderMan"];

let heroPower = {
  thor: "hammer",
  spiderMan: "sling",

  getSpiderPower: function () {
    console.log(`SpiderMan power is ${this.spiderMan}`);
  },
};

Object.prototype.DevFlux = function () {
  console.log(`DevFlux is present in all objects`);
};

Array.prototype.heyDevFlux = function () {
  console.log(`DevFlux says hello`);
};

// heroPower.DevFlux()
// myHero.DevFlux()
// myHero.heyDevFlux()
// heroPower.heyDevFlux()

//* Inheritance

const User = {
  name: "Coffee",
  email: "coffee@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//todo Modern syntax:-
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "MakeACoffee     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"DevFlux".trueLength();
"iceTea".trueLength();
