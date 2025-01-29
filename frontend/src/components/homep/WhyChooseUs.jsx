import React, { useEffect } from "react";

const WhyChooseUs = () => {
  useEffect(() => {
    const section = document.querySelector("#why-choose-us"); // Target the section
    const items = document.querySelectorAll(".item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate content items
            items.forEach((item, index) => {
              item.style.animationDelay = `${index * 2}s`; // Delay for each item
              item.classList.add("animate-fadeIn");
            });

            // Animate background
            section.classList.add("animate-background");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    observer.observe(section);

    // Cleanup observer
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="why-choose-us"
      className="relative text-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/029/890/858/original/landscape-of-green-crops-and-field-4k-clip-of-farming-and-agriculturist-with-seeding-of-rice-young-plant-and-field-rice-field-and-farmland-thailand-agriculture-and-farm-in-asia-video.jpg')",
        minHeight: "700px",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Main Content */}
      <div className="relative z-10 py-24">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-yellow-400">
          WHY CHOOSE US..!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 max-w-5xl mx-auto pt-8">
          {/* Item 1 */}
          <div className="item opacity-0">
            <div className="text-6xl font-bold text-yellow-400 opacity-80 mb-4">01</div>
            <p className="font-semibold text-lg text-white mt-4">BEST QUALITY PRODUCTS</p>
          </div>
          {/* Item 2 */}
          <div className="item opacity-0">
            <div className="text-6xl font-bold text-yellow-400 opacity-80 mb-4">02</div>
            <p className="font-semibold text-lg text-white mt-4">QUICK AND TIMELY DELIVERY</p>
          </div>
          {/* Item 3 */}
          <div className="item opacity-0">
            <div className="text-6xl font-bold text-yellow-400 opacity-80 mb-4">03</div>
            <p className="font-semibold text-lg text-white mt-4">24X7 CUSTOMER SERVICE</p>
          </div>
          {/* Item 4 */}
          <div className="item opacity-0">
            <div className="text-6xl font-bold text-yellow-400 opacity-80 mb-4">04</div>
            <p className="font-semibold text-lg text-white mt-4">BEST PARTNER</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes backgroundZoom {
          0% {
            transform: scale(1.1);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }

        .animate-background {
          animation: backgroundZoom 10s ease-out forwards;
        }

        .item {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;
