import React from 'react';

const Products = () => {
  const services = [
    {
      title: 'Organic Fertilizer',
      description:
        'Sustainable organic fertilizer that helps farmers achieve high yields and ensures environmental conservation.',
      learnMoreLink: '#',
    },
    {
      title: 'Youth Empowerment',
      description:
        'Programs fostering resourceful, development-oriented youth for socioeconomic advancement and mindset change.',
      learnMoreLink: '#',
    },
    {
      title: 'Natural Resource Management',
      description:
        'Encouraging sustainable resource utilization and conservation to prevent deforestation and manage floods.',
      learnMoreLink: '#',
    },
  ];

  return (
    <div className="bg-whitetext-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Explore Services & Products</h2>
        <p className="text-lg text-gray-300 mb-12">
          Green 4 Africa offers innovative solutions to enhance environmental conservation, youth development, and sustainable agriculture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900">
                  {service.title[0]}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <a
                href={service.learnMoreLink}
                className="text-green-400 hover:text-green-300 font-semibold"
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
