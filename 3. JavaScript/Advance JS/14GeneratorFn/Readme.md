# 1\. The Iterator Pattern

**Definition:** The Iterator Pattern is a design pattern that allows you to traverse through a collection of data (like an array, a list, or a tree) one element at a time, without needing to understand the underlying structure of how that data is stored.

In JavaScript, an object is an **Iterator** if it implements a `next()` method that returns an object with two properties:

1.  **`value`**: The current item.
2.  **`done`**: A boolean (`true` if finished, `false` if more items exist).

### Implementing an Iterator "The Hard Way"

Before Generators existed, if you wanted to make a custom object loopable, you had to write this manual logic:

```javascript
// A custom collection
const myCollection = {
  data: [10, 20, 30],

  // To make this object work with 'for...of', we need Symbol.iterator
  [Symbol.iterator]() {
    let index = 0;
    const properties = this.data;

    return {
      // The Iterator Protocol requires this next() function
      next: function () {
        if (index < properties.length) {
          return { value: properties[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

// Usage
const iterator = myCollection[Symbol.iterator]();
console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Because we added Symbol.iterator, we can now do this:
for (const num of myCollection) {
  console.log(num);
}
```

---

# 2\. Generator Functions (`function*`)

Writing that manual `next()` logic above is tedious and error-prone.
**Generators** are a special type of function that acts as a factory for Iterators. They allow you to define an iterative algorithm by writing a single function that can **pause** its execution.

**Key Keywords:**

- **`function*`**: Declares a generator function.
- **`yield`**: Pauses the function and spits out a value.
- **`yield*`**: Delegates to another generator (yields from another array/generator).

### The Syntax

```javascript
function* numberGenerator() {
  console.log("Start Execution");
  yield 1; // Pause here and return 1

  console.log("Resuming...");
  yield 2; // Pause here and return 2

  console.log("Almost done...");
  return 3; // Stop here and return 3 (done: true)
}

const gen = numberGenerator(); // Does NOT run the code yet. Returns a Generator Object.

console.log(gen.next());
// Output: "Start Execution", { value: 1, done: false }

console.log(gen.next());
// Output: "Resuming...", { value: 2, done: false }

console.log(gen.next());
// Output: "Almost done...", { value: 3, done: true }
```

---

# 3\. In-Depth: How it Works (Under the Hood)

This is the part that helps in interviews. A Generator is essentially a **State Machine**.

When you call `gen.next()`, the JavaScript engine does the following:

1.  **Awake:** It wakes up the function execution context.
2.  **Execute:** It runs the code inside the function until it hits the `yield` keyword.
3.  **Evaluation:** It evaluates the expression to the right of `yield` (e.g., `yield "Hello"` evaluates "Hello").
4.  **Pause & Return:**
    - It **pauses** the function execution exactly at that line.
    - It saves the entire "Stack Frame" (local variables, current line number) in memory.
    - It returns the `{ value: "Hello", done: false }` object to the caller.
5.  **Resume:** When `gen.next()` is called _again_, it restores the Stack Frame and resumes execution immediately _after_ the previous `yield`.

---

# 4\. Advanced: Two-Way Communication

Generators are not just one-way (outputting data). You can also pass data **into** them while they are running using `.next(value)`.

**Scenario:** A chat conversation simulation.

```javascript
function* chatBot() {
  // 1. Yields "Hi", then PAUSES.
  // 2. Waits for the NEXT .next(input) call.
  // 3. The input passed to .next() becomes the result of the yield expression.
  const name = yield "Hi, what is your name?";

  // 'name' is now whatever we passed in the second .next()
  const mood = yield `Nice to meet you ${name}! How are you?`;

  return `Glad to hear you are ${mood}, ${name}. Goodbye!`;
}

const bot = chatBot();

// Step 1: Start the bot
console.log(bot.next().value);
// Output: "Hi, what is your name?" (Bot pauses at first yield)

// Step 2: Answer the bot
console.log(bot.next("Madhur").value);
// Output: "Nice to meet you Madhur! How are you?"
// (The string "Madhur" replaced the first 'yield' statement inside the function)

// Step 3: Answer mood
console.log(bot.next("Happy").value);
// Output: "Glad to hear you are Happy, Madhur. Goodbye!"
```

---

# 5\. Why do we need this? (Real World Use Cases)

**A. Infinite Streams (Unique ID Generator)**
Since generators pause, you can write an infinite loop that doesn't crash the browser.

```javascript
function* idGenerator() {
  let id = 1;
  while (true) {
    // Infinite Loop!
    yield id++; // Pauses here every time
  }
}

const ids = idGenerator();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
// It will never crash because it only runs when we ask it to.
```

**B. Redux-Saga (React State Management)**
If you work with Redux in large apps, you might use **Redux-Saga**. It uses Generators to handle Async actions purely.

- `yield call(fetchApi)`: Pauses code, waits for API.
- `yield put(action)`: Dispatches Redux action.
- It makes async code look completely synchronous.

**C. Custom Iterables**
If you are building a class like a `LinkedList` or `Tree` for your **AlgoSurge** platform, you can add a `*[Symbol.iterator]()` method to your class. This allows users to do `for (let node of myLinkedList)` easily.

---

### Summary Table

| Feature          | Standard Function                  | Generator Function (`function*`)               |
| :--------------- | :--------------------------------- | :--------------------------------------------- |
| **Execution**    | Run-to-completion (cannot stop).   | Can Pause (`yield`) and Resume (`next`).       |
| **Return Value** | `return` value or `undefined`.     | A **Generator Object** (Iterator).             |
| **Memory**       | Stack frame cleared after return.  | Stack frame **saved** between yields.          |
| **Control**      | Caller has no control once called. | Caller controls execution speed via `.next()`. |

---
