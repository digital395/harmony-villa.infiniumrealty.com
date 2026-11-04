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

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutHarmony />
      <ChooseYourHome />
      <HarmonyVillaFeatures />
      {/* <ModelVillaCTA /> */}
      <WhyHarmony />
      <AmenitiesSection />
      <HarmonyFilmSection />
      <LocationSection />
      <CTA />
    </main>
  );
}
