import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../ui/Container';

const FounderSection = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div>
            <h4 className="text-2xl font-semibold text-primary mb-2">Natasha Prymak, FNP-C</h4>
            <h5 className="text-xl text-secondary-dark mb-6">Board Certified Nurse Practitioner</h5>
            
            {/* Mobile image */}
            <div className="block md:hidden mb-6">
              <Image
                src="/images/misc/image3.webp"
                alt="Natasha Prymak"
                width={800}
                height={914}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            
            <div className="text-dark space-y-4 mb-6">
              <p>
                Welcome to The Fix Clinic! I'm so glad you've found us. Whether you've come to this 
                page through the referral of a friend, or a Google search, I want you to know that our 
                goal is to treat you like family. 
              </p>
              <p>
                As an award-winning Nurse Practitioner with experience in the Urgent Care, Emergency Room, 
                and Family Practice settings, I am conservative yet comprehensive in my treatment plans, 
                and well-versed in minimizing treatment risks while maximizing treatment outcomes.
              </p>
              <p>
                I have been fortunate enough to cultivate The Fix Clinic team with some of the most skilled 
                and respected Aesthetic and Wellness providers in Loudoun County and surrounding areas. It is 
                my passion to bring to you a modern and friendly atmosphere with providers that support you 
                and guide you in your journey to feel more healthy and beautiful. We want to help you 
                celebrate a desire to enjoy life to its fullest. We cannot wait to meet you!
              </p>
            </div>
            
            <div className="mb-6">
              <Image
                src="/images/misc/natasha-Signature-Logo-1.webp"
                alt="Natasha Prymak Signature"
                width={333}
                height={121}
                className="h-16 w-auto"
              />
              <h6 className="text-sm text-gray-600 mt-2">Founder/Medical Director</h6>
            </div>
            
            <Button 
              href="https://thefixclinic.janeapp.com/#/list" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Meet Our Providers
            </Button>
          </div>
          
          {/* Image Column - Hidden on mobile */}
          <div className="hidden md:block">
            <Image
              src="/images/misc/image3.webp"
              alt="Natasha Prymak"
              width={800}
              height={914}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FounderSection;