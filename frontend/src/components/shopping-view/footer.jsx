import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ShoppingFooter = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  return (
    <footer className="relative text-white">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/sprawling-agricultural-farm-with-fields-crops-tractors-machinery-involved-food-producti_948103-1830.jpg')`,
          filter: "brightness(40%)",
        }}
      />
      
      {/* Footer Content */}
      <div className="relative z-10 bg-black/60 py-12 px-6 lg:px-16 text-center space-y-10">
        
        {/* Contact Us Section */}
        <div>
          <button
            onClick={() => setIsContactVisible(!isContactVisible)}
            className="text-green-400 text-xl font-semibold transition-all duration-300 hover:text-yellow-400"
          >
            {isContactVisible ? "Hide Contact Details" : "Contact Us"}
          </button>

          {isContactVisible && (
            <div className="mt-4 text-lg text-gray-200 space-y-2">
              <p>Reach out to us anytime!</p>
              <p>Email: <span className="text-yellow-400">contact@Farm2Door.com</span></p>
              <p>Phone: <span className="text-yellow-400">+91 98765 6788</span></p>
            </div>
          )}
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-500 pt-6">
          <h3 className="text-2xl font-semibold text-yellow-300">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-4">
            {[
              { icon: FaFacebook, link: "https://facebook.com", color: "hover:text-blue-600" },
              { icon: FaTwitter, link: "https://twitter.com", color: "hover:text-blue-400" },
              { icon: FaInstagram, link: "https://instagram.com", color: "hover:text-pink-500" },
              { icon: FaLinkedin, link: "https://linkedin.com", color: "hover:text-blue-700" },
            ].map(({ icon: Icon, link, color }, index) => (
              <a
                key={index}
                href={link}
                className={`text-gray-300 transition-all duration-300 transform hover:scale-110 ${color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={32} />
              </a>
            ))}
          </div>
        </div>

        {/* Category Links */}
        <div className="border-t border-gray-500 pt-6">
          <h3 className="text-2xl font-semibold text-yellow-300">Explore Categories</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-lg text-gray-300 mt-4">
            {["Vegetables", "Fruits", "Dairy", "Spices", "Dry Fruits"].map((category, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-green-300 transition-all duration-300"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Bottom Text */}
        <div className="border-t border-gray-500 pt-4">
          <p className="text-sm text-gray-400">
            Privacy Policy | Terms Of Use | © 2025 Farm2Door | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ShoppingFooter;
