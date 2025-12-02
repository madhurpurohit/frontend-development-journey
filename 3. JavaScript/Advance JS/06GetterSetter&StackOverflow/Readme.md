# Getters & Setters: The "Gatekeepers" of Memory

## 1\. ES6 Class Syntax (The Modern Standard)

**Code Reference:**

```javascript
class User {
  constructor(email, password) {
    this.email = email; // Triggers the Setter
    this.password = password; // Triggers the Setter
  }

  // GETTER: Defines what happens when someone reads 'devFlux.email'
  get email() {
    return this._email.toUpperCase();
  }

  // SETTER: Defines what happens when someone writes 'devFlux.email = ...'
  set email(value) {
    this._email = value;
  }
}
```

**Deep Dive: The "Stack Overflow" Trap 🚨**
This is the **\#1 Interview Question** regarding getters/setters.

**Q: Why do we use `_email` (underscore) instead of just `email` inside the setter?**

**Scenario:** Imagine you wrote this instead:

```javascript
set email(value) {
  this.email = value; // ❌ DANGER
}
```

1.  The Constructor calls `this.email = ...`
2.  This triggers the **setter**.
3.  Inside the setter, you write `this.email = ...`.
4.  This triggers the **setter** again.
5.  ...and again.
6.  **Result:** `RangeError: Maximum call stack size exceeded` (Infinite Recursion).

**The Solution (`_` Convention):**
We need a different variable name to store the actual data.

- **`email`**: The name of the "Gate" (Public property).
- **`_email`**: The name of the "Vault" (Private-ish property).
- _Note:_ The underscore `_` does not actually make it private in JS; it is just a developer convention saying "Don't touch this directly."

---

## 2\. Object-Based Syntax (`Object.create`)

**Code Reference:**

```javascript
const User = {
  _email: "h@hc.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User); // tea inherits from User
console.log(tea.email);
```

**Deep Dive: Delegation**
Here, we are not using a Class (Blueprint). We are using a base Object.

1.  **`Object.create(User)`**: This creates a new empty object (`tea`).
2.  **The Link:** `tea.__proto__` is set to `User`.
3.  **The Access:**
    - When you ask for `tea.email`, JS sees `tea` doesn't have it.
    - It looks up the prototype chain to `User`.
    - It finds the **getter** in `User`.
    - **Crucial:** Inside the getter, `this` refers to `tea` (the object triggering the call). If `tea` doesn't have `_email`, it looks up to `User._email`.

---

## 3\. The Legacy Engine (`Object.defineProperty`)

**Code Reference:**

```javascript
function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
}
```

**Deep Dive: How JS Works Under the Hood**
Before ES6 Classes existed, _this_ was how libraries (and transpilers like Babel) implemented getters and setters.

**What is `Object.defineProperty`?**
Every property in JavaScript is not just a value (like "abc"); it is actually a bundle of settings called a **Property Descriptor**.

When you define a property this way, you get full control:

1.  **`get`**: The function to read value.
2.  **`set`**: The function to write value.
3.  **`enumerable`**: Should this show up in a loop (`for..in`)? (Default: `false` here).
4.  **`configurable`**: Can this property be deleted later? (Default: `false` here).

**Why `this` works here:**
Inside the `User` function, `this` refers to the new instance being created (because of `new User(...)`). We are literally injecting the `email` property onto that specific instance with custom rules.

---

## Summary Table for Revision

| Approach           | Syntax Type   | Key Concept                                                                        | Use Case                                                                                         |
| :----------------- | :------------ | :--------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| **Class**          | Modern (ES6)  | Uses `get`/`set` keywords. Requires backing variable (`_prop`) to avoid recursion. | **Standard React/Node** development. Cleanest syntax.                                            |
| **Object.create**  | Prototypal    | Directly on object literal. Depends on Prototype Chain lookup.                     | Rare in modern apps, common in **system design** or lightweight factories.                       |
| **defineProperty** | Legacy / Core | Explicitly modifying property descriptors.                                         | **Library Authors** who need fine-grained control (e.g., making a property read-only or hidden). |

### 🧠 Interview Question:

**"Can I make a property truly private?"**

In the code you provided using `_email`, the data is still public (`user._email` works).
To make it **Truly Private** in modern JS (2025), you use the **Hash `#` syntax**:

```javascript
class User {
  #email; // Native Private Field

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }
}
// user.#email // Syntax Error: Private field
```
