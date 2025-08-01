class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}DevFlux`;
  }

  set password(value) {
    this._password = value;
  }
}

const DevFlux = new User("d@devflux.ai", "abc");
console.log(DevFlux.email);
console.log(DevFlux.password);
