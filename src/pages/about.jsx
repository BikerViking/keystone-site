import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <PageTransition>
      <LayoutWrapper>
        <motion.section
          aria-label="About"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-neutral-900 via-black to-neutral-950 py-16 lg:py-24 text-gray-200 space-y-4 sm:space-y-6 w-full min-h-dvh"
        >
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-center">About Keystone Notary Group</h1>
            <div
              aria-hidden="true"
              className="border-b-2 border-blue-500 w-12 mb-6"
            />
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
              Keystone Notary Group, LLC is a mobile notary service dedicated to
              professionalism, punctuality, and privacy. We provide document
              notarization services throughout Bucks and Montgomery County,
              Pennsylvania.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mt-12">
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
                <p className="font-medium">
                  After-Hours & Emergency Services Available
                </p>
              </div>
            </div>
            <p className="mt-10 text-left text-sm text-gray-400">
              Commissioned in the Commonwealth of Pennsylvania
            </p>
          </div>
        </motion.section>
      </LayoutWrapper>
    </PageTransition>
  );
}
