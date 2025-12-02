# What is Currying?

**Currying** is a concept from Functional Programming. & it's name is based on the mathematician Haskell Curry.

In simple terms: It is the process of converting a function that takes **multiple arguments** into a sequence of functions that each take a **single argument**.

**The Transformation:**

- **Normal:** `f(a, b, c)`
- **Curried:** `f(a)(b)(c)`

### 1\. Basic Syntax

**Scenario:** A simple function to add three numbers.

**A. Without Currying (Normal):**

```javascript
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // Output: 6
```

**B. With Currying (The "Long" Way):**
This works because of **Closures**. The inner function remembers `a` even after the first function has finished executing.

```javascript
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // Output: 6
```

**C. With Currying (Modern Arrow Syntax):**
This is how you will usually see it in modern React/JS codebases.

```javascript
const add = (a) => (b) => (c) => a + b + c;

console.log(add(1)(2)(3)); // Output: 6
```

### 2\. Why/When do we use it?

You might ask: _"Why complicate things? Why not just pass all arguments at once?"_

The superpower of Currying is **Partial Application**. It allows you to create **specialized utility functions** from a generic one.

**Real-world Example: An API URL Builder**

Imagine you are fetching data from different endpoints of the same base URL.

```javascript
// 1. The Generic Curried Function
const apiCall = (baseUrl) => (endpoint) => (payload) => {
  console.log(`Fetching from: ${baseUrl}/${endpoint} with data:`, payload);
};

// 2. Create a specialized function for your specific server
// We "lock in" the baseUrl once.
const myServerRequest = apiCall("https://api.algosurge.com");

// 3. Now we can reuse 'myServerRequest' for different endpoints
const getUser = myServerRequest("users");
const getPosts = myServerRequest("posts");

// 4. Finally, we execute it with the payload
getUser({ id: 101 });
// Output: Fetching from: https://api.algosurge.com/users with data: { id: 101 }

getPosts({ limit: 10 });
// Output: Fetching from: https://api.algosurge.com/posts with data: { limit: 10 }
```

**Benefit:** You didn't have to repeat `https://api.algosurge.com` every single time you made a call.

### 3\. Practical Use in React

Currying is very common in React for **Event Handlers**, especially when dealing with lists or forms.

**Scenario:** You have a form with 3 different input fields. Instead of writing 3 separate `onChange` functions, you write one curried function.

```jsx
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });

  // CURRIED FUNCTION
  // First argument: The field name (key)
  // Second argument: The event object (e) from React
  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <form>
      {/* Usage: We call the first part 'handleChange(name)' immediately */}
      {/* The second part (e) is called automatically by React when user types */}

      <input placeholder="Name" onChange={handleChange("name")} />

      <input placeholder="Email" onChange={handleChange("email")} />

      <input placeholder="Age" onChange={handleChange("age")} />

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </form>
  );
};
```

### 4\. Famous Interview Question: Infinite Currying

**Question:** "Write an `add` function that works like this: `add(1)(2)(3)...(n)()`"

This requires **Recursion**.

```javascript
function add(a) {
  return function (b) {
    if (b) {
      // If an argument 'b' exists, call 'add' again with the sum
      return add(a + b);
    }
    // If no argument is passed (empty parenthesis), return the total
    return a;
  };
}

console.log(add(5)(2)(4)(8)()); // Output: 19
```

---

[A better blog to understand this concept](https://dev.to/darkmavis1980/a-practical-example-on-how-to-use-currying-in-javascript-1ae9)
