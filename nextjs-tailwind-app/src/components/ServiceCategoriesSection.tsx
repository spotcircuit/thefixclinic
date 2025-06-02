"use client"; 

import Card from './Card';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
}

const serviceCategoriesData: ServiceCategory[] = [
  {
    id: '1',
    title: 'Aesthetic Injections',
    description: 'Smooth wrinkles and restore volume with our expertly administered injectables for a refreshed, youthful appearance.',
  },
  {
    id: '2',
    title: 'Skin Rejuvenation',
    description: 'Revitalize your skin\'s texture and tone with advanced treatments designed to promote clarity and radiance.',
  },
  {
    id: '3',
    title: 'Wellness Therapies',
    description: 'Enhance your overall well-being with therapies that support balance, vitality, and inner harmony.',
  },
];

const ServiceCategoriesSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      ref={sectionRef}
      className={`bg-background py-12 sm:py-16 px-4 md:px-8 
                  transition-opacity transform duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} // Reduced base py padding
    >
      <div className="container mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-versailles text-primary text-center mb-10 sm:mb-12 md:mb-16
                       transition-opacity transform duration-500 ease-out delay-100
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> {/* Adjusted title size & margins */}
          Explore Our Treatments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"> {/* Adjusted gap for mobile */}
          {serviceCategoriesData.map((service, index) => (
            <div
              key={service.id}
              className={`transition-opacity transform duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${150 + index * 150}ms` : '0ms' }}
            >
              <Card
                className="flex flex-col group hover:shadow-xl hover:scale-105 h-full" 
              >
                {/* Card padding is p-6 md:p-8 by default from Card.tsx, which is good. */}
                <div className="p-2 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-apfel text-primary mb-2 sm:mb-3"> {/* Adjusted card title size & margin */}
                    {service.title}
                  </h3>
                  <p className="font-apfel text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 flex-grow"> {/* Adjusted card desc text size & margin */}
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
