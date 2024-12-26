import React from 'react';

const Products = () => {
  const services = [
    {
      title: 'Organic Fertilizer',
      description:
        'Sustainable organic fertilizer that helps farmers achieve high yields and ensures environmental conservation.',
      learnMoreLink: '/about',
    },
    {
      title: 'Youth Empowerment',
      description:
        'Programs fostering resourceful, development-oriented youth for socioeconomic advancement and mindset change.',
      learnMoreLink: '/about'
    },
    {
      title: 'Natural Resource Management',
      description:
        'Encouraging sustainable resource utilization and conservation to prevent deforestation and manage floods.',
      learnMoreLink: '/about'
    },
  ];

  return (
    <div className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Explore Services & Products</h2>
        <p className="text-lg text-gray-600 mb-16">
          Green 4 Africa offers innovative solutions to enhance environmental conservation, youth development, and sustainable agriculture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-3xl font-bold text-white">
                  {service.title[0]}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-500 mb-6">{service.description}</p>
              <a
                href="/about"
                className="text-green-500 hover:text-green-600 font-semibold"
              >
                Learn More...
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
