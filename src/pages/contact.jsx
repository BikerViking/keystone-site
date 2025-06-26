import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";

export default function ContactPage() {
  // Prevent default form submission until backend integration is added
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LayoutWrapper>
      <section
        aria-label="Contact"
        className="mx-auto max-w-lg px-4 py-16 text-gray-200 sm:py-24"
      >
        <h1 className="mb-10 text-center text-3xl font-semibold tracking-wide">
          Contact
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
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
      </section>
    </LayoutWrapper>
  );
}
