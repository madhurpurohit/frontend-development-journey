# 1\. What is a Generic Function?

In simple terms: A **Generic Function** is a function that is "flexible." It doesn't force us to use a specific data type (like only `Integer` or only `String`). It can adapt to whatever data you throw at it.

**In JavaScript (Implicit Generics):**
Since JS is dynamically typed, _most_ functions are automatically generic.

```javascript
// This function doesn't care if 'data' is a number, string, or object.
function echo(data) {
  return data;
}
```

**In TypeScript (Explicit Generics):**
Since we are learning the full stack, we will face this in TypeScript. This is where "Generics" is a formal concept. We use `<T>` (a variable for Types) to tell the compiler: _"I don't know what type this is yet, but capture it and use it consistently."_

```typescript
// TS Code
function identity<T>(arg: T): T {
  return arg;
}

// If I pass a number, T becomes Number. The return type is forced to be Number.
let output1 = identity<number>(100);

// If I pass a string, T becomes String.
let output2 = identity<string>("DevFlux");
```

---

# 2\. What is Composition?

**Composition** is the process of combining two or more small functions to build a bigger, more complex function. It is the heart of **Functional Programming**.

**The Analogy:**
Think of a **Factory Assembly Line**.

1.  **Input:** Raw metal (Data).
2.  **Machine 1 (Function A):** Melts the metal.
3.  **Machine 2 (Function B):** Molds it into a shape.
4.  **Output:** A car part.

In code: `FinalResult = Machine2( Machine1( Input ) )`

---

# 3\. Explaining our Code (Deep Dive)

Let's break down exactly how they work, step-by-step.

#### Method 1: The "Two-Function" Pipeline

This is strict composition. We manually pass the result of one function into the next.

```javascript
function add(a, b) {
  return a + b; // Returns Number
}

function square(val) {
  return val * val; // Accepts Number, Returns Number
}

// OUR CODE:
const compositionTwoFunctionNew = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

const taskNew = compositionTwoFunctionNew(add, square);
console.log(taskNew(3, 3)); // Output: 36
```

**Execution Flow:**

1.  `taskNew(3, 3)` is called.
2.  It executes `fn1(a, b)` which is `add(3, 3)`. Result = **6**.
3.  It passes that **6** into `fn2(val)` which is `square(6)`.
4.  `6 * 6` = **36**.

**Why use this?**
Instead of writing `const sum = add(3,3); const res = square(sum);`, we created a reusable "Adder-Squarer" machine.

#### Method 2: Infinite Composition (The "Pipe")

This is the advanced level. We used `.reduce()` to handle an array of functions.

**Clarification on your code:**
In our code, we passed `value` (which is `[4, 4]`) as the _initial value_ of the reducer. This creates a chain reaction.

```javascript
function multiply(args) {
  return args[0] * args[1];
}

function squareRoot(val) {
  return Math.sqrt(val);
}

// OUR CODE ANALYZED:
function composeInfinite(...fns) {
  return function (...value) {
    // fns = [multiply, squareRoot]
    // value = [4, 4] (The initial arguments)

    return fns.reduce((acc, currentFn) => {
      // 1st Loop: acc is [4, 4], currentFn is multiply
      // 2nd Loop: acc is 16, currentFn is squareRoot
      return currentFn(acc);
    }, value);
  };
}

const taskInfinite = composeInfinite(multiply, squareRoot);
console.log(taskInfinite(4, 4)); // Output: 4
```

**The `reduce` Breakdown:**

| Iteration | Accumulator (`fn1` in your code) | Current Function (`fn2`) | Action             | Result |
| :-------- | :------------------------------- | :----------------------- | :----------------- | :----- |
| **Start** | `[4, 4]` (Initial Value)         | -                        | -                  | -      |
| **1**     | `[4, 4]`                         | `multiply`               | `multiply([4, 4])` | `16`   |
| **2**     | `16`                             | `squareRoot`             | `squareRoot(16)`   | `4`    |

**Concept Check: Pipe vs. Compose**

- **Pipe:** Runs functions Left-to-Right (First `multiply`, then `squareRoot`). _Your code is doing this._
- **Compose:** Mathematically, composition usually runs Right-to-Left (First `squareRoot`, then `multiply`).

### Improved "Modern Standard" Version

In professional libraries (like Redux or Lodash), we usually write the compose function to handle the arguments slightly more cleanly so we don't need to pass arrays manually to the first function.

Here is the industry-standard "Pipe" function:

```javascript
// A reusable Pipe function
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Usage
const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

// Create a pipeline: Add 1 -> Double -> Square
const myProcess = pipe(addOne, double, square);

console.log(myProcess(5));
// 1. addOne(5) -> 6
// 2. double(6) -> 12
// 3. square(12) -> 144
```

---

## Summary for Interviews

1.  **Generic Function:** A function written to handle any data type (Logic is separated from Type).
2.  **Composition:** Passing the output of one function as the input to the next.
3.  **Use Case:** It removes temporary variables and makes data flow linear and readable.

---
