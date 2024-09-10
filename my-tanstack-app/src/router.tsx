import { createBrowserRouter } from "@tanstack/react-router";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Root } from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
