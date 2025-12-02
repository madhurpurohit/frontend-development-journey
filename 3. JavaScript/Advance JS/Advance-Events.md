# What are advanced events excluded mouse and keyboard events?

Since you have mastered the basics (mouse and keyboard inputs), diving into these advanced events will help you build more professional, app-like experiences (e.g., stopping users from losing unsaved data, custom right-click menus, or handling network loss).

Here are the advanced event listeners you should know, categorized by their utility.

## 1\. Window & Document Events

These events control the browser window itself rather than a specific HTML element.

#### `resize`

Fires when the document view (window) has been resized.

- **Use Case:** Creating responsive canvas elements (which don't auto-resize via CSS), or rearranging complex layouts via JavaScript when mobile orientation changes.
- **Warning:** This fires rapidly. Always use **Debouncing** with this event (which you recently learned about\!).

<!-- end list -->

```javascript
window.addEventListener("resize", () => {
  console.log(
    `New width: ${window.innerWidth}, New height: ${window.innerHeight}`
  );
  // Logic to re-render canvas or chart
});
```

#### `scroll`

Fires when the document view or an element has been scrolled.

- **Use Case:** Creating "Infinite Scroll" (loading more data when reaching the bottom), "Back to Top" buttons, or progress bars that show how much of the article is read.

<!-- end list -->

```javascript
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    document.getElementById("nav-bar").classList.add("sticky");
  }
});
```

#### `beforeunload`

Fires just before the window, document, and its resources are about to be unloaded (when a user tries to close the tab).

- **Use Case:** Preventing data loss. If a user has filled out a long form but hasn't clicked save, you show a warning.

<!-- end list -->

```javascript
window.addEventListener("beforeunload", (event) => {
  // Cancel the event and show a generic warning dialog
  event.preventDefault();
  event.returnValue = ""; // Legacy requirement for Chrome
});
```

---

## 2\. User Interface & Interaction

Events that enhance how the user interacts with your specific UI elements.

#### `contextmenu`

Fires when the user attempts to open a context menu (usually by right-clicking).

- **Use Case:** Building a custom right-click menu (like in Google Drive or VS Code web) instead of the default browser menu.

<!-- end list -->

```javascript
document.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // STOPS the default browser right-click menu
  console.log("Custom menu triggered at:", e.pageX, e.pageY);
  // Code to show your custom <div> menu at these coordinates
});
```

#### `focus` and `blur`

- **`focus`:** When an element (usually input) is selected.
- **`blur`:** When an element loses focus (user clicks away).
- **Use Case:** Real-time form validation. You check if the username is taken exactly when the user clicks _out_ of the input field (`blur`), rather than while they are typing.

<!-- end list -->

```javascript
const input = document.querySelector("input");

input.addEventListener("blur", (e) => {
  if (e.target.value.length < 5) {
    console.log("Error: Password too short!");
  }
});
```

---

## 3\. Clipboard Events

Essential for text editors or security-sensitive apps.

#### `copy`, `cut`, `paste`

Fires when the user initiates a clipboard action.

- **Use Case (Security):** Preventing pasting into a "Confirm Email" field to force users to type it manually.
- **Use Case (Feature):** Formatting text when pasting (e.g., stripping HTML tags when pasting rich text into a clean comment box).

<!-- end list -->

```javascript
const passwordField = document.querySelector("#pass-confirm");

passwordField.addEventListener("paste", (e) => {
  e.preventDefault(); // Blocks the paste action
  alert("Please type your password manually.");
});
```

---

## 4\. Application State (Modern Web)

These are crucial for Single Page Applications (SPAs).

#### `visibilitychange`

Fires when the content of the tab has become visible or hidden (e.g., user switches to a different browser tab).

- **Use Case:** Pausing a video or stopping a resource-heavy animation when the user is not looking at your tab to save their battery.

<!-- end list -->

```javascript
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("User switched tabs - Pause video");
    videoElement.pause();
  } else {
    console.log("User is back - Resume video");
    videoElement.play();
  }
});
```

#### `online` and `offline`

Fires when the browser loses or regains network connection.

- **Use Case:** Showing a toast notification like "You are offline. Changes will be saved locally" (like Notion or Docs).

<!-- end list -->

```javascript
window.addEventListener("offline", () => {
  document.body.style.filter = "grayscale(1)";
  alert("Connection Lost!");
});
```

---

## 5\. Drag and Drop API

Useful for Kanban boards (Trello clones) or file uploaders.

- `dragstart`: User starts dragging an element.
- `dragover`: A dragged element is over a valid drop target (You **must** `preventDefault` here to allow dropping).
- `drop`: The dragged element is dropped.

<!-- end list -->

```javascript
const dropZone = document.getElementById("drop-zone");

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault(); // Necessary to allow dropping
  dropZone.style.background = "lightgray";
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  console.log("User dropped file:", file.name);
});
```

---

Yes, there are actually hundreds of events in the browser API\! While you don't need to memorize them all, there is a **"Tier 2"** list that distinguishes a junior developer from a senior one.

Here are the remaining high-utility events that solve very specific problems.

---

## 6\. The "Real-Time" Form Events

You know `change`, but `change` is "lazy"—it only fires when you click away (blur). Modern apps need instant feedback.

#### `input`

Fires **immediately** whenever the value is changed (typing, deleting, pasting).

- **Use Case:** A "Live Search" bar (like on your **AlgoSurge** project). You want to filter the problem list _as_ the user types, not after they click away.
- **Vs `change`:** `change` waits for the user to leave the field; `input` is instant.

<!-- end list -->

```javascript
const searchBar = document.getElementById("search");

searchBar.addEventListener("input", (e) => {
  console.log("Searching for:", e.target.value);
  // Filter your list instantly here
});
```

#### `submit`

Fires when a form is submitted.

- **Use Case:** **Crucial for Single Page Applications (React/Next.js).** You listen to this on the `<form>` element (not the button) to prevent the browser from refreshing the page.

<!-- end list -->

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // STOPS the page reload
  // Now handle the API call manually
  loginUser(formData);
});
```

#### `invalid`

Fires when an input fails HTML5 validation (like `required` or `type="email"`).

- **Use Case:** Custom error styling. Instead of the browser's default ugly bubble, you can show a nice red border and a custom "Please enter a valid email" message.

---

## 7\. The "CSS Bridge" Events

Sometimes you need JavaScript to wait for CSS to finish doing its job.

#### `transitionend` & `animationend`

Fires precisely when a CSS transition or animation completes.

- **Use Case:** You have a sidebar that slides out. You want to remove it from the DOM ( `display: none` or `.remove()`) only **after** the slide-out animation finishes, so it doesn't just pop out of existence instantly.

<!-- end list -->

```javascript
const sidebar = document.querySelector(".sidebar");

sidebar.addEventListener("transitionend", () => {
  console.log("Animation done. Safe to remove element now.");
  sidebar.style.display = "none";
});
```

---

## 8\. Page Lifecycle (The Interview Favorite)

You know `beforeunload`, but how the page _starts_ is equally important.

#### `DOMContentLoaded`

Fires when the HTML is fully parsed, **but images and CSS might still be loading**.

- **Use Case:** Initializing your JavaScript logic. This is usually the safest place to start your scripts to ensure elements actually exist.

#### `load`

Fires when the **entire** page is ready (including all heavy images, styles, scripts).

- **Use Case:** Removing a "Loading Spinner" overlay. You don't want to hide the spinner until the user can actually see the heavy images.

<!-- end list -->

```javascript
// HTML is ready (Fast)
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready - setup event listeners");
});

// Everything is ready (Slow)
window.addEventListener("load", () => {
  console.log("Images loaded - Hide loading spinner");
});
```

---

## 9\. Pointer Events ( The "Modern Standard")

In the past, we had Mouse events (`mousedown`) and Touch events (`touchstart`). This was a pain to write code for both desktop and mobile.

#### `pointerdown`, `pointermove`, `pointerup`

These unify mouse, touch, and stylus (Apple Pencil) into one API.

- **Use Case:** Building a drawing app or a custom slider. If you use `mousedown`, it won't work on iPhone. If you use `pointerdown`, it works on everything.

<!-- end list -->

```javascript
const canvas = document.querySelector("canvas");

// Works for Mouse, Finger, and Stylus
canvas.addEventListener("pointermove", (e) => {
  // Draw line at e.clientX, e.clientY
});
```

---

## 10\. Media Events (Video/Audio)

If you are building a custom video player (like YouTube's player), you can't use the default browser controls.

- `play` / `pause`: Fires when the video state changes.
- `timeupdate`: Fires continuously as the video plays (used to update the progress bar slider).
- `ended`: Fires when the video finishes (used to suggest the "Next Video").

<!-- end list -->

```javascript
video.addEventListener("ended", () => {
  console.log("Video finished. Autoplaying next...");
  playNextVideo();
});
```

---

## 11. Media Events: The Complete Lifecycle

I will describe these events as if we are loading a video on **YouTube**.

#### 1\. Loading & Buffering Events (The "Start" Phase)

These fire as the browser tries to fetch the video data.

- **`loadstart`**: Fires immediately when the browser begins looking for the media.
  - _Use:_ Show a "Loading..." skeleton UI.
- **`loadedmetadata`**: Fires when the browser knows the **duration** and dimensions (height/width) of the video, but not the actual video data yet.
  - _Use:_ Display the total time (e.g., "0:00 / **14:30**") in the corner.
- **`loadeddata`**: Fires when the first frame is downloaded and ready to render.
- **`progress`**: Fires repeatedly while the browser is downloading data (buffering).
  - _Use:_ Showing the "gray bar" (buffered amount) behind the red progress bar.
- **`canplay`**: Fires when there is enough data to start playing, but it might stop later to buffer.
- **`canplaythrough`**: Fires when the browser estimates it can play the _entire_ video without stopping for buffering.
  - _Use:_ This is the safest moment to auto-play a video.

#### 2\. Playback State Events

These fire when the user (or script) changes the state.

- **`play`**: Fires when the video is no longer paused (e.g., user hits the Play button).
- **`pause`**: Fires when the video is paused.
  - _Use:_ Toggle the Play/Pause icon in your UI.
- **`playing`**: Fires when the video actually starts moving (after buffering or pausing).
- **`waiting`**: Fires when playback stops because it ran out of data (buffering).
  - _Use:_ **Show the "Spinning Circle" loader** in the middle of the screen.
- **`ended`**: Fires when the video reaches the end.
  - _Use:_ Show the "Up Next" screen or reset the Replay button.

#### 3\. Time & Interaction Events (The "Constant" Events)

- **`timeupdate`**: Fires continuously as the video plays (usually 4 times per second).
  - _Use:_ **The most critical event.** You use this to move the red slider thumb along the progress bar.
- **`seeking`**: Fires when the user starts dragging the slider (scrubbing).
- **`seeked`**: Fires when the user finishes dragging the slider to a new timestamp.
- **`ratechange`**: Fires when playback speed changes (e.g., user selects "2x Speed").
- **`volumechange`**: Fires when volume is changed or the video is muted.

### Example: Building a "YouTube-like" Player

Here is how you would combine these events to build a real-world player.

```javascript
const video = document.querySelector("video");
const playBtn = document.getElementById("play-btn");
const progressBar = document.getElementById("progress-bar");
const spinner = document.getElementById("loading-spinner");

// 1. Handle Play/Pause UI
video.addEventListener("play", () => {
  playBtn.innerText = "Pause";
});

video.addEventListener("pause", () => {
  playBtn.innerText = "Play";
});

// 2. The "Buffering" Spinner
video.addEventListener("waiting", () => {
  spinner.style.display = "block"; // Show spinner when stuck
});

video.addEventListener("playing", () => {
  spinner.style.display = "none"; // Hide spinner when moving
});

// 3. Update the Progress Bar (The most important part)
video.addEventListener("timeupdate", () => {
  // Calculate percentage: (Current Time / Total Duration) * 100
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percentage}%`;
});

// 4. Setup Duration Label
video.addEventListener("loadedmetadata", () => {
  document.getElementById("total-time").innerText = formatTime(video.duration);
});
```

---

## 12. Are there any other events left?

You have now covered 95% of the events used in daily web development. The remaining 5% are very specialized "Final Boss" events.

#### 1\. The "History" Event (SPA Routing)

- **`popstate`**: Fires when the active history entry changes (e.g., user clicks the browser's "Back" button).
- **Use Case:** This is the magic behind **React Router** or **Next.js**. It allows the URL to change and the content to update _without_ the page refreshing.

<!-- end list -->

```javascript
window.addEventListener("popstate", (event) => {
  console.log(
    "User clicked back/forward button. Render the new component now."
  );
});
```

#### 2\. The "Tab Sync" Event

- **`storage`**: Fires when `localStorage` is updated **in another tab**.
- **Use Case:** You have an e-commerce site open in two tabs. You add an item to the cart in Tab A. Tab B listens for the `storage` event and instantly updates its cart count without needing a refresh.

<!-- end list -->

```javascript
// This only fires if another tab changes storage
window.addEventListener("storage", (e) => {
  if (e.key === "cartItemCount") {
    document.getElementById("cart-badge").innerText = e.newValue;
  }
});
```

#### 3\. Focus Bubbling (Advanced Accessibility)

- **`focusin` / `focusout`**: These are exactly like `focus` and `blur`, but they **bubble**.
- **Use Case:** You want to highlight a parent `<div>` whenever _any_ input inside it is focused. Standard `focus` events don't bubble up, so you can't listen on the parent. `focusin` solves this.

#### 4\. The "Print" Events

- **`beforeprint` / `afterprint`**: Fires when the user presses Ctrl+P.
- **Use Case:** You can use JS to quickly hide sidebars, ads, or navigation menus right before the print dialog opens, and show them again after. (Though usually, we use CSS `@media print` for this).

#### 5\. Detail Toggle

- **`toggle`**: Fires when a `<details>` element opens or closes.
- **Use Case:** Lazy loading content inside an FAQ accordion only when the user actually opens it.

<!-- end list -->

```javascript
const details = document.querySelector("details");

details.addEventListener("toggle", (event) => {
  if (details.open) {
    console.log("User opened the FAQ. Fetch answer from API now...");
  }
});
```

---

### Summary Checklist

You now possess the complete event listener arsenal:

| Event                  | Category  | Why it's useful                                  |
| :--------------------- | :-------- | :----------------------------------------------- |
| **`resize`**           | Window    | Responsive canvas/charts.                        |
| **`scroll`**           | Window    | Sticky navbars, Infinite scrolling.              |
| **`contextmenu`**      | UI        | Custom right-click menus.                        |
| **`blur`**             | Form      | Validation when user leaves a field.             |
| **`paste`**            | Clipboard | Sanitizing copied text before insertion.         |
| **`visibilitychange`** | System    | Pausing media when tab is inactive.              |
| **`offline`**          | Network   | Detecting internet loss.                         |
| **`input`**            | Form      | Instant search filtering (better than `change`). |
| **`submit`**           | Form      | Preventing page reloads in SPAs.                 |
| **`transitionend`**    | CSS       | Waiting for animations before deleting elements. |
| **`DOMContentLoaded`** | Load      | Safe setup of JS (The standard entry point).     |
| **`pointerdown`**      | Mobile    | One event for both Mouse and Touch.              |

1.  **Basic:** Mouse, Keyboard (`click`, `keyup`).
2.  **Window:** `resize`, `scroll` (Performance heavy).
3.  **Form:** `input` (instant), `submit` (prevent reload), `blur` (validation).
4.  **Media:** `timeupdate`, `loadedmetadata`, `waiting` (Video players).
5.  **Advanced:** `popstate` (Routing), `storage` (Multi-tab sync), `visibilitychange`.

---
