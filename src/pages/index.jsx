import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";

export default function HomePage() {
  return (
    <LayoutWrapper>
      <HeroSection />
      <ServicesSection />
    </LayoutWrapper>
  );
}
