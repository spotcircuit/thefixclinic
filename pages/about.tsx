import React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Link from 'next/link';
import Image from 'next/image';

// Team Member component
const TeamMember = ({ 
  name, 
  title, 
  image, 
  bio 
}: { 
  name: string; 
  title: string; 
  image: string; 
  bio: string 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-96">
        <Image 
          src={image} 
          alt={name} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-gray-900">{name}</h3>
        <p className="text-teal-600 font-medium mb-4">{title}</p>
        <p className="text-gray-700">{bio}</p>
      </div>
    </div>
  );
};

// Main About page component
const AboutPage = () => {
  // Team data
  const team = [
    {
      name: "Natasha Prymak",
      title: "Founder/Medical Director, FNP-C",
      image: "/images/team/natasha.webp",
      bio: "Board Certified Nurse Practitioner with experience in Urgent Care, Emergency Room, and Family Practice settings. Natasha brings a conservative yet comprehensive approach to aesthetic treatments, focusing on natural results."
    },
    {
      name: "Rachel",
      title: "Nurse Practitioner",
      image: "/images/team/rachel.webp",
      bio: "With extensive experience in aesthetic medicine, Rachel specializes in creating customized treatment plans that enhance each patient's natural beauty."
    },
    {
      name: "Hayley",
      title: "Licensed Aesthetician",
      image: "/images/team/hayley.webp",
      bio: "Hayley is passionate about skincare and helping clients achieve their best skin. She specializes in customized facials and skin treatments for all skin types."
    },
    {
      name: "Caitlin",
      title: "Licensed Aesthetician",
      image: "/images/team/caitlin.webp",
      bio: "Caitlin brings her expertise in advanced skin treatments and permanent makeup to The Fix Clinic, helping clients look and feel their best."
    }
  ];

  // Values data
  const values = [
    {
      title: "Expert Care",
      description: "Our team consists of highly trained professionals with years of experience in aesthetic and wellness treatments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Personalized Approach",
      description: "We develop customized treatment plans tailored to each client's unique needs and aesthetic goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      )
    },
    {
      title: "Natural Results",
      description: "We believe in enhancing your natural beauty, not changing it. Our goal is to help you look like the best version of yourself.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Holistic Wellness",
      description: "We take a comprehensive approach to beauty and wellness, addressing both external appearance and internal health.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <Layout title="About Us | The Fix Clinic">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gray-100">
        <Image 
          src="/images/team/clinic-team.jpg" 
          alt="The Fix Clinic Team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
              <p className="text-white text-lg md:text-xl">
                Meet the experts behind The Fix Clinic's award-winning services.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Our Story"
                title="The Fix Clinic Journey"
                alignment="left"
              />
              <div className="mt-6 text-gray-700 space-y-4">
                <p>
                  The Fix Clinic was founded with a simple mission: to provide exceptional aesthetic and wellness services that exceed every expectation. With over 30 years of combined experience, our team of highly skilled providers has built a reputation for comprehensive care, transformative treatments, and holistic approaches.
                </p>
                <p>
                  Our founder, Natasha Prymak, brought her experience from urgent care, emergency room, and family practice settings to create a clinic that focuses on both aesthetic enhancement and overall wellness. Her conservative yet comprehensive approach ensures that each client receives safe, effective treatments with natural-looking results.
                </p>
                <p>
                  Today, The Fix Clinic is recognized as a premier destination for aesthetic and wellness services in Northern Virginia. Our award-winning team continues to lead the area's facilities, having earned VIP status with several major brands including Merz, Galderma, and Hydrafacial.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/team/clinic-interior.jpg"
                alt="The Fix Clinic Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Our Values"
            title="What Sets Us Apart"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm flex">
                <div className="mr-6 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="Our Team"
            title="Meet The Experts"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                title={member.title}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Recognition"
            title="Awards & Certifications"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <Image 
                src="/images/awards/award-1.png" 
                alt="Award" 
                width={150}
                height={150}
                className="h-auto"
              />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <Image 
                src="/images/awards/award-2.png" 
                alt="Award" 
                width={150}
                height={150}
                className="h-auto"
              />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <Image 
                src="/images/awards/award-3.png" 
                alt="Award" 
                width={150}
                height={150}
                className="h-auto"
              />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <Image 
                src="/images/awards/award-4.png" 
                alt="Award" 
                width={150}
                height={150}
                className="h-auto"
              />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <Image 
                src="/images/awards/award-5.png" 
                alt="Award" 
                width={150}
                height={150}
                className="h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Experience The Fix Clinic Difference</h2>
            <p className="text-lg mb-8">
              Book a consultation with our expert team and discover how we can help you look and feel your best.
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

export default AboutPage;