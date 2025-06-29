import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const firstRef = useRef(null);
  const lastRef = useRef(null);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const body = document.body;
    if (open) {
      body.classList.add("overflow-hidden");
      firstRef.current?.focus();
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstRef.current) {
          e.preventDefault();
          lastRef.current?.focus();
        }
      } else if (document.activeElement === lastRef.current) {
        e.preventDefault();
        firstRef.current?.focus();
      }
    } else if (e.key === "Escape") {
      closeMenu();
    }
  };

  return (
    <header className="border-b border-gray-800 bg-neutral-900/80 backdrop-blur text-gray-200 shadow-sm">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-4 px-4 py-2 sm:flex-nowrap sm:justify-between sm:px-6 sm:py-3">
        <h1 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-100 sm:text-base">
          Keystone Notary Group
        </h1>
        {/* Mobile navigation toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={toggleMenu}
          className="rounded border border-gray-600 px-6 min-h-[48px] py-1 text-xs uppercase tracking-wide text-gray-200 transition hover:shadow-xl active:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-600 sm:hidden"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        role="presentation"
        aria-hidden={!open}
        aria-label="Menu overlay"
        className={`sm:hidden fixed inset-0 z-[9999] bg-black/80 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      >
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          onKeyDown={handleKeyDown}
          onClick={(e) => e.stopPropagation()}
          className={`fixed right-0 top-0 bottom-0 w-64 transform bg-gray-900 text-white shadow-xl transition-all duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            ref={firstRef}
            className="absolute top-4 right-4 text-white text-2xl z-50 focus:outline-none"
          >
            &times;
          </button>
          <ul className="flex flex-col items-start space-y-4 px-6 py-8 text-lg">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-2 py-1 transition hover:text-blue-400${isActive ? " underline text-blue-400" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-2 py-1 transition hover:text-blue-400${isActive ? " underline text-blue-400" : ""}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-2 py-1 transition hover:text-blue-400${isActive ? " underline text-blue-400" : ""}`
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                ref={lastRef}
                className={({ isActive }) =>
                  `block px-2 py-1 transition hover:text-blue-400${isActive ? " underline text-blue-400" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
