# Tailwind CSS Guide

## Table Of Content

1. [What is Theming](#1-what-is-theming)
2. [Difference Between `@theme` and `@theme` inline](#2-difference-between-theme--theme-inline)
3. [What is Responsive Design & Tailwind's default breakpoints](#3-what-is-responsive-design--tailwinds-default-breakpoints)
4. [How to write all pseudo-class or pseudo-element](#4-how-to-write-all-pseudo-class-or-pseudo-element)
5. [Advance pseudo-class or pseudo-elements](#5-advance-pseudo-class-or-pseudo-elements)
6. [What is Functions & Directives (@apply, @layer)](#6-what-is-functions--directives-apply-layer)
7. [What is @custom-variants, why we need it?](#7-what-is-custom-variants-why-we-need-it)
8. [What is whitespace-nowrap, pre-wrap, pre-line?](#8-what-is-whitespace-nowrap-pre-wrap-pre-line)

---

## 1. What is Theming?

Imagine We are building a house. Before We start laying bricks, We decide on a "Style Guide":

- What exact shade of blue will the walls be?
- Which font style will the house numbers use?
- How rounded should the corners of the windows be?

In Tailwind CSS, **Theming** is exactly that style guide. It is a central place where We define Our project's unique look (colors, fonts, spacing, border radius).

Instead of repeating a specific color code like `#ff5733` distinctively in 50 different files, We give it a name (like "brand-orange") in our **Theme**. If we ever want to change that color, we change it in one place (the theme), and it updates everywhere in our project.

**The `@theme` Directive**
The `@theme` block is a special area in our CSS file where we tell Tailwind: _"Here are my custom rules. Please add these to your default system."_

### <u>Syntax Values for `@theme`</u>:-

Below is a table containing the most common variables We can define inside the `@theme` block.

| Theme Category    | Variable Syntax (Inside `@theme`) | Description                                                           | Example Usage in HTML       |
| :---------------- | :-------------------------------- | :-------------------------------------------------------------------- | :-------------------------- |
| **Colors**        | `--color-*`                       | Defines custom colors for backgrounds, text, and borders.             | `bg-brand`, `text-brand`    |
| **Fonts**         | `--font-*`                        | Defines custom font families.                                         | `font-display`, `font-body` |
| **Spacing**       | `--spacing-*`                     | Defines custom spacing for margins, padding, width, and height.       | `p-128`, `m-128`, `w-128`   |
| **Border Radius** | `--radius-*`                      | Defines how rounded the corners of elements should be.                | `rounded-box`               |
| **Breakpoints**   | `--breakpoint-*`                  | Defines screen sizes for responsive design (mobile, tablet, desktop). | `xs:flex`, `3xl:block`      |
| **Shadows**       | `--shadow-*`                      | Defines custom box shadows (depth effects).                           | `shadow-card`               |
| **Animations**    | `--animate-*`                     | Defines custom CSS animations.                                        | `animate-wiggle`            |
| **Text Size**     | `--text-*`                        | Defines custom font sizes (often includes line-height).               | `text-giant`                |

### <u>Practical Example:</u>

Here is how we write this in our code. This shows how to set up the theme and then how to use it.

#### Our CSS File (Input)

We define our variables inside the `@theme` block.

```css
@import "tailwindcss";

@theme {
  /* 1. Define a custom brand color (Deep Blue) */
  --color-neon-blue: #3b82f6;

  /* 2. Define a custom font family */
  --font-heading: "Poppins", sans-serif;

  /* 3. Define a custom extra-large spacing value (e.g., for a big hero section) */
  --spacing-128: 32rem;

  /* 4. Define a custom border radius */
  --radius-card: 1.5rem;
}
```

#### Our HTML File (Usage)

Once defined above, Tailwind automatically creates utility classes for us.

```html
<div class="bg-neon-blue font-heading rounded-card p-128">
  <h1>Welcome to My Website</h1>
  <p>This box uses my custom theme!</p>
</div>
```

### Why is this helpful?

If we don't like blue color & we want to change it in red color, we do not need to find every `div` in our HTML. We simply go to our CSS file, change `--color-neon-blue` to a red hex code, and the whole website updates instantly.

---

## 2. Difference between @theme{} & @theme inline{}?

This is a crucial concept in the new Tailwind CSS v4. Let’s break this down so we can understand exactly how to manage our project's design system.

### **The Core Difference**

To understand this, we need to look at how we define our "ingredients" (colors, fonts, spacing).

1.  **`@theme` (The Creator)**
    When we use the standard `@theme`, we are telling Tailwind: _"Here is a value. Please create a CSS variable for it AND generate the utility classes."_
    It handles everything for us. It registers the variable globally.

2.  **`@theme inline` (The Connector)**
    When we use `@theme inline`, we are effectively saying: _"I have some variables defined elsewhere (like in the root of my CSS). I just want to map utility classes to them without redefining the variables globally."_
    This is often used to prevent conflicts when our variables rely on other variables (circular dependencies).

### **Comparison Table**

| Feature              | `@theme` (Standard)                                                           | `@theme inline` (Advanced)                                                  |
| :------------------- | :---------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| **What it does**     | It defines the value, creates the global CSS variable, and creates the class. | It simply maps a class name to a value (usually an existing variable).      |
| **How we see it**    | The "Full Service" option.                                                    | The "Reference" option.                                                     |
| **Primary Use Case** | When we are building our own design system from scratch.                      | When we are using UI libraries (like Shadcn UI) or complex variable setups. |

### **Practical Examples**

Let's look at the code to see the difference in action.

#### 1. Using `@theme` (Our Default Choice)

This is what we will use 95% of the time. We define a color, and Tailwind does the rest.

```css
@import "tailwindcss";

@theme {
  /* Tailwind automatically does two things here:
     1. Defines --color-brand: #ff5733 in the root.
     2. Enables classes like bg-brand, text-brand.
  */
  --color-brand: #ff5733;
}
```

#### 2. Using `@theme inline` (The Integration Choice)

We usually use this when we have variables defined in a standard CSS `:root` block (common in libraries like Shadcn UI) and we want to connect Tailwind to them without issues.

```css
@import "tailwindcss";

/* We define our variables manually in standard CSS */
:root {
  --sidebar-bg: #0f172a;
}

/* Tailwind will NOT create a new variable.
We use 'inline' to tell Tailwind: "Just look at this existing variable" 
It just creates 'bg-sidebar' which points to your EXISTING '--sidebar-bg'.*/
@theme inline {
  --color-sidebar: var(--sidebar-bg);
}
```

If we tried to do the above inside a normal `@theme` block, sometimes Tailwind might get confused because it tries to manage the variable order itself. `inline` tells Tailwind to simply use what we give it without over-processing.

### **When Should We Use Which?**

- **We use `@theme` when:** We are starting a new project and simply want to add our own custom colors, fonts, or spacing. It is the easiest and cleanest way.
- **We use `@theme inline` when:** We are pasting code from a component library (like Shadcn UI) that instructs us to do so. These libraries often define their own variables first, and we just need Tailwind to recognize them.

<u>**Summary for our notes:**</u>
For almost all our daily development, we stick to **`@theme`**. We only switch to **`inline`** if we are integrating a specific external library that requires it.

---

## 3. What is Responsive Design & Tailwind's default breakpoints?

This is a fundamental concept for us to master. If our website looks broken on a phone, users will leave immediately. Let’s break down how we handle this in Tailwind CSS.

### **What is Responsive Design?**

Responsive design is the practice of creating web pages that look good on all devices. Imagine water being poured into a cup, a bowl, or a bucket—it adapts to the shape of the container. Similarly, our website layout should adapt whether the "container" is a small iPhone or a large desktop monitor.

In Tailwind, we don't write separate stylesheets for different devices. Instead, we use **Utility Class Prefixes** directly in our HTML.

### **Tailwind's Default Breakpoints**

Tailwind provides us with five default "breakpoints." These are the specific screen widths where our layout can change.

| Breakpoint Prefix | Minimum Width (px) | Device Target (General)           |
| :---------------- | :----------------- | :-------------------------------- |
| **`sm`**          | 640px              | Large phones / Small tablets      |
| **`md`**          | 768px              | Tablets (iPad)                    |
| **`lg`**          | 1024px             | Small Laptops / Landscape Tablets |
| **`xl`**          | 1280px             | Desktop Monitors                  |
| **`2xl`**         | 1536px             | Large Screens / TV                |

### <u>**Tailwind Syntax vs. Standard CSS**</u>

This is where beginners often get confused. Tailwind creates a shorthand for the standard CSS `@media` queries. Here is how we translate between the two.

#### **1. The `min-width` Approach (Standard Tailwind)**

This is what we use 99% of the time. It targets screens **larger** than the specific size.

| Standard CSS                | Tailwind Syntax | Explanation                                             |
| :-------------------------- | :-------------- | :------------------------------------------------------ |
| `@media (min-width: 768px)` | **`md:`**       | "Apply this style only on `md` screens and **bigger**." |

**Example:**

```html
<div class="bg-red-500 md:bg-blue-500">Box</div>
```

#### **2. The `max-width` Approach (The Exception)**

Sometimes, we want a style to apply _only_ to smaller screens and disappear on larger ones. In Tailwind v4 (and modern v3), we can use the `max-*` variant.

| Standard CSS                | Tailwind Syntax | Explanation                                               |
| :-------------------------- | :-------------- | :-------------------------------------------------------- |
| `@media (max-width: 767px)` | **`max-md:`**   | "Apply this style only on screens **smaller** than `md`." |

**Example:**

```html
<div class="block max-md:hidden">Only visible on mobile</div>
```

### **Which Strategy is Best: Mobile-First or Desktop-First?**

**We should always use the "Mobile-First" strategy.**

#### **Why?**

1.  **It is Tailwind's Default Behavior:**
    Tailwind is designed to work Mobile-First. When we write a class like `p-4` (without a prefix like `md:` or `lg:`), it applies to **all screens**, starting from the smallest mobile device. We then layer on changes for larger screens.

    - **Mobile First Code (Good):** `div class="block md:flex"`
    - **Desktop First Code (Bad/Harder):** We would have to write `flex max-md:block`, which fights against the framework's logic.

2.  **Progressive Enhancement:**
    It is easier to start with a simple layout (mobile usually has one column) and _add_ complexity as the screen gets bigger (two columns, sidebars, etc.), rather than building a complex desktop site and trying to cram it into a small screen.

3.  **Performance:**
    Mobile devices often have slower internet. By writing mobile styles as the default, mobile browsers render the page faster because they don't have to parse complex desktop rules first.

**Our Rule of Thumb:**
We write code for the mobile view first. Then, we expand our browser window and add `md:` or `lg:` classes only when the design breaks or looks too stretched out.

---

## 4. How to write all pseudo-class or pseudo-element?

This is an exciting part of Tailwind. In standard CSS, handling these states often requires writing multiple blocks of code. In Tailwind, we simply add a prefix to our existing classes.

We divide these into two categories:

1.  **Pseudo-classes:** Describe a specific **state** of an element (e.g., when we hover over it).
2.  **Pseudo-elements:** Describe a specific **part** of an element (e.g., the first letter or the scrollbar).

### **1. Basic Pseudo-Classes (User Interaction)**

These are the states triggered by the user. We use the format `state:utility`.

| Pseudo-Class | Tailwind Prefix | When does it apply?                                        | Example               |
| :----------- | :-------------- | :--------------------------------------------------------- | :-------------------- |
| `:hover`     | **`hover:`**    | When the mouse cursor is over the element.                 | `hover:bg-blue-500`   |
| `:focus`     | **`focus:`**    | When we click an input field or select it via keyboard.    | `focus:ring-2`        |
| `:active`    | **`active:`**   | The exact moment we are clicking down (mouse button down). | `active:scale-95`     |
| `:disabled`  | **`disabled:`** | When an input or button is disabled (cannot be clicked).   | `disabled:opacity-50` |

**Example Usage:**

```html
<button
  class="bg-blue-500 hover:bg-blue-700 active:scale-95 disabled:opacity-50"
>
  Click Me
</button>
```

### **2. Structural Pseudo-Classes (Layout Logic)**

These help us style items based on their position in a list, without adding unique IDs to every single item.

| Pseudo-Class       | Tailwind Prefix | When does it apply?                    | Use Case                 |
| :----------------- | :-------------- | :------------------------------------- | :----------------------- |
| `:first-child`     | **`first:`**    | Only to the first item in a container. | Adding top borders.      |
| `:last-child`      | **`last:`**     | Only to the last item in a container.  | Removing bottom borders. |
| `:nth-child(odd)`  | **`odd:`**      | To item 1, 3, 5, etc.                  | Striped tables.          |
| `:nth-child(even)` | **`even:`**     | To item 2, 4, 6, etc.                  | Striped tables.          |

**Example Usage:**

```html
<ul>
  <li class="first:text-blue-500 even:bg-gray-100 last:border-none">Item 1</li>
  <li class="first:text-blue-500 even:bg-gray-100 last:border-none">Item 2</li>
  <li class="first:text-blue-500 even:bg-gray-100 last:border-none">Item 3</li>
  <li class="first:text-blue-500 even:bg-gray-100 last:border-none">Item 4</li>
</ul>
```

### **3. Pseudo-Elements (Styling Specific Parts)**

These allow us to style parts of an element that don't technically exist in the HTML structure but are rendered by the browser.

| Pseudo-Element   | Tailwind Prefix     | Description                                            | Example                     |
| :--------------- | :------------------ | :----------------------------------------------------- | :-------------------------- |
| `::before`       | **`before:`**       | Inserts content _before_ the element's actual content. | `before:content-['*']`      |
| `::after`        | **`after:`**        | Inserts content _after_ the element's actual content.  | `after:content-['->']`      |
| `::placeholder`  | **`placeholder:`**  | Styles the grey text inside an empty input box.        | `placeholder:text-gray-400` |
| `::selection`    | **`selection:`**    | Styles the background when we highlight/select text.   | `selection:bg-yellow-200`   |
| `::first-letter` | **`first-letter:`** | Styles just the first letter (like old storybooks).    | `first-letter:text-4xl`     |

**Note on `before` and `after`:** In Tailwind, we must specify the content.

- **Correct:** `before:content-['Hello']` or empty `before:content-['']`
- **Incorrect:** Just writing `before:block` (won't show anything without content).

### **4. Advanced: Relational States (Group & Peer)**

This is where Tailwind becomes extremely powerful. Standard CSS often requires complex selectors for this; Tailwind makes it readable.

#### **A. The `group` Modifier (Parent controls Child)**

**Scenario:** We have a "Card". When we hover over the _Card_, we want the _Text_ inside to turn blue.
If we put `hover:text-blue-500` on the text, it only works if we hover the specific text, not the whole card.

**Solution:**

1.  Add `group` class to the **Parent**.
2.  Add `group-hover:` prefix to the **Child**.

<!-- end list -->

```html
<div class="group bg-white p-4 hover:bg-gray-100">
  <h3 class="text-black group-hover:text-blue-500">Card Title</h3>
  <p class="text-gray-500 group-hover:text-gray-900">Description...</p>
</div>
```

#### **B. The `peer` Modifier (Sibling controls Sibling)**

**Scenario:** We have an invalid input field. We want the error message _next to it_ to become visible only when the input is invalid.

**Solution:**

1.  Add `peer` class to the **first element**.
2.  Add `peer-{state}:` prefix to the **second element**.

<!-- end list -->

```html
<form>
  <input type="email" class="peer border p-2" placeholder="Enter email" />

  <p class="hidden text-red-500 peer-invalid:block">
    Please enter a valid email address.
  </p>
</form>
```

### **5. The "Escape Hatch": Arbitrary Variants**

Sometimes, we might need a very specific CSS pseudo-class that Tailwind doesn't have a short name for, or we want to target a specific child element deeply nested. We can use square brackets `[]`.

**Scenario:** "I want to style every paragraph `<p>` inside this `div`, but I don't want to add classes to every single `p` tag."

**Solution:**

```html
<div class="[&_p]:text-blue-500 [&_p]:mb-4">
  <p>I am blue.</p>
  <p>I am also blue.</p>
  <span>I am not blue because I am a span.</span>
</div>
```

- `&` represents the current element (the div).
- `_` represents a space.
- `p` is the tag we are targeting.
- Resulting CSS: `div p { color: ... }`

This covers the entire spectrum from basic hovers to advanced structural grouping.

---

## 5. Advance pseudo-class or pseudo-elements?

We fully master these advanced selectors. These are the tools that separate a "functional" UI from a "professional, polished" UI.

Here is how we use these advanced pseudo-classes and pseudo-elements in Tailwind CSS.

### **1. The "Logic" Selectors (`:not`, `:has`, `:is`, `:where`)**

These selectors allow us to write logic directly in our CSS styling.

#### **A. `:not` (Exclusion)**

We use this when we want a style to apply to **everything except** a specific state. In Tailwind, we use the `not-` prefix.

- **Syntax:** `not-{modifier}:class`
- **Example:** We want a button to be opaque normally, but lower opacity on hover, _unless_ it is focused.

<!-- end list -->

```html
<button class="opacity-100 hover:not-focus:opacity-50">Interact with me</button>
```

#### **B. `:has` (The Parent Selector)**

This is a game-changer. It allows us to style a **Parent** based on what is happening inside its **Child**. It’s arguably the most powerful modern CSS feature.

- **Syntax:** `has-[selector]:class`
- **Example:** We want a row to turn blue if the checkbox inside it is checked.

<!-- end list -->

```html
<div
  class="has-[:checked]:bg-blue-100 has-[:checked]:border-blue-500 border p-4"
>
  <label>
    <input type="checkbox" class="mr-2" />
    Mark as Completed
  </label>
</div>
```

#### **C. `:is` and `:where` (Grouping)**

In standard CSS, these define specificity. In Tailwind, we rarely use dedicated utility prefixes for these because Tailwind classes are already specific. However, we use them heavily in **Arbitrary Variants** to target multiple children at once.

- **Syntax:** `[&_:is(tags)]:class`
- **Usage:** Styling Markdown content or rich text where we cannot add classes to every tag.

<!-- end list -->

```html
<div class="[&_:is(h1,h2,h3)]:font-bold [&_:is(h1,h2,h3)]:text-gray-900">
  <h1>Title</h1>
  <p>Normal text</p>
  <h2>Subtitle</h2>
</div>
```

### **2. Advanced Form States**

Handling forms is tricky. We need to give users feedback without annoying them.

| Pseudo-Class    | Tailwind Prefix     | Meaning                                                                                | Best Use Case                       |
| :-------------- | :------------------ | :------------------------------------------------------------------------------------- | :---------------------------------- |
| `:valid`        | **`valid:`**        | The input meets the criteria (e.g., has an @ symbol in email).                         | Simple green borders.               |
| `:invalid`      | **`invalid:`**      | The input fails criteria. **Problem:** It shows red immediately on page load (bad UX). | Avoid for initial states.           |
| `:user-valid`   | **`user-valid:`**   | Valid, but **only after** the user has interacted with the field.                      | **Best choice** for success states. |
| `:user-invalid` | **`user-invalid:`** | Invalid, but **only after** the user has typed and left the field.                     | **Best choice** for error messages. |

**Example of the "Perfect" Input Field:**
We want the field to do nothing initially. If the user types a bad email, it turns red. If they fix it, it turns green.

```html
<input
  type="email"
  required
  class="border p-2 outline-none 
         user-invalid:border-red-500 user-invalid:text-red-600
         user-valid:border-green-500 user-valid:text-green-600"
  placeholder="Enter email..."
/>
```

### **3. Focus Behaviors (`:focus` vs `:focus-within`)**

This distinction is vital for creating polished components like search bars.

#### **A. `:focus` (Strict)**

The style applies ONLY when the element itself is selected.

- **Syntax:** `focus:class`

#### **B. `:focus-within` (Bubble Up)**

The style applies to the **Parent** if **ANY** child inside it is focused.

- **Syntax:** `focus-within:class`
- **Example:** A Search Bar. The actual input is invisible, but when we click it, the _container_ glows.

<!-- end list -->

```html
<div
  class="border rounded p-2 focus-within:ring-2 focus-within:ring-blue-500 flex gap-2"
>
  <span>🔍</span>
  <input type="text" class="outline-none w-full" placeholder="Search..." />
</div>
```

### **4. Structural Type Selectors**

These are similar to `:first-child`, but they are smarter about HTML tags.

| Pseudo-Class     | Tailwind Prefix      | Description                                         | Example              |
| :--------------- | :------------------- | :-------------------------------------------------- | :------------------- |
| `:first-of-type` | **`first-of-type:`** | Targets the first element _of a specific tag type_. | `first-of-type:mt-0` |
| `:last-of-type`  | **`last-of-type:`**  | Targets the last element _of a specific tag type_.  | `last-of-type:mb-0`  |

**The Difference from `first-child`:**
Imagine we have a `<div>` that contains an `<h1>` and then three `<p>` tags.

- `p:first-child` will do **nothing**, because the first child is actually the `<h1>`.
- `p:first-of-type` will style the **first paragraph**, even though it is technically the second item in the div.

<!-- end list -->

```html
<article class="p-4">
  <h1 class="text-xl">My Blog Post</h1>
  <p class="first-of-type:font-bold text-gray-700">Introduction...</p>

  <p class="text-gray-700">Details...</p>

  <p class="last-of-type:text-sm text-gray-500">Conclusion.</p>
</article>
```

**Summary for us:**

- Use **`has-[]`** to style parents based on children.
- Use **`user-invalid:`** instead of `invalid:` for better form UX.
- Use **`focus-within:`** to make complex search bars or input groups look professional.

---

## 6. What is Functions & Directives (@apply, @layer)?

This is where we learn how to keep our code clean when our HTML starts looking too cluttered with utility classes.

We will focus on three main directives: **`@apply`**, **`@layer`**, and the **`theme()`** function.

### **1. The `@apply` Directive**

Sometimes, we look at our HTML and see a button with 15 different classes. It looks messy, and if we have to use that button in 10 different places, copying those 15 classes is tedious.

**`@apply`** allows us to copy-paste Tailwind utility classes directly into our own custom CSS classes.

#### **How We Use It**

Instead of writing this in every HTML file:

```html
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
  Button
</button>
```

We can create a "shortcut" in our CSS file:

```css
/* In our CSS file */
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
```

Now, our HTML becomes clean:

```html
<button class="btn-primary">Button</button>
```

#### **The "Trap" (Important Warning)**

We must be careful not to overuse `@apply`. If we use it for everything, we are just writing traditional CSS again, and we lose the benefits of Tailwind (like seeing exactly what an element looks like just by reading the HTML).

- **Best Practice:** Use `@apply` only for small, highly reusable components like Buttons, Form Inputs, or Cards.

### **2. The `@layer` Directive**

This is crucial for controlling "Specificity" (which rule wins).

In standard CSS, if we define a class at the bottom of the file, it overrides the ones at the top. In Tailwind, we want to ensure that our **Utility Classes** (like `text-center` or `mt-4`) always have the power to override our **Component Classes**.

We use `@layer` to tell Tailwind which "bucket" our custom CSS belongs to.

There are three main layers:

#### **A. The `base` Layer**

- **What it is:** Styles for bare HTML tags (like `<h1>`, `<p>`, `<body>`).
- **When to use it:** When we want to change the default look of HTML elements globally.

<!-- end list -->

```css
@layer base {
  h1 {
    @apply text-2xl font-bold text-gray-900;
  }
  body {
    @apply bg-gray-50 text-gray-800;
  }
}
```

#### **B. The `components` Layer**

- **What it is:** Styles for complex UI parts (Buttons, Cards, Navbars).
- **When to use it:** When creating classes like `.btn` or `.card`.

<!-- end list -->

```css
@layer components {
  .card {
    @apply bg-white p-6 rounded-lg shadow-md;
  }
}
```

#### **C. The `utilities` Layer**

- **What it is:** Small, single-purpose classes.
- **When to use it:** Rarely needed, unless we are inventing a completely new utility class that Tailwind doesn't have.

#### **Why "Layering" Matters?**

If we put our `.card` class in the `@layer components` bucket, we can still override it easily in HTML.

```html
<div class="card p-10">Content</div>
```

If we _didn't_ use `@layer`, standard CSS rules might make `.card` too strong to be overridden by `p-10`.

### **3. The `theme()` Function**

Sometimes, we need to access our configuration values (like colors or spacing) inside our CSS, but we cannot use `@apply`.

For example, if we are writing a complex `calc()` formula or a specific border property.

**Syntax:** `theme('path.to.value')`

```css
.custom-box {
  /* Instead of hardcoding #3b82f6, we use our theme variable */
  border-bottom: 2px solid theme("colors.blue.500");

  /* We can even use it for spacing */
  padding: calc(theme("spacing.4") + 10px);
}
```

### **Summary Table**

| Feature   | Syntax                | Purpose                                                 |
| :-------- | :-------------------- | :------------------------------------------------------ |
| **Apply** | `@apply classes...;`  | Extracting many utilities into a single class name.     |
| **Layer** | `@layer name { ... }` | Organizing CSS to ensure utilities still work properly. |
| **Theme** | `theme('key')`        | Fetching config values (colors, spacing) for raw CSS.   |

---

## 7. What is @custom-variants, why we need it?

`@custom-variant dark (&:where(.dark, .dark *));` this specific line of code is the "bridge" between our React logic and Tailwind's styling engine.

Let's break this down using our mental model of "Teaching Tailwind New Tricks."

### **1. What is `@custom-variant`?**

Think of `@custom-variant` as defining a **custom "IF" statement** in CSS.

By default, Tailwind knows standard "IF" statements like:

- `hover:` (IF the mouse is over me)
- `focus:` (IF I am clicked)

**`@custom-variant`** allows us to create our own conditions. We are telling Tailwind: _"I am inventing a new prefix called `xyz:`. When I use it, please generate CSS that looks for this specific situation."_

### **2. Why do we need this specific line?**

```css
@custom-variant dark (&:where(.dark, .dark *));
```

We need this because of a conflict in **Strategy**:

1.  **Tailwind's Default Strategy ("System" Mode):**
    By default, when we use `dark:bg-black`, Tailwind thinks: _"I will only show this black background if the user's **MacBook or Windows OS** is set to Dark Mode."_ It listens to the browser, not our website.

2.  **Our Strategy ("Manual" Mode):**
    We built a toggle button in React. When we click it, we add the class `.dark` to the `<html>` tag. We want Tailwind to think: _"I don't care about the Windows OS settings. If the `<html>` tag has the class `.dark`, then show the black background."_

**We need `@custom-variant` to OVERRIDE Tailwind's default behavior.** We are forcing it to stop listening to the OS and start listening to our CSS class.

### **3. Breaking Down the Syntax**

Let's translate that complex line into plain English:

`@custom-variant dark (&:where(.dark, .dark *));`

- **`dark`**: This is the name of the prefix we use in HTML (e.g., `dark:text-white`).
- **`&`**: This represents the element we are styling (e.g., the Card).
- **`:where(.dark, .dark *)`**: This is the condition. It says: _"Apply this style ONLY if this element is inside a parent that has the class `.dark`."_

### **4. What happens if we DON'T use it?**

If we delete that line from our CSS but keep our React toggle button:

1.  **User Action:** The user clicks the "Moon" icon.
2.  **React Logic:** React successfully adds `<html class="dark">`.
3.  **The Result:** **Nothing happens.** The screen stays white.
4.  **The Reason:** Tailwind is still in "System Mode." It ignores the `.dark` class entirely. It is still waiting for you to change your Windows settings to Dark Mode to trigger the change.

### **Summary**

| Scenario    | Code State             | Behavior                                                                                    |
| :---------- | :--------------------- | :------------------------------------------------------------------------------------------ |
| **Default** | No `@custom-variant`   | `dark:` classes **ignore** our button. They only change if we change our laptop's settings. |
| **Custom**  | With `@custom-variant` | `dark:` classes **listen** to our button. The user has full control.                        |

So, strictly speaking, `custom-variants` gives us **Manual Control** over automated features.

---

## 8. What is whitespace-nowrap, pre-wrap, pre-line?

This is a great question because the term "Whitespace" is a bit tricky. In design, it usually means "empty space" (like margins), but in **CSS and Tailwind**, the `whitespace-` utility specifically controls **how text handles spaces, newlines, and wrapping.**

Let's break this down simply.

### **1. What is Whitespace?**

By default, HTML is very aggressive about cleaning up our text.

- **It collapses spaces:** If we type 10 spaces between words in our code, HTML only shows 1 space on the screen.
- **It ignores Enter keys:** If we press "Enter" in our code to start a new line, HTML ignores it and keeps writing on the same line.
- **It wraps automatically:** When text hits the edge of a box, it drops to the next line.

The **`whitespace`** property gives us control over this behavior. We use it to tell the browser: _"Stop wrapping text"_ or _"Respect my 'Enter' keys."_

### **2. The Most Important Class: `whitespace-nowrap`**

This is the one we will use 90% of the time.

- **What it does:** It forces text to stay in a single straight line, no matter what. It will overflow off the screen rather than breaking onto a new line.
- **When do we use it?**
  - **Marquees:** In the infinite scroll we just built, we used this to ensure the list of companies (`Google Amazon Microsoft`) stays in one long line instead of stacking.
  - **Buttons:** To make sure a button label like "Sign Up Now" doesn't break into two ugly lines on small screens.

<!-- end list -->

```html
<!-- 
  Without nowrap: 
  Google Amazon 
  Microsoft
  
  With nowrap:
  Google Amazon Microsoft
-->
<div class="whitespace-nowrap">Google Amazon Microsoft</div>
```

### **3. The "Code Display" Classes (`pre` family)**

These are used when we want to display text exactly as it was typed (like poetry or code snippets).

| Class                     | What it does                                              | Best Use Case                                                            |
| :------------------------ | :-------------------------------------------------------- | :----------------------------------------------------------------------- |
| **`whitespace-normal`**   | **Default.** Collapses spaces, wraps text automatically.  | Resetting behavior (undoing a `nowrap`).                                 |
| **`whitespace-pre`**      | Preserves **ALL** spaces and newlines. Does **NOT** wrap. | Displaying code blocks where indentation matters.                        |
| **`whitespace-pre-line`** | Collapses spaces, but **respects newlines**. Wraps text.  | Blog posts or comments where users hit "Enter" for paragraphs.           |
| **`whitespace-pre-wrap`** | Preserves spaces **AND** newlines. Wraps text.            | Chat apps (like WhatsApp) so long messages wrap but "Enter" still works. |

### **4. Real-World Scenarios**

Let's see where we would actually use these in our project.

#### **Scenario A: The "Marquee" (Used in our previous code)**

We need the company names to scroll infinitely to the left. If they wrapped to a second line, the animation would break.

- **We use:** `whitespace-nowrap`

#### **Scenario B: A Chat Message Bubble**

A user types a message with multiple spaces and line breaks. We want to show it exactly how they typed it, but if the line is too long, it should wrap so it doesn't break the layout.

- **We use:** `whitespace-pre-wrap`

#### **Scenario C: A User Bio**

A user writes a bio and presses "Enter" to make a list. We want to respect those "Enter" keys, but we don't care if they accidentally typed 5 spaces between words (we want to clean that up).

- **We use:** `whitespace-pre-line`

### **Summary**

- **`whitespace-nowrap`**: "Don't break the line." (Use for tags, buttons, scrolling text).
- **`whitespace-pre-wrap`**: "Respect my formatting but stay inside the box." (Use for user-generated content/comments).
- **`whitespace-normal`**: "Act like normal HTML." (The default).

---

## 9. 



---

## 10.



---