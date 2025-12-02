# JavaScript Object & OOP Documentation

## 1\. Object Literals

The most basic way to define an object. In JavaScript, almost everything (Arrays, Functions, etc.) is derived from Objects.

**Code Reference:**

```javascript
let user = {
  username: "DevFlux",
  loginCount: 11,
  loggedIn: true,

  getUserDetails: function () {
    // 'this' refers to the current object context (user)
    console.log(`${this.username} details is successfully received.`);
  },
};
```

**Deep Dive:**

- **Definition:** It is a comma-separated list of key-value pairs wrapped in curly braces.
- **The Limitation:** Object literals are **Singletons**. If you need 1,000 users, you would have to copy-paste this code 1,000 times. This violates the **DRY (Don't Repeat Yourself)** principle.
- **Memory:** Each literal creates a completely distinct memory reference.

---

## 2\. The "Global Pollution" Problem (Without `new`)

Before understanding `new`, we must understand what happens **without** it.

**Code Reference:**

```javascript
function User(username, loginCount, loggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.loggedIn = loggedIn;
  return this;
}

// PROBLEM:
// let userOne = User("DevFlux", 10, true);
// let userTwo = User("MP", 15, false);
```

**Why `userTwo` overwrites `userOne`:**

1.  **Global Context:** When you call a function normally (`User(...)`), `this` refers to the **Global Object** (the `window` object in browsers, or `global` in Node.js).
2.  **The Overwrite:**
    - `User("DevFlux"...)` sets `window.username = "DevFlux"`.
    - `User("MP"...)` sets `window.username = "MP"`.
3.  **Result:** You are constantly mutating the global scope. This results in unpredictable "Spaghetti Code."

---

## 3\. The `new` Keyword (Constructor Function)

The `new` keyword is the solution. It changes the context of `this` from the Global Object to a **brand new Instance**.

**Code Reference:**

```javascript
let userOne = new User("DevFlux", 10, true);
let userTwo = new User("MP", 15, false);
```

**The 4 Steps of Execution (Deep Dive):**

1.  **Creation (Empty Object):**
    - A new, empty object `{}` is created in memory.
2.  **Prototype Linking (Hidden Step):**
    - JavaScript links this new object's `[[Prototype]]` to the constructor function's `prototype` property. _This is how inheritance works._
3.  **Context Binding (`this` injection):**
    - The `this` keyword inside the function is forcibly pointed to the new object created in Step 1.
    - Arguments (`username`, `loginCount`) are assigned to this new context.
4.  **Return:**
    - The function returns the object automatically (you don't need to write `return this`, though your code has it explicit, JS does it implicitly with `new`).

---

## 4\. Constructor & Instances

**Code Reference:**

```javascript
console.log(userOne.constructor); // [Function: User]
```

**Deep Dive:**

- **Instance:** `userOne` is an _instance_ of `User`. It is a unique copy derived from the blueprint.
- **Constructor Property:** Every object created via `new` has a hidden property called `.constructor`. It is a reference to the function that created it.
  - _Interview check:_ `userOne instanceof User` returns `true`.

---

## 5\. Object Oriented Programming (OOP) in JS

**Core Concept:**
JavaScript is **not** a class-based language (like Java or C++); it is a **Prototype-based** language. Even when we use the modern `class` keyword in React or Node, it is just "Syntactic Sugar" wrapper over the Constructor Functions you wrote above.

**The 4 Pillars of OOP (Revised for JS):**

1.  **Abstraction:** Hiding complexity.
    - _Example:_ You use `userOne.greeting()` without knowing the internal logic of how the greeting is constructed.
2.  **Encapsulation:** Restricting access to data.
    - _Example:_ In modern JS, we use `#` (e.g., `#password`) to make private variables that cannot be accessed directly like `userOne.password`. In your code, everything is public.
3.  **Inheritance:** Passing down features.
    - _Example:_ If you make a generic `Person` function, you can make `User` inherit from `Person` so `User` automatically gets properties like `name` or `age` without rewriting code. In JS, this is done via the **Prototype Chain**.
4.  **Polymorphism:** One method, many forms.
    - _Example:_ A `User` object and an `Admin` object might both have a `greeting()` method, but the Admin's version says "Welcome, Sir" while the User's version says "Welcome, User".

---

### Summary for Interviews

| Concept             | Explanation                                                                  |
| :------------------ | :--------------------------------------------------------------------------- |
| **Object Literal**  | Good for single, simple data structures. Bad for duplicating logic.          |
| **`this` (Global)** | Without `new`, `this` pollutes the global namespace. Dangerous.              |
| **`new` Keyword**   | Creates a fresh context, links prototypes, and returns a sanitized instance. |
| **Constructor**     | The blueprint function (Capitalized by convention) used to generate objects. |
| **Prototype**       | The mechanism by which JS objects inherit features from one another.         |

---
