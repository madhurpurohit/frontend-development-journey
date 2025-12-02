# DSA-visualizer-guide

Using Generator Functions is the **Gold Standard** for algorithm visualizers. It decouples the complex logic of the algorithm from the UI rendering logic of React.

### Why Generators?

- **Without Generators:** You have to use `setTimeout` loops or massive `async/await` chains, which leads to "Callback Hell" and makes features like "Pause" or "Step Back" nearly impossible.
- **With Generators:** The algorithm is just a standard function. You can pause it, step forward `next()`, or easily reset it.

---

### 1\. Visualizing Bubble Sort (The Generator)

In a visualizer, we care about two things:

1.  **The Data:** The current state of the array.
2.  **The Pointers:** Which two bars are we currently comparing (`j` and `j+1`)?

<!-- end list -->

```javascript
// algorithms/bubbleSort.js

/**
 * Generator function for Bubble Sort
 * @param {number[]} initialArr - The array to sort
 */
export function* generateBubbleSort(initialArr) {
  // Create a copy to avoid mutating the prop directly
  const arr = [...initialArr];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // YIELD POINT 1: Comparison
      // We pause here to tell React: "I am comparing index j and j+1"
      yield {
        arr: [...arr], // Send a copy of current array state
        activeIndices: [j, j + 1], // Highlight these bars
        swapped: false,
        sortedIndices: [], // Track sorted elements if needed
      };

      if (arr[j] > arr[j + 1]) {
        // Swap logic
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        // YIELD POINT 2: Swap
        // We pause here to tell React: "I just swapped these two"
        yield {
          arr: [...arr],
          activeIndices: [j, j + 1],
          swapped: true,
          sortedIndices: [],
        };
      }
    }
  }

  // YIELD POINT 3: Finished
  yield {
    arr: [...arr],
    activeIndices: [],
    swapped: false,
    done: true,
  };
}
```

---

### 2\. Visualizing Binary Search (The Generator)

For Binary Search, we need to visualize the **Search Window** (`left` and `right`) and the `mid` point.

```javascript
// algorithms/binarySearch.js

export function* generateBinarySearch(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // YIELD POINT 1: Current Window
    // Tell React: "This is my search window, and I'm checking 'mid'"
    yield {
      left,
      right,
      mid,
      found: false,
      done: false,
    };

    if (sortedArr[mid] === target) {
      // YIELD POINT 2: Found
      yield {
        left,
        right,
        mid,
        found: true,
        done: true,
      };
      return; // Exit
    }

    if (sortedArr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // YIELD POINT 3: Not Found
  yield {
    left: -1,
    right: -1,
    mid: -1,
    found: false,
    done: true,
  };
}
```

---

### 3\. The React Implementation (The Consumer)

Here is how you consume these generators in React. This pattern is reusable for _all_ your algorithms.

```jsx
import React, { useState, useRef } from "react";
import { generateBubbleSort } from "./algorithms/bubbleSort";

const SortingVisualizer = () => {
  // 1. Initial State
  const [array, setArray] = useState([50, 30, 20, 10, 40]);
  const [activeIndices, setActiveIndices] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  // 2. Refs to hold the Generator Instance
  // We use useRef because we want the generator to persist across re-renders
  // without triggering re-renders itself.
  const generatorRef = useRef(null);
  const timerRef = useRef(null);

  const startSort = () => {
    // Initialize the generator
    generatorRef.current = generateBubbleSort(array);
    runInterval();
  };

  const runInterval = () => {
    timerRef.current = setInterval(() => {
      nextStep();
    }, 500); // Speed: 500ms per step
  };

  const nextStep = () => {
    if (!generatorRef.current) return;

    // 3. The Magic: Call .next()
    const { value, done } = generatorRef.current.next();

    if (done) {
      clearInterval(timerRef.current);
      setIsSorted(true);
      setActiveIndices([]);
    } else {
      // 4. Update UI based on the yielded value
      setArray(value.arr);
      setActiveIndices(value.activeIndices);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "5px", height: "200px" }}>
        {array.map((val, idx) => (
          <div
            key={idx}
            style={{
              height: `${val * 3}px`,
              width: "30px",
              backgroundColor: activeIndices.includes(idx) ? "red" : "teal",
              transition: "height 0.3s",
            }}
          />
        ))}
      </div>
      <button onClick={startSort} disabled={isSorted}>
        Start Bubble Sort
      </button>
      <button onClick={() => nextStep()}>Step Forward (Manual)</button>
    </div>
  );
};

export default SortingVisualizer;
```

---

### 4\. How to Think: Building "AlgoSurge" Visualizers

To create Selection, Merge, or Quick Sort visualizers, follow this **4-Step Mental Model**.

#### Step 1: Identify the "State Variables"

Look at the standard algorithm code. Which variables define the current "moment"?

- **Linear Search:** Just the current index `i`.
- **Selection Sort:** The current iterator `i`, the seeker `j`, and the current `min_index`.
- **Quick Sort:** The `pivot`, the `low` pointer, and the `high` pointer.

These variables **must** be included in your `yield` object.

#### Step 2: Determine "Yield Points" (Snapshots)

Where should the animation pause?

1.  **Comparison:** Whenever `if (arr[i] > arr[j])` happens. (Color items Red/Green).
2.  **Operation:** Whenever a swap or overwrite happens. (Move the bars).
3.  **Finalization:** When a specific index is confirmed sorted. (Color it Purple).

#### Step 3: Handling Recursion (Merge & Quick Sort)

This is the hardest part. Standard generators don't deeply nest easily. You must use `yield*`.

**Pattern for Recursive Visualizers (e.g., Quick Sort):**

```javascript
function* quickSortGenerator(arr, low, high) {
  if (low < high) {
    // We delegate to the partition generator
    // 'yield*' means: "Pause this function, go run partitionGenerator,
    // and yield whatever IT yields up to the UI."
    const pi = yield* partitionGenerator(arr, low, high);

    // Recursion
    yield* quickSortGenerator(arr, low, pi - 1);
    yield* quickSortGenerator(arr, pi + 1, high);
  }
}

function* partitionGenerator(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    // YIELD COMPARISON
    yield { arr: [...arr], pivotIndex: high, compare: [j, high] };

    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      // YIELD SWAP
      yield { arr: [...arr], pivotIndex: high, swap: [i, j] };
    }
  }
  // Final swap of pivot
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  yield { arr: [...arr], pivotIndex: high, swap: [i + 1, high] };

  return i + 1; // Return the index to the parent generator
}
```

#### Step 4: Immutable Arrays

Always remember: `yield { arr: arr }` is bad. `yield { arr: [...arr] }` is good.
React only re-renders if the array reference changes. Since sorting algorithms mutate arrays in place, you must yield a **copy** so React detects the change.

### Summary

1.  **Generator (`function*`)**: Defines the logic and pauses at visual steps.
2.  **Yield Object**: Contains the Snapshot (Array data + Highlights).
3.  **React Ref**: Stores the Generator Iterator so it doesn't reset on render.
4.  **`yield*`**: The secret key for visualizing recursive algorithms like Merge Sort and Quick Sort.

---
