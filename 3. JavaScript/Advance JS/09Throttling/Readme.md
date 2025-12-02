# 1\. What is Throttling?

**Throttling** is a technique that ensures a function is called at most once in a specified time period.

In simple terms: It forces a function to run at a steady speed, no matter how fast the user triggers it.

**The Analogy:**

- **Debounce (The Elevator):** Waits for everyone to get in before closing the doors. If people keep coming, the doors never close.
- **Throttle (The Machine Gun):** When you hold the trigger down, the gun fires bullets at a steady rate (e.g., 5 rounds per second). It doesn't matter how hard you press the trigger; the rate is fixed.

### 2\. When to use it?

Throttling is used when you need **intermediate updates** while the user is still doing something.

- **Infinite Scrolling:** You need to check if the user is near the bottom of the page _while_ they are scrolling, not just when they stop.
- **Window Resize (Layouts):** If you are rearranging a grid, you want the grid to adjust _as_ the user drags the window, but not every single pixel.
- **Gaming (Shooting):** In a multiplayer game, a user can spam the "Fire" button, but the server only accepts 1 shot every 200ms.
- **Mouse Movement:** Tracking mouse coordinates for animations (e.g., a custom cursor).

### 3\. Syntax: Vanilla JavaScript

In Vanilla JS, throttling usually involves a "flag" variable to check if the function is currently in a "cooldown" period.

```javascript
// 1. The Throttle Utility Function
function throttle(func, interval) {
  let shouldWait = false; // The "cooldown" flag

  return function (...args) {
    // If we are waiting, do nothing and return immediately
    if (shouldWait) return;

    // 1. Execute the function immediately
    func.apply(this, args);

    // 2. Turn on the "cooldown" mode
    shouldWait = true;

    // 3. Reset the flag after the interval passes
    setTimeout(() => {
      shouldWait = false;
    }, interval);
  };
}

// --- Usage Example ---
const handleScroll = () => {
  console.log("User is scrolling... checking position");
};

// Only allow this function to run once every 1000ms (1 second)
const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);
```

### 4\. Syntax: React (`useThrottle` Hook)

Just like Debouncing, we can create a custom hook. However, `useThrottle` works slightly differently. We want the value to update immediately the first time, and then limit updates afterwards.

Save this as `src/hooks/useThrottle.js`.

```javascript
import { useState, useEffect, useRef } from "react";

export const useThrottle = (value, interval = 500) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    // Calculate how much time has passed since the last update
    const now = Date.now();
    const timeSinceLast = now - lastExecuted.current;

    if (timeSinceLast >= interval) {
      // If enough time has passed, update immediately
      setThrottledValue(value);
      lastExecuted.current = now;
    } else {
      // If we are "too fast", schedule the update for later
      // This ensures we don't miss the FINAL value
      const timerId = setTimeout(() => {
        setThrottledValue(value);
        lastExecuted.current = Date.now();
      }, interval - timeSinceLast);

      return () => clearTimeout(timerId);
    }
  }, [value, interval]);

  return throttledValue;
};
```

**Usage Example (Window Resize):**

```jsx
import React, { useState, useEffect } from "react";
import { useThrottle } from "./hooks/useThrottle";

const ResizeLogger = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Throttle the width: Update only once every 1 second
  const throttledWidth = useThrottle(windowWidth, 1000);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2>Real Width: {windowWidth}</h2>
      <h2>Throttled Update: {throttledWidth}</h2>
      <p>(Resize the browser quickly to see the difference)</p>
    </div>
  );
};

export default ResizeLogger;
```

### 5\. Debounce vs. Throttle: The Cheat Sheet

| Feature       | Debounce                                                            | Throttle                                         |
| :------------ | :------------------------------------------------------------------ | :----------------------------------------------- |
| **Logic**     | "Wait for the user to **stop**."                                    | "Execute at a **steady rhythm**."                |
| **Execution** | Runs only **once** (at the end).                                    | Runs **regularly** (e.g., every 200ms).          |
| **Best For**  | Search bars, Form validation, Auto-save.                            | Scroll events, Resize events, Animations, Games. |
| **User Feel** | Can feel "laggy" if used on scroll (UI freezes until scroll stops). | Feels responsive but controlled.                 |

---

# 2. How to implement an Infinite Scroll component using this useThrottle hook

Here is the modern, industry-standard way to implement **Infinite Scroll**.

While you _can_ use throttling on a scroll event, the best practice today is to use the **Intersection Observer API**.

### Why Intersection Observer?

- **Old Way (Scroll Event + Throttle):** The browser has to run calculations on _every single pixel_ you scroll to check if you are at the bottom. This blocks the main thread.
- **New Way (Intersection Observer):** We place a tiny, invisible element (called a **Sentinel**) at the bottom of the list. The browser simply notifies us, "Hey, that invisible box just appeared on screen\!" Efficient and zero math required.

### 1\. The Custom Hook (`useIntersectionObserver.js`)

This hook handles the logic of "watching" an element.

```javascript
import { useEffect, useState, useRef } from "react";

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // entry.isIntersecting is TRUE when element is visible
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
};
```

### 2\. The Infinite Scroll Component

We will fetch data from a dummy API. Notice how we use a `page` state to keep track of where we are.

```jsx
import React, { useState, useEffect, useCallback } from "react";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // 1. Use our custom hook. 'ref' goes on the sentinel.
  // 'isVisible' tells us if the user reached the bottom.
  const [sentinelRef, isVisible] = useIntersectionObserver({
    root: null, // null means viewport
    rootMargin: "0px",
    threshold: 1.0, // Trigger when 100% of the sentinel is visible
  });

  // 2. Fetch Data Function
  // Wrapped in useCallback to prevent re-creation
  const fetchPosts = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      console.log(`Fetching page ${page}...`);
      // Simulate API delay
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      const data = await response.json();

      if (data.length === 0) {
        setHasMore(false); // No more data to load
      } else {
        setItems((prev) => [...prev, ...data]); // Append new items
        setPage((prev) => prev + 1); // Prepare next page
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [page, isLoading, hasMore]);

  // 3. Trigger fetch when Sentinel becomes visible
  useEffect(() => {
    if (isVisible) {
      fetchPosts();
    }
  }, [isVisible, fetchPosts]);

  return (
    <div
      style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}
    >
      <h1>Infinite Scroll Feed</h1>

      {/* The List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              marginBottom: "10px",
              borderRadius: "8px",
              background: "#f9f9f9",
            }}
          >
            <strong>
              {item.id}. {item.title}
            </strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>

      {/* Loading Indicator */}
      {isLoading && (
        <p style={{ textAlign: "center" }}>Loading more posts...</p>
      )}

      {/* End of List Message */}
      {!hasMore && (
        <p style={{ textAlign: "center" }}>You have reached the end!</p>
      )}

      {/* THE SENTINEL: Invisible element at the bottom */}
      {/* We only render it if we have more data to load */}
      {hasMore && (
        <div
          ref={sentinelRef}
          style={{ height: "20px", background: "transparent" }}
        />
      )}
    </div>
  );
};

export default InfiniteScrollList;
```

### Key Logic Breakdown

1.  **The `isLoading` Flag:** This is crucial. If the user scrolls fast, the intersection observer might fire multiple times. This flag ensures we don't send a request for Page 2 if we are _already_ fetching Page 2.
2.  **The Sentinel (`<div ref={sentinelRef} />`):** This empty div sits at the very bottom of the list.
3.  **The Trigger:** As soon as the user scrolls down enough to see that transparent div, `isVisible` turns `true`, which fires `fetchPosts()`.
4.  **Appending Data:** We use `setItems((prev) => [...prev, ...data])` to keep the old items and add the new ones to the end.

---
