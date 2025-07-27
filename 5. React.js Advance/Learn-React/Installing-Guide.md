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
bun i styled-component
```

- **Step2 :-** Than import it in any component file.

```
import styled from "styled-component"
```

---

## Tailwind CSS

- **Step1 :-** Install Tailwind CSS from [Official website](https://tailwindcss.com/docs/installation/using-vite). Firstly go to our project folder where we want to install it & than open an integrated terminal.

```
npm install tailwindcss @tailwindcss/vite
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

## React-Icons

**Step1 :-** Firstly go to the project folder & open that folder in integrated terminal. & run,

```
npm i react-icons
bun i react-icons
```

**Step2 :-** Go to official website to get the icon.

[React-icons website Link...](https://react-icons.github.io/react-icons/)

## React-Loading Component

[Visit the website..](https://react-loading-indicators.netlify.app/)
