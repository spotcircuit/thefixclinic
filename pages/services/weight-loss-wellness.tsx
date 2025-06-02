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

// Main Weight Loss & Wellness page component
const WeightLossWellnessPage = () => {
  // Treatments data
  const treatments = [
    {
      title: "Weight Loss Programs",
      description: "Achieve your weight loss goals with our medically supervised programs tailored to your unique needs.",
      image: "/images/services/weight-loss-women.webp",
      link: "/services/weight-loss-wellness/weight-loss"
    },
    {
      title: "IV Therapy",
      description: "Replenish essential vitamins and minerals with our customized IV drip therapies for optimal wellness.",
      image: "/images/misc/lip-after-10.webp",
      link: "/services/weight-loss-wellness/iv-therapy"
    },
    {
      title: "Vitamin Injections",
      description: "Boost your energy and metabolism with targeted vitamin injections to support your wellness goals.",
      image: "/images/misc/novahokie98_n_ultra-realistic_photograph_of_a_healthy_woman_and_5395a297-7379-4346-8f57-0a3b0d982d35.png",
      link: "/services/weight-loss-wellness/vitamin-injections"
    }
  ];

  return (
    <Layout title="Weight Loss & Wellness | The Fix Clinic">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gray-100">
        <Image 
          src="/images/misc/lip-after-4.webp" 
          alt="Weight Loss & Wellness"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Weight Loss & Wellness</h1>
              <p className="text-white text-lg md:text-xl">
                Transform your health from the inside out with our comprehensive weight loss and wellness services.
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
                title="Wellness From Within"
                center={true}
              />
              <div className="mt-6 text-gray-700 space-y-4">
                <p>
                  At The Fix Clinic, our Weight Loss & Wellness services take a holistic approach to your health. We understand that looking your best starts with feeling your best, which is why we offer comprehensive solutions to optimize your overall wellness.
                </p>
                <p>
                  Our medical professionals combine their expertise in nutrition, hormone optimization, and cellular health to create personalized programs that address your unique needs. Whether you're looking to lose weight, increase your energy levels, or enhance your overall wellbeing, we have the tools and knowledge to help you achieve your goals.
                </p>
                <p>
                  From medically supervised weight loss programs to IV vitamin therapy, our treatments are designed to support your body's natural functions and help you feel revitalized, energized, and balanced.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/misc/group-of-peoples-1-1.webp"
                alt="Wellness Consultation"
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
            subtitle="Our Services"
            title="Comprehensive Wellness Solutions"
            center={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="Success Stories"
            title="What Our Clients Say"
            center={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The weight loss program at The Fix Clinic has completely changed my life. The team took the time to understand my unique challenges and created a personalized plan that worked for me. I've lost 30 pounds and have maintained my weight for over a year now!"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Sarah M.</h4>
                <p className="text-gray-600 text-sm">Weight Loss Program Client</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "I started getting regular IV therapy sessions at The Fix Clinic to help with my chronic fatigue. The difference in my energy levels is remarkable! The staff is professional, knowledgeable, and always makes me feel comfortable during treatments."
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Michael R.</h4>
                <p className="text-gray-600 text-sm">IV Therapy Client</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The vitamin B12 injections have been a game-changer for me. As someone who follows a plant-based diet, I was struggling with low energy. The regular injections have helped me feel more energetic and focused. The team at The Fix Clinic is simply amazing!"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Jennifer L.</h4>
                <p className="text-gray-600 text-sm">Vitamin Injection Client</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Benefits"
            title="Why Choose Our Wellness Services"
            center={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Medical Supervision</h3>
                <p className="text-gray-700">
                  All our wellness services are overseen by medical professionals who ensure your treatments are safe, effective, and tailored to your health needs.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 019-9" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Personalized Approach</h3>
                <p className="text-gray-700">
                  We develop individualized treatment plans based on thorough assessments of your health, lifestyle, and wellness goals.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast-Acting Results</h3>
                <p className="text-gray-700">
                  Our therapies are designed to deliver quick results, with many clients experiencing improvements in energy and wellbeing after just one session.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Holistic Wellness</h3>
                <p className="text-gray-700">
                  We focus on your overall health, combining treatments with nutritional guidance and lifestyle recommendations for long-term success.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Health?</h2>
            <p className="text-lg mb-8">
              Book a consultation with our wellness experts to discuss your goals and create a personalized treatment plan.
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

export default WeightLossWellnessPage;