import React from "react";

export default function Header() {
  return (
    <header className="bg-neutral-950 text-white">
      <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <h1 className="text-lg font-semibold">Keystone Notary Group</h1>
        {/* Hamburger icon for mobile navigation */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="sm:hidden focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
