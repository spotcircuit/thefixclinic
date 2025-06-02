import React from 'react';
import Layout from '../../../components/layout/Layout';
import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import Link from 'next/link';
import Image from 'next/image';

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

// Main Sculptra page component
const SculptraPage = () => {
  // FAQ data
  const faqs = [
    {
      question: "What is Sculptra and how does it work?",
      answer: "Sculptra is an FDA-approved injectable that contains poly-L-lactic acid (PLLA), which helps stimulate your skin's own natural collagen production. Rather than just filling wrinkles, it helps restore facial volume lost to aging by gradually replacing collagen, resulting in a more youthful appearance that can last up to 2+ years."
    },
    {
      question: "How is Sculptra different from other fillers?",
      answer: "Unlike hyaluronic acid fillers that provide immediate results by adding volume directly, Sculptra works gradually by stimulating your body's collagen production. While results take longer to appear, they typically last much longer (up to 2+ years compared to 6-18 months for traditional fillers) and look more natural as they develop over time."
    },
    {
      question: "How many Sculptra treatments will I need?",
      answer: "Most patients require a series of 2-3 treatment sessions, spaced approximately 4-6 weeks apart, to achieve optimal results. The exact number depends on the degree of correction needed and your individual response to treatment. During your consultation, we'll develop a personalized treatment plan for your specific needs."
    },
    {
      question: "When will I see results from Sculptra?",
      answer: "Sculptra provides gradual results that improve over time. You may notice some immediate volume from the injection fluid, but this is temporary. The true results begin to appear after 4-6 weeks as collagen production increases, with full results typically visible after the complete treatment series and continuing to improve for up to 3-6 months."
    },
    {
      question: "Is Sculptra treatment painful?",
      answer: "Most patients report minimal discomfort during Sculptra injections. The product is mixed with lidocaine (a local anesthetic) to reduce discomfort, and we can apply topical numbing cream before your treatment. You may experience some tenderness at the injection sites for a few days after treatment."
    }
  ];

  // Treatment areas
  const treatmentAreas = [
    {
      name: "Temples",
      description: "Restore lost volume in the temple region for a more youthful appearance",
      image: "/images/services/sculptra-temples.jpg"
    },
    {
      name: "Cheeks",
      description: "Add volume and contour to the mid-face for enhanced definition",
      image: "/images/services/sculptra-cheeks.jpg"
    },
    {
      name: "Jawline",
      description: "Define and sculpt the jawline for improved facial structure",
      image: "/images/services/sculptra-jawline.jpg"
    },
    {
      name: "Nasolabial Folds",
      description: "Reduce the appearance of smile lines for a smoother complexion",
      image: "/images/services/sculptra-nasolabial.jpg"
    }
  ];

  return (
    <Layout title="Sculptra | The Fix Clinic">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gray-100">
        <Image 
          src="/images/services/sculptra-hero.jpg" 
          alt="Sculptra Treatment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sculptra</h1>
              <p className="text-white text-lg md:text-xl">
                Restore facial volume and stimulate natural collagen production for long-lasting, natural-looking results.
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
                subtitle="About Sculptra"
                title="The Collagen Stimulator"
                alignment="left"
              />
              <div className="mt-6 text-gray-700 space-y-4">
                <p>
                  Sculptra is a revolutionary injectable treatment that works differently from traditional fillers. Rather than simply adding volume, Sculptra stimulates your skin's natural collagen production, gradually restoring facial volume and improving skin quality from within.
                </p>
                <p>
                  As a poly-L-lactic acid (PLLA) collagen stimulator, Sculptra addresses the underlying causes of facial aging, not just the symptoms. The results develop naturally over time and can last more than two years, making it an excellent investment in your long-term appearance.
                </p>
                <p>
                  At The Fix Clinic, our expert practitioners are specially trained in advanced Sculptra techniques. We precisely target key areas of volume loss to create subtle, natural-looking improvements that enhance your features while maintaining your unique facial expressions and character.
                </p>
              </div>
              <div className="mt-8">
                <Link 
                  href="https://thefixclinic.janeapp.com/" 
                  target="_blank"
                  className="inline-block bg-teal-600 text-white py-3 px-6 rounded-md font-medium hover:bg-teal-700 transition duration-300"
                >
                  Book Your Treatment
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/services/sculptra-intro.jpg"
                alt="Sculptra Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="The Process"
            title="How Sculptra Works"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-teal-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Injection</h3>
              <p className="text-gray-700">
                The Sculptra solution is precisely injected into target areas of the face where volume has been lost due to aging.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Stimulation</h3>
              <p className="text-gray-700">
                The poly-L-lactic acid particles in Sculptra begin to stimulate your skin's natural collagen production process.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-teal-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Restoration</h3>
              <p className="text-gray-700">
                Over the following weeks, your skin gradually rebuilds collagen, restoring volume and improving skin texture and quality.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Treatment Areas Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="Treatment Areas"
            title="Where Sculptra Can Help"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image 
                    src={area.image} 
                    alt={area.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{area.name}</h3>
                  <p className="text-gray-700">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Benefits"
            title="Why Choose Sculptra"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Long-Lasting Results</h3>
              </div>
              <p className="text-gray-700">
                Sculptra results can last up to 2+ years, significantly longer than traditional fillers, making it a cost-effective option for facial rejuvenation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Natural-Looking Results</h3>
              </div>
              <p className="text-gray-700">
                By stimulating your own collagen production, Sculptra creates subtle, progressive improvements that look completely natural and enhance your features.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Improved Skin Quality</h3>
              </div>
              <p className="text-gray-700">
                Beyond just adding volume, Sculptra improves overall skin texture and quality by boosting collagen, resulting in a more youthful, radiant complexion.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">FDA-Approved</h3>
              </div>
              <p className="text-gray-700">
                Sculptra is FDA-approved for aesthetic use, with a proven safety record and millions of treatments performed worldwide since its introduction.
              </p>
            </div>
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
                src="/images/gallery/sculptra-before-after-1.jpg" 
                alt="Before and After Sculptra" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery/sculptra-before-after-2.jpg" 
                alt="Before and After Sculptra" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery/sculptra-before-after-3.jpg" 
                alt="Before and After Sculptra" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
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
            <h2 className="text-3xl font-bold mb-6">Ready for Long-Lasting Results?</h2>
            <p className="text-lg mb-8">
              Book your Sculptra consultation today and discover how this advanced collagen stimulator can transform your appearance.
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

export default SculptraPage;