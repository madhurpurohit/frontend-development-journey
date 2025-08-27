import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import Restaurants from "./Pages/Restaurants";
import RestaurantDetailPage from "./Pages/RestaurantDetailPage";
import RootLayout from "./components/layout/RootLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchPage from "./Pages/SearchPage";
import { Provider } from "react-redux";
import { store } from "./context/store";
import { Checkout } from "./Pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "restaurants",
        element: <Restaurants />,
      },
      {
        path: "city/delhi/:rest/-rohini-rest/:id",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <RestaurantDetailPage />,
          },
          {
            path: "search",
            element: <SearchPage />,
          },
        ],
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
