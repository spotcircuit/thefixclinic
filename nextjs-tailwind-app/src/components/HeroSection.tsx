import Link from 'next/link';

const HeroSection = () => {
  // Placeholder image URL from Pexels.
  const placeholderImageUrl = 'https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; // A serene, abstract image

  return (
    <section
      className="relative flex items-center justify-center min-h-[700px] md:min-h-screen bg-cover bg-center text-center px-4"
      style={{ backgroundImage: `url('${placeholderImageUrl}')` }}
    >
      {/* Overlay for better text readability (optional, but good practice) */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-versailles text-brand-cream mb-6">
          Elevate Your Well-being
        </h1>
        <p className="text-lg md:text-xl font-apfel text-brand-cream mb-10">
          Discover a sanctuary of rejuvenation and personalized care. We are dedicated to enhancing your natural beauty and promoting holistic wellness through our bespoke treatments.
        </p>
        <Link
          href="/services"
          className="bg-primary text-background font-apfel py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors text-lg"
        >
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
