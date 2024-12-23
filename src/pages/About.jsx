import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-[60vh] w-full flex items-center justify-center"
        style={{ backgroundImage: "url('/Homepage.JPG')" }}
      >
        <div className=" text-white p-10 rounded-md">
          <h1 className="text-4xl font-bold">About Green 4 Africa</h1>
          <p className="mt-2 text-lg">
            Creating a sustainable future for generations to come.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">Who We Are</h2>
            <p className="mt-4 text-gray-600">
              Green 4 Africa is an organization committed to improving
              environmental pollution control, fostering sustainable
              development, and empowering communities to lead eco-friendly
              lives.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600">
                To champion environmental awareness and implement innovative
                solutions that promote sustainability.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-600">
                A world where communities live in harmony with nature and
                embrace sustainable practices in their daily lives.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">
                Our Values
              </h3>
              <ul className="mt-4 text-gray-600 list-disc list-inside">
                <li>Environmental Stewardship</li>
                <li>Community Empowerment</li>
                <li>Innovation and Sustainability</li>
                <li>Transparency and Accountability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-green-700">
            Our Impact
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Over the years, Green 4 Africa has made a tangible difference in our
            communities through impactful projects and collaborations.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600">150+</h3>
              <p className="mt-2 text-gray-600">Community Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600">20,000+</h3>
              <p className="mt-2 text-gray-600">Trees Planted</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600">50+</h3>
              <p className="mt-2 text-gray-600">Schools Engaged</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-green-700">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Our dedicated team of professionals works tirelessly to achieve our
            mission.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {/* Sample Team Member */}
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="mt-4 text-lg font-bold">John Doe</h3>
              <p className="text-gray-600">Executive Director</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white text-grey-200 py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-bold">Join Us in Making a Difference</h2>
          <p className="mt-4 text-lg">
            Partner with us or contribute to our projects to create a
            sustainable future for all.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-white text-green-700 font-semibold py-3 px-6 rounded-md shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
