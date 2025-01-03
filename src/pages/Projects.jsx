import React from "react";
import { Link } from "react-router-dom";
import { FaSeedling, FaRecycle, FaSolarPanel, FaCloudSunRain, FaBookReader } from "react-icons/fa";

const Projects = () => {
  const projectsData = [
    {
      title: "Sustainable Agriculture Initiative",
      description:
        "Implement climate-resilient agricultural practices, promote organic farming, and provide training to smallholder farmers to improve crop yields and income.",
      link: "/projects/sustainable-agriculture",
      icon: <FaSeedling className="text-green-700 text-6xl" />,
    },
    {
      title: "Waste Management and Recycling",
      description:
        "Develop and implement effective waste management systems, promoting recycling, organic fertilizer production, eco-plastic bricks production, fire briquettes making, and proper disposal of hazardous waste.",
      link: "/projects/waste-management",
      icon: <FaRecycle className="text-blue-700 text-6xl" />,
    },
    {
      title: "Eco-Friendly Solutions",
      description:
        "Promote the use of renewable energy sources, such as Organic fertilizer, solar, fire briquettes, eco-plastic bricks, and biogas, to reduce dependence on fossil fuels and mitigate climate change.",
      link: "/projects/eco-friendly-solutions",
      icon: <FaSolarPanel className="text-yellow-600 text-6xl" />,
    },
    {
      title: "Climate Change Adaptation and Resilience",
      description:
        "Support communities to develop and implement climate change adaptation plans, promoting resilience and reducing vulnerability to climate-related disasters.",
      link: "/projects/climate-adaptation",
      icon: <FaCloudSunRain className="text-blue-600 text-6xl" />,
    },
    {
      title: "Environmental Education and Awareness",
      description:
        "Develop and implement environmental education programs, promoting awareness and inspiring action on environmental conservation and sustainability.",
      link: "/projects/environmental-education",
      icon: <FaBookReader className="text-green-600 text-6xl" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8 pt-8">
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
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 text-center"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-center items-center mb-5">{project.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base mb-5">
                  {project.description}
                </p>
                <Link
                  to={project.link}
                  className="mt-auto inline-block bg-green-700 text-white text-sm font-medium py-2 px-3 rounded hover:bg-green-800 transition w-32 text-center mx-auto"
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
