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
        className="mx-auto max-w-screen-lg px-4 py-12 text-gray-200 sm:px-6 sm:py-16 lg:px-8"
      >
        <h1 className="mb-8 text-center text-2xl font-semibold tracking-wide sm:mb-12 sm:text-3xl">
          Contact
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
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
        {/* Additional instructions and contact information */}
        <p className="mt-8 text-sm text-gray-400 sm:mt-10">
          Please mention the type of document or notarization service you are requesting.
        </p>
        <div className="mt-4 space-y-2 text-sm text-gray-300">
          <p>
            <strong>Phone:</strong> (267) 309-9000
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:appointments@keystonenotarygroup.com"
              className="text-blue-400 hover:text-blue-300"
            >
              appointments@keystonenotarygroup.com
            </a>
          </p>
          <p>
            <strong>Service Area:</strong> Bucks and Montgomery County, PA
          </p>
        </div>
      </section>
    </LayoutWrapper>
  );
}
