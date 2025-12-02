# 1. What is Debouncing?

**Debouncing** is a programming practice used to ensure that time-consuming tasks do not fire so often that they stall the performance of the web page.

In simple terms: It forces a function to wait a certain amount of time before running. If the event is triggered again before that time is up, the timer resets.

**The Analogy:**
Imagine you are in an elevator. The doors begin to close. Suddenly, someone runs up and presses the button. The elevator cancels the "close door" action and resets the timer. The doors will only actually close once no one has pressed the button for a specific duration (e.g., 5 seconds).

### 2\. Why do we use it?

- **Performance Optimization:** It reduces the number of high-cost calculations or DOM updates.
- **Network Efficiency:** It prevents your application from spamming your backend server with API calls (e.g., sending a request for every single keystroke in a search bar).
- **UI Smoothness:** It prevents UI stuttering caused by rapid event firing (like window resizing or scrolling).

### 3\. When to use it?

- **Search Bars:** Wait until the user stops typing for 500ms before sending an API request.
- **Window Resizing:** Wait until the user finishes resizing the browser window to recalculate layouts.
- **Auto-Save:** Wait until the user pauses typing in a document before saving the draft to the database.
- **Button Clicks:** Prevent accidental double-clicks from submitting a form twice.

### 4\. Syntax: Vanilla JavaScript

In Vanilla JS, debouncing relies heavily on **Closures** and `setTimeout`.

**The Implementation:**

```javascript
// 1. The Debounce Utility Function
function debounce(func, delay) {
  let timeoutId;

  // Return a closure
  return function (...args) {
    // If a timer is already running, clear it (reset the clock)
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timer
    timeoutId = setTimeout(() => {
      // Apply the function with the context and arguments
      func.apply(this, args);
    }, delay);
  };
}

// --- Usage Example ---

// The expensive operation (e.g., API Call)
function searchData(query) {
  console.log(`Fetching API data for: ${query}`);
}

// Create a debounced version of the function
// Wait 500ms after the last keystroke to run
const processChange = debounce(searchData, 500);

// Attach to Input
const input = document.getElementById("search-input");
input.addEventListener("input", (e) => {
  processChange(e.target.value);
});
```

### 5\. Syntax: React

Debouncing in React is trickier because **functional components re-render**. If you define a debounce function normally inside a component, it gets recreated on every render, creating a new timer every time (effectively breaking the debounce).

You must use the `useCallback` hook to memorize the function across renders.

**The Implementation:**

```jsx
import React, { useState, useCallback } from "react";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Define the actual logic you want to run
  const performSearch = (query) => {
    console.log(`API Call made for: ${query}`);
    // formatting, api calls, setState, etc.
  };

  // 2. Create the debounce utility (or import from lodash)
  // Note: We wrap the debounce creation in useCallback
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // 3. Memoize the debounced callback
  // The empty dependency array [] ensures this function is created only once.
  const optimizedDebounce = useCallback(debounce(performSearch, 500), []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Updates UI immediately (controlled input)
    optimizedDebounce(value); // Delays the heavy logic
  };

  return (
    <div>
      <h3>React Debounce Example</h3>
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <p>Typed: {searchTerm}</p>
    </div>
  );
};

export default SearchComponent;
```

### Key Difference Summary

| Feature            | Vanilla JS                                         | React                                                                             |
| :----------------- | :------------------------------------------------- | :-------------------------------------------------------------------------------- |
| **State Storage**  | Variables inside a closure (`let timeoutId`).      | Variables inside closure, but function reference preserved via `useCallback`.     |
| **Persistence**    | Function persists as long as the page/script runs. | Function reference is lost on re-render unless memoized.                          |
| **Common Pitfall** | Forgetting to clear `timeoutId`.                   | Forgetting `useCallback`, causing the function to fire on every keystroke anyway. |

---

# How to write a custom hook for Debouncing so we can reuse it?

Here is a production-ready **`useDebounce`** hook. This is the modern "React standard" approach, which debounces a **value** (state) rather than a function.

This is cleaner because it allows you to use `useEffect` naturally to listen for changes.

### 1\. Create the Hook (`useDebounce.js`)

Save this in a folder like `src/hooks/useDebounce.js`.

```javascript
import { useState, useEffect } from "react";

/**
 * Custom Hook: useDebounce
 * @param {any} value - The value you want to debounce (usually a search string)
 * @param {number} delay - The delay in milliseconds (default 500ms)
 * @returns {any} - The debounced value
 */
export const useDebounce = (value, delay = 500) => {
  // 1. Store the debounced value in state
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 2. Update the debounced value after the delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 3. Cleanup: If 'value' changes (user types again) BEFORE the delay finishes,
    // clear the previous timeout. This is the magic that cancels the update.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-run if value or delay changes

  return debouncedValue;
};
```

### 2\. How to Reuse it (Implementation)

The beauty of this hook is that it separates your **UI input** from your **API logic**.

**Scenario:** You want to search for users, but only trigger the API call when the user stops typing for 500ms.

```jsx
import React, { useState, useEffect } from "react";
// Import your custom hook
import { useDebounce } from "./hooks/useDebounce";

const SearchUsers = () => {
  // 1. Immediate State: Updates instantly for the input field UI
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Debounced State: Only updates 500ms AFTER the user stops typing
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // 3. The Effect: Listens ONLY to the debounced value
  useEffect(() => {
    if (debouncedSearchTerm) {
      // Logic here runs only when debouncing is complete
      console.log(`API CALL: Searching for "${debouncedSearchTerm}"...`);
      // performAPICall(debouncedSearchTerm);
    } else {
      console.log("Search cleared");
    }
  }, [debouncedSearchTerm]); // Dependency array ensures this only runs on the delayed value

  return (
    <div style={{ padding: "20px" }}>
      <h3>User Search</h3>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        // Update immediate state on every keystroke
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Real-time Input:</strong> {searchTerm}
        </p>
        <p>
          <strong>Sent to API:</strong> {debouncedSearchTerm}
        </p>
      </div>
    </div>
  );
};

export default SearchUsers;
```

### Why is this method better?

1.  **Reusability:** You can use this hook for a Search bar, a Window Resize listener, or a Form Auto-save feature. You just pass a different variable into it.
2.  **Separation of Concerns:**
    - `searchTerm` handles the **UI** (what the user sees typing).
    - `debouncedSearchTerm` handles the **Logic** (what the server sees).
3.  **No Stale Closures:** Unlike the `useCallback` method, you don't have to worry about "stale" variables or complex dependency arrays. It leverages React's native `useEffect` lifecycle perfectly.

---

# How to handle Race Condition (e.g. what happens if the user searches for "App", then "Apple", but the "App" response arrives after the "Apple" response?)?

This is a critical concept for any developer building search features.

### The Problem: What is a Race Condition?

Imagine a user types "React" into your search bar.

1.  They type **"Re"**. The app requests data for "Re". This request is **slow** (takes 3 seconds).
2.  They finish typing **"React"**. The app requests data for "React". This request is **fast** (takes 0.5 seconds).
3.  The "React" results arrive and are displayed. **(Correct)**
4.  Suddenly, the "Re" results finally arrive. The code blindly updates the UI. **(Wrong)**

**Result:** The user sees "React" in the box, but the list below shows results for "Re".

### The Solution: The `AbortController`

In React `useEffect`, we can use the browser's native **`AbortController`** to cancel previous requests that are still pending when a new request starts.

Here is the complete implementation using your `useDebounce` hook from the previous step.

```jsx
import React, { useState, useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";

const SafeSearch = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  // Use our custom hook from before
  const debouncedTerm = useDebounce(input, 500);

  useEffect(() => {
    // 1. If search is empty, clear results and return
    if (!debouncedTerm) {
      setResults([]);
      return;
    }

    // 2. Create the AbortController
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        console.log(`Fetching: ${debouncedTerm}`);

        // 3. Pass the 'signal' to fetch
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${debouncedTerm}`,
          { signal }
        );

        const data = await response.json();

        // 4. Update State (only if not aborted)
        setResults(data.users);
      } catch (error) {
        // 5. Handle Abort Errors gracefully
        if (error.name === "AbortError") {
          console.log("Request cancelled: ", debouncedTerm);
        } else {
          console.error("Real Error:", error);
        }
      }
    };

    fetchData();

    // 6. CLEANUP FUNCTION: This runs when debouncedTerm changes (before the new effect runs)
    // or when the component unmounts.
    return () => {
      controller.abort();
    };
  }, [debouncedTerm]); // Runs whenever the debounced term changes

  return (
    <div style={{ padding: "20px" }}>
      <h3>Race-Condition Free Search</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search users..."
      />
      <ul>
        {results.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SafeSearch;
```

### Code Breakdown

1.  **`new AbortController()`**: This creates a controller object that allows you to abort DOM requests.
2.  **`{ signal }`**: When we pass this into `fetch`, we are linking the network request to our controller.
3.  **The Cleanup (`return () => controller.abort()`)**: This is the magic.
    - When `debouncedTerm` changes from "Re" to "React", React _first_ runs the cleanup function of the "Re" effect.
    - `controller.abort()` sends a signal to kill the "Re" fetch request.
    - Then, the new effect for "React" starts.
4.  **`error.name === "AbortError"`**: When a fetch is aborted, it throws an error. We check if the error is "AbortError" so we can ignore it (because it was intentional) rather than showing an error message to the user.

### Why this is superior?

- **Correct Data:** It guarantees the UI always matches the current input.
- **Saves Bandwidth:** If the browser is smart enough, it stops downloading the data for the cancelled request, saving data for mobile users.

---
