# What is Promisification?

**Promisification** is the process of converting a function that accepts a **Callback** into a function that returns a **Promise**.

It is the bridge that allows you to use modern JavaScript features like `async/await` with older libraries or Node.js core modules that were written before Promises existed.

---

### 1\. The Problem: "Error-First Callbacks"

Before Promises (ES6), Node.js handled asynchronous operations using the **Error-First Callback** pattern.

- **Pattern:** `function(arg1, arg2, (err, value) => { ... })`
- **The Issue:** If you need to run 3 async tasks in order, you end up with deeply nested code known as **Callback Hell**.

**The Old Way (Legacy Code):**

```javascript
const fs = require("fs");

// We want to read a file, then write to another file.
fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading:", err);
    return;
  }

  // Nested Callback
  fs.writeFile("./output.txt", data.toUpperCase(), (err) => {
    if (err) {
      console.error("Error writing:", err);
      return;
    }
    console.log("File processed successfully!");
  });
});
```

---

### 2\. The Solution: Promisification (Under the Hood)

To fix this, we create a wrapper function. This wrapper returns a Promise. Inside that Promise, it calls the original callback-based function.

**Writing a `promisify` function from scratch:**
This is a very common interview question.

```javascript
/**
 * The Promisify Utility
 * @param {Function} func - The function that takes a callback
 * @returns {Function} - A function that returns a Promise
 */
function promisify(func) {
  // Return a new function that accepts arguments (e.g., path, encoding)
  return function (...args) {
    // This new function returns a Promise
    return new Promise((resolve, reject) => {
      // 1. Define the custom callback
      function customCallback(err, result) {
        if (err) {
          reject(err); // If error, reject the promise
        } else {
          resolve(result); // If success, resolve the promise
        }
      }

      // 2. Append our custom callback to the arguments list
      // args became ['path', 'encoding', customCallback]
      args.push(customCallback);

      // 3. Call the original function with these args
      // We use .call(this) to preserve context if it's a method
      func.call(this, ...args);
    });
  };
}
```

**Using our custom wrapper:**

```javascript
// 1. Create the promisified version
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// 2. Use it with async/await (Clean Code!)
async function processFile() {
  try {
    const data = await readFileAsync("./input.txt", "utf8");
    await writeFileAsync("./output.txt", data.toUpperCase());
    console.log("Success!");
  } catch (err) {
    console.error("Something went wrong:", err);
  }
}

processFile();
```

---

### 3\. The "Native" Way (`util.promisify`)

You don't need to write the helper above manually in production code. Node.js has a built-in utility for this.

```javascript
const util = require("util");
const fs = require("fs");

// Converts the callback-based function to a Promise-based one automatically
const readFile = util.promisify(fs.readFile);

readFile("./example.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

_(Note: In modern Node.js 14+, you can just use `import fs from 'fs/promises'` to get promise-based functions natively without wrapping them.)_

---

### 4\. Advanced: Handling `this` Context

Promisification gets tricky when you try to promisify a method of a Class (Object) because extracting the method causes it to lose its `this` context.

**Scenario:** Database method (Legacy style)

```javascript
class Database {
  constructor() {
    this.dbName = "UsersDB";
  }

  // Legacy method using callback
  findUser(id, callback) {
    console.log(`Searching in ${this.dbName}...`); // Uses 'this'
    setTimeout(() => {
      callback(null, { id: id, name: "Madhur" });
    }, 500);
  }
}

const db = new Database();
const util = require("util");

// ❌ WRONG: Context Loss
const findUserAsyncWrong = util.promisify(db.findUser);
// findUserAsyncWrong(1).catch(console.error);
// Error: Cannot read property 'dbName' of undefined

// ✅ CORRECT: Bind the context
const findUserAsync = util.promisify(db.findUser).bind(db);

findUserAsync(1).then((user) => console.log(user));
// Output: "Searching in UsersDB..." -> { id: 1, name: "Madhur" }
```

---

### 5\. When is Promisification NOT possible?

Promisification only works if the original function follows the **Node.js Standard Callback Pattern**:

1.  The callback is the **last argument**.
2.  The callback signature is exactly **`(error, value)`**.

**It will fail for:**

- `setTimeout` (Callback is 1st arg, not last).
- `DOM Events` (onclick, addEventListener - these fire multiple times, Promises only resolve once).
- Streams (They emit events continuously).

### Summary Table

| Method               | Description               | Use Case                                                         |
| :------------------- | :------------------------ | :--------------------------------------------------------------- |
| **Manual Wrapper**   | `return new Promise(...)` | Learning, or fixing non-standard callbacks (e.g., `setTimeout`). |
| **`util.promisify`** | Node.js built-in tool.    | Standard Node.js legacy modules (`fs`, `crypto`, `zlib`).        |
| **`fs.promises`**    | Native Promise API.       | New projects. No promisification needed.                         |

---
