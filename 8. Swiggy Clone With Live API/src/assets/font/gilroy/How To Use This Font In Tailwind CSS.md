# Steps to use this type of custom font in Tailwind CSS.

## Step1:- Paste custom font inside the given folder.

```
src/
 └─ assets/
     └─ font/
        └─ gilroy/
            Gilroy-Regular.ttf
            Gilroy-Medium.ttf
            Gilroy-Bold.ttf
```

## Step2:- Define the fonts in Global CSS (index.css) & apply it globally.

**Syntax:- To define & apply**

```
@import "tailwindcss";

/* ===============================
   Gilroy Custom Fonts Declaration
   =============================== */
@font-face {
  font-family: "Gilroy";
  src: url("./assets/font/gilroy/Gilroy-Black.ttf") format("truetype");
  font-weight: 900; /* Black */
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: url("./assets/font/gilroy/Gilroy-Bold.ttf") format("truetype");
  font-weight: 700; /* Bold */
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: url("./assets/font/gilroy/Gilroy-ExtraBold.ttf") format("truetype");
  font-weight: 800; /* ExtraBold */
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: url("./assets/font/gilroy/Gilroy-Heavy.ttf") format("truetype");
  font-weight: 850; /* Heavy (custom weight) */
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: url("./assets/font/gilroy/Gilroy-Light.ttf") format("truetype");
  font-weight: 300; /* Light */
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: url("./assets/font/gilroy/Gilroy-Medium.ttf") format("truetype");
  font-weight: 500; /* Medium */
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: url("./assets/font/gilroy/Gilroy-Regular.ttf") format("truetype");
  font-weight: 400; /* Regular */
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: url("./assets/font/gilroy/Gilroy-SemiBold.ttf") format("truetype");
  font-weight: 600; /* SemiBold */
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: url("./assets/font/gilroy/Gilroy-Thin.ttf") format("truetype");
  font-weight: 100; /* Thin */
  font-style: normal;
}

@font-face {
  font-family: "Gilroy";
  src: url("./assets/font/gilroy/Gilroy-UltraLight.ttf") format("truetype");
  font-weight: 200; /* UltraLight */
  font-style: normal;
}

/* ===============================
   Tailwind v4 Theme Extension
   =============================== */
@theme {
  --font-gilroy: "Gilroy", sans-serif;
}

/* ===============================
   Global Apply
   =============================== */
body {
  font-family: var(--font-gilroy);
}
```

## Step3:- Use the variants in your application.

```
export default function App() {
  return (
    <div className="p-10 space-y-4">
      <h1 className="text-4xl font-black">Gilroy Black (900)</h1>
      <h2 className="text-3xl font-extrabold">Gilroy ExtraBold (800)</h2>
      <h2 className="text-3xl font-bold">Gilroy Bold (700)</h2>
      <p className="font-semibold">Gilroy SemiBold (600)</p>
      <p className="font-medium">Gilroy Medium (500)</p>
      <p className="font-normal">Gilroy Regular (400)</p>
      <p className="font-light">Gilroy Light (300)</p>
      <p className="font-extralight">Gilroy UltraLight (200)</p>
      <p className="font-thin">Gilroy Thin (100)</p>
      <p className="font-[850]">Gilroy Heavy (850 custom)</p>
    </div>
  );
}
```
