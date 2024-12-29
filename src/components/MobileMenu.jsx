import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ isMobileMenuOpen, location, toggleMobileMenu }) => {
  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    toggleMobileMenu(false);
  };

  return (
    <div
      className={`lg:hidden ${
        isMobileMenuOpen ? "block" : "hidden"
      } bg-green-600 text-white p-6 space-y-8 md:p-8 md:space-y-16`}
    >
      <ul>
        <li>
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`block ${
              location.pathname === "/"
                ? "text-gray-400 underline"
                : "text-white hover:text-gray-400 "
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className={`block ${
              location.pathname === "/about"
                ? "text-gray-400 underline"
                : "text-white hover:text-gray-400 "
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            onClick={handleLinkClick}
            className={`block ${
              location.pathname === "/products"
                ? "text-gray-400 underline"
                : "text-white hover:text-gray-400 "
            }`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={handleLinkClick}
            className={`block ${
              location.pathname === "/projects"
                ? "text-gray-400 underline"
                : "text-white hover:text-gray-400 "
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`block ${
              location.pathname === "/contact"
                ? "text-gray-400 underline"
                : "text-white hover:text-gray-400 "
            }`}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="block bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
