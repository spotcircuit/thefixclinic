"use client"; // Add "use client" if we plan to add any client-side interactivity later, not strictly needed for current content

import Button from './Button'; 
import useScrollAnimation from '@/hooks/useScrollAnimation'; // Import if adding scroll animation

const CtaSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={sectionRef}
      className={`bg-white py-12 sm:py-16 md:py-20 lg:py-24
                  transition-opacity transform duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} // Adjusted padding & added animation
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-versailles text-primary mb-4 sm:mb-6
                       transition-opacity transform duration-500 ease-out delay-100
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> {/* Adjusted title size & margin, added animation */}
          Ready to Start Your Journey?
        </h2>
        <p className={`font-apfel text-sm sm:text-base md:text-lg text-gray-700 max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed
                       transition-opacity transform duration-500 ease-out delay-200
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> {/* Adjusted text size, max-width, margin, added animation */}
          Take the first step towards rejuvenating your confidence and well-being. Our expert team is here to guide you through a personalized experience tailored to your unique aesthetic goals.
        </p>
        <div className={`transition-opacity transform duration-500 ease-out delay-300
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> {/* Added animation to button container */}
          <Button 
            href="/contact" 
            variant="primary" 
            className="text-base sm:text-lg py-3 px-8 sm:px-10" // Adjusted button size
          >
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
