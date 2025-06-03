"use client";

import Card from './Card'; 
import useScrollAnimation from '../hooks/useScrollAnimation';

interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
}

const testimonialsData: Testimonial[] = [
  { id: '1', quote: "The team at The Fix Clinic is truly exceptional. From the moment I walked in, I felt welcomed and understood. My results are incredible, and I couldn't be happier!", clientName: 'Sarah L.' },
  { id: '2', quote: "I've never experienced such a high level of professionalism and care. The attention to detail and personalized approach made all the difference. Highly recommend!", clientName: 'Michael B.' },
  { id: '3', quote: "A truly transformative experience. The expertise here is evident, and the atmosphere is so calming. I feel rejuvenated and more confident than ever.", clientName: 'Jessica P.' },
];

const TestimonialsSection = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      ref={sectionRef}
      className={`bg-background py-24 sm:py-28 md:py-32 lg:py-40 px-4 md:px-8
                  transition-opacity transform duration-700 ease-out
                  ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
    >
      <div className="container mx-auto">
        <h2 
          className={`font-versailles text-3xl sm:text-4xl md:text-5xl font-normal text-primary leading-tight tracking-tight text-center mb-4 sm:mb-6
                       transition-opacity transform duration-500 ease-out
                       ${isSectionVisible ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-8'}`}>
          What Our Clients Say
        </h2>
        <p 
          className={`font-apfel text-base sm:text-lg md:text-xl font-light text-gray-600 leading-snug tracking-normal sm:tracking-wide text-center max-w-2xl mx-auto mb-16 sm:mb-20 md:mb-24
                       transition-opacity transform duration-500 ease-out
                       ${isSectionVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8'}`}>
          Hear directly from our valued clients about their experiences and transformations at The Fix Clinic.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity transform duration-500 ease-out ${
                isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' // Reduced translate-y
              }`}
              style={{ transitionDelay: isSectionVisible ? `${300 + index * 150}ms` : '0ms' }}
            >
              <Card key={testimonial.id} className="flex flex-col justify-between h-full">
                <div>
                  <p className="font-apfel text-sm sm:text-base font-normal text-gray-700 leading-relaxed sm:leading-loose italic mb-6 sm:mb-8"> 
                    "{testimonial.quote}"
                  </p>
                </div>
                <div>
                  <p className="font-apfel text-xs sm:text-sm font-medium text-primary leading-normal tracking-normal text-right"> 
                    - {testimonial.clientName}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
