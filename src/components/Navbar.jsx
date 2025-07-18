import React from 'react';

export default function Navbar({ dark, toggleDark }) {
  return (
    <header className="bg-white dark:bg-darkbg shadow">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-charcoal dark:text-platinum">Keystone Notary</h1>
        <nav className="flex gap-4" aria-label="Main">
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <button
          onClick={toggleDark}
          aria-pressed={dark}
          className="ml-4 text-sm border border-mediumgray rounded px-2 py-1"
        >
          {dark ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </header>
  );
}
