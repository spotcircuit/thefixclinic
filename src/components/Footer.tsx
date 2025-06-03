"use client"; // Needed for potential future client-side interactions, and consistent with other components

import Link from 'next/link';
import React from 'react';

// Placeholder simple SVG icons
const PlaceholderSocialIcon = ({ name }: { name: string }) => (
  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500">
    {name.substring(0,1)}
  </div>
);
// More specific placeholders if needed:
// const InstagramIcon = () => <div className="w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center text-xs text-pink-500">IG</div>;
// const FacebookIcon = () => <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs text-blue-500">FB</div>;


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    // Add more social links if needed
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
          {/* Column 1: Brand/Logo (Optional) & Intro/Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-versailles text-2xl sm:text-3xl text-primary mb-4 block leading-none tracking-normal">
              The Fix Clinic
            </Link>
            <p className="font-apfel text-sm text-gray-600 leading-relaxed mb-4">
              Dedicated to your aesthetic journey and holistic well-being.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  <PlaceholderSocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div>
            <h5 className="font-apfel text-base sm:text-lg font-medium text-primary mb-4 sm:mb-6 tracking-wide">Quick Links</h5>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-apfel text-sm sm:text-base text-gray-600 hover:text-primary hover:underline underline-offset-2 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h5 className="font-apfel text-base sm:text-lg font-medium text-primary mb-4 sm:mb-6 tracking-wide">Contact Us</h5>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="tel:+17805550123" className="font-apfel text-sm sm:text-base text-gray-600 hover:text-primary hover:underline underline-offset-2 transition-colors duration-300">
                  +1 (780) 555-0123 {/* Placeholder */}
                </a>
              </li>
              <li>
                <a href="mailto:hello@thefix.clinic" className="font-apfel text-sm sm:text-base text-gray-600 hover:text-primary hover:underline underline-offset-2 transition-colors duration-300">
                  hello@thefix.clinic {/* Placeholder */}
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=10394+105+St+NW+Edmonton,+AB+T5J+1E6" // Placeholder address
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-apfel text-sm sm:text-base text-gray-600 hover:text-primary hover:underline underline-offset-2 transition-colors duration-300"
                >
                  123 Luxury Ave, Suite 100<br />
                  Beverly Hills, CA 90210 {/* Placeholder */}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Opening Hours or other info (Optional) */}
          <div>
            <h5 className="font-apfel text-base sm:text-lg font-medium text-primary mb-4 sm:mb-6 tracking-wide">Hours</h5>
            <p className="font-apfel text-sm sm:text-base text-gray-600 leading-relaxed">
              Mon - Fri: 9am - 6pm<br />
              Sat: 10am - 4pm<br />
              Sun: Closed
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Credits */}
        <div className="border-t border-gray-200 mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 text-center">
          <p className="font-apfel text-xs sm:text-sm text-gray-500 leading-normal">
            © {currentYear} The Fix Clinic. All rights reserved.
          </p>
          <p className="font-apfel text-xs sm:text-sm text-gray-500 mt-1 leading-normal">
            Website design and build by <a href="#" className="hover:text-primary underline underline-offset-2">Your Agency Name</a> {/* Placeholder */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
