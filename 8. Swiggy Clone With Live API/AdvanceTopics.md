## What is the "in" operator?

**In JavaScript, the in operator is used to check if a property exists inside an object.**

**Example:**

```
const tempData = [
  { card: { card: { title: "Hello World", id: 1 } } },
  { card: { card: { id: 2 } } },
  { card: { card: { title: "Another Item", id: 3 } } },
  { card: {} }
];

const filteredData = tempData.filter(
  (item) => "title" in item?.card?.card
);

console.log(filteredData);
```

**Output:**

```
[
  { card: { card: { title: "Hello World", id: 1 } } },
  { card: { card: { title: "Another Item", id: 3 } } }
]
```

---

## What is find method?

**The .find() method searches through an array and returns the first element that matches a condition.**

**Note:**

- Returns the first matching object/element.
- If no match is found → returns undefined.

**Example:** With Array.

```
const numbers = [5, 12, 8, 130, 44];

const firstBigNumber = numbers.find(num => num > 10);

console.log(firstBigNumber);
// Output: 12 (because 12 is the first number greater than 10)
```

**Example:** With Object.

```
const users = [
  { id: 1, name: "DevFlux" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" }
];

const user = users.find(u => u.id === 2);

console.log(user);
// { id: 2, name: "Alice" }
```

---

## What is flatMap method?

**The .flatMap() method is like map() + flat() combined in one step.**

- First, it maps (transforms) each element.
- Then it flattens the result by one level.

**Example1:**

```
const arr = [1, 2, 3];

// Normal map
const mapped = arr.map(x => [x, x * 2]);
console.log(mapped);
// [[1, 2], [2, 4], [3, 6]]   (nested arrays)

// flatMap
const flatMapped = arr.flatMap(x => [x, x * 2]);
console.log(flatMapped);
// [1, 2, 2, 4, 3, 6]   (flattened into a single array)
```

**Example2:**

```
const sentences = ["hello world", "open ai rocks"];

// Split each sentence into words
const words = sentences.flatMap(sentence => sentence.split(" "));
console.log(words);
// ["hello", "world", "open", "ai", "rocks"]
```

---
