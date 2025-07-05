import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", enabled);
    setDark(enabled);
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
  }, [open]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur dark:border-gray-800 dark:bg-black/70">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2">
        <NavLink to="/" className="flex items-center space-x-2" aria-label="Home">
          <img src="/logo.PNG" alt="Keystone Notary Group logo" className="h-8 w-8" />
          <span className="font-display text-lg font-semibold text-gray-800 dark:text-gray-200">
            Keystone Notary Group
          </span>
        </NavLink>
        <nav className="hidden md:flex items-center space-x-6" aria-label="Main">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-1 transition-colors duration-200 hover:text-blue-400 ${
                  isActive ? "text-blue-400" : "text-gray-700 dark:text-gray-200"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle dark mode"
            className="rounded border border-gray-500 px-3 py-1 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {dark ? "Light" : "Dark"}
          </button>
          <button
            onClick={() => setOpen(true)}
            type="button"
            aria-label="Open navigation menu"
            className="rounded border border-gray-500 px-3 py-1 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 md:hidden"
          >
            Menu
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-black/80 md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween" }}
              className="mt-16 flex flex-col space-y-6 bg-black px-6 py-8 text-lg text-gray-200"
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile"
            >
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-1 hover:text-blue-400"
                >
                  {label}
                </NavLink>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
