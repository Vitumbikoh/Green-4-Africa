import React, { useState, useEffect } from "react";
import Team from "../components/TeamMembers";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className={`relative h-80 bg-cover bg-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: "url('/matthews.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h2 className="text-4xl font-serif text-white font-bold">
            About Green for Africa
          </h2>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-serif font-bold text-green-700">
            Who We Are
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Green 4 Africa was established in compliance with the Laws of Malawi
            in October 2021 by Mathews Zinyengo Kumwenda. We collect and recycle
            waste into various products at Vingwangwa Dumpsite in Mzuzu City,
            Malawi.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                description:
                  "Harnessing youth-focused environmental pollution control, wealth creation, and disease prevention.",
              },
              {
                title: "Our Vision",
                description:
                  "A waste-free Africa fostering environmentally friendly farming methods.",
              },
              {
                title: "Our Values",
                description:
                  "Environmental Stewardship, Community Empowerment, Innovation, and Transparency.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-green-600 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-serif font-bold text-green-700 text-center">
            Our Impact
          </h2>
          <p className="text-center text-gray-700 mt-4 leading-relaxed">
            Green 4 Africa has made a tangible difference through impactful
            projects and collaborations.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              {
                icon: "fas fa-leaf",
                title: "Environmental",
                items: [
                  { text: "Improve soil health and fertility", emoji: "🌱" },
                  { text: "Waste reduction", emoji: "♻️" },
                ],
              },
              {
                icon: "fas fa-users",
                title: "Social",
                items: [
                  { text: "Reducing hunger", emoji: "🍴" },
                  { text: "Increased agricultural productivity", emoji: "🌾" },
                ],
              },
              {
                icon: "fas fa-briefcase",
                title: "Economic",
                items: [
                  { text: "Job creation among youth", emoji: "👷" },
                  { text: "Economic stability for farmers", emoji: "🌟" },
                ],
              },
            ].map((impact, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center items-center text-green-600 mb-4">
                  <i className={`${impact.icon} text-4xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-4">
                  {impact.title}
                </h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  {impact.items.map((item, i) => (
                    <li key={i}>
                      <span className="mr-2">{item.emoji}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <Team />

      {/* Call to Action */}
      <section className="py-12 text-g4AGreen text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-serif font-bold">
            Join Us in Making a Difference
          </h2>
          <p className="mt-4 leading-relaxed">
            Partner with us or contribute to our projects to create a
            sustainable future for all.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-g4AGreen text-white font-semibold py-3 px-6 rounded-md shadow hover:bg-gray-100 transition"
            aria-label="Contact Us"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
