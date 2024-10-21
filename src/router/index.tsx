import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import MainLayout from "../components/layouts/MainLayout";
import ContactDetail from "../pages/ContactDetail";
import NotFound from "../pages/NotFounded";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/contact/:id",
        element: <ContactDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
