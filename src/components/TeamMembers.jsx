import React from "react";

const Team = () => {
  const teamMembers = [
    { name: "Mathews Z. Kumwenda", role: "Executive Director", image: "matthews.jpg" },
    { name: "Grace Kayuni", role: "Marketing Officer", image: "GraceKayuni.jpg" },
    { name: "Sithandiveni Soko", role: "Head of Sanitation", image: "SithandiveniSoko.jpg" },
    { name: "Asayile Ngosi", role: "Programmes Manager", image: "AsayileNgosi.jpg" },
    { name: "Dorica Kawonga", role: "Head of Agriculture", image: "DoricaKawonga.jpg" },
    { name: "Walinase Singini", role: "Quality Control Officer", image: "SmileHamilton.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-800 font-bold">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet the professionals driving our mission forward with passion and expertise.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                className="w-full h-72 object-cover"
                src={member.image}
                alt={member.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
  