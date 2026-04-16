import { useState } from "react";
import { motion } from "framer-motion";
import SubscribePopup from "../../../components/SubscribePopup";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  return (
    <section className="w-full bg-white py-12 lg:py-20 overflow-hidden px-4 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-6 items-center"
      >

        {/* Left Content */}
        <div className="flex flex-col items-start space-y-6 md:space-y-8 w-full">
          {/* Member Badge */}
          <div className="flex items-center gap-3 bg-[#E0F2FE] border border-[#B9DCF8] px-4 py-2 rounded-full shadow-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-[#0284C7] font-bold text-xs sm:text-sm">
              {t("hero.members")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[40px] sm:text-5xl lg:text-[64px] font-semibold text-[#000000] leading-[1.1] sm:leading-[1.2] w-full max-w-[700px] lg:max-w-[650px]">
            {t("hero.headline_part1")}
            <br className="hidden sm:block" />
            <span className="text-[#08060d]"> {t("hero.headline_part2")}</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#6b6375] max-w-[600px] lg:max-w-[500px]">
            {t("hero.description")}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
            <Link
              to="/about"
              className="bg-[#F97316] text-white px-8 py-3.5 sm:py-4 w-full sm:w-auto sm:min-w-[200px] rounded-full font-bold text-base sm:text-lg flex items-center justify-center hover:bg-[#e66a12] shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] hover:-translate-y-1 transition-all active:scale-95 cursor-pointer text-center"
            >
              {t("hero.learn_more")}
            </Link>
            <button
              onClick={() => setIsSubscribeOpen(true)}
              className="bg-white text-[#F97316] border-[1.5px] border-[#F97316]/30 px-8 py-3.5 sm:py-4 w-full sm:w-auto sm:min-w-[200px] rounded-full font-bold text-base sm:text-lg flex items-center justify-center hover:border-[#F97316] hover:bg-orange-50 transition-all active:scale-95 cursor-pointer text-center"
            >
              {t("hero.subscribe")}
            </button>
          </div>
        </div>
        <SubscribePopup isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />

        {/* Right Content: Image Stack */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 px-4 sm:px-10 lg:px-0">

          {/* Back Card (Grayed/Dark) */}
          <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 rounded-[30px] overflow-hidden shadow-xl opacity-90 z-0 hidden sm:block">
            <img
              src="/images/Hero.png"
              className="w-[280px] sm:w-[350px] lg:w-[420px] h-[300px] sm:h-[350px] lg:h-[400px] object-cover grayscale brightness-50 rounded-[30px]"
              alt="background event"
            />
          </div>

          {/* Front Card (Main Image) */}
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[420px] rounded-[30px] overflow-hidden z-10 shadow-2xl border-4 border-white/50">
            <img
              src="/images/Hero1.jpg"
              className="w-full h-[320px] sm:h-[400px] object-cover rounded-[26px]"
              alt="Community group"
            />

            {/* Logo Overlay on Image */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 p-2 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center overflow-hidden sm:shadow-lg border border-white/50">
              <img src="/images/logo.png" alt="Logo" className="w-[100px] sm:w-[140px] h-auto object-contain mix-blend-multiply" />
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;