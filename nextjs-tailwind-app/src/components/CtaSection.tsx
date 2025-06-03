"use client"; 

import Button from './Button'; 
import useScrollAnimation from '@/hooks/useScrollAnimation'; 

const CtaSection = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={sectionRef}
      className={`bg-white py-24 sm:py-28 md:py-32 lg:py-40
                  transition-opacity transform duration-700 ease-out
                  ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h3 
          className={`font-versailles text-2xl sm:text-3xl md:text-4xl font-normal text-primary leading-snug tracking-normal text-center mb-6 sm:mb-8
                       transition-opacity transform duration-500 ease-out 
                       ${isSectionVisible ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-8'}`}
        > 
          Ready to Start Your Journey?
        </h3>
        <p 
          className={`font-apfel text-base sm:text-lg md:text-xl font-light text-gray-700 leading-loose tracking-normal sm:tracking-wide max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-10 sm:mb-12
                       transition-opacity transform duration-500 ease-out 
                       ${isSectionVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8'}`}
        > 
          Take the first step towards rejuvenating your confidence and well-being. Our expert team is here to guide you through a personalized experience tailored to your unique aesthetic goals.
        </p>
        <div 
          className={`transition-opacity transform duration-500 ease-out 
                        ${isSectionVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8'}`}
        > 
          <Button 
            href="/contact" 
            variant="primary" 
            className="text-sm sm:text-base py-3 px-8 sm:py-4 sm:px-12" 
          >
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
