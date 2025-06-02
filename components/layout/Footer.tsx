import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="inline-flex items-center hover:text-accent">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="inline-flex items-center hover:text-accent">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
                  </svg>
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="inline-flex items-center hover:text-accent">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
                  </svg>
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="inline-flex items-center hover:text-accent">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
                  </svg>
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/weight-loss-wellness" className="inline-flex items-center hover:text-accent">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
                  </svg>
                  Functional Wellness
                </Link>
              </li>
              <li>
                <Link href="/facial-balancing" className="inline-flex items-center hover:text-accent">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
                  </svg>
                  Facial Balancing
                </Link>
              </li>
              <li>
                <Link href="/skin" className="inline-flex items-center hover:text-accent">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
                  </svg>
                  Skin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1 text-accent" />
                <p>43490 Yukon Dr Suite 103, Ashburn, VA 20147</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3 text-accent" />
                <a href="tel:(703) 576-8315" className="hover:text-accent">(703) 576-8315</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 text-accent" />
                <a href="mailto:frontdesk@thefixclinic.com" className="hover:text-accent">frontdesk@thefixclinic.com</a>
              </div>
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Connect with us</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/thefixclinic" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/thefixclinic/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-primary-dark py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
              <Link href="/privacy-policy" className="text-sm hover:text-accent">Privacy</Link>
              <Link href="/cookies-policy" className="text-sm hover:text-accent">Cookies</Link>
              <Link href="/accessibility-statement" className="text-sm hover:text-accent">Accessibility</Link>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()}, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;