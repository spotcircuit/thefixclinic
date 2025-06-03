import HeroSection from "@/components/HeroSection";
import ServiceCategoriesSection from "@/components/ServiceCategoriesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramSection from "@/components/InstagramSection"; // Added InstagramSection import
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceCategoriesSection />
      <AboutSection />
      <TestimonialsSection />
      <InstagramSection /> 
      <CtaSection />
      {/* Other page content will go here in the future */}
    </>
  );
}
