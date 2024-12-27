import React from "react";
import Products from "../components/Products";
import Header from "../components/Header"; // Import the Header component
import Info from "../components/info";

const Home = () => {
  return (
    <div className="relative">
      <Header /> {/* Add the Header component here */}
      {/* Hero Section */}
      <div
        className="bg-cover bg-center min-h-[94vh] md:min-h-[60vh] relative" // Adjust height for tablet
        style={{ backgroundImage: "url('/Bannner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 flex items-center h-full">
          <div className="w-full md:w-1/2 text-white mt-28 pt-28">
            <h1 className="text-5xl font-bold mb-6">
              Leading Change for a Sustainable Future
            </h1>
            <p className="text-lg mb-6">
              Green 4 Africa is dedicated to improving environmental pollution
              control and fostering sustainable development across Africa.
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
      <div className="bg-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
          <div className="text-center shadow-lg rounded-lg p-6 bg-gray-100 transform -translate-y-12">
            <div className="text-green-600 text-4xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">Working Hours</h3>
            <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
          </div>
          <div className="text-center shadow-lg rounded-lg p-6 bg-gray-100 transform -translate-y-12">
            <div className="text-green-600 text-4xl mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">Our Location</h3>
            <p>Green Offices, Lilongwe, Malawi</p>
          </div>
          <div className="text-center shadow-lg rounded-lg p-6 bg-gray-100 transform -translate-y-12">
            <div className="text-green-600 text-4xl mb-4">
              <i className="fas fa-phone-alt"></i>
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
