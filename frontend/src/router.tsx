import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App dient oft als Layout mit z.B. Navbar & <Outlet />
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
