import React from "react";

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-neutral-900/80 backdrop-blur text-gray-200 shadow-sm">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-4 px-4 py-2 sm:flex-nowrap sm:justify-between sm:px-6 sm:py-3">
        <h1 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-100 sm:text-base">
          Keystone Notary Group
        </h1>
        {/* Navigation drawer trigger - functionality handled elsewhere */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="rounded border border-gray-600 px-6 min-h-[48px] py-1 text-xs uppercase tracking-wide text-gray-200 transition hover:shadow-xl active:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-600 sm:hidden"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
