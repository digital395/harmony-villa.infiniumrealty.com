"use client";

import AboutHarmony from "@/section/about";
import AmenitiesSection from "@/section/amenities";
import HarmonyVillaFeatures from "@/section/features";
import Hero from "@/section/hero";
// import ModelVillaCTA from "@/section/modal";
import ChooseYourHome from "@/section/property";
import WhyHarmony from "@/section/why";
import HarmonyFilmSection from "@/section/video";
import LocationSection from "@/section/location";
import CTA from "@/section/cta";
import Stats from "@/section/stats";
import { useEffect } from "react";
import HomePopup from "@/components/home-popup";

export default function HomePage() {
  useEffect(() => {
  const hash = window.location.hash;

  if (!hash) return;

  const id = hash.substring(1);

  const timer = setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);

  return () => clearTimeout(timer);
}, []);
  return (
    <main className="overflow-hidden">
      <Hero />
      <Stats />
      <AboutHarmony />
      <ChooseYourHome />
      <HarmonyVillaFeatures />
      {/* <ModelVillaCTA /> */}
      <WhyHarmony />
      <AmenitiesSection />
      <HarmonyFilmSection />
      <LocationSection />
      <CTA />
      <HomePopup />
    </main>
  );
}
