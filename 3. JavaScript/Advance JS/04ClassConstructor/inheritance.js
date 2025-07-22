class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // This tells that which class we inherit/extends go into that class & call it's constructor. This super keyword automatically attach this keyword to get that reference.
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

class teachingSupport {}

const DevFlux = new Teacher("DevFlux", "devflux@gmail.com", "123");

DevFlux.addCourse();
DevFlux.logMe();

const ordinaryPerson = new User("Superman");

ordinaryPerson.logMe();

console.log(DevFlux === ordinaryPerson); // It gives false because they both not same.
console.log(DevFlux === Teacher); // It gives false because it is the instance of Teacher not the exact replica of Teacher.

//! TO know the instance of means is it belongs to that class we use instanceOf keyword.
console.log(DevFlux instanceof User);
console.log(DevFlux instanceof Teacher);
