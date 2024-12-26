import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ isMobileMenuOpen, location }) => {
  return (
    <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-green-600 text-white p-6 space-y-4`}>
      <ul>
        <li>
          <Link
            to="/"
            className={`block ${
              location.pathname === "/" ? "text-gray-400 underline" : "text-white hover:text-gray-400 hover:underline"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`block ${
              location.pathname === "/about"
                ? "text-gray-400 underline"
                : "text-white hover:text-gray-400 hover:underline"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`block ${
              location.pathname === "/products"
                ? "text-gray-400 underline"
                : "text-white hover:text-gray-400 hover:underline"
            }`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`block ${
              location.pathname === "/projects"
                ? "text-gray-400 underline"
                : "text-white hover:text-gray-400 hover:underline"
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`block ${
              location.pathname === "/contact"
                ? "text-gray-400 underline"
                : "text-white hover:text-gray-400 hover:underline"
            }`}
          >
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
  );
};

export default MobileMenu;
