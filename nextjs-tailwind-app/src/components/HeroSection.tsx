"use client"; 

import Link from 'next/link';

const HeroSection = () => {
  const videoSrc = '/videos/hero_video.mp4'; 

  return (
    <section
      className="relative flex items-center justify-center min-h-[560px] sm:min-h-[650px] md:min-h-screen text-center px-4 overflow-hidden"
    >
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20" 
      />
      <div className="absolute inset-0 bg-black opacity-40 -z-10"></div>

      <div className="relative z-10 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
        <h1 className="font-versailles text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight sm:leading-none tracking-tight mb-5 sm:mb-6 md:mb-8">
          Elevate Your Well-being
        </h1>
        <p className="font-apfel text-base sm:text-lg md:text-xl font-light text-brand-cream leading-loose tracking-normal sm:tracking-wide mb-8 sm:mb-10 md:mb-12 max-w-prose mx-auto">
          Discover a sanctuary of rejuvenation and personalized care. We are dedicated to enhancing your natural beauty and promoting holistic wellness through our bespoke treatments.
        </p>
        <Link
          href="/services"
          className="bg-primary text-background font-apfel text-sm sm:text-base font-medium tracking-wide py-3 px-6 sm:px-8 rounded-md 
                     hover:bg-opacity-90 transition-all duration-300 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-white"
        >
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
