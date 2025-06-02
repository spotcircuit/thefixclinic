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

// Main Filler page component
const FillerPage = () => {
  // FAQ data
  const faqs = [
    {
      question: "What are dermal fillers and how do they work?",
      answer: "Dermal fillers are gel-like substances, typically made from hyaluronic acid, that are injected beneath the skin to restore lost volume, smooth lines, enhance facial contours, and create a more youthful appearance. Hyaluronic acid is a naturally occurring substance in your body that helps maintain skin hydration and volume."
    },
    {
      question: "How long do fillers last?",
      answer: "The longevity of fillers depends on the type used, the area treated, and your metabolism. Typically, hyaluronic acid fillers last between 6-18 months. Lip fillers generally last 6-12 months, while cheek fillers may last 12-18 months. More robust fillers like Sculptra (a biostimulator) can last up to 2 years."
    },
    {
      question: "Is getting fillers painful?",
      answer: "Most filler products contain lidocaine to minimize discomfort during injection. Additionally, we can apply topical numbing cream before your treatment. Most patients describe the sensation as a pinch or pressure rather than sharp pain. Our expert injectors use techniques to maximize your comfort throughout the procedure."
    },
    {
      question: "When will I see results from my filler treatment?",
      answer: "Results from dermal fillers are immediate, though you may experience some swelling initially. The final results are typically visible within 1-2 weeks after any swelling has subsided. For biostimulators like Sculptra, results develop gradually over several months as collagen production increases."
    },
    {
      question: "Are there any risks or side effects with fillers?",
      answer: "Common side effects include temporary redness, swelling, bruising, or tenderness at the injection site. These typically resolve within a few days. More serious complications are rare when fillers are administered by qualified medical professionals like our team at The Fix Clinic. During your consultation, we'll discuss all potential risks specific to your treatment plan."
    }
  ];

  // Treatment areas
  const treatmentAreas = [
    {
      name: "Lips",
      description: "Enhance lip volume and definition, or correct asymmetry",
      image: "/images/services/filler-lips.jpg"
    },
    {
      name: "Cheeks",
      description: "Restore volume and lift to create more defined cheekbones",
      image: "/images/services/filler-cheeks.jpg"
    },
    {
      name: "Nasolabial Folds",
      description: "Soften the lines running from nose to mouth",
      image: "/images/services/filler-nasolabial.jpg"
    },
    {
      name: "Tear Troughs",
      description: "Reduce under-eye hollows and dark circles",
      image: "/images/services/filler-tear-troughs.jpg"
    },
    {
      name: "Jawline",
      description: "Define and contour the jawline for a more structured look",
      image: "/images/services/filler-jawline.jpg"
    },
    {
      name: "Chin",
      description: "Augment or balance the chin for improved facial proportions",
      image: "/images/services/filler-chin.jpg"
    }
  ];

  return (
    <Layout title="Dermal Fillers | The Fix Clinic">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gray-100">
        <Image 
          src="/images/services/filler-hero.jpg" 
          alt="Dermal Filler Treatment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Dermal Fillers</h1>
              <p className="text-white text-lg md:text-xl">
                Restore volume and enhance your natural features with our premium dermal filler treatments.
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
                subtitle="About Fillers"
                title="Restore and Enhance"
                alignment="left"
              />
              <div className="mt-6 text-gray-700 space-y-4">
                <p>
                  Dermal fillers are a versatile, non-surgical treatment that can address multiple signs of aging and enhance your natural features. At The Fix Clinic, we use premium hyaluronic acid fillers to restore lost volume, smooth lines, and contour facial features for natural-looking results.
                </p>
                <p>
                  Unlike Botox, which relaxes muscles, fillers physically "fill in" areas that have lost volume or need enhancement. Our expert practitioners have an artistic eye for facial proportions and use advanced techniques to ensure balanced, harmonious results.
                </p>
                <p>
                  We offer a range of filler types and can target multiple areas of the face to address your specific concerns. Whether you're looking to enhance your lips, restore volume to your cheeks, or smooth deep lines, we'll create a customized treatment plan to help you achieve your aesthetic goals.
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
                src="/images/services/filler-intro.jpg"
                alt="Dermal Filler Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Treatment Areas Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Treatment Areas"
            title="Enhance Your Features"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
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
                src="/images/gallery/filler-before-after-1.jpg" 
                alt="Before and After Filler" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery/filler-before-after-2.jpg" 
                alt="Before and After Filler" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery/filler-before-after-3.jpg" 
                alt="Before and After Filler" 
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
            <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Natural Beauty?</h2>
            <p className="text-lg mb-8">
              Book your dermal filler consultation today and discover how our expert team can help you achieve your aesthetic goals.
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

export default FillerPage;