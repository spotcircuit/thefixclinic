import React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import ContactForm from '../components/ui/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <Layout
      title="Contact Us"
      description="Contact The Fix Clinic for aesthetic and wellness services in Ashburn, VA. Schedule a consultation or request more information."
    >
      <section className="py-16 bg-accent">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
            <p className="text-xl text-dark-light max-w-3xl mx-auto">
              We're here to help with your aesthetic and wellness needs. Reach out to schedule a consultation
              or learn more about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm className="order-2 lg:order-1" />
            
            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-bold text-primary mb-6">Our Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p className="text-gray-700">43490 Yukon Drive, Suite 103</p>
                      <p className="text-gray-700">Ashburn, VA 20147</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-3 rounded-full mr-4">
                      <FaPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-700">
                        <a href="tel:(703) 576-8315" className="hover:text-primary">
                          (703) 576-8315
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-3 rounded-full mr-4">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:frontdesk@thefixclinic.com" className="hover:text-primary">
                          frontdesk@thefixclinic.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-3 rounded-full mr-4">
                      <FaClock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hours</h3>
                      <p className="text-gray-700">Monday - Thursday: 10am - 6pm</p>
                      <p className="text-gray-700">Friday & Saturday: 9am - 3pm</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                {/* Map Embed */}
                <div className="mt-8 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.440075418636!2d-77.49590292452074!3d39.00933747141492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b638fb1f66667e%3A0xcda18e11ac0f4f85!2s43490%20Yukon%20Dr%20Suite%20103%2C%20Ashburn%2C%20VA%2020147!5e0!3m2!1sen!2sus!4v1686773412051!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Fix Clinic Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default ContactPage;