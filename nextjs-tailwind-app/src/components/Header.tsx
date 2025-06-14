"use client"; 

import Link from 'next/link';
import { useState } from 'react';

const HamburgerIcon = () => (
  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-background text-primary py-5 sm:py-6 px-4 md:px-8 relative z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo styled similar to an H3 or a distinct brand mark */}
        <div className="text-primary z-50">
          <Link href="/" onClick={closeMobileMenu} className="font-versailles text-xl sm:text-2xl md:text-3xl font-normal leading-none tracking-normal"> {/* Adjusted size, leading, tracking */}
            The Fix Clinic
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-5 lg:space-x-6 items-center">
          {navLinks.map(link => {
            const navLinkClasses = "font-apfel text-base font-normal tracking-normal hover:text-accent transition-colors duration-300 py-2"; // Navigation Link Text style
            if (link.label === 'Services') {
              return (
                <div key={link.href} className="relative group">
                  <Link href={link.href} className={navLinkClasses}>
                    {link.label}
                  </Link>
                  <div 
                    aria-hidden="true"
                    className="absolute hidden group-hover:block top-full left-1/2 -translate-x-1/2 mt-1 w-56 
                               bg-white shadow-xl rounded-md py-2 z-50
                               opacity-0 group-hover:opacity-100 
                               transform scale-95 group-hover:scale-100 -translate-y-2 group-hover:translate-y-0
                               pointer-events-none group-hover:pointer-events-auto
                               transition-all duration-200 ease-out"
                  >
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary font-apfel transition-colors duration-150">Aesthetic Injections</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary font-apfel transition-colors duration-150">Skin Rejuvenation</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary font-apfel transition-colors duration-150">Wellness Therapies</a>
                    <Link href="/services" className="block px-4 py-2 text-sm text-primary font-apfel font-semibold hover:underline">View All Services</Link>
                  </div>
                </div>
              );
            }
            return (
              <Link key={link.href} href={link.href} className={navLinkClasses}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden z-50">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="text-primary focus:outline-none p-1 -mr-1"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-primary text-background z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col items-center justify-center pt-20`}
      >
        <button onClick={closeMobileMenu} className="absolute top-5 right-4 text-background p-2" aria-label="Close mobile menu">
          <CloseIcon />
        </button>
        
        <nav className="flex flex-col items-center space-y-6 sm:space-y-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-apfel text-xl sm:text-2xl font-normal tracking-normal hover:text-accent transition-colors duration-300 py-2 sm:py-3" // Navigation Link Text style for mobile
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
