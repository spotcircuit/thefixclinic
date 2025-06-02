import Image from 'next/image'; // Using next/image for optimized images
import Button from './Button'; // Import the reusable Button component

const AboutSection = () => {
  // Placeholder image URL from Pexels - e.g., a calm, luxurious clinic interior or abstract texture
  const placeholderImageUrl = 'https://images.pexels.com/photos/1834405/pexels-photo-1834405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; // Example: modern, serene interior

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={placeholderImageUrl}
              alt="Luxurious clinic interior - The Fix Clinic"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Text Content Column */}
          <div className="py-8 md:py-0">
            <h2 className="text-3xl lg:text-4xl font-versailles text-primary mb-6">
              Pioneering Aesthetic Excellence
            </h2>
            <p className="font-apfel text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
              At The Fix Clinic, we believe that true beauty radiates from within. Our philosophy is centered on enhancing your natural features through meticulously personalized treatments, delivered in a serene and luxurious environment. We are dedicated to the art and science of aesthetic medicine, offering a harmonious blend of cutting-edge technology and bespoke care.
            </p>
            <p className="font-apfel text-base lg:text-lg text-gray-700 leading-relaxed mb-8">
              Our team of highly skilled practitioners is committed to understanding your unique aspirations. We take a holistic approach, considering every aspect of your well-being to craft treatment plans that not only address your aesthetic goals but also promote confidence and vitality. Experience the pinnacle of care where innovation meets artistry.
            </p>
            <Button href="/about" variant="secondary">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
