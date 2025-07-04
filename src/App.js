import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/index";
import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import FaqPage from "./pages/faq";
import NotFound from "./pages/NotFound";

function RootLayout() {
  // Use location to ensure exit animations on route changes
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* Outlet is keyed by pathname so exiting page can animate out */}
      <Outlet key={location.pathname} />
    </AnimatePresence>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
