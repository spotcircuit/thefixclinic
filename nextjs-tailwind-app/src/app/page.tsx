import HeroSection from "../components/HeroSection";
import ServiceCategoriesSection from "../components/ServiceCategoriesSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceCategoriesSection />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
      {/* Other page content will go here in the future */}
    </>
  );
}
