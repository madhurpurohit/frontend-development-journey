# Difference between Properties vs. Methods.

## 1\. The Core Distinction: State vs. Behavior

At the most basic level:

- **Properties** represent **State** (What the object _is_ or _has_). These are Nouns.
- **Methods** represent **Behavior** (What the object _does_). These are Verbs.

| Feature        | Property                                                         | Method                                         |
| :------------- | :--------------------------------------------------------------- | :--------------------------------------------- |
| **Definition** | A value (string, number, boolean, object) associated with a key. | A function associated with a key.              |
| **Role**       | Holds data.                                                      | Performs actions or logic.                     |
| **Access**     | `object.key`                                                     | `object.key()` (needs parenthesis to execute). |

---

## 2\. The Code Visualization

```javascript
class User {
  constructor(name, role) {
    // PROPERTIES (Instance fields)
    // These are unique to EVERY specific user.
    this.name = name;
    this.role = role;
    this.isOnline = false;
  }

  // METHODS (Prototype functions)
  // This logic is shared by all users.
  login() {
    this.isOnline = true;
    console.log(`${this.name} has logged in.`);
  }

  calculateSalary(base, bonus) {
    return base + bonus;
  }
}

const user1 = new User("Madhur", "Developer");
```

---

## 3\. Deep Dive: Memory Allocation (The Interview Winner)

This is where 90% of candidates fail. They don't know _where_ these live in memory.

**A. Properties live on the Instance.**
When you create `user1`, `user2`, `user3`:

- User 1 has its own `name` variable in memory.
- User 2 has its own `name` variable in memory.
- **Reason:** Every user has a different name. You _need_ 1,000 copies if you have 1,000 users.

**B. Methods live on the Prototype.**

- User 1 does **not** have the code for `login()` inside it.
- User 2 does **not** have the code for `login()` inside it.
- Instead, they both have a hidden link (`__proto__`) to the `User.prototype`. The `login` function exists **once** in memory on the Prototype.
- **Reason:** The logic for logging in is the same for everyone. Creating 1,000 copies of the _same code_ would waste RAM.

---

## 4\. The Gray Area: Accessors (Getters & Setters)

Sometimes, you want a method to **act** like a property. This is done using `get` and `set`.

**Why use this?** To add validation or computed logic while keeping the syntax clean (`user.password` instead of `user.getPassword()`).

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  // LOOKS like a method, ACTS like a property
  get uppercaseName() {
    return this.name.toUpperCase();
  }

  set newName(value) {
    if (value.length < 3) {
      console.log("Name too short!");
      return;
    }
    this.name = value;
  }
}

const u = new User("devflux");

// Notice: No parenthesis () !!
console.log(u.uppercaseName); // "DEVFLUX"

u.newName = "MP"; // "Name too short!"
```

---

## 5\. Advanced: The "Arrow Function" Trap in React

In modern React (and JS classes), you often see this:

```javascript
class Button {
  constructor() {
    this.label = "Click Me";
  }

  // 1. Normal Method (Defined on Prototype)
  clickStandard() {
    console.log(this.label);
  }

  // 2. Class Field with Arrow Function (Defined on Instance)
  clickArrow = () => {
    console.log(this.label);
  };
}
```

**The Interview Question:** "What is the difference between these two?"

1.  **`clickStandard`**: Lives on the **Prototype**. It is memory efficient. However, if you pass it to another element (like an event listener), it loses its `this` context (it becomes undefined).
2.  **`clickArrow`**: This is technically **NOT a method**. It is a **Property** that holds an anonymous function value.
    - Because it is a property, it moves **from the Prototype to the Instance**.
    - If you have 1,000 buttons, you have 1,000 copies of this function in memory.
    - **Benefit:** Arrow functions lexically bind `this`. You never need to do `.bind(this)`.

### Summary Comparison

| Concept            | Where it lives (Memory)  | Context (`this`)            | Best Use Case                                         |
| :----------------- | :----------------------- | :-------------------------- | :---------------------------------------------------- |
| **Property**       | Instance (Object itself) | N/A (It's data)             | Storing unique data (ID, Name, Email).                |
| **Method**         | Prototype (Shared)       | Dynamic (Depends on caller) | Shared logic (Calculations, API calls).               |
| **Arrow "Method"** | Instance (Object itself) | Fixed (Lexical Scopy)       | React Event Handlers (passing functions to children). |
| **Getter/Setter**  | Prototype (Shared)       | Dynamic                     | Computed data (`fullName`) or Validation.             |

---
