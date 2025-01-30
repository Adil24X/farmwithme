// import React, { useState, useEffect } from "react";

// // ProductCard Component
// const ProductCard = ({ image, name, price }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 p-4">
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-40 object-cover rounded-md mb-4"
//       />
//       <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
//       <p className="text-green-600 font-semibold mb-4">{price}</p>
//       <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-all duration-200">
//         Shop Now
//       </button>
//     </div>
//   );
// };

// // ProductSection Component
// const ProductSection = ({ title, products }) => {
//   return (
//     <div className="mb-12">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b-2 border-green-500 pb-2">
//         {title}
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <ProductCard
//             key={index}
//             image={product.image}
//             name={product.name}
//             price={product.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // ProductPage Component
// const ProductPage = () => {
//   const saleProducts = [
//     { image: "/images/mint.jpg", name: "Mint", price: "₹100 - ₹200" },
//     { image: "/images/mango.jpg", name: "Mango", price: "₹150 - ₹250" },
//     { image: "/images/oyster-mushroom.jpg", name: "Oyster Mushroom 500 gr", price: "₹150 - ₹200" },
//     { image: "/images/kiwi.jpg", name: "Kiwi", price: "₹400 - ₹500" },
//   ];

//   const topSelling = [
//     { image: "/images/radish.jpg", name: "Radish 1 pack", price: "₹30 - ₹50" },
//     { image: "/images/spring onion.jpg", name: "Spring Onions 1 bunch", price: "₹40 - ₹60" },
//     { image: "/images/mango.jpg", name: "Mango", price: "₹150 - ₹250" },
//     { image: "/images/avocado.jpg", name: "Avocados 2 Units", price: "₹200 - ₹300" },
//   ];

//   const recentlyAdded = [
//     { image: "/images/spring onion.jpg", name: "Spring Onions 1 bunch", price: "₹40 - ₹60" },
//     { image: "/images/mint.jpg", name: "Mint", price: "₹100 - ₹200" },
//     { image: "/images/carrots.jpg", name: "Carrots 1 kg", price: "₹40 - ₹80" },
//     { image: "/images/mango.jpg", name: "Mango", price: "₹150 - ₹250" },
//   ];

//   const topRated = [
//     { image: "/images/avocado.jpg", name: "Avocados 2 Units", price: "₹200 - ₹300" },
//     { image: "/images/bread.jpg", name: "Menissez Mini Pains Bake At Home", price: "₹250 - ₹350" },
//     { image: "/images/grapes.jpg", name: "Delicious Grapes", price: "₹120 - ₹200" },
//     { image: "/images/radish.jpg", name: "Radish 1 pack", price: "₹30 - ₹50" },
//   ];

//   const sections = [
//     { title: "Sale Products", products: saleProducts },
//     { title: "Top Selling", products: topSelling },
//     { title: "Recently Added", products: recentlyAdded },
//     { title: "Top Rated", products: topRated },
//   ];

//   const [visibleSections, setVisibleSections] = useState([]);

//   useEffect(() => {
//     // Animate sections into view
//     sections.forEach((_, index) => {
//       setTimeout(() => {
//         setVisibleSections((prev) => [...prev, index]);
//       }, index * 300); // 300ms delay between sections
//     });
//   }, []);

//   return (
//     <div className="container mx-auto p-6 space-y-12">
//       {sections.map((section, index) => (
//         <div
//           key={index}
//           className={`transform transition-opacity duration-700 ${
//             visibleSections.includes(index)
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-10"
//           }`}
//         >
//           <ProductSection title={section.title} products={section.products} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductPage;
