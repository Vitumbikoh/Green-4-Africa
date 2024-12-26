import React from 'react';

const GetInvolved = () => {
  return (
    <div className="bg-gray-50 py-16 mt-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-6">
          Get Involved with Green 4 Africa
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Join us in making a positive impact on the environment. Whether through donations, volunteering, or partnerships, your contribution helps drive sustainable change in Africa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Donation Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="text-green-600 text-4xl mb-4">
              <i className="fas fa-hand-holding-heart"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Donate</h3>
            <p className="text-gray-600 mb-6">
              Your financial support enables us to implement impactful projects and initiatives across Africa.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              Donate Now
            </button>
          </div>

          {/* Volunteer Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="text-green-600 text-4xl mb-4">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Volunteer</h3>
            <p className="text-gray-600 mb-6">
              Be part of our hands-on initiatives and help make a direct difference in local communities.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              Join as Volunteer
            </button>
          </div>

          {/* Partnership Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="text-green-600 text-4xl mb-4">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Partner with Us</h3>
            <p className="text-gray-600 mb-6">
              Collaborate with us to create and expand innovative solutions for environmental sustainability.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
