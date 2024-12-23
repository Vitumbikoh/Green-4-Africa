import React from "react";

const Projects = () => {
  const projectsData = [
    {
      title: "Tree Planting Initiative",
      description:
        "A campaign to plant 10,000 trees across various regions to combat deforestation and promote biodiversity.",
      link: "/projects/tree-planting",
      image: "/images/tree-planting.jpg", // Replace with the actual image path
    },
    {
      title: "Community Recycling Program",
      description:
        "Empowering communities to manage waste effectively through recycling workshops and initiatives.",
      link: "/projects/recycling-program",
      image: "/images/recycling-program.jpg", // Replace with the actual image path
    },
    {
      title: "Clean Water for All",
      description:
        "Providing access to clean and safe water in underprivileged areas through borehole drilling and water purification projects.",
      link: "/projects/clean-water",
      image: "/images/clean-water.jpg", // Replace with the actual image path
    },
    {
      title: "Green Energy Adoption",
      description:
        "Promoting the use of solar energy and other renewable sources to reduce reliance on fossil fuels.",
      link: "/projects/green-energy",
      image: "/images/green-energy.jpg", // Replace with the actual image path
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">Our Projects</h2>
          <p className="text-gray-600 mt-4">
            Explore the impactful projects Green 4 Africa is leading to build a sustainable future.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  className="text-green-600 font-medium hover:text-green-800 underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
