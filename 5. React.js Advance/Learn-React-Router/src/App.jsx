import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, getContactFormData } from "./pages/Contact";
import AppLayout from "./components/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getMovieData } from "./api/GetMovieData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />, // This is the method which used to handle error page.
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMovieData, // This is used to fetch API data.
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: getContactFormData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
