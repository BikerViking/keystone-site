import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LandingHero() {
  const navItems = ["Home", "About", "Services", "FAQ", "Contact"];
  const [visible, setVisible] = useState(false);

  // Trigger fade-in after component mounts
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-neutral-900 text-gray-200 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/bg-texture.PNG')" }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 mx-auto w-full max-w-screen-md px-4 py-12 text-center sm:py-16">
        <div
          className={`${visible ? "opacity-100 visible" : "opacity-0 invisible"} transition-opacity duration-[1000ms] ease-in-out`}
        >
          <div className="flex flex-col items-center">
            <img
              src="/logo.PNG"
              alt="Keystone Notary Group logo"
              className="mx-auto w-40 sm:w-52 md:w-64"
            />
            <nav className="mt-8 sm:mt-10" aria-label="Main navigation">
              <ul className="flex flex-col items-center space-y-2 sm:space-y-4 text-sm sm:text-base font-medium uppercase text-gray-300">
                {navItems.map((label) => (
                  <li key={label}>
                    <Link
                      to={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
                      className="block px-2 py-1 transition-colors hover:text-gray-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
