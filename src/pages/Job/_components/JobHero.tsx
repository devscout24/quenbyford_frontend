import { useState } from "react";
import SubscribePopup from "../../../components/SubscribePopup";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const JobHero = () => {
  const { t } = useTranslation();
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[500px] md:h-200 flex items-center overflow-hidden">
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
        <div className="relative z-10 px-4 sm:px-12 md:px-20 lg:ml-77 space-y-4 sm:space-y-6 py-12 sm:py-20">
          {/* Badge */}


          {/* Title */}
          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-[56px] font-medium text-white leading-tight">
            {t("jobs.hero.title")}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            {t("jobs.hero.desc")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
  to="/hiring"
  className="bg-[#F57C00] text-white px-6 md:px-8 w-full sm:w-55 py-3 
             rounded-full font-bold hover:bg-orange-600 transition shadow-lg
             flex items-center justify-center"
>
  {t("jobs.hero.hiring_btn")}
</Link>

           <Link 
  to="/availablejobs"
  className="border-white border-2 text-white w-full sm:w-55 px-6 md:px-8 py-3 rounded-full font-bold text-center hover:text-white transition shrink-0"
>
  {t("jobs.hero.available_btn")}
</Link>
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
