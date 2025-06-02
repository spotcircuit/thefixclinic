import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../ui/Container';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block animate-fadeIn">
            <Image
              src="/images/misc/Caitlin1.webp"
              alt="The Fix Clinic Interior"
              width={592}
              height={653}
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Content Column */}
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">The Fix Clinic</h2>
            <h3 className="text-xl md:text-2xl font-medium text-secondary mb-6">Your NATURAL REJUVENATION Awaits</h3>
            
            {/* Image for mobile only */}
            <div className="block md:hidden mb-6">
              <Image
                src="/images/misc/Caitlin1.webp"
                alt="The Fix Clinic Interior"
                width={592}
                height={653}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            
            <div className="text-dark space-y-4 mb-8">
              <p>
                No matter how well you've taken care of yourself, the natural aging process is hard to escape. 
                Our guests frequently state, "I just don't look like myself anymore." At The Fix Clinic, we 
                understand the foundational science behind aging and wellness.
              </p>
              <p>
                Our Board Certified Nurse Practitioners have a unique background in Family Medicine that allows 
                for a more holistic approach to Aesthetic Medicine and Wellness. Further, our Licensed Estheticians 
                have spent years learning about the multiple pathways that contribute to skin conditions and well-being.
              </p>
              <p className="font-semibold">
                A visit to The Fix Clinic is unlike any other.
              </p>
              <p>
                Our skilled providers allow time for a comprehensive assessment. They develop a personalized plan 
                to equip you with the knowledge and treatments needed for improved wellness and exceptional results.
              </p>
            </div>
            
            <div className="hidden md:block mb-8">
              {/* Image slider could go here */}
            </div>
            
            <Button href="/about">
              READ MORE
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;