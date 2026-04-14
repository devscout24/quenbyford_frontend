import { useState } from "react";
import SubscribePopup from "../../../components/SubscribePopup";

const JobHero = () => {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-200 flex items-center  overflow-hidden">
        {/* Background Image + Gradient Overlay */}
        <div className="absolute inset-0">
          {/* Image */}
          <img
            src="/images/pexels-fauxels-3184394 1 (1).png"
            alt="Handshake"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t bg-[#0A2540]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 ml-77 space-y-6">
          {/* Badge */}
        

          {/* Title */}
          <h1 className="max-w-195 mx-auto text-4xl md:text-[56px] font-medium text-white leading-tight">
           FCHCC JOBS BOARD
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg w-195 leading-relaxed">
            Our Jobs Board is a great tool to connect with companies currently hiring or to find the right candidates for your business.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#F57C00] text-white px-6 md:px-8 w-55 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg">
             Start Hiring
            </button>

            <button
              onClick={() => setIsSubscribeOpen(true)}
              className=" border-white border-2 text-white w-55 px-6 md:px-8 py-3 rounded-full font-bold  hover:text-white transition"
            >Available Jobs
            </button>
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
export default JobHero;
