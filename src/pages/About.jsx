import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Team from "../components/TeamMembers";

// Animation variants for paragraphs
const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Animation variants for heading and numbers
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after the component mounts to trigger animation
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-100 my-8 pt-8">
      {/* Hero Section */}
      <div
        className={`relative h-72 bg-cover bg-center rounded-lg mb-12 transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: "url('/matthews.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h2 className="text-4xl font-bold text-white animate__animated animate__fadeIn">
            Our Products & Services
          </h2>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700">Who We Are</h2>
            <motion.p
              className="mt-4 text-gray-600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={paragraphVariants}
            >
              Green Africa was established in total compliance of the Laws of
              Malawi in October in the year of our Lord 2021 by Mathews Zinyengo
              Kumwenda as a Founder.
            </motion.p>
            <motion.p
              className="mt-4 text-gray-600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={paragraphVariants}
            >
              Green 4 Africa collects waste and recycles them into different
              products at Vingwangwa Dumpsite in Mzuzu City, Malawi.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">
                Our Mission
              </h3>
              <motion.p
                className="mt-4 text-gray-600"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={paragraphVariants}
              >
                Harnessing the youth-focused environmental pollution control,
                wealth creation and prevention of the commucable diseases.
              </motion.p>
            </div>
            <div className="bg-green-50 p-6 px-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">
                Our Vision
              </h3>
              <motion.p
                className="mt-4 text-gray-600"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={paragraphVariants}
              >
                A waste-free Africa fostering enviromentally friendly farming
                methods
              </motion.p>
            </div>
            <div className="bg-green-50 p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">
                Our Values
              </h3>
              <motion.ul
                className="mt-4 text-gray-600 list-disc list-inside"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={paragraphVariants}
              >
                <li>Environmental Stewardship</li>
                <li>Community Empowerment</li>
                <li>Innovation and Sustainability</li>
                <li>Transparency and Accountability</li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.h2
            className="text-3xl font-bold text-center text-green-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={headingVariants}
          >
            Our Impact
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={paragraphVariants}
          >
            Over the years, Green 4 Africa has made a tangible difference in our
            communities through impactful projects and collaborations.
          </motion.p>

          <div className="grid gap-8 mt-10 md:grid-cols-3">
            {/* Environmental Impact */}
            <motion.div
              className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={paragraphVariants}
            >
              <div className="flex items-center justify-center mb-4 text-green-600">
                <i className="fas fa-leaf text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center text-green-600">
                Environmental
              </h3>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>🌱 Improve soil health and fertility</li>
                <li>♻️ Waste reduction</li>
              </ul>
            </motion.div>

            {/* Social Impact */}
            <motion.div
              className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={paragraphVariants}
            >
              <div className="flex items-center justify-center mb-4 text-green-600">
                <i className="fas fa-users text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center text-green-600">
                Social
              </h3>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>🍴 Reducing hunger</li>
                <li>🌾 Increased agricultural productivity</li>
              </ul>
            </motion.div>

            {/* Economic Impact */}
            <motion.div
              className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={paragraphVariants}
            >
              <div className="flex items-center justify-center mb-4 text-green-600">
                <i className="fas fa-briefcase text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center text-green-600">
                Economic
              </h3>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>👷 Creation of job opportunities among the youth</li>
                <li>🌟 Economic stability for farmers</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <Team />

      {/* Call to Action */}
      <div className="bg-white text-grey-200 py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-bold">Join Us in Making a Difference</h2>
          <motion.p
            className="mt-4 text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={paragraphVariants}
          >
            Partner with us or contribute to our projects to create a
            sustainable future for all.
          </motion.p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-white text-green-700 font-semibold py-3 px-6 rounded-md shadow hover:bg-gray-100 transition"
            aria-label="Contact Us"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
