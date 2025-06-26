import React from "react";

export default function Header() {
  return (
    <header className="bg-neutral-900/80 backdrop-blur border-b border-gray-800 shadow-sm text-gray-200">
      <div className="mx-auto flex items-center justify-between px-6 py-3 sm:px-8">
        <h1 className="text-sm uppercase tracking-widest text-gray-100">Keystone Notary Group</h1>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="sm:hidden px-3 py-1 text-xs uppercase tracking-wider text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
