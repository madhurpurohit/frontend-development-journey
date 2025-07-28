# React Router Study Guide

## 1. What is React Router & types of router?

React-Router is not the part of official React.js, but it's a separate library which helps to manage routing in our project.

There are three primary ways, or "modes" to use it.

1. Framework Mode
2. Data API Mode
3. Declarative Mode

Here we learn Data API Mode.

## 2. How to create a browser router?

```
import { createBrowserRouter } from "react-router";

function App(){
    const router = createBrowserRouter([
        {
            path:"/", // This is the default root means xyz.com
            element: <Home/> // In this we add an component which we want to show in UI, when someone type above path.
        },
        {
            path:"/about", // This is the page path means xyz/about.com
            element: <About/> // In this we add an component which we want to show in UI, when someone type above path.
        }
    ]);

    return <RouterProvider router={router}/> // RouterProvider means it provides a router, in this we have to pass the router we create in a prop name router.
}

export default App;
```

[For Code Part...](./src/App.jsx)

---

## 3. What is Helper Function in React Router, Simplify router setup with createRouterFromElements?

This function is a classic helper. Its sole purpose is to help you by allowing you to define your routes using familiar JSX (<Route>) syntax, which it then converts into the JavaScript object format that the router requires.

**Without the helper:** You'd have to write your routes as a verbose array of objects.

**With the helper:** You can write them declaratively with JSX, which is often cleaner and easier to read.

```
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router";


function App(){
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        )
      );

    return <RouterProvider router={router}/>
}

export default App;
```

[For Code Part...](src/App.jsx)

---

## 4. What is App Layout & Outlet component?

Renders the matching child route of a parent route or nothing if no child route matches.

[For Code Part..](src/components/Layout/AppLayout.jsx)

---

## 5. What is Dynamic Navigation Bar in React Router?

**NavLink :-** This component is for navigation links that need to render active and pending states. It also has callback props on className, style, and children with the states for inline styling or conditional rendering.

**Link :-** Use `<Link>` when the link doesn't need active styling.

```
<a href="index.html"></a> // For this we use
<NavLink to="/"></NavLink>

<a href="about.html"></a> // For this we use.
<NavLink to="/about"></NavLink>
```

[For Code Part...](src/components/Layout/Header.jsx)

---

## 6. What is Active Link?

**Method1 :-** Whenever we click on any NavLink element than it automatically gets a class="active", so we can define this class in our CSS file.

**Method2 :-** The NavLink will give as a parameter isActive by default. Which match the to attribute from it's content. So when we click or active any link than we can style using this.

[For Code Part...](src/components/Layout/Header.jsx)

---

## 7. What is useRouteError hook?

This is used for handling error pages when someone access an un-identify or unauthorized page than how it acts.
Accesses the error thrown during an action, loader, or component render to be used in a route module.

[For Code Part...](src/pages/ErrorPage.jsx)

$Important Note$
If we are using simple declarative basic route architecture than we can handle error page using a wild card "\*".

```
<BrowserRouter>
  <Route>
    <Route path="*" element={<ErrorPage/>} />
    <Route path="/" element={<Hame/>} />
    <Route path="/about" element={<About/>} />
  </Route>
</BrowserRouter>
```

---

## 8. What is useNavigate Hook?

The `useNavigate` hook returns a function that lets us navigate programmatically. We used it in those pages where if any user use wrong url than it can go back to it's previous page instead of Home Page.

[For Code Part...](src/pages/ErrorPage.jsx)

---

## 9. What is loader & useLoaderData hook & how to fetch API?

**Loader :-** Route loaders provide data to route components before they are rendered. They are only called on the server when server rendering or during the build with pre-rendering.

**useLoaderData :-** Returns the data from the closest route loader or clientLoader.

[For Loader Code Part...](src/App.jsx)

[For useLoaderData Hook Code Part...](src/pages/Movie.jsx)

#### Why we don't use useEffect hook?

So when we refresh or load our website & if API Data is fetched through useEffect hook than firstly it will load the whole website & than the useEffect hook will run, & after getting the data this will re-render the whole page. Which is more time consuming.

& when we use route loader & useLoaderData hook to fetch API data, than when our site loads or we refresh the site than it will run the fetch command so sometimes it will render it's data faster than other component like header, footer etc.

---

## 10. How to create a Global loading state & what is it?

Returns the current Navigation, defaulting to an "idle" navigation when no navigation is in progress. We can use this to render pending UI (like a global spinner) or read FormData from a form navigation.

**useNavigation Hook :-** This hook tells us everything we need to know about a page navigation to build pending navigation indicators & optimistic UI on data mutations. THings like:

- Global loading indications.
- Disabling forms while a mutation is happening
- Adding busy indicators to submit buttons.
- Optimistically showing a new record while it's being created on the server.
- Optimistically showing the new state of a record while it's being updated.

**navigation.state :-**

- idle: There is no navigation pending.
- submitting: A route action is being called due to form submission using POST, PUT, PATCH or DELETE.
- loading: The loaders for the next routes are being called.

Normal navigation or GET form submissions transition through three states:

idle -> loading -> idle

Form submission with POST, PUT, PATCH or DELETE transition through these states:

idle -> submitting -> loading -> idle

```
import {useNavigation} from "react-router";

function SomeComponent(){
  const navigation = useNavigation();

  navigation.state;
  navigation.location;
  navigation.formData;
  navigation.json;
  navigation.text;
  navigation.formAction;
  navigation.formMethod;
  navigation.formEncType;
}
```

---

## 11. How to use & make .env file in Vite+React project?

[Go to official Documentation](https://vite.dev/guide/env-and-mode.html#env-variables-and-modes)

---

## 12. What is Dynamic Routing?

[For Code Part...](src/App.jsx)

[For Code Part...](src/api/GetMovieDetails.jsx)

[For Code Part...](src/components/UI/MovieDetails.jsx)

---

## 13. What is Form Action?

[For Code Part...](src/pages/Contact.jsx)

---
