import React, { useEffect } from 'react';
import { Tractor, Wheat, Leaf, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Star, Award } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const services = [
  {
    id: 'equipment',
    title: 'Modern Equipment',
    icon: Tractor,
    description: 'State-of-the-art farming equipment for efficient cultivation.',
    features: [
      'Latest agricultural machinery',
      'Equipment maintenance services',
      'Training and support',
      'Custom equipment solutions',
    ],
    image:
      'https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'organic',
    title: 'Organic Farming',
    icon: Leaf,
    description: '100% organic farming methods for healthier produce.',
    features: [
      'Organic certification support',
      'Natural pest control',
      'Soil health management',
      'Sustainable practices',
    ],
    image:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crops',
    title: 'Crop Solutions',
    icon: Wheat,
    description: 'Expert advice on crop management and optimization.',
    features: [
      'Crop planning and rotation',
      'Disease management',
      'Yield optimization',
      'Market analysis',
    ],
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
];


export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
  }, []);

  return (
    <div className="pt-20">
      {/* Main Heading */}
      <section className="bg-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800">Our Services</h1>
          <p className="text-gray-600 mt-4">
            Discover how we bring value to farming with our tailored services.
          </p>
        </div>
      </section>

      {/* Side-by-Side Layout */}
<section className="py-16">
<div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start px-4">
  {/* Award Section */}
  <div
    className="text-center md:text-left space-y-6"
    data-aos="fade-right" // Fly in from the right
  >
    <p className="text-green-600 uppercase font-semibold tracking-wide text-lg">
      Our Excellence
    </p>
    <h2 className="text-5xl font-bold text-green-800 mb-6">
      National Recognition
    </h2>
    <div className="flex flex-col items-center md:items-start mb-6">
      <div className="relative flex items-center justify-center bg-green-100 rounded-full p-8 shadow-lg transform hover:scale-110 transition-all duration-300">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20220715/pngtree-green-laurel-wreath-1-year-seal-vector-illustration-photo-image_1140237.jpg" // Replace this URL with your image URL
          alt="Award"
          className="h-20 w-20 object-cover rounded-full" // Adjust size and shape
        />
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-3">
        Best Service
      </h3>
      <p className="text-gray-600 mb-4 text-lg">
        Awarded for outstanding service quality.
      </p>
      <div className="flex items-center">
        <Star className="h-8 w-8 text-yellow-500 mr-2" />
        <p className="text-green-600 font-medium text-xl">
          5/5 For Agile Service
        </p>
      </div>
    </div>
  </div>

  {/* Highlight Section */}
  <div className="lg:col-span-2">
    <h2
      className="text-4xl font-bold text-center text-green-800 mb-8"
      data-aos="fade-up" // Fly in from the bottom
    >
      Explore Our Expertise
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className="p-6 bg-green-50 rounded-lg hover:shadow-lg transition duration-300"
            data-aos="zoom-in" // Zoom-in animation
          >
            <Icon className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </Link>
        );
      })}
    </div>
  </div>
</div>

</section>


      {/* Detailed Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} // Fly in from alternate sides
              >
                {/* Image with Animation */}
                <div className="md:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <div className="flex items-center mb-6">
                    <Icon className="h-12 w-12 text-green-600 mr-4" />
                    <h2 className="text-3xl font-bold text-green-800">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Link
                    to={`/services/${service.id}`}
                    className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300 inline-block"
                  >
                    Learn More
                  </Link> */}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
