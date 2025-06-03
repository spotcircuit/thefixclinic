"use client";

import React from 'react';
import Button from './Button';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Image from 'next/image'; 

const InstagramIconPlaceholder = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
  </svg>
);

const InstagramSection = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  // Removed individual refs for title, tagline, grid, button as their animation is tied to isSectionVisible with delays.

  const placeholderPosts = Array(4).fill(null);
  const placeholderImageUrls = [
    'https://images.pexels.com/photos/3985296/pexels-photo-3985296.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    'https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1',
    'https://images.pexels.com/photos/3760297/pexels-photo-3760297.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    'https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1',
  ];

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
                       ${isSectionVisible ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-8'}`}
        >
          Follow Our Journey
        </h2>
        <p 
          className={`font-apfel text-base sm:text-lg md:text-xl font-light text-gray-600 leading-snug tracking-normal sm:tracking-wide text-center max-w-xl mx-auto mb-12 sm:mb-16 md:mb-20
                       transition-opacity transform duration-500 ease-out
                       ${isSectionVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8'}`}
        >
          @TheFixClinicOfficial
        </p>

        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8
                       transition-opacity transform duration-500 ease-out 
                       ${isSectionVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8'}`}
        >
          {placeholderPosts.map((_, index) => (
            <a 
              key={index} 
              href="https://instagram.com/thefixclinic_placeholder" 
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-md overflow-hidden relative group shadow-md hover:shadow-lg transition-shadow duration-300"
              // Staggering individual posts if desired (example):
              // style={{ transitionDelay: isSectionVisible ? `${300 + index * 100}ms` : '0ms' }}
              // className={`aspect-square rounded-md overflow-hidden relative group shadow-md hover:shadow-lg transition-all duration-300 ease-out
              //             ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Image
                src={placeholderImageUrls[index % placeholderImageUrls.length]} 
                alt={`Instagram post placeholder ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <InstagramIconPlaceholder />
              </div>
            </a>
          ))}
        </div>

        <div 
          className={`text-center mt-12 sm:mt-16 md:mt-20
                       transition-opacity transform duration-500 ease-out
                       ${isSectionVisible ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-8'}`}
        >
          <Button 
            href="https://instagram.com/thefixclinic_placeholder" 
            variant="secondary"
            className="text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow Us @TheFixClinic
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
