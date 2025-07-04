import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <PageTransition>
      <LayoutWrapper>
        <motion.section
          aria-label="Page not found"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="container mx-auto max-w-screen-lg overflow-x-hidden bg-black px-4 py-16 lg:py-24 text-center text-gray-200 sm:px-6 lg:px-8 space-y-4 sm:space-y-6"
        >
        <h1>404 – Page Not Found</h1>
        <div aria-hidden="true" className="border-b-2 border-blue-500 w-12 mx-auto mb-6" />
        <p className="mb-8 text-base sm:text-lg text-gray-400">Sorry, the page you are looking for doesn\'t exist.</p>
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-md bg-blue-600 px-6 min-h-[48px] py-2 font-semibold text-white shadow transition-transform duration-200 hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-neutral-900 max-w-[90%] w-full sm:w-auto mx-auto"
          >
            Return Home
          </motion.a>
        </motion.section>
      </LayoutWrapper>
    </PageTransition>
  );
}
