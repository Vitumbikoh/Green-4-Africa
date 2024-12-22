import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-transparent backdrop-blur-sm' : 'bg-green-600'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="text-2xl font-bold text-white">
            <Link to="/">Green 4 Africa</Link>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;
