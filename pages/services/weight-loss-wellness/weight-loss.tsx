import React from 'react';
import Layout from '../../../components/layout/Layout';
import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import Link from 'next/link';
import Image from 'next/image';

// Program Card component
const ProgramCard = ({ 
  title, 
  description, 
  features,
  image 
}: { 
  title: string; 
  description: string; 
  features: string[];
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
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Link 
          href="https://thefixclinic.janeapp.com/" 
          target="_blank"
          className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
        >
          Learn More
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

// Testimonial component
const Testimonial = ({ 
  quote, 
  name, 
  results,
  image 
}: { 
  quote: string;
  name: string;
  results: string;
  image: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/3 h-64 md:h-auto">
          <Image 
            src={image} 
            alt={name} 
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <svg className="h-8 w-8 text-teal-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-700 mb-6 italic">{quote}</p>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-teal-600">{results}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Weight Loss page component
const WeightLossPage = () => {
  // Program data
  const programs = [
    {
      title: "Medical Weight Loss Program",
      description: "Our comprehensive medical weight loss program combines prescription medications, nutritional guidance, and lifestyle coaching for sustainable results.",
      features: [
        "Initial medical consultation and body composition analysis",
        "Customized weight loss plan based on your unique needs",
        "Prescription weight management medications (if appropriate)",
        "Regular follow-up appointments to track progress",
        "Nutritional guidance and meal planning support"
      ],
      image: "/images/services/medical-weight-loss.jpg"
    },
    {
      title: "Lipotropic Injection Program",
      description: "Boost your metabolism and enhance fat burning with our lipotropic injection program, designed to complement your diet and exercise routine.",
      features: [
        "Weekly lipotropic B12/MIC injections",
        "Compounds that help release and transport fat from the liver",
        "Increased energy levels and metabolic function",
        "Nutritional guidance and exercise recommendations",
        "Regular body composition analysis to track progress"
      ],
      image: "/images/services/lipotropic-injections.jpg"
    },
    {
      title: "GLP-1 Weight Loss Program",
      description: "Our GLP-1 program utilizes FDA-approved medications that help regulate appetite and blood sugar levels for effective and sustainable weight loss.",
      features: [
        "Comprehensive medical screening and consultation",
        "Prescription GLP-1 medication management",
        "Monthly body composition analysis",
        "Nutritional counseling and dietary support",
        "Ongoing medical supervision throughout your journey"
      ],
      image: "/images/services/glp1-program.jpg"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How much weight can I expect to lose?",
      answer: "Results vary based on individual factors including starting weight, medical history, adherence to the program, and lifestyle habits. Many clients on our medical weight loss programs lose 2-4 pounds per week initially, with a more gradual, sustainable rate of 1-2 pounds per week thereafter. GLP-1 programs typically result in 15-20% total body weight loss over 12-18 months when combined with lifestyle modifications. During your consultation, we'll discuss realistic expectations based on your specific situation and set personalized goals."
    },
    {
      question: "Are weight loss medications safe?",
      answer: "The medications we prescribe are FDA-approved and have established safety profiles when used appropriately under medical supervision. However, like any medication, they may have side effects and aren't suitable for everyone. During your consultation, we conduct a thorough medical evaluation, review your health history, and discuss potential risks and benefits. Our medical team closely monitors your progress and makes adjustments as needed to ensure both safety and effectiveness throughout your treatment."
    },
    {
      question: "Do I need to follow a specific diet while on the program?",
      answer: "While we don't require following a rigid, specific diet, we do provide nutritional guidance tailored to optimize your results and overall health. Our approach focuses on sustainable eating habits rather than restrictive diets. You'll receive personalized recommendations that consider your food preferences, lifestyle, and medical needs. Most programs emphasize increased protein intake, portion control, and minimizing processed foods and added sugars. Our goal is to help you develop healthy eating patterns that support long-term weight management."
    },
    {
      question: "How often will I need to come in for appointments?",
      answer: "The frequency of appointments varies by program and your individual needs. Generally, most clients start with bi-weekly visits for the first month, then transition to monthly follow-ups as they progress. Lipotropic injection programs typically involve weekly visits for injections, which can be quick 10-15 minute appointments. GLP-1 programs usually require monthly monitoring. We offer flexible scheduling options and can adjust the frequency based on your progress and needs. Virtual follow-up appointments are available for certain check-ins."
    },
    {
      question: "What happens after I reach my goal weight?",
      answer: "Reaching your goal weight is a significant achievement, but maintaining it is equally important. We offer dedicated maintenance programs designed to help you transition from weight loss to weight maintenance. These typically include less frequent check-ins, adjustments to your nutrition and exercise plans, and possibly maintenance medications when appropriate. We'll help you identify and address potential challenges, refine your lifestyle habits, and provide ongoing support to help you maintain your results long-term. Many clients continue with quarterly appointments for accountability and monitoring."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The medical weight loss program at The Fix Clinic completely transformed my life. After struggling with my weight for years and trying countless diets, I finally found something that worked for me. The team created a personalized plan that addressed my specific challenges, and the support I received made all the difference. I've lost 45 pounds and have maintained my weight for over a year now!",
      name: "Sarah M.",
      results: "Lost 45 pounds in 7 months",
      image: "/images/testimonials/weight-loss-1.jpg"
    },
    {
      quote: "I was skeptical about medical weight loss at first, but after researching GLP-1 treatments and meeting with the team at The Fix Clinic, I decided to give it a try. The results have exceeded my expectations. Not only have I lost weight, but my relationship with food has completely changed. I no longer have the constant cravings that used to drive my overeating. The medical supervision and support made me feel safe throughout the process.",
      name: "Michael R.",
      results: "Lost 35 pounds in 5 months",
      image: "/images/testimonials/weight-loss-2.jpg"
    }
  ];

  return (
    <Layout title="Weight Loss Programs | The Fix Clinic">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gray-100">
        <Image 
          src="/images/services/weight-loss-hero.jpg" 
          alt="Weight Loss Programs"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Weight Loss Programs</h1>
              <p className="text-white text-lg md:text-xl">
                Medically supervised weight loss solutions tailored to your unique needs and goals.
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
                title="Medically Supervised Weight Management"
                alignment="left"
              />
              <div className="mt-6 text-gray-700 space-y-4">
                <p>
                  At The Fix Clinic, our weight loss programs go beyond typical diets and exercise plans. We take a comprehensive, medical approach to weight management that addresses the complex factors influencing your weight and overall health.
                </p>
                <p>
                  Our Board Certified Nurse Practitioners combine their expertise in medicine with a deep understanding of nutrition, metabolism, and behavioral science to create personalized weight loss solutions. We utilize advanced testing, FDA-approved medications when appropriate, and evidence-based strategies to help you achieve sustainable results.
                </p>
                <p>
                  Whether you're looking to lose a significant amount of weight or just need help fine-tuning your body composition, we offer a range of programs that can be tailored to your specific needs, preferences, and medical history. Our goal is not just weight loss, but improved overall health and quality of life.
                </p>
              </div>
              <div className="mt-8">
                <Link 
                  href="https://thefixclinic.janeapp.com/" 
                  target="_blank"
                  className="inline-block bg-teal-600 text-white py-3 px-6 rounded-md font-medium hover:bg-teal-700 transition duration-300"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/services/weight-loss-consultation.jpg"
                alt="Weight Loss Consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="The Process"
            title="Your Weight Loss Journey"
            alignment="center"
          />
          
          <div className="mt-12 relative">
            {/* Process line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-200 transform -translate-x-1/2"></div>
            
            {/* Process steps */}
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Initial Consultation</h3>
                  <p className="text-gray-700">
                    We begin with a comprehensive evaluation including medical history, body composition analysis, and laboratory testing to understand your unique needs.
                  </p>
                </div>
                <div className="md:w-14 flex justify-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold">1</div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <div className="h-24 w-24 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block text-right">
                  <div className="h-24 w-24 rounded-full bg-teal-100 flex items-center justify-center ml-auto">
                    <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-14 flex justify-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold">2</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Plan Development</h3>
                  <p className="text-gray-700">
                    Based on your assessment, we create a customized weight loss plan that may include medications, nutritional guidance, and lifestyle recommendations.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Monitoring & Support</h3>
                  <p className="text-gray-700">
                    We provide ongoing support through regular check-ins, monitoring your progress, making adjustments to your plan, and addressing any challenges you face.
                  </p>
                </div>
                <div className="md:w-14 flex justify-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold">3</div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <div className="h-24 w-24 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block text-right">
                  <div className="h-24 w-24 rounded-full bg-teal-100 flex items-center justify-center ml-auto">
                    <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-14 flex justify-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold">4</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance & Long-term Success</h3>
                  <p className="text-gray-700">
                    Once you reach your goals, we transition to a maintenance phase focused on sustaining your results and supporting your long-term health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="Our Programs"
            title="Weight Loss Solutions"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard 
                key={index}
                title={program.title}
                description={program.description}
                features={program.features}
                image={program.image}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            subtitle="Success Stories"
            title="Hear from Our Clients"
            alignment="center"
          />
          
          <div className="mt-12 space-y-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                results={testimonial.results}
                image={testimonial.image}
              />
            ))}
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
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Weight Loss Journey?</h2>
            <p className="text-lg mb-8">
              Schedule a consultation with our medical team to learn which weight loss program is right for you.
            </p>
            <Link 
              href="https://thefixclinic.janeapp.com/" 
              target="_blank"
              className="inline-block bg-white text-teal-600 py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default WeightLossPage;