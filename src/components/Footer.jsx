import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-g4AGreen text-white py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* About Section */}
          <div className="text-center md:text-left">
            <img
              src="/logo.png" // Replace with your Green 4 Africa logo path
              alt="Green 4 Africa"
              className="h-16 mx-auto md:mx-0 mb-4"
            />
            <h3 className="font-bold text-lg mb-4">About Green 4 Africa</h3>
            <p>
              Green 4 Africa is dedicated to sustainable development and creating awareness for a greener Africa. Join us in our mission to protect the environment and empower communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/our-projects" className="hover:text-gray-300">Our Projects</a></li>
              <li><a href="/volunteer" className="hover:text-gray-300">Volunteer</a></li>
              <li><a href="/donate" className="hover:text-gray-300">Donate</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li>P.O. Box 794, Mzuzu, Malawi</li>
              <li>Email: <a href="mailto:greenafrica04@gmail.com" className="underline hover:text-gray-300">greenafrica04@gmail.com</a></li>
              <li>Phone: 0995111018 / 0882632963</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 Green 4 Africa. All rights reserved.</p>
          <p className="text-xs text-gray-500">Powered by React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
