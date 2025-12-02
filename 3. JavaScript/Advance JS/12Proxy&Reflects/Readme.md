# What is Proxy and Reflect Objects?

These two concepts are advanced JavaScript features often used in **library development** (like Vue 3, MobX, or testing libraries).

Together, they allow you to perform **Metaprogramming**—writing code that manages or manipulates other code.

### 1\. The Proxy Object

**What is it?**
A `Proxy` is a wrapper around an object (called the `target`). It acts as a "middleman" or "security guard" that intercepts operations (like reading a property, writing a property, or deleting one) before they reach the actual object.

**The Analogy:**
Imagine a VIP (the `target` object).

- **Without Proxy:** Anyone can walk up to the VIP and give them a gift (set a variable) or ask a question (get a variable).
- **With Proxy:** There is a bodyguard. You hand the gift to the bodyguard. The bodyguard checks if the gift is dangerous (validation). If it's safe, they pass it to the VIP.

**Syntax:**

```javascript
// 1. The Target (The VIP)
const user = {
  name: "Madhur",
  age: 25,
};

// 2. The Handler (The Bodyguard's instructions)
const handler = {
  // Trap for 'reading' a value
  get: (target, property) => {
    console.log(`Getting property "${property}"`);
    return target[property];
  },

  // Trap for 'writing' a value
  set: (target, property, value) => {
    if (property === "age" && value < 0) {
      throw new Error("Age cannot be negative!");
    }
    console.log(`Setting property "${property}" to ${value}`);
    target[property] = value;
    return true; // Indicates success
  },
};

// 3. Create the Proxy
const proxyUser = new Proxy(user, handler);

// --- Usage ---
console.log(proxyUser.name);
// Output: "Getting property "name"" -> "Madhur"

proxyUser.age = 30;
// Output: "Setting property "age" to 30"

proxyUser.age = -5;
// Output: Uncaught Error: Age cannot be negative!
```

### 2\. The Reflect Object

**What is it?**
`Reflect` is a built-in global object that provides methods for interceptable JavaScript operations. It is essentially a collection of the "default behaviors" of JS objects.

**Why do we use it?**
You might ask: _"In the example above, I just did `target[property] = value`. Why do I need Reflect?"_

1.  **Standardization:** `target[prop]` is syntax. `Reflect.get(target, prop)` is a function.
2.  **Return Values:** `Reflect.set()` returns a **Boolean** (`true` if successful, `false` if failed). Standard assignment just returns the value, which can mask silent errors (like trying to write to a frozen object).
3.  **Context (`this`) Binding:** This is the big one. If your target object has getters/setters that use `this`, using `target[key]` inside a Proxy can point `this` to the wrong place. `Reflect` fixes this.

**The Correct Pattern (Proxy + Reflect):**

```javascript
const user = {
  _name: "Madhur",
  get name() {
    return this._name.toUpperCase();
  },
};

const handler = {
  get(target, prop, receiver) {
    // receiver keeps 'this' pointing to the Proxy, not the original target
    return Reflect.get(target, prop, receiver);
  },
};

const proxy = new Proxy(user, handler);
console.log(proxy.name); // "MADHUR"
```

### 3\. Real-World Use Cases

#### A. Reactivity System (Vue 3)

This is exactly how **Vue 3** works under the hood. When you create `ref` or `reactive` data, Vue wraps your object in a `Proxy`.

- When you **get** a property, Vue "tracks" that your component relies on this data.
- When you **set** a property, Vue "triggers" a re-render for that component.

#### B. Negative Array Indices

In standard JS, `arr[-1]` returns `undefined`. In Python, it returns the last item. We can add this feature to JS using Proxy.

```javascript
const createSmartArray = (arr) => {
  return new Proxy(arr, {
    get(target, prop) {
      // If prop is a string number like "-1"
      let index = Number(prop);

      // If index is negative, count from back
      if (index < 0) {
        index += target.length;
      }

      return Reflect.get(target, index);
    },
  });
};

const nums = createSmartArray([10, 20, 30, 40]);

console.log(nums[-1]); // Output: 40
console.log(nums[-2]); // Output: 30
```

#### C. API Response Validation (AlgoSurge)

For your project, if you are handling complex JSON objects for problem test cases, you can wrap them in a Proxy to ensure code doesn't accidentally modify read-only test data.

### Summary Table

| Feature      | Proxy                               | Reflect                                            |
| :----------- | :---------------------------------- | :------------------------------------------------- |
| **Role**     | The Interceptor (Traps the action). | The Executor (Performs the action).                |
| **Analogy**  | The Custom Logic.                   | The Default Logic.                                 |
| **Main Use** | Validation, Logging, Data Binding.  | Forwarding operations from Proxy to Target safely. |

---
