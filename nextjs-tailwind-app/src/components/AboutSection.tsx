"use client"; 

import Image from 'next/image';
import Button from './Button';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AboutSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15, triggerOnce: true }); // Adjusted threshold

  const placeholderImageUrl = 'https://images.pexels.com/photos/1834405/pexels-photo-1834405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  return (
    <section 
      ref={sectionRef}
      className="bg-white py-12 sm:py-16 md:py-20 lg:py-24" // Adjusted padding scale
    >
      <div className={`container mx-auto px-4 md:px-8
                       transition-opacity transform duration-700 ease-out delay-100
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"> {/* Adjusted gap */}
          {/* Image Column */}
          <div className={`relative w-full h-72 sm:h-80 md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg
                           transition-all duration-500 ease-out delay-200
                           ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} // Adjusted base height & md height
          >
            <Image
              src={placeholderImageUrl}
              alt="Luxurious clinic interior - The Fix Clinic"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Text Content Column */}
          <div className={`py-6 md:py-0
                           transition-opacity transform duration-500 ease-out delay-300
                           ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} 
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-versailles text-primary mb-4 sm:mb-6"> {/* Adjusted title size & margin */}
              Pioneering Aesthetic Excellence
            </h2>
            <p className="font-apfel text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6"> {/* Adjusted text size & margin */}
              At The Fix Clinic, we believe that true beauty radiates from within. Our philosophy is centered on enhancing your natural features through meticulously personalized treatments, delivered in a serene and luxurious environment. We are dedicated to the art and science of aesthetic medicine, offering a harmonious blend of cutting-edge technology and bespoke care.
            </p>
            <p className="font-apfel text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8"> {/* Adjusted text size & margin */}
              Our team of highly skilled practitioners is committed to understanding your unique aspirations. We take a holistic approach, considering every aspect of your well-being to craft treatment plans that not only address your aesthetic goals but also promote confidence and vitality. Experience the pinnacle of care where innovation meets artistry.
            </p>
            <Button href="/about" variant="secondary" className="text-sm sm:text-base py-2.5 px-5 sm:py-3 sm:px-6"> {/* Adjusted button size */}
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
