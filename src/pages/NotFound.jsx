import React from "react";
import { Link } from "react-router-dom";
import LayoutWrapper from "../components/LayoutWrapper";

export default function NotFound() {
  return (
    <LayoutWrapper>
      <section
        aria-label="Page not found"
        className="bg-black mx-auto max-w-screen-lg px-4 py-12 lg:py-20 text-center text-gray-200 sm:px-6 lg:px-8"
      >
        <h1 className="mb-4">404 – Page Not Found</h1>
        <div aria-hidden="true" className="border-t border-gray-600 w-12 mx-auto mb-8 opacity-60" />
        <p className="mb-8 text-base sm:text-lg text-gray-400">Sorry, the page you are looking for doesn\'t exist.</p>
        <Link
          to="/"
          className="inline-block rounded-md bg-blue-600 px-6 min-h-[48px] py-2 font-semibold text-white shadow transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-neutral-900"
        >
          Return Home
        </Link>
      </section>
    </LayoutWrapper>
  );
}
