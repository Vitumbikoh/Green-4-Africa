import React from "react";

const Info = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap items-start gap-12">
        {/* Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full lg:w-1/2">
          {/* Top Row */}
          <div className="relative">
            <img
              src="Banner.jpg"
              alt="Organic Fertilizer Production"
              className="rounded-xl shadow-lg object-cover w-full h-72 lg:h-80"
            />
          </div>
          <div className="relative">
            <img
              src="Banner.jpg"
              alt="Farming with Organic Fertilizer"
              className="rounded-xl shadow-lg object-cover w-full h-72 lg:h-80"
            />
          </div>
          {/* Bottom Row */}
          <div className="col-span-2 relative">
            <img
              src="Banner.jpg"
              alt="Green 4 Africa Facility"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 leading-tight mb-6">
              Create An Ultimate World Of <span className="text-green-500">Organic Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Green 4 Africa is located in Mzuzu City at Vigwagwa Market at Vigwagwa Dump-site. It is a new venture dedicated to improving environmental pollution control and preventing communicable diseases within the community.
            </p>
            <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition-colors mb-8">
              Learn More
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              We’re In This Business To Provide Quality Services And Impact Lives.
            </h3>
            <ul className="space-y-3 text-lg text-gray-600">
              <li>✔ Establish sustainable organic fertilizer for high farm yields.</li>
              <li>✔ Foster youth development through resourceful programs.</li>
              <li>✔ Encourage natural resource conservation and management.</li>
              <li>✔ Slow down deforestation and address environmental challenges.</li>
            </ul>
          </div>

          <div className="mt-8 flex items-center">
            <div>
              <p className="font-semibold text-gray-800">CEO, FOUNDER</p>
              <img
                src="signature_placeholder.jpg"
                alt="Signature"
                className="mt-2 w-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
