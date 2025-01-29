import React from "react";

const OrganicSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-green-50 via-white to-white py-16 lg:py-24">
      {/* Background Leaf Design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-[700px] h-[700px] bg-green-100 rounded-full absolute top-[-200px] lg:left-[40%] left-[20%] rotate-[45deg] opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image */}
        <div className="flex justify-center">
          <img
            src="https://evigtagro.com/wp-content/uploads/2024/11/h1-banner1.png"
            alt="Organic Food"
            //className="w-full max-w-md lg:max-w-lg rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="relative z-10 space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Organic & Healthy Food
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            Farm Too Door, we believe in fostering a direct connection
            between farmers and consumers. Our marketplace is dedicated to
            supporting local agriculture and providing fresh, high-quality farm
            produce to individuals and businesses in our community. With our
            easy-to-use platform, you can discover a wide range of farm-fresh
            products, support sustainable farming practices, and enjoy the
            bounties of the land.
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg--200 p-4 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJoqODPbbqHaohbMKIYmNdSf3fA88eu--KjyNQFCBGm3vZb8WDfp_x6bUbiYfORPcCQg&usqp=CAU"
                  alt="Agriculture Icon"
                  className="w-15 h-15"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Agriculture & Foods
                </h3>
                <p className="text-sm text-gray-500">
                  Supporting sustainable agricultural practices.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg--200 p-4 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60tr-vK3vQ5oO0mUW47CbcNOBnyVmwXaOgA&s"
                  alt="Vegetables Icon"
                  className="w-15 h-15"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Vegetables & Fruits
                </h3>
                <p className="text-sm text-gray-500">
                  Fresh, high-quality farm produce delivered.
                </p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <p className="text-lg text-gray-700 leading-relaxed italic">
            Converting non-utilized lands into productive lands, providing
            agricultural livelihood for farmers, and empowering the nation
            towards sustainable and green agriculture.
          </p>

          {/* Explore More Button */}
          <div>
            {/* <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              Explore More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicSection;
