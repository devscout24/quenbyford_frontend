import { useState } from "react";
import SubscribePopup from "../../../components/SubscribePopup";

const EventHero = () => {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-200 flex items-center  overflow-hidden">
        {/* Background Image + Gradient Overlay */}
        <div className="absolute inset-0">
          {/* Image */}
          <img
            src="/images/img.png"
            alt="Handshake"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t bg-[#0A2540]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 ml-53 space-y-6">
          {/* Badge */}
        

          {/* Title */}
          <h1 className="max-w-195 mx-auto text-4xl md:text-[56px] font-medium text-white leading-tight">
            Hola Emprende Conference & Business Expo 2025 September 19–20, 2025
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg  leading-relaxed">
            Schultz Center 4019 Boulevard Center Drive Jacksonville, FL 32207
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#F57C00] text-white px-6 md:px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg">
              Grow Business
            </button>

            <button
              onClick={() => setIsSubscribeOpen(true)}
              className="border border-orange-500 text-orange-500 px-6 md:px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition"
            >Get Involved</button>
          </div>
        </div>
        <SubscribePopup
          isOpen={isSubscribeOpen}
          onClose={() => setIsSubscribeOpen(false)}
        />

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full leading-0 z-20 overflow-hidden"></div>
      </section>

    </div>
  );
};
export default EventHero;
