import React from 'react';
import Layout from '../../../components/layout/Layout';
import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import Link from 'next/link';
import Image from 'next/image';

// Service Card component
const ServiceCard = ({ 
  title, 
  description, 
  price, 
  duration, 
  image 
}: { 
  title: string; 
  description: string; 
  price: string;
  duration: string;
  image: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-right">
            <span className="block text-teal-600 font-semibold">{price}</span>
            <span className="text-sm text-gray-500">{duration}</span>
          </div>
        </div>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link 
            href="https://thefixclinic.janeapp.com/" 
            target="_blank"
            className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
          >
            Book Now
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
    </div>
  );
};

// FAQ Item component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <svg
          className={`w-6 h-6 text-teal-600 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Main Facials page component
const FacialsPage = () => {
  // Facial services data
  const facialServices = [
    {
      title: "Signature Facial",
      description: "Our customized facial addresses your specific skin concerns with deep cleansing, exfoliation, extractions if needed, and a tailored mask to revitalize your complexion.",
      price: "$125",
      duration: "60 minutes",
      image: "/images/services/facial-signature.jpg"
    },
    {
      title: "Hydrating Facial",
      description: "Perfect for dry, dehydrated skin, this facial uses hyaluronic acid and nourishing ingredients to restore moisture and plumpness to your skin.",
      price: "$145",
      duration: "60 minutes",
      image: "/images/services/facial-hydrating.jpg"
    },
    {
      title: "Acne-Clearing Facial",
      description: "Targeted treatment for acne-prone skin with antibacterial ingredients, gentle extractions, and anti-inflammatory products to reduce breakouts and calm irritation.",
      price: "$155",
      duration: "75 minutes",
      image: "/images/services/facial-acne.jpg"
    },
    {
      title: "Anti-Aging Facial",
      description: "Combat signs of aging with this rejuvenating facial featuring peptides, antioxidants, and collagen-boosting ingredients for firmer, more youthful-looking skin.",
      price: "$165",
      duration: "75 minutes",
      image: "/images/services/facial-anti-aging.jpg"
    },
    {
      title: "Brightening Facial",
      description: "Designed to address hyperpigmentation and uneven skin tone, this facial uses vitamin C and gentle exfoliants to reveal brighter, more radiant skin.",
      price: "$155",
      duration: "60 minutes",
      image: "/images/services/facial-brightening.jpg"
    },
    {
      title: "Gentleman's Facial",
      description: "Specially formulated for men's skin concerns, this facial addresses ingrown hairs, razor burn, and environmental damage for healthier skin.",
      price: "$135",
      duration: "60 minutes",
      image: "/images/services/facial-gentleman.jpg"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How often should I get a facial?",
      answer: "For optimal results, we recommend getting a facial every 4-6 weeks, which aligns with your skin's natural renewal cycle. However, this can vary based on your specific skin concerns, age, and lifestyle. Those with acne-prone or oily skin may benefit from more frequent treatments, while those with sensitive skin might prefer longer intervals. Our aestheticians can recommend a personalized schedule during your consultation."
    },
    {
      question: "What should I do to prepare for my facial?",
      answer: "To maximize the benefits of your facial, we recommend avoiding sun exposure, exfoliation, and active skincare ingredients (like retinol or AHAs) for 48 hours before your appointment. Come with clean skin—no makeup is preferred, but we'll cleanse your skin thoroughly if needed. Also, men should avoid shaving on the day of treatment to prevent irritation."
    },
    {
      question: "Will extractions hurt during my facial?",
      answer: "Extractions can cause mild discomfort, but our skilled aestheticians use gentle techniques to minimize pain. We thoroughly prepare the skin before extractions and only perform them when necessary for your skin's health. If you're particularly sensitive, please let us know, and we can adjust the treatment accordingly. Your comfort is our priority."
    },
    {
      question: "How long do the results of a facial last?",
      answer: "The glow and improved texture from a facial typically last 2-4 weeks, depending on your home skincare routine, lifestyle, and skin type. To extend and enhance your results, we recommend following the post-care instructions and using the professional products recommended by your aesthetician. Consistent treatments over time lead to more lasting improvements in your skin's health and appearance."
    },
    {
      question: "Can I combine a facial with other treatments?",
      answer: "Yes, facials can be effectively combined with many other treatments for enhanced results. Popular combinations include facials with LED light therapy, microdermabrasion, or chemical peels for amplified benefits. Some treatments, however, should be spaced apart. Our team can create a custom treatment plan that safely combines services to address your specific concerns and goals."
    }
  ];

  return (
    <Layout title="Facials | The Fix Clinic">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gray-100">
        <Image 
          src="/images/services/facials-hero.jpg" 
          alt="Facial Treatments"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Facials</h1>
              <p className="text-white text-lg md:text-xl">
                Customized facial treatments to address your unique skin concerns and reveal your natural radiance.
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
                title="Custom Facials for Every Skin Type"
                alignment="left"
              />
              <div className="mt-6 text-gray-700 space-y-4">
                <p>
                  At The Fix Clinic, our facials are more than just a relaxing spa treatment—they're results-driven skincare sessions designed to address your specific concerns and goals. Each facial begins with a thorough skin analysis to customize the perfect treatment for your unique needs.
                </p>
                <p>
                  Our licensed aestheticians use medical-grade products and advanced techniques to deeply cleanse, exfoliate, and nourish your skin. Whether you're dealing with acne, signs of aging, hyperpigmentation, or simply want to maintain healthy, glowing skin, we have a facial solution for you.
                </p>
                <p>
                  We believe in a comprehensive approach to skincare, combining in-clinic treatments with personalized home care recommendations to help you achieve and maintain your best skin. Experience the difference that professional treatments can make in the health and appearance of your skin.
                </p>
              </div>
              <div className="mt-8">
                <Link 
                  href="https://thefixclinic.janeapp.com/" 
                  target="_blank"
                  className="inline-block bg-teal-600 text-white py-3 px-6 rounded-md font-medium hover:bg-teal-700 transition duration-300"
                >
                  Book Your Facial
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/services/facial-consultation.jpg"
                alt="Facial Consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Our Services"
            title="Facial Treatments"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facialServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                price={service.price}
                duration={service.duration}
                image={service.image}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="Benefits"
            title="Why Our Facials Stand Out"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Medical-Grade Products</h3>
              <p className="text-gray-700">
                We use only the highest quality, medical-grade skincare products that deliver real results and are not available in regular retail settings.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Customized Treatments</h3>
              <p className="text-gray-700">
                Every facial is tailored to your specific skin concerns and goals, ensuring you receive the exact treatment your skin needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Aestheticians</h3>
              <p className="text-gray-700">
                Our licensed professionals have extensive training and experience in advanced facial techniques to deliver exceptional results.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Results"
            title="Before & After"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Before and After gallery items would go here */}
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery/facial-before-after-1.jpg" 
                alt="Before and After Facial" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery/facial-before-after-2.jpg" 
                alt="Before and After Facial" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery/facial-before-after-3.jpg" 
                alt="Before and After Facial" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="Questions"
            title="Frequently Asked Questions"
            alignment="center"
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready for Radiant Skin?</h2>
            <p className="text-lg mb-8">
              Book your facial treatment today and take the first step toward healthier, more beautiful skin.
            </p>
            <Link 
              href="https://thefixclinic.janeapp.com/" 
              target="_blank"
              className="inline-block bg-white text-teal-600 py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition duration-300"
            >
              Book Your Facial
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default FacialsPage;