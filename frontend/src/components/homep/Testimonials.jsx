import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import core components
import { Pagination } from "swiper/modules"; // Correct import for Pagination module

import "swiper/css"; // Import core Swiper styles
import "swiper/css/pagination"; // Import Pagination module styles

const testimonials = [
  {
    id: 1,
    name: "Sharon Gunther",
    title: "Fresh Design",
    image: "",
    quote:
      "Instead of asking how factory farms can prevent infections that originate in the environment, we should be asking how they can prevent infections that originate on factory farms.",
  },
  {
    id: 2,
    name: "John Doe",
    title: "Happy Client",
    image: "/images/farmer2.jpg",
    quote:
      "This service has revolutionized our farming practices. The fresh designs and thoughtful planning have truly made a difference.",
  },
  {
    id: 3,
    name: "Alice Smith",
    title: "Organic Farmer",
    image: "/images/farmer3.jpg",
    quote:
      "Thanks to the innovative designs and sustainable practices, our yield has increased significantly.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 overflow-hidden"
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/02/99/98/43/360_F_299984394_m52YZCftMpZtND88nya3gEd195MLGwet.jpg')", // Background image URL
      }}
    >
      {/* Overlay for background */}
      <div
        className="absolute inset-0 k opacity-40" // Darker overlay for better text contrast
      ></div>

      {/* Side Images */}
      {/* <img
        src="https://w7.pngwing.com/pngs/259/289/png-transparent-farmers-market-sticker-fruit-food-farmer-farmers-market-sticker-fruit-thumbnail.png"
        alt="Farmer Image Left"
        className="absolute top-15 left-[300px] w-40 h-70 rounded-lg shadow-lg transform rotate-[15deg]"
      />
      <img
        src="https://www.aldenestatesofjefferson.com/wp-content/uploads/sites/63/2019/08/GettyImages-671270196-1-600x511.jpg"
        alt="Farmer Image Right"
        className="absolute top-30 right-[220px] w-60 h-60 rounded-lg shadow-lg transform rotate-[-10deg]"
      />
      <img
        src="https://demo2.themelexus.com/agrile/wp-content/uploads/2024/11/testimonial-img5.jpg"
        alt="Farmer Image Left Bottom"
        className="absolute bottom-10 left-[300px] w-32 h-40 rounded-lg shadow-lg transform rotate-[-15deg]"
      />
      <img
        src="https://demo2.themelexus.com/agrile/wp-content/uploads/2024/11/testimonial-img2.jpg"
        alt="Farmer Image Right Bottom"
        className="absolute bottom-12 right-[300px] w-32 h-32 rounded-lg shadow-lg transform rotate-[20deg]"
      /> */}

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Heading */}
        <p className="text-green-600 uppercase font-bold tracking-widest">
          Our Testimonials
        </p>
        <h2 className="text-4xl font-bold text my-4"> {/* Change text color to white */}
          Hear What Our Global Clients Say
        </h2>

        {/* Swiper Slider */}
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          className="mt-8"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className=" p-8 rounded-lg shadow-lg relative flex flex-col items-center">
                {/* Floating Image */}
                <div className="absolute -top-16 left-10 transform rotate-[-15deg]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-lg shadow-md"
                  />
                </div>

                {/* Decorative Leaves */}
                <div className="absolute -top-16 left-36 leaf">
                  <img
                    src="/images/leaf.png" // Ensure a valid leaf image path
                    alt="leaf decoration"
                    className="w-16 h-16"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10 mt-16">
                <p className="text-black-600 font-extrabold italic mb-7">
  "{testimonial.quote}"
</p>

                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-green-500 italic mb-6">{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Adding animation to leaves */}
      <style>
        {`
          @keyframes sway {
            0%, 100% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(5deg);
            }
          }
          .leaf {
            animation: sway 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;






































// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react"; // Import core components
// import { Pagination } from "swiper/modules"; // Correct import for Pagination module

// import "swiper/css"; // Import core Swiper styles
// import "swiper/css/pagination"; // Import Pagination module styles

// const testimonials = [
//   {
//     id: 1,
//     name: "Sharon Gunther",
//     title: "Fresh Design",
//     image: "",
//     quote:
//       "Instead of asking how factory farms can prevent infections that originate in the environment, we should be asking how they can prevent infections that originate on factory farms.",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     title: "Happy Client",
//     image: "/images/farmer2.jpg",
//     quote:
//       "This service has revolutionized our farming practices. The fresh designs and thoughtful planning have truly made a difference.",
//   },
//   {
//     id: 3,
//     name: "Alice Smith",
//     title: "Organic Farmer",
//     image: "/images/farmer3.jpg",
//     quote:
//       "Thanks to the innovative designs and sustainable practices, our yield has increased significantly.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center py-16 overflow-hidden"
//       style={{
//         backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDl2jcwzyl9tP6mxe8OhImM7DjPGmm3ClLMCmkjmnPga9Pf8J4U0UtpgW8gwIGYReHCU&usqp=CAU')", // Background image URL
//       }}
//     >
//       {/* Overlay for background */}
//       <div
//         className="absolute inset-0 k opacity-40" // Darker overlay for better text contrast
//       ></div>

//       {/* Side Images */}
//       {/* <img
//         src="https://w7.pngwing.com/pngs/259/289/png-transparent-farmers-market-sticker-fruit-food-farmer-farmers-market-sticker-fruit-thumbnail.png"
//         alt="Farmer Image Left"
//         className="absolute top-30 left-[-1px] w-40 h-70 rounded-lg shadow-lg transform rotate-[-20deg]"
//       /> */}
//       {/* <img
//         src="https://www.aldenestatesofjefferson.com/wp-content/uploads/sites/63/2019/08/GettyImages-671270196-1-600x511.jpg"
//         alt="Farmer Image Right"
//         className="absolute top-30 right-[-10px] w-60 h-60 rounded-lg shadow-lg transform rotate-[10deg]"
//       />
//       <img
//         src="https://demo2.themelexus.com/agrile/wp-content/uploads/2024/11/testimonial-img5.jpg"
//         alt="Farmer Image Left Bottom"
//         className="absolute bottom-10 left-[-0px] w-32 h-40 rounded-lg shadow-lg transform rotate-[-15deg]"
//       />
//       <img
//         src="/images/farmer1.jpg"
//         alt="Farmer Image Right Bottom"
//         className="absolute bottom-16 right-[-80px] w-32 h-32 rounded-lg shadow-lg transform rotate-[15deg]"
//       /> */}

//       <div className="container mx-auto px-4 text-center relative z-10">
//         {/* Heading */}
//         <p className="text-green-600 uppercase font-semibold tracking-widest">
//           Our Testimonials
//         </p>
//         <h2 className="text-4xl font-bold text my-4"> {/* Change text color to white */}
//           Hear What Our Global Clients Say
//         </h2>

//         {/* Swiper Slider */}
//         <Swiper
//           pagination={{ clickable: true }}
//           modules={[Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           className="mt-8"
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id}>
//               <div className=" p-8 rounded-lg shadow-lg relative flex flex-col items-center">
//                 {/* Floating Image */}
//                 <div className="absolute -top-16 left-10 transform rotate-[-15deg]">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-32 h-32 rounded-lg shadow-md"
//                   />
//                 </div>

//                 {/* Decorative Leaves */}
//                 <div className="absolute -top-16 left-36 leaf">
//                   <img
//                     src="/images/leaf.png" // Ensure a valid leaf image path
//                     alt="leaf decoration"
//                     className="w-16 h-16"
//                   />
//                 </div>

//                 {/* Testimonial Content */}
//                 <div className="relative z-10 mt-16">
//                 <p className="text-black-600 font-extrabold italic mb-7">
//   "{testimonial.quote}"
// </p>

//                   <p className="font-bold text-gray-900">{testimonial.name}</p>
//                   <p className="text-green-500 italic mb-6">{testimonial.title}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Adding animation to leaves */}
//       <style>
//         {`
//           @keyframes sway {
//             0%, 100% {
//               transform: rotate(0deg);
//             }
//             50% {
//               transform: rotate(5deg);
//             }
//           }
//           .leaf {
//             animation: sway 2s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default Testimonials;



















