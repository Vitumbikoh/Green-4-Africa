import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-[60vh] w-full flex items-center justify-center"
        style={{ backgroundImage: "url('/Banner.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 text-white p-10 rounded-md text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">Let us help you achieve your environmental goals. Get in touch today!</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Column */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-green-700">Get in Touch</h2>
          <p className="text-gray-700">
            For inquiries, feedback, or support, reach out to us through the provided channels below.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl text-green-700" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p>greenafrica04@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-xl text-green-700" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p>0995111018 / 0882632963</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-green-700" />
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p>Vigwagwa Market, Mzuzu City</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-1 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-medium py-3 rounded-lg hover:bg-green-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Contact;
