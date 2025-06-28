import React, { useEffect, useState } from "react";

export default function LandingHero() {
  // Map labels to in-page anchor targets
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];
  // Controls the full hero fade-in effect
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger the fade-in shortly after initial render so the transition runs
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`scroll-smooth opacity-0 transition-opacity duration-[2000ms] ease-out ${
        fadeIn ? "opacity-100" : ""
      }`}
    >
      <section
        id="home"
        className="relative flex min-h-screen w-full flex-col items-center justify-center bg-neutral-900 text-gray-200 overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/bg-texture.PNG')" }}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 mx-auto w-full max-w-screen-md px-4 py-12 text-center sm:py-16">
          <div className="flex flex-col items-center">
            <img
              src="/logo.PNG"
              alt="Keystone Notary Group logo"
              className="mx-auto w-40 sm:w-52 md:w-64"
            />
            <nav className="mt-8 sm:mt-10" aria-label="Main navigation">
              <ul className="flex flex-col items-center space-y-2 sm:space-y-4 text-sm sm:text-base font-medium uppercase text-gray-300">
                {navItems.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="block px-2 py-1 transition-colors hover:text-gray-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        aria-label="About"
        className="flex min-h-screen w-full flex-col items-center justify-center bg-neutral-800 px-4 py-12 text-gray-200 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="mb-8 text-2xl font-semibold tracking-wide sm:mb-12 sm:text-3xl">
            About Keystone Notary Group
          </h2>
          <p className="mx-auto max-w-prose text-gray-300">
            Keystone Notary Group, LLC is a mobile notary service dedicated to professionalism,
            punctuality, and privacy. We provide document notarization services throughout Bucks
            and Montgomery County, Pennsylvania.
          </p>
          <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2">
            <div className="rounded bg-neutral-900 p-6 text-center shadow-sm">
              <p className="font-medium">Certified Loan Signing Agent</p>
            </div>
            <div className="rounded bg-neutral-900 p-6 text-center shadow-sm">
              <p className="font-medium">NNA Certified and Insured</p>
            </div>
            <div className="rounded bg-neutral-900 p-6 text-center shadow-sm">
              <p className="font-medium">Serving Bucks & Montgomery County</p>
            </div>
            <div className="rounded bg-neutral-900 p-6 text-center shadow-sm">
              <p className="font-medium">After-Hours & Emergency Services Available</p>
            </div>
          </div>
          <p className="mt-10 text-sm text-gray-400">
            Commissioned in the Commonwealth of Pennsylvania
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        aria-label="Services"
        className="flex min-h-screen w-full flex-col items-center justify-center bg-neutral-900 px-4 py-12 text-gray-200 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-screen-lg w-full">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-wide sm:mb-12 sm:text-3xl">
            Our Services
          </h2>
          <div className="space-y-8">
            <div className="rounded bg-neutral-800 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">General Notary Work</h3>
              <p className="mt-2 text-gray-400">
                Acknowledgements, jurats, oaths, affirmations, and more.
              </p>
            </div>
            <div className="rounded bg-neutral-800 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Loan Signing Agent</h3>
              <p className="mt-2 text-gray-400">
                Specialized in real estate closings and loan document notarizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        aria-label="Frequently Asked Questions"
        className="flex min-h-screen w-full flex-col items-center justify-center bg-neutral-800 px-4 py-12 text-gray-200 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto w-full max-w-screen-lg">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-wide sm:mb-12 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="rounded bg-neutral-900 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-100">What do I need to bring to my notary appointment?</h3>
              <p className="mt-2 text-gray-400">A valid, government-issued photo ID is required for all notarizations.</p>
            </div>
            <div className="rounded bg-neutral-900 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-100">Do you offer mobile notary services?</h3>
              <p className="mt-2 text-gray-400">Yes. We travel to your home, business, or public meeting location in Bucks and Montgomery County.</p>
            </div>
            <div className="rounded bg-neutral-900 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-100">What types of documents can you notarize?</h3>
              <p className="mt-2 text-gray-400">We notarize affidavits, acknowledgements, jurats, power of attorney forms, real estate documents, and more.</p>
            </div>
            <div className="rounded bg-neutral-900 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-100">Are you certified and insured?</h3>
              <p className="mt-2 text-gray-400">Yes. We are NNA Certified and carry errors & omissions insurance.</p>
            </div>
            <div className="rounded bg-neutral-900 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-100">Do you provide after-hours or emergency service?</h3>
              <p className="mt-2 text-gray-400">Yes. After-hours and emergency appointments are available upon request and subject to availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        aria-label="Contact"
        className="flex min-h-screen w-full flex-col items-center justify-center bg-neutral-900 px-4 py-12 text-gray-200 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto w-full max-w-screen-lg">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-wide sm:mb-12 sm:text-3xl">
            Contact
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6 sm:space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 w-full rounded-md border border-gray-600 bg-neutral-800 p-2 text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 w-full rounded-md border border-gray-600 bg-neutral-800 p-2 text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-2 w-full rounded-md border border-gray-600 bg-neutral-800 p-2 text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                Send Message
              </button>
            </div>
          </form>
          <p className="mt-8 text-sm text-gray-400 sm:mt-10">
            Please mention the type of document or notarization service you are requesting.
          </p>
          <div className="mt-4 space-y-2 text-sm text-gray-300">
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:2673099000" className="text-blue-400 hover:text-blue-300" aria-label="Call 267-309-9000">
                (267) 309-9000
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:appointments@keystonenotarygroup.com" className="text-blue-400 hover:text-blue-300">
                appointments@keystonenotarygroup.com
              </a>
            </p>
            <p>
              <strong>Service Area:</strong> Bucks and Montgomery County, PA
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
