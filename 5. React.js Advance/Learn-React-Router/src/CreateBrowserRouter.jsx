//* How to create a browser router.
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";

function CreateBrowserRouter() {
  //* Method1:- Creating a browser router using createBrowserRouter.
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/movie",
  //     element: <Movie />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },
  // ]);

  //* Method2:- Creating a browser router using Helper function like createRoutesFromElements.
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

  return <RouterProvider router={router} />;
}

export default CreateBrowserRouter;
