import React from "react";
import Products from "../components/Products";
import Header from "../components/Header";
import Info from "../components/info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="relative">
      <Header /> {/* Add the Header component here */}
      <div
        className="bg-cover bg-center min-h-[80vh] md:min-h-[60vh] lg:min-h-[94vh] sm:min-h-[60vh] relative"
        style={{ backgroundImage: "url('/Bannner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 flex items-center h-full">
          <div className="w-full md:w-1/2 text-white mt-28 pt-28">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to Green 4 Africa
            </h1>
            <p className="text-lg mb-6">
              Green 4 Africa was founded on 07th November 2021 by Mathews
              Zinyengo Kumwenda with a vision to create a sustainable future for
              Africa.
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
                Learn More
              </button>
              <button className="bg-transparent border border-white px-6 py-3 rounded-md hover:bg-white hover:text-green-600">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Info Section */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
          <div className="text-center shadow-lg rounded-lg p-6 bg-gray-100 transform -translate-y-16">
            <div className="text-green-600 text-2xl mb-4">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <h3 className="font-bold text-lg mb-2">Working Hours</h3>
            <p>Mon-Sat: 8:00 AM - 5:00 PM</p>
          </div>
          <div className="text-center shadow-lg rounded-lg p-6 bg-gray-100 transform -translate-y-12">
            <div className="text-green-600 text-2xl mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <h3 className="font-bold text-lg mb-2">Our Location</h3>
            <p>Green Offices, Mzuzu, Malawi</p>
          </div>
          <div className="text-center shadow-lg rounded-lg p-6 bg-gray-100 transform -translate-y-16">
            <div className="text-green-600 text-2xl mb-4">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </div>
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <p>+265 999 123 456</p>
          </div>
        </div>
      </div>
      <Info />
      <Products />
    </div>
  );
};

export default Home;
