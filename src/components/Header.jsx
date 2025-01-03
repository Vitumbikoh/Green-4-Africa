import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component

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

  // Function to close the mobile menu when a link is clicked
  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 pr-2 sm:pr-4 md:pr-8 lg:pr-12 ${
        isScrolled || !isHomePage
          ? "bg-g4AGreen text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4 md:py-8 lg:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo.png" // Replace with your Green 4 Africa logo path
            alt="Green 4 Africa"
            className="h-6 md:h-8 lg:h-10"
          />
          <span className="text-md sm:text-md md:text-lg lg:text-2xl font-serif font-bold text-white">Green 4 Africa</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12 txet-white">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/products", label: "Products" },
            { path: "/projects", label: "Projects" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition duration-300 ${
                location.pathname === item.path
                  ? "text-gray-900 border-b-2 border-gray-800"
                  : "text-white hover:text-gray-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 bg-white text-g4AGreen rounded-md hover:bg-green-700 hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        location={location}
        toggleMobileMenu={handleMobileMenuClose}
      />
    </header>
  );
};

export default Header;
