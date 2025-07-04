import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import LandingHero from "../components/LandingHero";
import PageTransition from "../components/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      {/* Use default responsive container for consistent layout */}
      <LayoutWrapper>
        <LandingHero />
      </LayoutWrapper>
    </PageTransition>
  );
}
