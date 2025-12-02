# Here's what happens behind the scenes when the new keyword is used:

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

Here is your advanced documentation for **Prototypal Inheritance** and **Polyfills**, structured for deep revision and interview prep.

---

# JavaScript Prototypes & Inheritance Documentation

## 1\. Constructor Functions & The `prototype` Property

**Code Reference:**

```javascript
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// Injecting methods into the prototype (Memory Optimization)
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const chai = createUser("chai", 25); // Missing 'new'
const tea = new createUser("tea", 250); // Correct usage
```

**Deep Dive:**

- **The "Why":** Why do we attach methods to `.prototype` instead of writing them inside the function?
  - If you write `this.printMe = function...` _inside_ `createUser`, every single time you create a user, JavaScript copies that function into memory. If you have 1,000 users, you have 1,000 copies of the function.
  - By using `createUser.prototype.printMe`, the function exists in **one single place** in memory. All 1,000 users just "look up" to the prototype to use it.
- **The Error (`chai` vs `tea`):**
  - `const chai = createUser(...)`: This is a standard function call. Since the function returns nothing, `chai` becomes `undefined`. Trying to access `chai.printMe` will throw a standard error (Cannot read property of undefined) or fail because `chai` has no link to the prototype.
  - `const tea = new createUser(...)`: The `new` keyword creates the link (`__proto__`) between the new object and `createUser.prototype`.

---

## 2\. The Prototype Hierarchy (The "Everything is an Object" Rule)

**Code Reference:**

```javascript
let myHero = ["thor", "spiderMan"]; // Array

let heroPower = {
  thor: "hammer",
  spiderMan: "sling",

  getSpiderPower: function () {
    console.log(`SpiderMan power is ${this.spiderMan}`);
  },
}; // Object

// Level 1: Injecting into the Top-Level Object
Object.prototype.DevFlux = function () {
  console.log(`DevFlux is present in all objects`);
};

// Level 2: Injecting into Array only
Array.prototype.heyDevFlux = function () {
  console.log(`DevFlux says hello`);
};
```

**Deep Dive:**
JavaScript follows a specific lookup chain. When you ask for a property, it looks at the Object -\> Then its Prototype -\> Then the Parent's Prototype -\> Until it hits `null`.

[Image of javascript prototype chain diagram]

- **The `Object.prototype` Injection:**
  - Since **Arrays**, **Strings**, and **Functions** are all descendants of `Object`, adding a method to `Object.prototype` gives that power to _everything_ in JavaScript.
  - `heroPower.DevFlux()`: Works (Object inherits from Object).
  - `myHero.DevFlux()`: Works (Array inherits from Object).
- **The `Array.prototype` Injection:**
  - `myHero.heyDevFlux()`: Works (Array inherits from Array).
  - `heroPower.heyDevFlux()`: **FAILS**. An Object is a parent to Array, not a child. It cannot look "down" the chain, only "up".

---

## 3\. Inheritance: Legacy vs. Modern

**Code Reference:**

```javascript
// The Old Way (Deprecated but still widely seen)
TASupport.__proto__ = TeachingSupport;
Teacher.__proto__ = User;

// The Modern Way (ES6 Standard)
Object.setPrototypeOf(TeachingSupport, Teacher);
```

**Deep Dive:**

- **What is `__proto__`?** It is a "Dunder Proto" (Double Underscore). It is the actual accessor property that exposes the internal `[[Prototype]]` of an object. While it works, it is considered bad practice to use it directly in modern code due to performance reasons.
- **What is `Object.setPrototypeOf(child, parent)`?** This is the cleaner, standardized method to link two objects.
  - In your code: `TeachingSupport` (Child) now has access to properties inside `Teacher` (Parent).
  - Lookup Flow: If you ask for `TeachingSupport.makeVideo`, JS checks `TeachingSupport`. Not there? It checks the prototype (`Teacher`). Found it\!

---

## 4\. Polyfills: Extending Native Types

**Code Reference:**

```javascript
let anotherUsername = "MakeACoffee     ";

String.prototype.trueLength = function () {
  console.log(`${this}`); // References the string value wrapper
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
```

**Deep Dive:**

- **What is a Polyfill?** Usually, it refers to writing code to provide modern functionality on older browsers. Here, we are creating a **Custom Polyfill** (or method extension).
- **`this` in Prototypes:**
  - When you call `"DevFlux".trueLength()`, the `this` context inside the function is automatically set to the string "DevFlux".
  - **Interview Trap:** Do not use Arrow Functions `() => {}` here. Arrow functions do not have their own `this`; they inherit it from the global scope (window), which would break this code. You _must_ use `function() {}`.

---

## 5\. Summary: The `new` Keyword Lifecycle

This is the most asked theoretical question in JS interviews. Here is the breakdown of your text:

1.  **Creation:**
    - A fresh `{}` is born in heap memory.
2.  **Linking (The Most Important Step):**
    - `obj.__proto__` = `Constructor.prototype`.
    - This is the bridge that allows `tea.printMe` to find the function inside `createUser.prototype`.
3.  **Execution (Binding `this`):**
    - The constructor runs. Everywhere it says `this.username`, replace `this` with the new empty object.
    - `{}` becomes `{ username: "tea", score: 250 }`.
4.  **Return:**
    - The object is returned automatically.

### Key Interview Terms to Remember:

- **Prototype Chain:** The path JS takes to find a property (Child -\> Parent -\> Object -\> null).
- **Shadowing:** If you define `printMe` on the object directly _and_ on the prototype, the object's version is used (it "shadows" the prototype).
- **Syntactic Sugar:** `class` in JS is just a cleaner way to write this exact code.

---
