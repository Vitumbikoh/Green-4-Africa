import React from "react";

const Products = () => {
  const productsData = [
    {
      name: "Reusable Bags",
      description:
        "Eco-friendly reusable bags made from sustainable materials to reduce plastic waste.",
      price: "$10",
      link: "/products/reusable-bags",
      image: "/Banner.jpg", // Image placed inside the public folder
    },
    {
      name: "Solar Lanterns",
      description:
        "Affordable solar-powered lanterns designed for off-grid communities.",
      price: "$25",
      link: "/products/solar-lanterns",
      image: "/Banner.jpg", // Image placed inside the public folder
    },
    {
      name: "Organic Fertilizer",
      description:
        "Chemical-free fertilizer that promotes sustainable farming practices.",
      price: "$15",
      link: "/products/organic-fertilizer",
      image: "/Banner.jpg", // Image placed inside the public folder
    },
    {
      name: "Bamboo Straws",
      description:
        "Durable, reusable bamboo straws for eco-conscious individuals.",
      price: "$5",
      link: "/products/bamboo-straws",
      image: "/Banner.jpg", // Image placed inside the public folder
    },
  ];

  return (
    <section className="py-16 bg-gray-50 mt-10">
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
                {/* Ensure the link is valid or replace with a button */}
                {product.link ? (
                  <a
                    href={product.link}
                    className="text-green-600 font-medium hover:text-green-800 underline"
                  >
                    Learn More
                  </a>
                ) : (
                  <button
                    onClick={() => alert("Link not available")}
                    className="text-green-600 font-medium hover:text-green-800 underline"
                  >
                    Learn More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
