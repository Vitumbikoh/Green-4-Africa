import React, { useEffect, useState } from "react";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const mainProducts = [
    {
      name: "Eco-Plastic Bricks",
      description:
        "Durable, eco-friendly plastic bricks for sustainable construction.",
      price: "$50",
      link: "/products/eco-plastic-bricks",
      image: "/Banner.jpg",
    },
    {
      name: "Organic Fertilizer",
      description:
        "Sustainable organic fertilizer to promote high crop yields.",
      price: "$30",
      link: "/products/organic-fertilizer",
      image: "/Banner.jpg",
    },
    {
      name: "Fire Briquettes",
      description:
        "Eco-friendly fire briquettes as an alternative energy source.",
      price: "$20",
      link: "/products/fire-briquettes",
      image: "/Banner.jpg",
    },
  ];

  const mainServices = [
    {
      name: "Waste Collection & Recycling",
      description:
        "Reducing environmental impact through waste collection and recycling.",
      price: "$100",
      link: "/services/waste-collection",
      image: "/Banner.jpg",
    },
    {
      name: "Environmental Protection Training",
      description:
        "Training communities in awareness and practical steps for sustainability.",
      price: "$75",
      link: "/services/environmental-protection",
      image: "/Banner.jpg",
    },
    {
      name: "Sustainable Agriculture Training",
      description:
        "Teaching sustainable practices to enhance productivity and conservation.",
      price: "$50",
      link: "/services/sustainable-agriculture",
      image: "/Banner.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div
        className={`relative h-64 bg-cover bg-center rounded-lg shadow-md mb-10 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: "url('/Banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Our Offerings</h2>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">
            Eco-Friendly Solutions
          </h3>
          <p className="text-gray-600 mt-2">
            Discover our innovative products and services promoting
            sustainability.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    {product.description}
                  </p>
                  <div className="text-g4AGreen font-semibold mt-4">
                    {product.price}
                  </div>
                  <a
                    href={product.link}
                    className="inline-block mt-4 text-sm text-g4AGreen hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800">
                    {service.name}
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    {service.description}
                  </p>
                  <div className="text-green-600 font-semibold mt-4">
                    {service.price}
                  </div>
                  <a
                    href={service.link}
                    className="inline-block mt-4 text-sm text-g4AGreen hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
