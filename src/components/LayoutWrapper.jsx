import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import Certifications from "./Certifications";
import BackToTopButton from "./BackToTopButton";
import RequestNotaryButton from "./RequestNotaryButton";

export default function LayoutWrapper({ children, fullWidth = false }) {
  return (
    <div
      className="scroll-smooth relative flex min-h-screen w-full flex-col overflow-x-hidden brightness-125 contrast-110 text-gray-200 before:absolute before:inset-0 before:-z-10 before:pointer-events-none before:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] before:bg-[length:50px_50px]"
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
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Keystone Notary Group, LLC",
              "image": "/logo.PNG",
              "url": "https://www.keystonenotarygroup.com/",
              "telephone": "+1-267-309-9000",
              "email": "appointments@keystonenotarygroup.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bucks County",
                "addressRegion": "PA",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "AdministrativeArea",
                  "name": "Bucks County, PA"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Montgomery County, PA"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": "+1-267-309-9000",
                "email": "appointments@keystonenotarygroup.com"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <Header />
      <main
        role="main"
        className={`flex-grow pt-20 pb-20 ${
          fullWidth
            ? ''
            : 'mx-auto max-w-screen-lg px-4 py-12 sm:px-6 sm:py-16 lg:px-8'
        }`}
      >
        {children}
      </main>
      <Certifications />
      <Footer />
      {/* Floating quick access button for mobile devices */}
      <RequestNotaryButton />
      <BackToTopButton />
    </div>
  );
}
