import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const BadgesSection = () => {
  const { t } = useTranslation();
  const badges = [
    { year: "2024", img: "/images/FCHACC.png", borderColor: "border-orange-200" },
    { year: "2019", img: "/images/FCHACC.png", borderColor: "border-blue-200" },
  ];

  return (
    <section className="max-w-[1440px] h-82 mx-auto px-4 md:px-6 lg:px-8 py-12 mb-30">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f26522] mb-10 text-center md:text-left"
      >
        {t("badges.title")}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`border-2 ${badge.borderColor} rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center space-y-4 shadow-sm bg-white`}
          >
            <span className="text-lg md:text-xl font-semibold text-gray-700">
              {badge.year}
            </span>

            <img
              src={badge.img}
              alt={`Chamber of the Year ${badge.year}`}
              className="h-50 md:h-50 object-contain transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BadgesSection;