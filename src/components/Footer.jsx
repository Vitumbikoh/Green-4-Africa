// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6">
      <div className="container mx-auto text-center px-4">
        {/* Contact Information */}
        <p className="mb-4">
          <strong>Green 4 Africa</strong><br />
          P.O. Box 794, Mzuzu, Malawi<br />
          Email: <a href="mailto:greenafrica04@gmail.com" className="underline">greenafrica04@gmail.com</a><br />
          Phone: 0995111018 / 0882632963
        </p>

        {/* Social Media Links */}
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
        </div>

        <p className="mt-4 text-sm">&copy; 2024 Green 4 Africa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
