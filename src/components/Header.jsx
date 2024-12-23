import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled || !isHomePage
          ? "bg-green-600 text-white shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-6 sm:px-6 lg:px-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png" // Replace with your Green 4 Africa logo path
            alt="Green 4 Africa"
            className="h-10 mr-2"
          />
          <span className="text-2xl font-bold text-white">Green 4 Africa</span>
        </Link>

        {/* Mobile Menu Toggle (visible only on mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-12 items-center">
            <li>
              <Link to="/" className="hover:underline text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:underline text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-white">
                Contact
              </Link>
            </li>
            {/* CTA Button */}
            <li>
              <Link
                to="/get-involved"
                className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-200"
              >
                Get Involved
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (visible only on mobile when open) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-green-600 text-white p-6 space-y-4">
          <ul>
            <li>
              <Link to="/" className="block hover:underline text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block hover:underline text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="block hover:underline text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/projects" className="block hover:underline text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:underline text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/get-involved"
                className="block bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-200"
              >
                Get Involved
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
