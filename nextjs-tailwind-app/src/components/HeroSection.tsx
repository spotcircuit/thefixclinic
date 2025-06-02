"use client"; // If using hooks or event handlers in the future, otherwise can be removed if not needed.

import Link from 'next/link';

const HeroSection = () => {
  const placeholderImageUrl = 'https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  return (
    <section
      className="relative flex items-center justify-center min-h-[560px] sm:min-h-[650px] md:min-h-screen bg-cover bg-center text-center px-4"
      style={{ backgroundImage: `url('${placeholderImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto"> {/* Adjusted max-width for smaller screens */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-versailles text-brand-cream mb-4 md:mb-6">
          Elevate Your Well-being
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-apfel text-brand-cream mb-8 md:mb-10">
          Discover a sanctuary of rejuvenation and personalized care. We are dedicated to enhancing your natural beauty and promoting holistic wellness through our bespoke treatments.
        </p>
        <Link
          href="/services"
          className="bg-primary text-background font-apfel py-3 px-6 sm:px-8 rounded-md hover:bg-opacity-90 transition-colors text-base sm:text-lg" // Adjusted padding & text size for mobile
        >
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
