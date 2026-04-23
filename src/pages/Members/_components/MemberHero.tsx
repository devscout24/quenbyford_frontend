import { useState } from "react";
import SubscribePopup from "../../../components/SubscribePopup";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroWithStats = () => {
  const { t } = useTranslation();
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  return (
    <div className="w-full font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-100 sm:min-h-125 md:min-h-150 lg:h-200 flex items-center px-4 sm:px-6 md:px-20 overflow-hidden">

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
        <div className="relative z-10 ml-0 sm:ml-8 md:ml-16 lg:ml-53 space-y-4 sm:space-y-6 py-12 sm:py-16">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-white text-xs font-medium uppercase tracking-wider">
              {t("hero_members.badge")}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t("hero_members.title_part1")} <br />
            <span className="text-[#1E88E5]">{t("hero_members.title_part2")}</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed">
            {t("hero_members.description")}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="https://form.jotform.com/fchcc/new-membership-application" className="bg-[#F57C00] text-white px-6 md:px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg">
              {t("hero_members.become_member")}
            </Link>

            <button
              onClick={() => setIsSubscribeOpen(true)}
              className="border border-orange-500 text-orange-500 px-6 md:px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition"
            >
              {t("hero_members.subscribe")}
            </button>
          </div>
        </div>
        <SubscribePopup isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full leading-0 z-20 overflow-hidden">
          {/* <svg
    viewBox="0 0 1440 120"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto block"
  >
    <path
      d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 73.3C840 86.7 960 113.3 1080 116.7C1200 120 1320 100 1380 90L1440 80V120H0Z"
      fill="white"
    />
  </svg> */}
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      {/* <section className="bg-white py-12  max-w-335 mx-auto  border-b border-t border-[#F97316]/20 mb-20 mt-8">
        <div className="max-w-335 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E88E5]">
              500+
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Active Members
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E88E5]">
              25+
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Years of Service
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E88E5]">
              100+
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Annual Events
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E88E5]">
              50M+
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Economic Impact
            </p>
          </div>

        </div>
      </section> */}
      <h1 className="text-lg sm:text-xl md:text-[24px] font-bold text-black text-center mt-8 sm:mt-15 px-4">{t("hero_members.jump_to")}</h1>

    </div>
  );
};

export default HeroWithStats;