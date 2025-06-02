import React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Link from 'next/link';
import Image from 'next/image';

// Membership tier component
const MembershipTier = ({ 
  title, 
  price, 
  features, 
  popular = false 
}: { 
  title: string; 
  price: string; 
  features: string[]; 
  popular?: boolean;
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${popular ? 'ring-2 ring-teal-500' : 'border border-gray-200'}`}>
      {popular && (
        <div className="bg-teal-500 text-white text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
        <div className="mb-6">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-1">/month</span>
        </div>
        <ul className="space-y-3 mb-8">
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
          className={`block text-center py-3 px-6 rounded-md font-medium transition duration-300 ${
            popular 
              ? 'bg-teal-600 text-white hover:bg-teal-700' 
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

// Main Membership page component
const MembershipPage = () => {
  // Membership tiers data
  const membershipTiers = [
    {
      title: "Bronze",
      price: "$79",
      features: [
        "10% off all retail products",
        "5% off all treatments",
        "Priority scheduling",
        "Exclusive member-only events",
        "Monthly newsletter"
      ]
    },
    {
      title: "Silver",
      price: "$149",
      features: [
        "15% off all retail products",
        "10% off all treatments",
        "Priority scheduling",
        "Exclusive member-only events",
        "Quarterly complimentary mini facial",
        "Free shipping on product orders"
      ],
      popular: true
    },
    {
      title: "Gold",
      price: "$249",
      features: [
        "20% off all retail products",
        "15% off all treatments",
        "VIP priority scheduling",
        "Exclusive member-only events",
        "Monthly complimentary mini facial",
        "Free shipping on product orders",
        "Annual birthday gift"
      ]
    }
  ];

  // Membership benefits data
  const benefits = [
    {
      title: "Exclusive Savings",
      description: "Enjoy significant discounts on all services and retail products, helping you save on your beauty and wellness routine.",
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Priority Scheduling",
      description: "Get access to preferred appointment times and priority scheduling, so you never have to wait for your treatments.",
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Complimentary Services",
      description: "Enjoy regular complimentary mini facials and other services depending on your membership tier.",
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Exclusive Events",
      description: "Be invited to member-only events, including product launches, educational seminars, and special promotions.",
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <Layout title="Membership | The Fix Clinic">
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gray-100">
        <Image 
          src="/images/services/membership-hero.jpg" 
          alt="Membership"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Membership</h1>
              <p className="text-white text-lg md:text-xl">
                Join our exclusive membership program and enjoy special pricing, priority scheduling, and more.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              subtitle="Join The Fix Club"
              title="Exclusive Benefits for Members"
              alignment="center"
            />
            <p className="mt-6 text-gray-700">
              Our membership program is designed to reward our loyal clients with exclusive benefits and significant savings on our services and products. Choose the tier that best fits your needs and start enjoying the perks of being a member of The Fix Clinic family.
            </p>
          </div>
        </Container>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <MembershipTier 
                key={index}
                title={tier.title}
                price={tier.price}
                features={tier.features}
                popular={tier.popular}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            subtitle="Membership Benefits"
            title="Why Join Our Membership Program"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex p-6 bg-gray-50 rounded-lg">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
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
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How do I sign up for a membership?</h3>
                <p className="text-gray-700">
                  You can sign up for a membership in person at The Fix Clinic or by calling our office. Our team will help you choose the right tier and set up your monthly payments.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Can I cancel my membership at any time?</h3>
                <p className="text-gray-700">
                  Yes, you can cancel your membership at any time with 30 days' notice. There are no long-term commitments or cancellation fees.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Do my membership benefits apply to all services?</h3>
                <p className="text-gray-700">
                  Yes, your membership discount applies to all our services. However, some special promotions or packages may have different discount structures. Our team will always apply the best available discount to your services.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Can I upgrade or downgrade my membership tier?</h3>
                <p className="text-gray-700">
                  Yes, you can change your membership tier at any time. The change will take effect on your next billing cycle.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Become a Member?</h2>
            <p className="text-lg mb-8">
              Join our membership program today and start enjoying exclusive benefits and savings on your favorite treatments.
            </p>
            <Link 
              href="https://thefixclinic.janeapp.com/" 
              target="_blank"
              className="inline-block bg-white text-teal-600 py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition duration-300"
            >
              Join Now
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default MembershipPage;