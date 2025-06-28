import React from "react";

export default function NavigationBar() {
  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur"
    >
      <div className="mx-auto flex items-center justify-between px-4 py-2 sm:px-6 sm:py-3 lg:px-8">
        <span className="text-lg font-bold text-white">Keystone Notary Group</span>
        <button
          type="button"
          className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100 hover:shadow-xl"
        >
          Schedule a Signing
        </button>
      </div>
    </nav>
  );
}
