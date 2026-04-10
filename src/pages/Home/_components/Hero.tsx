import { useState } from "react";
import { motion } from "framer-motion";
import SubscribePopup from "../../../components/SubscribePopup";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  return (
    <section className="w-full bg-white py-12 lg:py-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto  grid lg:grid-cols-2 gap-3 items-center"
      >
        
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-8">
          {/* Member Badge */}
          <div className="flex items-center gap-3 bg-[#E0F2FE] border border-[#B9DCF8] px-4 py-2 rounded-full shadow-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-[#0284C7] font-bold text-sm">
              20000+ Members
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-[64px] font-semibold text-[#000000] leading-[120%]  w-198">
            Powering Ambition.
            <br />
            <span className="text-[#08060d]">Connecting Opportunity</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-[#6b6375] ">
            Connect. Grow. Lead. Join the region's most influential Hispanic
            business network.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/partners" className="bg-[#F97316] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95 cursor-pointer">
              Learn More
            </Link>
            <button 
              onClick={() => setIsSubscribeOpen(true)}
              className="bg-white text-[#F97316] border-2 border-[#F97316]/20 px-10 py-4 rounded-full font-bold text-lg hover:border-[#F97316] transition-all active:scale-95 cursor-pointer"
            >
              Subscribe Now
            </button>
          </div>
        </div>
        <SubscribePopup isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />

        {/* Right Content: Image Stack */}
        <div className="relative flex justify-center lg:justify-end ">
          {/* Back Card (Grayed/Dark) */}
          <div className="absolute -top-8 -right-8   rounded-2xl  overflow-hidden  shadow-xl opacity-90 z-0 ">
            <img
              src="/images/Hero.png"
              className="w-105.5 h-100  grayscale brightness-50"
              alt="background event"
            />
          </div>

          {/* Front Card (Main Image) */}
          <div className="relative    rounded-2xl overflow-hidden z-10 shadow-2xl  ">
            <img
              src="/images/Hero1.jpg"
              className="w-105.5 h-100  "
              alt="Community group"
            />
            
            {/* Logo Overlay on Image */}
            <div className="absolute top-1 left-1 p-1   flex items-center justify-center overflow-hidden">
              <div className="  overflow-hidden flex items-center justify-center ">
                <img src="/images/logo.png" alt="Logo" className="w-40 h-25" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;