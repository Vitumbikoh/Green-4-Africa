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
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-green-700">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Our dedicated team of professionals works tirelessly to achieve our
          mission.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg transform transition-all duration-300 ease-in-out group-hover:scale-105"
                src={member.image}
                alt={member.name}
              />
              <div className="absolute inset-0 bg-green-900 bg-opacity-30 flex justify-center items-end p-4 rounded-lg">
                <div className="text-center text-white">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
