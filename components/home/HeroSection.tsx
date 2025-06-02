import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { FaPhone } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-teal">
      {/* Main hero container */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/team/team.png"
          alt="The Fix Clinic Team"
          width={2048}
          height={1110}
          priority
          className="w-full h-auto object-cover"
        />
        
        {/* Optional overlay for better text visibility if needed */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
      </div>
      
      {/* Content Section */}
      <div className="py-16 bg-teal text-cream">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-secondary mb-6 animate-fadeIn">
              Our Promise
            </h1>
            <div className="body-large space-y-4 mb-8">
              <p>
                At The Fix Clinic we strive to provide aesthetic and wellness services that exceed every expectation. 
                With over 30 years of combined experience, our highly knowledgeable and skilled providers are known 
                for their comprehensive approach, transformative treatments, and holistic considerations.
              </p>
              <p>
                Our team of award-winning experts is committed to utilizing the latest technology and techniques 
                to give you results that will enhance your confidence, revitalize your health, and compliment your natural beauty.
              </p>
              <p>
                Awarded with VIP status for several brands such as Merz, Galderma, and Hydrafacial because of the volume 
                of guests we treat, The Fix Clinic continues to lead the area's Aesthetic and Wellness facilities. 
                Our compassionate providers look forward to adding you to our family of guests from the 
                Northern Virginia area and beyond.
              </p>
            </div>
            <Button 
              href="tel:(703) 576-8315" 
              variant="cta-inverted-pill"
              size="lg" 
            >
              <FaPhone className="mr-2" />
              CALL US TODAY
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;