import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../ui/Container';

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h6 className="text-accent-light mb-2 uppercase tracking-wider font-medium">DON'T WAIT. LET'S MEET.</h6>
            <p className="text-xl mb-6">Book with one of our expert providers</p>
            <Button 
              href="https://thefixclinic.janeapp.com/" 
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              Book With Us
            </Button>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/logo/main-logo.png"
              alt="The Fix Clinic"
              width={400}
              height={280}
              className="h-40 w-auto filter brightness-110"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToActionSection;