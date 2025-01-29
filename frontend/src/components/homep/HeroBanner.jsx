
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Import slick-carousel CSS for slider styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Left and right arrows
    pauseOnHover: true, // Pauses on hover
  };

  // Slider data
  const slides = [
    {
      image: "https://cdn.pixabay.com/photo/2021/10/11/11/12/countryside-6700296_1280.jpg",
      heading: "Freshness That Speaks Quality",
      subheading: "Start your day with 100% fresh, organic produce. Enjoy 15% off on every order!",
      link: "/products", // Updated to /products
    },
    {
      image: "https://img.freepik.com/premium-photo/vegetable-farmer-market-counter-colorful-various-fresh-organic_666746-1590.jpg",
      heading: "A Basket Full of Goodness",
      subheading: "Buy 2 items and get 50% off on the second. Healthy deals for your loved ones!",
      link: "/products", // Updated to /products
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/023/558/185/non_2x/vegetable-farmer-market-counter-colorful-various-fresh-organic-healthy-vegetables-at-grocery-store-healthy-natural-food-concept-generative-ai-photo.jpg",
      heading: "From Our Farm to Your Table",
      subheading: "Save 20% on eco-friendly, locally sourced goodness. Shop with care, eat with joy!",
      link: "/products", // Updated to /products
    },
  ];

  return (
    <section className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[700px] sm:h-[700px] object-cover" // Increased height here
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{slide.heading}</h2>
              <p className="text-lg mb-6">{slide.subheading}</p>
              <Link
                to={slide.link} // Links to /products page
                className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      
    </section>
  );
};

export default HeroBanner;



























































































// // src/components/HeroBanner.jsx
// import React from "react";

// const HeroBanner = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center h-[80vh] text-white"
//       style={{
//         backgroundImage:
//           "url('https://t3.ftcdn.net/jpg/10/24/13/00/360_F_1024130046_vamQCsOFXwQIfATNlt6mtFH2o4BB3bcR.jpg')",
          
//       }}
      
//     >
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div className="container mx-auto relative z-10 flex items-center justify-between h-full px-6">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold">
//             Organic <span className="text-green-400">Food Delivery</span>
//           </h1>
//           <p className="text-lg md:text-2xl">
//             Discover organic, sustainable, and seasonal food from our farm.
//           </p>
//           <button className="bg-green-500 px-6 py-3 rounded text-lg font-semibold hover:bg-green-600">
//             Get Started
//           </button>
//         </div>
        
//         {/* Image with transition effects */}
//         <img
//           src="https://t3.ftcdn.net/jpg/10/24/13/00/360_F_1024130046_vamQCsOFXwQIfATNlt6mtFH2o4BB3bcR.jpg"
//           alt="Farmer"
//           className="h-64 md:h-96 transition-transform transform group-hover:scale-110 duration-500 ease-in-out"
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;















// import React from "react";

// const HeroBanner = () => {
//   return (
//     <section
//     className="relative bg-cover bg-center h-screen text-white overflow-hidden transition-all duration-700 ease-in-out pt-24"
//     style={{
//       backgroundImage: `
//         url('https://t3.ftcdn.net/jpg/10/24/13/00/360_F_1024130046_vamQCsOFXwQIfATNlt6mtFH2o4BB3bcR.jpg'), /* First Background Image */
//         url('path/to/second-image.jpg')`, // Replace with your second image file or URL
//     }}
//   >
//        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
//   <div className="container mx-auto relative z-10 flex items-center justify-start h-full px-6">
//     <div className="space-y-6 max-w-xl">
//       <h1 className="text-4xl md:text-6xl font-bold italic tracking-wide">
//         <span className="text-green-400">High Quality</span> Fresh Organic <span className="text-green-400">Food Delivery</span>
//       </h1>
//       <p className="text-lg md:text-2xl">
//         Discover organic, sustainable, and seasonal food from our farm.
//       </p>
//       <button className="bg-green-500 px-6 py-3 rounded text-lg font-semibold hover:bg-green-600 transition-all">
//         Get Started
//       </button>
//     </div>
//   </div>

//       {/* Background Image Animation */}
//       <style jsx>{`
//         section {
//           animation: zoomInEffect 10s ease-out forwards;
//         }

//         @keyframes zoomInEffect {
//           0% {
//             background-size: 150%; /* Start with a larger background */
//             background-position: center center; /* Starts centered */
//           }
//           50% {
//             background-size: 120%; /* Zoom in slightly */
//             background-position: center center;
//           }
//           100% {
//             background-size: cover; /* End with the image covering the section */
//             background-position: center center;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroBanner;