"use client";

import Card from './Card'; 
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: "The team at The Fix Clinic is truly exceptional. From the moment I walked in, I felt welcomed and understood. My results are incredible, and I couldn't be happier!",
    clientName: 'Sarah L.',
  },
  {
    id: '2',
    quote: "I've never experienced such a high level of professionalism and care. The attention to detail and personalized approach made all the difference. Highly recommend!",
    clientName: 'Michael B.',
  },
  {
    id: '3',
    quote: "A truly transformative experience. The expertise here is evident, and the atmosphere is so calming. I feel rejuvenated and more confident than ever.",
    clientName: 'Jessica P.',
  },
];

const TestimonialsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      ref={sectionRef}
      className={`bg-background py-12 sm:py-16 md:py-20 lg:py-24 
                  transition-opacity transform duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} // Adjusted padding
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-versailles text-primary text-center mb-10 sm:mb-12 md:mb-16
                       transition-opacity transform duration-500 ease-out delay-100
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> {/* Adjusted title size & margins */}
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"> {/* Adjusted gap for mobile */}
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity transform duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${150 + index * 150}ms` : '0ms' }}
            >
              <Card key={testimonial.id} className="flex flex-col justify-between h-full"> {/* Ensured h-full */}
                {/* Card padding is p-6 md:p-8 by default from Card.tsx */}
                <div>
                  <p className="font-apfel italic text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6"> {/* Adjusted text size & margin */}
                    "{testimonial.quote}"
                  </p>
                </div>
                <div>
                  <p className="font-apfel font-semibold text-primary text-right text-xs sm:text-sm"> {/* Adjusted client name size */}
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
