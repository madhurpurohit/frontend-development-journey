# JavaScript `this` & Explicit Binding Documentation

## 1\. The Scenario: "Constructor Stealing"

You have two functions. You want the second function (`createUser`) to use the logic of the first function (`setUserName`), but you want the changes to apply to the _new_ user you are creating.

**Code Reference:**

```javascript
function setUserName(username) {
  // Imagine complex DB logic here
  this.username = username;
  console.log("setUserName Execution Context:", this);
}

function createUser(username, email, password) {
  // The goal: Borrow setUserName's logic for THIS new object

  // 1. Direct Call (FAILS)
  // setUserName(username); //? This will call the setUserName function but it will not reference the username, because as the function setUserName remove the execution context table from the stack the reference will be lost.

  // 2. Wrong Context (FAILS)
  // setUserName.call(username, username); //? Here we use call, because it references the username variable.

  // 3. Explicit Binding (WORKS)
  setUserName.call(this, username); //? Here we pass this as the first argument, so we explicitly tell the setUserName function to use the current execution context instead of the setUserName execution context. In simple word we say that hey setUserName, run your code. But I am forcing you to use this as your this. Do not create your own context; use mine.

  this.email = email;
  this.password = password;
}

const userOne = new createUser("DevFlux", "DevFlux123@gmail.com", "1234@");
console.log(userOne);
```

---

## 2\. Deep Dive: The 3 Scenarios

#### ❌ Scenario 1: `setUserName(username)` (The "Orphan" Call)

**What happens?**
You invoke the function normally. In JavaScript, a normal function call (without a dot before it) applies **Default Binding**.

**Why it fails:**

- **Context Loss:** When `setUserName` runs, it doesn't know _who_ called it.
- **The Result:**
  - **Browser (Non-Strict):** `this` becomes the global `window` object. You just accidentally created `window.username`.
  - **Node/Strict Mode:** `this` is `undefined`. The code crashes with `Cannot set property 'username' of undefined`.
- **Analogy:** You hired a painter (`setUserName`) but didn't tell them which house to paint. They paint the sky (Global) or nothing.

#### ❌ Scenario 2: `setUserName.call(username)` (The "Wrong Target")

**What happens?**
You use `.call()`, but you pass the _string_ variable `username` ("DevFlux") as the first argument.

**Why it fails:**

- **The Target:** You effectively said: "Treat the string 'DevFlux' as the object (`this`)."
- **Primitive Wrapper:** JavaScript temporarily wraps the string in a String Object.
- **The Outcome:** It tries to do `"DevFlux".username = "DevFlux"`. Since strings are primitives (and immutable in this context), this operation does nothing useful for your `userOne` object.

#### ✅ Scenario 3: `setUserName.call(this, username)` (The "Delegation")

**What happens?**
This is **Explicit Binding**.

**Why it works:**

1.  **The `this` keyword inside `createUser`:** Because we used `new createUser`, the `this` inside `createUser` refers to the brand new empty object (let's call it `{memory_101}`).
2.  **The Handover:** `setUserName.call(this, ...)` translates to:
    > "Hey `setUserName`, run your code. But I am forcing you to use `{memory_101}` as your `this`. Do not create your own context; use mine."
3.  **Result:** `setUserName` updates `{memory_101}.username`.

---

## 3\. Interview Core: Call vs. Apply vs. Bind

This is a guaranteed interview question. All three methods are used to control `this`.

#### A. `.call()`

- **Syntax:** `func.call(thisArg, arg1, arg2, ...)`
- **Execution:** Runs the function **immediately**.
- **Arguments:** Passed individually (comma-separated).
- **Use Case:** Constructor chaining (like your example).

#### B. `.apply()`

- **Syntax:** `func.apply(thisArg, [arg1, arg2, ...])`
- **Execution:** Runs the function **immediately**.
- **Arguments:** Passed as a **single array**.
- **Use Case:** Math operations or when you have data in a list.
  ```javascript
  const numbers = [1, 5, 2];
  // Math.max expects commas (1, 5, 2), not an array.
  // .apply spreads the array into arguments.
  const max = Math.max.apply(null, numbers);
  ```

#### C. `.bind()`

- **Syntax:** `const newFunc = func.bind(thisArg, arg1, arg2)`
- **Execution:** **Does NOT run immediately.** It returns a **copy** of the function with `this` permanently tied to the object.
- **Use Case:** React Event Handlers or preserving context in callbacks.

  ```javascript
  const user = {
    name: "Madhur",
    print: function () {
      console.log(this.name);
    },
  };

  // If we pass this to a button, reference is lost
  // setTimeout(user.print, 1000); // undefined

  // So we BIND it
  const boundPrint = user.print.bind(user);
  setTimeout(boundPrint, 1000); // "Madhur"
  ```

---

## 4\. Modern Connection: `super()`

In modern JavaScript (ES6 Classes), we don't write `Parent.call(this)` manually. We use `super()`.

**The Evolution:**
The code you wrote above is exactly what happens under the hood when you do this:

```javascript
class User {
  constructor(username) {
    this.username = username; // This is setUserName
  }
}

class Admin extends User {
  constructor(username, email) {
    super(username); // <--- This is literally setUserName.call(this, username)
    this.email = email;
  }
}
```

### Summary Table for Revision

| Method    | Invoked Immediately?      | Arguments Format       | Purpose                                            |
| :-------- | :------------------------ | :--------------------- | :------------------------------------------------- |
| **Call**  | Yes                       | `arg1, arg2` (Comma)   | Borrowing methods, Constructor chaining.           |
| **Apply** | Yes                       | `[arg1, arg2]` (Array) | passing arrays as args (e.g., Math.max).           |
| **Bind**  | **No** (Returns function) | `arg1, arg2` (Comma)   | Creating a function for later use (Events/Timers). |

---
