import React from "react";

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-neutral-900/80 backdrop-blur text-gray-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-2 sm:flex-nowrap sm:px-6 sm:py-3">
        <h1 className="text-sm font-semibold uppercase tracking-wide text-gray-100 sm:text-base">
          Keystone Notary Group
        </h1>
        {/* Navigation drawer trigger - functionality handled elsewhere */}
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
