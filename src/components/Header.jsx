import React from "react";

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-neutral-900/80 backdrop-blur text-gray-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <h1 className="text-base font-semibold uppercase tracking-wide text-gray-100">
          Keystone Notary Group
        </h1>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="rounded border border-gray-600 px-3 py-1 text-xs uppercase tracking-wide text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:hidden"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
