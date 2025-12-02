# What is Memoization?

**Memoization** is a specific form of caching.

In simple terms: It is remembering the result of a function so that you don't have to calculate it again when the same inputs are provided.

**The Analogy:**
Imagine asking a math genius: "What is $345 \times 928$?"
They take 1 minute to calculate and say: "320,160".
If you ask them **immediately again**: "What is $345 \times 928$?", they won't calculate it again. They will remember the answer and say "320,160" instantly.

### 1\. Vanilla JavaScript (Under the Hood)

In interviews, you are often asked to "write a memoize function from scratch". It uses **Closures** and an Object (Map) to store data.

```javascript
// 1. The Utility Function
const memoize = (func) => {
  const cache = {}; // The "Backpack" where we store answers

  return (...args) => {
    // Create a unique key for the arguments (e.g., "[5, 10]")
    const argsKey = JSON.stringify(args);

    // 2. CHECK: Do we already have the answer?
    if (cache[argsKey]) {
      console.log("Fetching from cache...");
      return cache[argsKey];
    }

    // 3. CALCULATE: If not, run the heavy function
    console.log("Calculating new result...");
    const result = func(...args);

    // 4. SAVE: Store the result for next time
    cache[argsKey] = result;
    return result;
  };
};

// --- Usage ---

const slowSquare = (num) => {
  // Simulate a heavy task loop
  for (let i = 0; i < 100000000; i++) {}
  return num * num;
};

const fastSquare = memoize(slowSquare);

console.time("First Call");
console.log(fastSquare(9467)); // Takes ~100ms (Calculates)
console.timeEnd("First Call");

console.time("Second Call");
console.log(fastSquare(9467)); // Takes ~0.1ms (Returns from Cache)
console.timeEnd("Second Call");
```

### 2\. React: `useMemo`

In React, we don't usually write the utility above manually. We use the **`useMemo` hook**.

**When to use it:** When you have a heavy calculation (like filtering a list of 10,000 items) inside a component, and you don't want it to re-run just because a completely unrelated state changed.

```jsx
import React, { useState, useMemo } from "react";

const HeavyComponent = () => {
  const [count, setCount] = useState(0); // Unrelated state
  const [items] = useState([...Array(10000).keys()]); // Large array

  // WITHOUT useMemo: This runs every time you click "Increment Count" (Laggy)
  // const magicNumber = items.reduce((a, b) => a + b, 0);

  // WITH useMemo: This only runs once, unless 'items' changes.
  // Clicking "Increment Count" will be super fast now.
  const magicNumber = useMemo(() => {
    console.log("Calculating heavy math...");
    return items.reduce((a, b) => a + b, 0);
  }, [items]);

  return (
    <div>
      <h2>Magic Number: {magicNumber}</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};
```

### 3\. React: `React.memo` (Component Memoization)

While `useMemo` caches a **value**, `React.memo` caches a **Component**.

If a parent component re-renders, all its children re-render by default. `React.memo` stops this chain if the child's props haven't changed.

```jsx
import React, { useState } from "react";

// This child will NOT re-render if 'name' stays the same
// even if the Parent's 'count' changes.
const Child = React.memo(({ name }) => {
  console.log("Child Rendered!"); // You will see this log rarely
  return <div>Hello, {name}</div>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child name="Madhur" />
    </div>
  );
};
```

### 4\. Important for AlgoSurge (Your Project)

Since you are building a LeetCode clone, **Memoization is the foundation of Dynamic Programming (DP)**.

**Classic Example: Fibonacci Sequence**

- **Without Memoization:** Complexity is $O(2^n)$ (Exponential - Creates a massive tree structure, crashes browser at n=50).
- **With Memoization:** Complexity is $O(n)$ (Linear - Solves instantly).

If a user submits a recursive solution on your platform without memoization, they will get a **TLE (Time Limit Exceeded)** error. If they add memoization, it passes.

---
