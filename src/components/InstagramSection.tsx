"use client";

import React from 'react';
import Button from './Button';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Image from 'next/image'; // For potential future image use

// Simple SVG for Instagram icon placeholder
const InstagramIconPlaceholder = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
  </svg>
);


const InstagramSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.5, triggerOnce: true });
  const [taglineRef, isTaglineVisible] = useScrollAnimation({ threshold: 0.5, triggerOnce: true });
  const [gridRef, isGridVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const [buttonRef, isButtonVisible] = useScrollAnimation({ threshold: 0.5, triggerOnce: true });

  const placeholderPosts = Array(4).fill(null); // For 4 placeholder posts

  // Placeholder image URLs from Pexels with a square-ish or portrait aspect ratio
  const placeholderImageUrls = [
    'https://images.pexels.com/photos/3985296/pexels-photo-3985296.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', // Square-ish
    'https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1', // Portrait
    'https://images.pexels.com/photos/3760297/pexels-photo-3760297.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', // Square-ish
    'https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1', // Portrait
  ];


  return (
    <section 
      ref={sectionRef}
      className={`bg-background py-24 sm:py-28 md:py-32 lg:py-40 px-4 md:px-8
                  transition-opacity transform duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
    >
      <div className="container mx-auto">
        <h2 
          ref={titleRef}
          className={`font-versailles text-3xl sm:text-4xl md:text-5xl font-normal text-primary leading-tight tracking-tight text-center mb-4 sm:mb-6
                       transition-opacity transform duration-500 ease-out 
                       ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Follow Our Journey
        </h2>
        <p 
          ref={taglineRef}
          className={`font-apfel text-base sm:text-lg md:text-xl font-light text-gray-600 leading-snug tracking-normal sm:tracking-wide text-center max-w-xl mx-auto mb-12 sm:mb-16 md:mb-20
                       transition-opacity transform duration-500 ease-out delay-150
                       ${isTaglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          @TheFixClinicOfficial
        </p>

        <div 
          ref={gridRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8
                       transition-opacity transform duration-500 ease-out delay-300
                       ${isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {placeholderPosts.map((_, index) => (
            <a 
              key={index} 
              href="https://instagram.com/thefixclinic_placeholder" // Placeholder link
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-gray-200 rounded-md overflow-hidden relative group shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Using next/image for placeholder */}
              <Image
                src={placeholderImageUrls[index % placeholderImageUrls.length]} // Cycle through placeholder images
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
          ref={buttonRef}
          className={`text-center mt-12 sm:mt-16 md:mt-20
                       transition-opacity transform duration-500 ease-out delay-450
                       ${isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
