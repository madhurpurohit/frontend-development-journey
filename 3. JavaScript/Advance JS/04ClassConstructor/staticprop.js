class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }

  static createId() {
    // If we don't want to give access of this function to every instance which made by using User class. Than we use static keyword before function name.
    return `123`;
  }
}

const me = new User("DevFlux");

// console.log(me.createId());

//* When we use static keyword than even we inherit that class in another one than also we can't access this static function.