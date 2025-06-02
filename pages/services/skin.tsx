import React from 'react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import Link from 'next/link';
import Image from 'next/image';

// Treatment component for individual treatments
const Treatment = ({ 
  title, 
  description, 
  image, 
  link 
}: { 
  title: string; 
  description: string; 
  image: string; 
  link: string 
}) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link 
        href={link} 
        className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
      >
        Learn more
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
};

// Main Skin Services page component
const SkinServicesPage = () => {
  // Treatments data
  const treatments = [
    {
      title: "Facials",
      description: "Rejuvenate your skin with our customized facial treatments designed to address your specific skin concerns.",
      image: "/images/misc/httpselements.envato.comwoman-receiving-facial-mask-in-spa-beauty-salon-VZE7P36-2.jpg",
      link: "/services/skin/facials"
    },
    {
      title: "Laser Treatments",
      description: "Target specific skin concerns with our advanced laser therapies for pigmentation, redness, and texture issues.",
      image: "/images/misc/laser-service-servic-img-232x300.jpg",
      link: "/services/skin/laser-treatments"
    },
    {
      title: "Permanent Makeup",
      description: "Enhance your natural features with semi-permanent makeup for brows, lips, and eyeliner.",
      image: "/images/misc/young-woman-getting-beauty-treatment-her-eyebrows-scaled.webp",
      link: "/services/skin/permanent-makeup"
    },
    {
      title: "Microblading",
      description: "Achieve perfect, natural-looking eyebrows with our precise microblading technique.",
      image: "/images/misc/lip-after-8.png",
      link: "/services/skin/microblading"
    },
    {
      title: "Lip Blushing",
      description: "Add subtle color and definition to your lips with our semi-permanent lip blushing service.",
      image: "/images/misc/lip-gallery-3-1.png",
      link: "/services/skin/lip-blushing"
    }
  ];

  return (
    <Layout title="Skin Services | The Fix Clinic">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gray-100">
        <Image 
          src="/images/misc/lip-after-9.webp" 
          alt="Skin Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Skin Services</h1>
              <p className="text-white text-lg md:text-xl">
                Reveal your skin's natural radiance with our comprehensive range of skin treatments and services.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Our Approach"
                title="Healthy Skin, Lasting Results"
                alignment="left"
              />
              <div className="mt-6 text-gray-700 space-y-4">
                <p>
                  At The Fix Clinic, our skin services focus on improving your skin's health and appearance using the latest techniques and technologies. We believe that beautiful skin starts with a personalized approach to address your unique concerns.
                </p>
                <p>
                  Our expert aestheticians and practitioners work closely with you to develop a customized treatment plan that targets your specific skin issues. Whether you're dealing with acne, signs of aging, hyperpigmentation, or simply want to maintain healthy, glowing skin, we have the solutions you need.
                </p>
                <p>
                  From rejuvenating facials and advanced laser treatments to semi-permanent makeup enhancements, our comprehensive range of services can help you achieve and maintain your skin goals with natural-looking results.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/misc/httpselements.envato.comwoman-receiving-facial-mask-at-beauty-salon-G7A8CS3-1.jpg"
                alt="Skin Consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Treatments Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Our Treatments"
            title="Comprehensive Skin Services"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <Treatment 
                key={index}
                title={treatment.title}
                description={treatment.description}
                image={treatment.image}
                link={treatment.link}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="Results"
            title="Before & After"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Before and After gallery items would go here */}
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/misc/lip-after-9.webp" 
                alt="Before and After" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/misc/lip-after-7.webp" 
                alt="Before and After" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/misc/lip-after-3.webp" 
                alt="Before and After" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/gallery" 
              className="inline-block bg-teal-600 text-white py-3 px-6 rounded-md font-medium hover:bg-teal-700 transition duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Benefits"
            title="Why Choose Our Skin Services"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Practitioners</h3>
              <p className="text-gray-700">
                Our team consists of licensed aestheticians and certified practitioners with extensive experience in advanced skin treatments.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Advanced Technology</h3>
              <p className="text-gray-700">
                We utilize state-of-the-art equipment and proven techniques to deliver safe, effective results for all skin types.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Customized Approach</h3>
              <p className="text-gray-700">
                We develop personalized treatment plans tailored to your unique skin concerns, goals, and lifestyle.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Skin?</h2>
            <p className="text-lg mb-8">
              Book a consultation with our skin experts to discuss your concerns and create a personalized treatment plan.
            </p>
            <Link 
              href="https://thefixclinic.janeapp.com/" 
              target="_blank"
              className="inline-block bg-white text-teal-600 py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition duration-300"
            >
              Book Your Consultation
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default SkinServicesPage;