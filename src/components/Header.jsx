import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

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
        className={`sm:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      >
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 right-0 top-0 bg-neutral-900 text-white shadow-lg transition-transform duration-300 ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 px-6 py-8 text-lg">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block px-2 py-1 transition hover:text-amber-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={closeMenu}
                className="block px-2 py-1 transition hover:text-amber-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                onClick={closeMenu}
                className="block px-2 py-1 transition hover:text-amber-300"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block px-2 py-1 transition hover:text-amber-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
