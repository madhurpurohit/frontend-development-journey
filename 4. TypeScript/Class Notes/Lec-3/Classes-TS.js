"use strict";
//* Class in TS.
class Person1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //? Methods:- It means to define any function inside class.
    welcome() {
        console.log(`Hii, ${this.name}`);
    }
}
const obj1 = new Person1("Madhur", 24);
const obj5 = new Person1("Purohit", 25);
console.log(obj1);
console.log(obj5);
obj1.welcome();
//? Public Keyword:- It means this property can be directly use outside the class.
//? Private & Protected Keyword:- It means this property can't be directly used outside the class
class Customer1 {
    name;
    age;
    balance;
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    meet() {
        this.age = this.age + 10;
        return this.age;
    }
}
const c1 = new Customer1("Madhur", 24, 4567);
console.log(c1.name);
// console.log(c1.age)
// console.log(c1.balance)
console.log(c1.meet());
class Employee extends Customer1 {
    salary;
    constructor(salary, name, age, balance) {
        // To use name,age,balance property from Customer1 class on E1 object, we have to call this value using super() function.
        super(name, age, balance);
        this.salary = salary;
    }
    meet() {
        console.log("Hello Coders.");
        return 10;
    }
    greet() {
        console.log(this.balance); // This is allowed, because balance is protected.
        // console.log(this.age); // This is not allowed, because age is private.
    }
}
// super.mehtod() is used to call parent class method also from child class
const E1 = new Employee(320000, "Madhur", 24, 456789);
console.log(E1);
E1.greet();
console.log(E1.meet());
//? If we want to pass two or more different dataType value as an arguments in same function, than how to do that?
// Method-1:-
function value(a) {
    return a;
}
console.log(value(10));
console.log(value("Madhur"));
// Method-2 Generic/Generic Template:-
function identity(a) {
    return a;
}
console.log(identity(10));
console.log(identity("Madhur"));
console.log(identity([10, 20, 30, 40]));
console.log(identity(["Madhur", "Purohit", "Sam"]));
