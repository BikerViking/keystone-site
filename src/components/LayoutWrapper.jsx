import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children, fullWidth = false }) {
  return (
    <div
      className="scroll-smooth relative flex min-h-screen w-full flex-col overflow-hidden brightness-125 contrast-110 text-gray-200 before:absolute before:inset-0 before:-z-10 before:pointer-events-none before:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] before:bg-[length:50px_50px]"
      /* Ensure pages share consistent textured background */
      style={{ backgroundImage: "url('/bg-texture.PNG')" }}
    >
      <Helmet>
        <title>Keystone Notary Group – Mobile Notary Services</title>
        <meta
          name="description"
          content="Keystone Notary Group, LLC provides professional mobile notary services throughout Bucks and Montgomery County, Pennsylvania. Certified, punctual, and NNA insured."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Keystone Notary Group – Mobile Notary Services" />
        <meta
          property="og:description"
          content="Professional mobile notary services in Bucks and Montgomery County, PA. Certified, punctual, and NNA insured."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.PNG" />
        <meta property="og:url" content="https://www.keystonenotarygroup.com/" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Keystone Notary Group – Mobile Notary Services" />
        <meta
          name="twitter:description"
          content="Professional mobile notary services in Bucks and Montgomery County, PA. Certified, punctual, and NNA insured."
        />
        <meta name="twitter:image" content="/logo.PNG" />
      </Helmet>
      <Header />
      <main
        role="main"
        className={`flex-grow ${
          fullWidth
            ? ''
            : 'mx-auto max-w-screen-lg px-4 py-12 sm:px-6 sm:py-16 lg:px-8'
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
