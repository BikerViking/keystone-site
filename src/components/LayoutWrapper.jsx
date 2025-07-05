import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import Certifications from "./Certifications";
import BackToTopButton from "./BackToTopButton";
import RequestNotaryButton from "./RequestNotaryButton";
import LegalFooter from "./LegalFooter";
import ScrollProgress from "./ScrollProgress";

export default function LayoutWrapper({ children }) {
  return (
      <div
        className="w-full min-h-screen bg-black flex flex-col overflow-x-hidden"
        style={{ backgroundImage: "url('/bg-texture.PNG')" }}
      >
      <ScrollProgress />
      {/* Soft radial accent for subtle depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-gradient-radial from-blue-600/20 via-blue-600/10 to-transparent blur-3xl animate-pulse-slow"
      />
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
              "additionalType": "https://schema.org/Notary",
              "name": "Keystone Notary Group",
              "description": "Mobile Notary Services in Pennsylvania",
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
      <main role="main" className="flex-grow pt-20 pb-20 w-full">
        {children}
      </main>
      <Certifications />
      <Footer />
      <LegalFooter />
      {/* Floating quick access button for mobile devices */}
      <RequestNotaryButton />
      <BackToTopButton />
    </div>
  );
}
