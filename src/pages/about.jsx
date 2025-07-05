import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <PageTransition>
      <LayoutWrapper>
        <motion.section
          aria-label="About Keystone Notary Group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-gray-900 via-black to-gray-950 py-16 text-gray-200 sm:py-24"
        >
          <div className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
            <h1 className="text-center">About Keystone Notary Group</h1>
            <p className="mt-6 text-center text-gray-300 sm:text-lg">
              Keystone Notary Group, LLC is a mobile notary service dedicated to professionalism, punctuality, and privacy. We proudly serve Bucks and Montgomery County, Pennsylvania.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="bg-neutral-800 p-6 text-center shadow-sm">
                <p className="font-medium">Certified Loan Signing Agent</p>
              </div>
              <div className="bg-neutral-800 p-6 text-center shadow-sm">
                <p className="font-medium">NNA Certified and Insured</p>
              </div>
              <div className="bg-neutral-800 p-6 text-center shadow-sm">
                <p className="font-medium">Serving Bucks & Montgomery County</p>
              </div>
              <div className="bg-neutral-800 p-6 text-center shadow-sm">
                <p className="font-medium">After-Hours &amp; Emergency Services Available</p>
              </div>
            </div>
            <p className="mt-8 text-center text-sm text-gray-400">Commissioned in the Commonwealth of Pennsylvania</p>
          </div>
        </motion.section>
      </LayoutWrapper>
    </PageTransition>
  );
}
