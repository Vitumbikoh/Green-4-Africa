import React from "react";

const Products = () => {
  const productsData = [
    {
      name: "Reusable Bags",
      description:
        "Eco-friendly reusable bags made from sustainable materials to reduce plastic waste.",
      price: "$10",
      link: "/products/reusable-bags",
      image: "/images/reusable-bags.jpg", // Replace with actual image path
    },
    {
      name: "Solar Lanterns",
      description:
        "Affordable solar-powered lanterns designed for off-grid communities.",
      price: "$25",
      link: "/products/solar-lanterns",
      image: "/images/solar-lanterns.jpg", // Replace with actual image path
    },
    {
      name: "Organic Fertilizer",
      description:
        "Chemical-free fertilizer that promotes sustainable farming practices.",
      price: "$15",
      link: "/products/organic-fertilizer",
      image: "/images/organic-fertilizer.jpg", // Replace with actual image path
    },
    {
      name: "Bamboo Straws",
      description:
        "Durable, reusable bamboo straws for eco-conscious individuals.",
      price: "$5",
      link: "/products/bamboo-straws",
      image: "/images/bamboo-straws.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">Our Products</h2>
          <p className="text-gray-600 mt-4">
            Explore our eco-friendly products designed to promote sustainability.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-green-800 mb-6">
                  {product.price}
                </p>
                <a
                  href={product.link}
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

export default Products;
