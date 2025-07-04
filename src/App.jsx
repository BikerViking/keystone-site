import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import FaqPage from "./pages/faq";
import ContactPage from "./pages/contact";
import NotFound from "./pages/NotFound";

function RootLayout() {
  // Wrap routes with AnimatePresence for page transitions
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Outlet key={location.pathname} />
    </AnimatePresence>
  );
}

// Object-based route configuration for React Router DOM v7
const router = createBrowserRouter([
  {
    element: <RootLayout />, // shared layout for all routes
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
