# ES6 Classes & Inheritance Documentation

## 1\. The Great Illusion: "Syntactic Sugar"

JavaScript classes are **not** real classes like in Java or C++. They are "Syntactic Sugar" (a cleaner syntax) wrapper around the Prototype system we discussed earlier.

**Visualizing the Translation:**

| Feature            | Modern Syntax (Class)              | Behind the Scenes (Prototype)           |
| :----------------- | :--------------------------------- | :-------------------------------------- |
| **Blueprint**      | `class User { ... }`               | `function User() { ... }`               |
| **Initialization** | `constructor(u, e) { ... }`        | The body of `function User`             |
| **Methods**        | `greeting() { ... }`               | `User.prototype.greeting = function...` |
| **Type Check**     | `typeof User` returns `"function"` | `typeof User` returns `"function"`      |

**Deep Dive:**
When you define a method inside a `class`, JavaScript automatically takes that function and attaches it to the `.prototype` of that class. It also enforces **Strict Mode** automatically (you cannot make mistakes like using variables without declaring them).

---

## 2\. Inheritance: `extends` and `super()`

This is the most critical part for interview questions regarding OOP in JS.

**Code Reference:**

```javascript
class Teacher extends User {
  constructor(username, email, password) {
    // 1. The Magic Call
    super(username);

    // 2. Local properties
    this.email = email;
    this.password = password;
  }
}
```

**Deep Dive: What is `super()`?**
In the previous section, we did `User.call(this, username)`.

- **`super(username)`** is exactly that. It calls the Parent Class's constructor.
- **The Rule:** You **MUST** call `super()` before you can use the `this` keyword inside a derived class constructor.
  - _Why?_ Because in inheritance, the _Parent_ creates the `this` object first, and then the _Child_ modifies it. If you don't call `super`, the `this` object doesn't exist yet\!

**Deep Dive: What is `extends`?**
It automatically sets up the prototype chain.

- `Teacher.prototype.__proto__` is set to `User.prototype`.
- This allows `Teacher` instances to "bubble up" and find methods like `logMe()` defined in `User`.

---

## 3\. Instance Checks (`instanceof`)

**Code Reference:**

```javascript
console.log(DevFlux instanceof User); // true
console.log(DevFlux instanceof Teacher); // true
```

**Deep Dive:**
The `instanceof` operator checks the **Prototype Chain**.

- **Q:** Is `Teacher.prototype` present anywhere in `DevFlux`'s chain? **Yes.**
- **Q:** Is `User.prototype` present anywhere in `DevFlux`'s chain? **Yes** (because Teacher extends User).

**Reference Equality (`===`):**

```javascript
console.log(DevFlux === ordinaryPerson); // false
```

Even if two objects have the _exact same data_, they are stored in different memory locations in the Heap. Objects are compared by **reference**, not value.

---

## 4\. Static Properties (`static`)

**Code Reference:**

```javascript
class User {
  static createId() {
    return `123`;
  }
}

const me = new User("DevFlux");
// console.log(me.createId()); // Error: me.createId is not a function
console.log(User.createId()); // Works: "123"
```

**The Concept:**
A `static` method belongs to the **Class itself**, not to the **Objects (instances)** created from the class.

**The Analogy:**

- **The Class (User):** Is the **Factory**.
- **The Instance (me):** Is the **Car** produced by the factory.
- **Static Method:** The Factory has a utility function, like `Factory.getBlueprintVersion()`.
  - Can the Factory call it? **Yes.**
  - Does the Car need to know the blueprint version to drive? **No.**
  - Can the Car call `car.getBlueprintVersion()`? **No**, it doesn't have that button.

**Real World Use Case (Mongoose/Next.js):**
You use this all the time in backend development without realizing it.

```javascript
// 'find' is a STATIC method. You call it on the Model, not on a specific user.
await User.find({ email: "..." });

// 'save' is an INSTANCE method. You call it on a specific user object.
const newUser = new User({...});
await newUser.save();
```

---

### Summary Checklist for Interviews

1.  **Syntactic Sugar:** Classes are just a cleaner way to write constructor functions and prototypes.
2.  **`super()`:** The bridge that passes the `this` context to the parent constructor. Mandatory before using `this` in a child constructor.
3.  **Inheritance:** `extends` links the prototype chains so children can access parent methods.
4.  **Static:** Methods for the "Class/Blueprint" only. Instances (objects) cannot touch them.
5.  **Polymorphism:** If `Teacher` defines its own `logMe()` method, it overrides the `User`'s `logMe()` method. This is Method Overriding.

---
