import React from "react";

const Products = () => {
  const mainProducts = [
    {
      title: "Eco-Plastic Bricks",
      description:
        "Production and sale of durable and eco-friendly plastic bricks.",
    },
    {
      title: "Organic Fertilizer",
      description:
        "Production and sale of sustainable organic fertilizer for high yields.",
    },
    {
      title: "Waste Management",
      description:
        "Collecting waste and recycling to reduce environmental impact.",
    },
  ];

  return (
    <div className="bg-white py-10 px-16 sm:px-8 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
          Our Products & Services
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-16">
          Green 4 Africa offers innovative products and services designed to
          support environmental conservation and sustainable development.
        </p>

        {/* Main Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {mainProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
            >
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
                {product.title}
              </h4>
              <p className="text-gray-500 text-base sm:text-lg">{product.description}</p>
            </div>
          ))}
        </div>

        {/* See All Link */}
        <div className="mt-10">
          <a
            href="/products"
            className="text-green-500 hover:text-green-600 text-lg font-semibold"
          >
            See All Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
