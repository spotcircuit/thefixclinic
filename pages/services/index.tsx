import React from 'react';
import Layout from '../../components/layout/Layout';
import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import Link from 'next/link';
import Image from 'next/image';

// Define the service card component
const ServiceCard = ({ 
  title, 
  image, 
  slug, 
  description 
}: { 
  title: string; 
  image: string; 
  slug: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm group">
      <Link href={`/services/${slug}`} className="block overflow-hidden relative aspect-[4/3]">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        <Link 
          href={`/services/${slug}`} 
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
    </div>
  );
};

// Main Services page component
const ServicesPage = () => {
  // Services data
  const services = [
    {
      title: "Facial Balancing",
      image: "/images/services/facial-balancing-hero.jpg",
      slug: "facial-balancing",
      description: "Our facial balancing services include Botox, Fillers, Sculptra, and other treatments to enhance your natural beauty."
    },
    {
      title: "Skin Services",
      image: "/images/services/skin-hero.jpg",
      slug: "skin",
      description: "Our skin services include facials, laser treatments, and permanent makeup to rejuvenate and refresh your skin."
    },
    {
      title: "Weight Loss & Wellness",
      image: "/images/services/wellness-hero.jpg",
      slug: "weight-loss-wellness",
      description: "Our wellness services include weight loss programs, IV therapy, and vitamin injections to improve your overall health and wellbeing."
    }
  ];

  return (
    <Layout title="Services | The Fix Clinic">
      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <Container>
          <SectionTitle
            subtitle="Explore Our Services"
            title="Comprehensive Aesthetic & Wellness Services"
            alignment="center"
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-gray-700 text-center mb-12">
              At The Fix Clinic, we offer a wide range of aesthetic and wellness services designed to enhance your natural beauty and improve your overall well-being. Our team of experts uses the latest techniques and technologies to provide you with exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                image={service.image}
                slug={service.slug}
                description={service.description}
              />
            ))}
          </div>
        </Container>
      </div>

      {/* Additional content section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Why Choose The Fix Clinic?</h2>
              <p className="text-gray-700 mb-6">
                Our team of award-winning experts is committed to utilizing the latest technology and techniques to give you results that will enhance your confidence, revitalize your health, and complement your natural beauty.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Over 30 years of combined experience</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>VIP status with several major brands</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive, personalized treatment plans</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link 
                  href="https://thefixclinic.janeapp.com/" 
                  target="_blank"
                  className="inline-block bg-teal-600 text-white py-3 px-6 rounded-md font-medium hover:bg-teal-700 transition duration-300"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/team/team.png"
                alt="The Fix Clinic Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default ServicesPage;