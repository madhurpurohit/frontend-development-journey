import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { MainLayout } from "./Components/Layout/MainLayout";
import { Home } from "./Pages/Home";
import { FetchOld } from "./Pages/FetchOld";
import { FetchRQ } from "./Pages/FetchRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { About } from "./Pages/About";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FetchInd } from "./Components/UI/FetchInd";
import { InfiniteScroll } from "./Pages/InfiniteScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path: "/fetchold",
        element: <FetchOld />,
      },
      {
        path: "/fetchrq",
        element: <FetchRQ />,
      },
      {
        path: "/fetchrq/:id",
        element: <FetchInd />,
      },
      {
        path: "/infinitescroll",
        element: <InfiniteScroll />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
