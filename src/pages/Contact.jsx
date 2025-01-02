import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-[60vh] w-full flex items-center justify-center"
        style={{ backgroundImage: "url('/Banner.jpg')" }}
      >
        <div className="bg-gradient-to-r from-black/50 to-transparent text-white p-10 rounded-lg text-center">
          <h1 className="text-5xl font-serif font-bold">Contact Us</h1>
          <p className="mt-4 text-lg font-light">
            Let us help you achieve your environmental goals. Get in touch today!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-serif text-green-700 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            For inquiries, feedback, or support, reach out to us through the provided channels below.
          </p>

          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-green-700" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">greenafrica04@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-2xl text-green-700" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">0995111018 / 0882632963</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-green-700" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600">Vigwagwa Market, Mzuzu City</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-serif text-green-700 mb-8">Send Us a Message</h2>
          <form className="space-y-8">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg text-gray-700 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-lg text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition duration-300"
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
