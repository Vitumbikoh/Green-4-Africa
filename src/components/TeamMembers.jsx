import React from "react";

const Team = () => {
  const teamMembers = [
    { name: "John Doe", role: "Executive Director", image: "https://via.placeholder.com/150" },
    { name: "Jane Smith", role: "Marketing Manager", image: "https://via.placeholder.com/150" },
    { name: "Michael Johnson", role: "Lead Developer", image: "https://via.placeholder.com/150" },
    { name: "Emily Davis", role: "UX/UI Designer", image: "https://via.placeholder.com/150" },
    { name: "Mark Scott", role: "Business Analyst", image: "https://via.placeholder.com/150" },
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
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={member.image}
                alt={member.name}
              />
              <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
