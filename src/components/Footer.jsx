import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-g4AGreen text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* About Section */}
          <div className="text-center md:text-left">
            <img
              src="/logo.png" // Replace with your Green 4 Africa logo path
              alt="Green 4 Africa"
              className="h-20 mx-auto md:mx-0 mb-6"
            />
            <h3 className="font-serif text-xl font-bold mb-4">About Green 4 Africa</h3>
            <p className="text-gray-300 leading-relaxed">
              Green 4 Africa is committed to sustainable development and environmental conservation. Join us in creating a greener and healthier future for Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/About"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/Projects"
                  className="text-gray-300 hover:text-white transition"
                >
                  Our Projects
                </a>
              </li>
              <li>
                <a
                  href="/Contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
              
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-gray-300">
              <li>P.O. Box 794, Mzuzu, Malawi</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:greenafrica04@gmail.com"
                  className="underline hover:text-white transition"
                >
                  greenafrica04@gmail.com
                </a>
              </li>
              <li>Phone: 0995111018 / 0882632963</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Green 4 Africa. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">Powered by React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
