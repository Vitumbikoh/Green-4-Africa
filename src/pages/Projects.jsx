import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectsData = [
    {
      title: "Sustainable Agriculture Initiative",
      description:
        "Implement climate-resilient agricultural practices, promote organic farming, and provide training to smallholder farmers to improve crop yields and income.",
      link: "/projects/sustainable-agriculture",
      image: "/Banner.jpg",
    },
    {
      title: "Waste Management and Recycling",
      description:
        "Develop and implement effective waste management systems, promoting recycling, organic fertilizer production, eco-plastic bricks production, fire briquettes making, and proper disposal of hazardous waste.",
      link: "/projects/waste-management",
      image: "/Banner.jpg",
    },
    {
      title: "Eco-Friendly Solutions",
      description:
        "Promote the use of renewable energy sources, such as solar, wind, and biogas, to reduce dependence on fossil fuels and mitigate climate change.",
      link: "/projects/eco-friendly-solutions",
      image: "/Banner.jpg",
    },
    {
      title: "Climate Change Adaptation and Resilience",
      description:
        "Support communities to develop and implement climate change adaptation plans, promoting resilience and reducing vulnerability to climate-related disasters.",
      link: "/projects/climate-adaptation",
      image: "/Banner.jpg",
    },
    {
      title: "Environmental Education and Awareness",
      description:
        "Develop and implement environmental education programs, promoting awareness and inspiring action on environmental conservation and sustainability.",
      link: "/projects/environmental-education",
      image: "/Banner.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600">
            Discover impactful projects led by Green 4 Africa to promote a
            sustainable future.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base mb-5">
                  {project.description}
                </p>
                <Link
                  to={project.link}
                  className="inline-block bg-green-700 text-white text-sm font-medium py-2 px-4 rounded hover:bg-green-800 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
