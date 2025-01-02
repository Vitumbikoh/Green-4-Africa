import React from "react";

const Info = () => {
  return (
    <div className="bg-gray-50 py-20 sm:px-8 md:px-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap items-start gap-16">
        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2">
          <div className="relative">
            <img
              src="Banner.jpg"
              alt="Organic Fertilizer Production"
              className="rounded-xl shadow-lg object-cover w-full h-56 sm:h-72 md:h-80 lg:h-96 transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="relative">
            <img
              src="matthews.jpg"
              alt="Farming with Organic Fertilizer"
              className="rounded-xl shadow-lg object-cover w-full h-56 sm:h-72 md:h-80 lg:h-96 transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="relative col-span-2">
            <img
              src="Bannner.jpg"
              alt="Green 4 Africa Facility"
              className="rounded-xl shadow-lg object-cover w-full h-56 sm:h-72 md:h-80 lg:h-96 transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2">
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-800 leading-snug mb-8">
              Create An Ultimate World Of{" "}
              <span className="text-green-600">Organic Solutions</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Green 4 Africa is located in Mzuzu City at Vigwagwa Market at
              Vigwagwa Dump-site. It is a new venture dedicated to improving
              environmental pollution control and preventing communicable
              diseases within the community.
            </p>
            <button className="bg-green-600 text-white font-semibold py-3 px-8 rounded-md shadow hover:bg-green-700 transition-all">
              Learn More
            </button>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-serif font-semibold text-gray-800 mb-6">
              We’re In This Business To Provide Quality Services And Impact
              Lives.
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Establish sustainable organic fertilizer for high farm yields.</li>
              <li>✔ Foster youth development through resourceful programs.</li>
              <li>✔ Encourage natural resource conservation and management.</li>
              <li>✔ Slow down deforestation and address environmental challenges.</li>
            </ul>
          </div>

          <div className="mt-16 flex items-center">
            <div>
              <p className="text-sm text-gray-600 uppercase">CEO, Founder</p>
              <p className="font-serif font-bold text-lg text-green-600">
                Matthews Z. Kumwenda
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
