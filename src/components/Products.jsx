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
    <div className="bg-gray-50 pb-10 px-8 sm:px-12 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
          Our Products & Services
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Green 4 Africa offers innovative products and services designed to
          support environmental conservation and sustainable development.
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mainProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 p-8"
            >
              <h4 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                {product.title}
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* See All Link */}
        <div className="mt-12">
          <a
            href="/products"
            className="text-green-600 hover:text-green-700 text-lg font-medium underline transition-colors"
          >
            See All Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
