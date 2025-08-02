# All library & packages installing Guide

## Vite Using Bun.

- **Step1 :-** Open the folder in which we want to make vite project & open an integrated terminal in that folder.

- **Step2 :-** Firstly check that bun is installed globally or not.

```
bun -v
```

- **Step3 :-** If it is not installed or not recognize than installed it globally for that,

```
curl -fsSL https://bun.sh/install | bash
```

- **Step4 :-** Now check is bun installed or not. Same like in step2.

- **Step5 :-** To install vite using bun, write

```
bun create vite
```

- **Step5 :-** Now it will ask some certain things answer them & it install vite. Now go to the folder which you gave the project name.

```
cd project-name
```

- **Step6 :-** Now install all dependencies in our project.

```
bun install
bun i
```

- **Step7 :-** To run the project.

```
bun run dev
bun dev
```

---

## Styled-Component

- **Step1 :-** Install styled-component npm package through website [Go to website](https://www.npmjs.com/package/styled-components)

```
npm i styled-components
bun add styled-component
```

- **Step2 :-** Than import it in any component file.

```
import styled from "styled-component"
```

---

## Tailwind CSS

- **Step1 :-** Install Tailwind CSS from [Official website](https://tailwindcss.com/docs/installation/using-vite). Firstly go to our project folder where we want to install it & than open an integrated terminal.

```
npm install -d tailwindcss @tailwindcss/vite

bun add --dev tailwindcss @tailwindcss/vite
```

- **Step2 :-** Than go to vite.config.js or vite.config.js & add this on first line means top.

```
import tailwindcss from '@tailwindcss/vite'
```

- **Step3 :-** Than write inside plugins. There are maybe multiple packages are already installed, so keep that as it is.

```
plugins: [
    tailwindcss(),
  ],
```

- **Step4 :-** Than open main index.css file, & paste the below code.

```
@import "tailwindcss";
```

---

## For Tailwind Prettier Format?

- To get started, install `prettier-plugin-tailwindcss` as a dev-dependency:

```
npm install -D prettier prettier-plugin-tailwindcss

bun add --dev prettier prettier-plugin-tailwindcss
```

- Then add the plugin to your Prettier configuration file:

```
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

[For More Go to Official Website](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

---

## React-Icons

**Step1 :-** Firstly go to the project folder & open that folder in integrated terminal. & run,

```
npm i react-icons
bun add react-icons
```

**Step2 :-** Go to official website to get the icon.

[React-icons website Link...](https://react-icons.github.io/react-icons/)

## React-Loading Component

[Visit the website..](https://react-loading-indicators.netlify.app/)

---

## How to install any package as an devdependencies using npm or bun?

**For npm:**

```
# Full command version
npm install --save-dev <package-name>

# Shorthand version
npm i -D <package-name>
```

**For bun:**

```
# Full command version
bun add --development <package-name>

# Shorthand version
bun add -d <package-name>
```

---

## What is added inside dependencies or devdependencies?

**Dependencies:**

```
"dependencies": {
  "@tanstack/react-query": "^5.83.0",
  "axios": "^1.11.0",
  "lucide-react": "^0.534.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-intersection-observer": "^9.16.0",
  "react-loading-indicators": "^1.0.1",
  "react-router": "^7.7.1"
}
```

**Dev-Dependencies:**

```
"devDependencies": {
  "@tailwindcss/vite": "^4.1.11",
  "@tanstack/react-query-devtools": "^5.83.0",
  "tailwindcss": "^4.1.11",
  "@eslint/js": "^9.30.1",
  "@tanstack/eslint-plugin-query": "^5.81.2",
  "@types/react": "^19.1.8",
  "@types/react-dom": "^19.1.6",
  "@vitejs/plugin-react": "^4.6.0",
  "eslint": "^9.30.1",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.20",
  "globals": "^16.3.0",
  "vite": "^7.0.4"
}
```

---

## React Router

```
npm i react-router

bun add react-router
```

[For More Go to Official Website](https://reactrouter.com/start/data/installation#install-react-router)

---

## Axios

```
npm i axios

bun add axios
```

[For More go to Official Website](https://www.npmjs.com/package/axios)

---

## TanStack Query

```
npm i @tanstack/react-query

bun add @tanstack/react-query
```

[For More Go to Official Website](https://tanstack.com/query/latest/docs/framework/react/installation)

---

## TanStack Query DevTool

```
npm i -d @tanstack/react-query-devtools

bun add --dev @tanstack/react-query-devtools
```

[For More Go to Official Website]()

---

## React Intersection Observer

```
npm i react-intersection-observer

bun add react-intersection-observer
```

[For More Go to Official Website](https://www.npmjs.com/package/react-intersection-observer)

---

## React Redux

```
npm i react-redux

bun add react-redux
```

[For More Go to Official Website](https://react-redux.js.org/introduction/getting-started)

---
