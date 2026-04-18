import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const EventHero = () => {
  const { t } = useTranslation();

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
            {t("events.hero.title")}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg  leading-relaxed">
            {t("events.hero.location")}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="#grow-business" className="bg-[#F57C00] text-white px-6 md:px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg">
              {t("events.hero.grow_btn")}
            </Link>

            <Link to="/member-welcome"

              className="border border-orange-500 text-orange-500 px-6 md:px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition"
            >{t("events.hero.get_involved_btn")}</Link>
          </div>
        </div>


        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full leading-0 z-20 overflow-hidden"></div>
      </section>

    </div>
  );
};
export default EventHero;
