"use client"; 

import Card from './Card';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
}

const serviceCategoriesData: ServiceCategory[] = [
  { id: '1', title: 'Aesthetic Injections', description: 'Smooth wrinkles and restore volume with our expertly administered injectables for a refreshed, youthful appearance.' },
  { id: '2', title: 'Skin Rejuvenation', description: 'Revitalize your skin\'s texture and tone with advanced treatments designed to promote clarity and radiance.' },
  { id: '3', title: 'Wellness Therapies', description: 'Enhance your overall well-being with therapies that support balance, vitality, and inner harmony.' },
];

const ServiceCategoriesSection = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  // Title and tagline visibility will be tied to the section's visibility, but with delays.
  // Individual cards will also be tied to section visibility with staggered delays.

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
          Explore Our Treatments
        </h2>
        <p 
          className={`font-apfel text-base sm:text-lg md:text-xl font-light text-gray-600 leading-snug tracking-normal sm:tracking-wide text-center max-w-2xl mx-auto mb-16 sm:mb-20 md:mb-24
                       transition-opacity transform duration-500 ease-out
                       ${isSectionVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8'}`}>
          Discover our curated selection of advanced aesthetic and wellness services, tailored to your unique needs and designed to unveil your natural radiance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {serviceCategoriesData.map((service, index) => (
            <div
              key={service.id}
              className={`transition-opacity transform duration-500 ease-out ${
                isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' // Reduced translate-y for cards
              }`}
              style={{ transitionDelay: isSectionVisible ? `${300 + index * 150}ms` : '0ms' }}
            >
              <Card
                className="flex flex-col group hover:shadow-xl hover:scale-105 h-full" 
              >
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="font-apfel text-xl sm:text-2xl font-medium text-primary leading-snug tracking-normal mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="font-apfel text-sm sm:text-base font-normal text-gray-700 leading-relaxed sm:leading-loose mb-4 sm:mb-6 flex-grow">
                    {service.description}
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

export default ServiceCategoriesSection;
