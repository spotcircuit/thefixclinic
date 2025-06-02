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

// Main Botox page component
const BotoxPage = () => {
  // FAQ data
  const faqs = [
    {
      question: "What is Botox and how does it work?",
      answer: "Botox is a purified protein derived from botulinum toxin. When injected into specific muscles, it temporarily blocks nerve signals, reducing muscle activity that causes wrinkles. This results in smoother, more youthful-looking skin."
    },
    {
      question: "How long does Botox last?",
      answer: "The effects of Botox typically last 3-4 months, though this can vary depending on the individual, the area treated, and the dosage used. With regular treatments, some patients find that the effects may last longer over time."
    },
    {
      question: "Is Botox treatment painful?",
      answer: "Most patients experience minimal discomfort during Botox injections. We use very fine needles, and the procedure is quick. Some patients describe the sensation as a slight pinch or sting. If you're concerned about discomfort, we can apply a topical numbing cream before treatment."
    },
    {
      question: "When will I see results from my Botox treatment?",
      answer: "You may begin to notice results within 24-48 hours, but it typically takes 7-14 days to see the full effect of your Botox treatment."
    },
    {
      question: "Are there any side effects of Botox?",
      answer: "Common temporary side effects may include slight redness, swelling, or bruising at the injection site. Less common side effects include headache, drooping eyelid, or asymmetry. Our experienced practitioners minimize these risks through proper technique and placement."
    }
  ];

  // Treatment areas
  const treatmentAreas = [
    {
      name: "Forehead Lines",
      description: "Smooth horizontal lines across the forehead",
      image: "/images/services/botox-forehead.jpg"
    },
    {
      name: "Frown Lines",
      description: "Reduce vertical lines between the eyebrows",
      image: "/images/services/botox-frown.jpg"
    },
    {
      name: "Crow's Feet",
      description: "Diminish lines around the outer corners of the eyes",
      image: "/images/services/botox-crows-feet.jpg"
    },
    {
      name: "Bunny Lines",
      description: "Soften lines on the nose when you smile",
      image: "/images/services/botox-bunny.jpg"
    },
    {
      name: "Jawline",
      description: "Slim and contour the lower face",
      image: "/images/services/botox-jaw.jpg"
    },
    {
      name: "Lip Flip",
      description: "Create a subtle lift to the upper lip",
      image: "/images/services/botox-lip.jpg"
    }
  ];

  return (
    <Layout title="Botox | The Fix Clinic">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gray-100">
        <Image 
          src="/images/services/botox-hero.jpg" 
          alt="Botox Treatment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Botox</h1>
              <p className="text-white text-lg md:text-xl">
                Smooth away fine lines and wrinkles with our expert Botox treatments.
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
                subtitle="About Botox"
                title="Refresh Your Look"
                alignment="left"
              />
              <div className="mt-6 text-gray-700 space-y-4">
                <p>
                  Botox is one of the most popular cosmetic treatments worldwide, trusted by millions to reduce the appearance of wrinkles and fine lines. At The Fix Clinic, our expert practitioners use Botox to help you achieve a refreshed, natural-looking appearance.
                </p>
                <p>
                  Botox works by temporarily relaxing the muscles that cause wrinkles. Our skilled team precisely targets specific muscles to smooth away wrinkles while maintaining your natural expressions. The result is a more youthful, rested appearance without looking "frozen" or overdone.
                </p>
                <p>
                  We take a conservative approach to Botox treatments, focusing on natural-looking results that enhance your unique features. Our Board Certified Nurse Practitioners will create a customized treatment plan based on your specific concerns and aesthetic goals.
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
                src="/images/services/botox-intro.jpg"
                alt="Botox Treatment"
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
            title="Where Botox Can Help"
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
                src="/images/gallery/botox-before-after-1.jpg" 
                alt="Before and After Botox" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery/botox-before-after-2.jpg" 
                alt="Before and After Botox" 
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/gallery/botox-before-after-3.jpg" 
                alt="Before and After Botox" 
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
            <h2 className="text-3xl font-bold mb-6">Ready for a Refreshed Look?</h2>
            <p className="text-lg mb-8">
              Book your Botox consultation today and take the first step toward a more youthful appearance.
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

export default BotoxPage;