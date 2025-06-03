"use client"; 

import Image from 'next/image';
import Button from './Button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.15, triggerOnce: true }); 
  // Individual element visibility will be based on isSectionVisible with Tailwind delays

  const editorialImageUrl = 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; 

  return (
    <section 
      ref={sectionRef} 
      className="bg-white py-24 sm:py-28 md:py-32 lg:py-40" 
    >
      <div className={`container mx-auto px-4 md:px-8`}>
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 
            className={`font-versailles text-3xl sm:text-4xl md:text-5xl font-normal text-primary leading-tight tracking-tight mb-4 sm:mb-6
                         transition-opacity transform duration-500 ease-out
                         ${isSectionVisible ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-8'}`}>
            Welcome to The Fix Clinic
          </h2>
          <p 
            className={`font-apfel text-lg sm:text-xl md:text-2xl font-light text-gray-600 leading-snug tracking-normal sm:tracking-wide max-w-3xl mx-auto
                         transition-opacity transform duration-500 ease-out
                         ${isSectionVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8'}`}>
            Experience a sanctuary where artistry meets science, dedicated to your personalized aesthetic journey and holistic well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"> 
          <div 
            className={`relative w-full h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[45rem] rounded-lg overflow-hidden shadow-xl group
                           transition-opacity transform duration-700 ease-out
                           ${isSectionVisible ? 'opacity-100 scale-100 delay-300' : 'opacity-0 scale-95 translate-y-8'}`} // Combined translate-y with scale
          >
            <Image
              src={editorialImageUrl}
              alt="Editorial style image representing The Fix Clinic's serene environment"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105" 
            />
          </div>

          <div 
            className={`py-6 md:py-0
                           transition-opacity transform duration-700 ease-out
                           ${isSectionVisible ? 'opacity-100 translate-x-0 delay-400' : 'opacity-0 -translate-x-10'}`}  // Slide from left maintained
          >
            <h3 className="font-versailles text-2xl sm:text-3xl font-normal text-primary leading-snug tracking-normal mb-6 sm:mb-8"> 
              Our Philosophy of Care
            </h3>
            <p className="font-apfel text-sm sm:text-base text-gray-700 leading-relaxed sm:leading-loose mb-6 sm:mb-8"> 
              At The Fix Clinic, we believe that true beauty radiates from within. Our philosophy is centered on enhancing your natural features through meticulously personalized treatments, delivered in a serene and luxurious environment. We are dedicated to the art and science of aesthetic medicine, offering a harmonious blend of cutting-edge technology and bespoke care.
            </p>
            <p className="font-apfel text-sm sm:text-base text-gray-700 leading-relaxed sm:leading-loose mb-8 sm:mb-10"> 
              Our team of highly skilled practitioners is committed to understanding your unique aspirations. We take a holistic approach, considering every aspect of your well-being to craft treatment plans that not only address your aesthetic goals but also promote confidence and vitality. Experience the pinnacle of care where innovation meets artistry.
            </p>
            <Button href="/about" variant="secondary" className="text-sm sm:text-base"> 
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
