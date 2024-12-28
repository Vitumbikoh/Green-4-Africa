import React, { useEffect, useState } from "react";
import "animate.css";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay the animation for 500ms after the component loads
    return () => clearTimeout(timer);
  }, []);

  const mainProducts = [
    {
      name: "Eco-Plastic Bricks",
      description:
        "Production and sale of durable and eco-friendly plastic bricks for sustainable construction.",
      link: "/products/eco-plastic-bricks",
      image: "/Banner.jpg", // Image placed inside the public folder
    },
    {
      name: "Organic Fertilizer",
      description:
        "Production and sale of sustainable organic fertilizer to promote high crop yields and environmental conservation.",
      link: "/products/organic-fertilizer",
      image: "/Banner.jpg", // Image placed inside the public folder
    },
    {
      name: "Fire Briquettes",
      description:
        "Production and sale of eco-friendly fire briquettes as an alternative energy source.",
      link: "/products/fire-briquettes",
      image: "/Banner.jpg", // Image placed inside the public folder
    },
  ];

  const mainServices = [
    {
      name: "Waste Collection & Recycling",
      description:
        "Collecting waste and recycling materials to reduce environmental impact and promote a circular economy.",
      link: "/services/waste-collection",
      image: "/Banner.jpg", // Image placed inside the public folder
    },
    {
      name: "Environmental Protection Training",
      description:
        "Training the community to protect the environment through awareness and practical steps.",
      link: "/services/environmental-protection",
      image: "/Banner.jpg", // Image placed inside the public folder
    },
    {
      name: "Sustainable Agriculture Training",
      description:
        "Training farmers in sustainable agriculture practices to boost productivity while preserving natural resources.",
      link: "/services/sustainable-agriculture",
      image: "/Banner.jpg", // Image placed inside the public folder
    },
  ];

  return (
    <section>
      <div className="py-16 bg-gray-50 mt-6">
        {/* Banner with Animated Text */}
        <div
          className={`relative h-64 bg-cover bg-center rounded-lg mb-12 transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: "url('/Banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h2 className="text-4xl font-bold text-white animate__animated animate__fadeIn">
              Our Products & Services
            </h2>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-12">
            <p className="text-gray-600 mt-4">
              Explore our eco-friendly products and services designed to foster environmental sustainability and community development.
            </p>
          </div>

          {/* Main Products Grid */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-semibold text-green-700 mb-6">Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mainProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover transform hover:scale-110 transition duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Services Grid */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-semibold text-green-700 mb-6">Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-48 w-full object-cover transform hover:scale-110 transition duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
