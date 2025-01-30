

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
              
            </div>
          </div>
        ))}
      </Slider>
      
    </section>
  );
};

export default HeroBanner;























// import backg1 from "@/assets/images/backg1.jpg"
// import backg4 from "@/assets/images/backg4.jpg"
// import backg5 from "@/assets/images/backg5.jpg"

// import React from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";

// // Import slick-carousel CSS for slider styling
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HeroBanner = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true, // Left and right arrows
//     pauseOnHover: true, // Pauses on hover
//   };

//   // Slider data
//   const slides = [
//     {
//       image: backg1,
//       // heading: "Freshness That Speaks Quality",
//       // subheading: "Start your day with 100% fresh, organic produce. Enjoy 15% off on every order!",
//       // link: "/products", // Updated to /products
//     },
//     {
//       image: backg4,
//       // heading: "A Basket Full of Goodness",
//       // subheading: "Buy 2 items and get 50% off on the second. Healthy deals for your loved ones!",
//       // link: "/products", // Updated to /products
//     },
//     {
//       image: backg5,
//       // heading: "From Our Farm to Your Table",
//       // subheading: "Save 20% on eco-friendly, locally sourced goodness. Shop with care, eat with joy!",
//       // link: "/products", // Updated to /products
//     },
//   ];

//   return (
//     <section className="relative">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative">
//             <img
//               src={slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-[700px] sm:h-[600px] object-cover" // Increased height here
//             />
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//               <h2 className="text-4xl font-bold mb-4">{slide.heading}</h2>
//               <p className="text-lg mb-6">{slide.subheading}</p>
//               {/* <Link
//                 to={slide.link} // Links to /products page
//                 className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
//               >
//                 Shop Now
//               </Link> */}
//             </div>
//           </div>
//         ))}
//       </Slider>
      
//     </section>
//   );
// };

// export default HeroBanner;
























































































