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

// Main Facial Balancing page component
const FacialBalancingPage = () => {
  // Treatments data
  const treatments = [
    {
      title: "Botox",
      description: "Reduce the appearance of fine lines and wrinkles with our Botox treatments, performed by our expert practitioners.",
      image: "/images/misc/botox-servic-img-2.jpg",
      link: "/services/facial-balancing/botox"
    },
    {
      title: "Filler",
      description: "Restore volume and enhance facial contours with our range of dermal fillers for a more youthful appearance.",
      image: "/images/misc/fillers-servic-img-232x300.jpg",
      link: "/services/facial-balancing/filler"
    },
    {
      title: "Sculptra",
      description: "A biostimulator that helps restore facial volume by stimulating your own collagen production for natural-looking results.",
      image: "/images/misc/lip-before-6.png",
      link: "/services/facial-balancing/sculptra"
    },
    {
      title: "Morpheus8 RF",
      description: "Combine microneedling with radiofrequency energy to remodel and contour the face and body for a more youthful appearance.",
      image: "/images/misc/Upper-Face-Treatment4-1.png",
      link: "/services/facial-balancing/morpheus8-rf"
    },
    {
      title: "Kybella",
      description: "Reduce submental fat (double chin) with this FDA-approved injectable treatment for a more defined jawline.",
      image: "/images/misc/Before-After_-Facial-Balancing-with-Sculptra-Filler-and-Dysport.png",
      link: "/services/facial-balancing/kybella"
    },
    {
      title: "PRP, PRF & EZ Gel",
      description: "Harness the power of your body's own growth factors to rejuvenate skin and promote healing.",
      image: "/images/misc/prf-servic-img-232x300.jpg",
      link: "/services/facial-balancing/prp-prf-ez-gel"
    }
  ];

  return (
    <Layout title="Facial Balancing | The Fix Clinic">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gray-100">
        <Image 
          src="/images/misc/lip-after-7.webp" 
          alt="Facial Balancing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Facial Balancing</h1>
              <p className="text-white text-lg md:text-xl">
                Enhance your natural beauty and achieve facial harmony with our comprehensive range of facial balancing treatments.
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
                title="Balanced Beauty, Natural Results"
                alignment="left"
              />
              <div className="mt-6 text-gray-700 space-y-4">
                <p>
                  At The Fix Clinic, our Facial Balancing services focus on enhancing your natural features while maintaining harmony and balance. We believe in subtle enhancements that complement your unique facial structure.
                </p>
                <p>
                  Our Board Certified Nurse Practitioners have a unique background in Family Medicine that allows for a more holistic approach to Aesthetic Medicine. We take the time to conduct a comprehensive assessment and develop a personalized treatment plan tailored to your specific needs and goals.
                </p>
                <p>
                  Whether you're looking to reduce fine lines and wrinkles, restore lost volume, or enhance specific facial features, our expert team will guide you through the best treatment options to achieve natural-looking results.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/misc/lip-before-10.webp"
                alt="Facial Consultation"
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
            title="Comprehensive Facial Balancing Services"
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
                src="/images/misc/Before-After_-Facial-Balancing-with-Dysport-Filler-Sculptra-Laser-Facials.png" 
                alt="Before and After" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/misc/Before-After_-Facial-Balancing-with-Daxxify-and-Filler-2.png" 
                alt="Before and After" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/misc/Before-After_-Under-Eye-EZ-Gel.png" 
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

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Look?</h2>
            <p className="text-lg mb-8">
              Book a consultation with our expert practitioners to discuss your facial balancing goals and create a personalized treatment plan.
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

export default FacialBalancingPage;