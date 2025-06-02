import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Header Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="inline-flex items-center mr-4">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
              </svg>
              Monday - Thursday, 10am - 6pm, Friday &amp; Saturday, 9am - 3pm
            </span>
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center">
              <FaMapMarkerAlt className="w-4 h-4 mr-2" />
              43490 Yukon Drive, Suite 103, Ashburn, VA 20147
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/logo/main-logo.png" 
              alt="The Fix Clinic" 
              width={200} 
              height={140}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <Link href="https://thefixclinic.janeapp.com/" target="_blank" rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded transition duration-300"
            >
              Request an Appointment
            </Link>
            <div className="flex items-center text-primary space-x-4">
              <span className="inline-flex items-center">
                <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                Ashburn, VA
              </span>
              <a href="tel:(703) 576-8315" className="inline-flex items-center">
                <FaPhone className="w-4 h-4 mr-2" />
                Call Us
              </a>
              <div className="flex space-x-2">
                <a href="https://www.facebook.com/thefixclinic" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/thefixclinic/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <button onClick={toggleMenu} className="text-primary">
              <FaBars className="w-6 h-6" />
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-primary">
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-6">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/images/logo/main-logo.png" 
                  alt="The Fix Clinic" 
                  width={150} 
                  height={105}
                  className="h-12 w-auto"
                />
              </Link>
              <button onClick={toggleMenu} className="text-primary">
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <nav>
              <ul className="space-y-4 text-lg">
                <li className="py-3 border-b border-gray-200">
                  <Link href="/about" className="block" onClick={toggleMenu}>About Us</Link>
                </li>
                <li className="py-3 border-b border-gray-200">
                  <Link href="/membership" className="block" onClick={toggleMenu}>Membership</Link>
                </li>
                <li className="py-3 border-b border-gray-200">
                  <Link href="/weight-loss-wellness" className="block" onClick={toggleMenu}>Functional Wellness</Link>
                </li>
                <li className="py-3 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <Link href="/facial-balancing" className="block" onClick={toggleMenu}>Facial Balancing</Link>
                  </div>
                  <ul className="ml-4 mt-2 space-y-2">
                    <li><Link href="/facial-balancing/botox" className="block py-1" onClick={toggleMenu}>Botox</Link></li>
                    <li><Link href="/facial-balancing/filler" className="block py-1" onClick={toggleMenu}>Filler</Link></li>
                    <li><Link href="/facial-balancing/sculptra" className="block py-1" onClick={toggleMenu}>Biostimulators</Link></li>
                    <li><Link href="/facial-balancing/morpheus8-rf" className="block py-1" onClick={toggleMenu}>Morpheus8 RF</Link></li>
                    <li><Link href="/facial-balancing/kybella" className="block py-1" onClick={toggleMenu}>Kybella</Link></li>
                    <li><Link href="/facial-balancing/prp-prf-ez-gel" className="block py-1" onClick={toggleMenu}>PRP, PRF & EZ Gel</Link></li>
                  </ul>
                </li>
                <li className="py-3 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <Link href="/skin" className="block" onClick={toggleMenu}>Skin</Link>
                  </div>
                  <ul className="ml-4 mt-2 space-y-2">
                    <li><Link href="/skin/facials" className="block py-1" onClick={toggleMenu}>Facials</Link></li>
                    <li><Link href="/skin/permanent-makeup" className="block py-1" onClick={toggleMenu}>Permanent Makeup</Link></li>
                    <li><Link href="/skin/laser-treatments" className="block py-1" onClick={toggleMenu}>Laser Treatments</Link></li>
                  </ul>
                </li>
                <li className="py-3 border-b border-gray-200">
                  <Link href="/gallery" className="block" onClick={toggleMenu}>Gallery</Link>
                </li>
                <li className="py-3 border-b border-gray-200">
                  <Link href="/blog" className="block" onClick={toggleMenu}>Blog</Link>
                </li>
                <li className="py-3 border-b border-gray-200">
                  <Link href="/reviews" className="block" onClick={toggleMenu}>Reviews</Link>
                </li>
                <li className="py-3 border-b border-gray-200">
                  <Link href="/contact" className="block" onClick={toggleMenu}>Contact Us</Link>
                </li>
              </ul>
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link href="https://thefixclinic.janeapp.com/" target="_blank" rel="noopener noreferrer"
                className="block w-full bg-primary hover:bg-primary-dark text-white text-center px-4 py-3 rounded transition duration-300"
                onClick={toggleMenu}
              >
                Request an Appointment
              </Link>
              <div className="mt-4 flex flex-col space-y-3">
                <a href="tel:(703) 576-8315" className="inline-flex items-center text-primary">
                  <FaPhone className="w-5 h-5 mr-2" />
                  (703) 576-8315
                </a>
                <span className="inline-flex items-center text-primary">
                  <FaMapMarkerAlt className="w-5 h-5 mr-2" />
                  43490 Yukon Drive, Suite 103, Ashburn, VA 20147
                </span>
              </div>
              <div className="mt-4 flex space-x-4">
                <a href="https://www.facebook.com/thefixclinic" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/thefixclinic/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;