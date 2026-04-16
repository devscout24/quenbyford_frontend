import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PartnersSection = () => {
  const { t } = useTranslation();
  const partners = [
    { name: "iHeartMedia", logo: "/images/7.png" },
    { name: "Norsan Media", logo: "/images/6.png" },
    { name: "CMG", logo: "/images/8.png" },
    { name: "Florida Blue", logo: "/images/5.png" },
  ];

  return (
    <section className="max-w-[1440px]  mx-auto px-4 md:px-6 lg:px-8 py-12">

      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-[50px] font- font-bold text-[#f26522]"
        >
          {t("strategic_partners.title")}
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.01 }}
          className="self-start md:self-auto px-4 py-2 border border-orange-300 text-orange-400 rounded-full text-sm font-medium flex items-center hover:bg-orange-50 transition-colors"
        >
          {t("strategic_partners.learn_more")} <span className="ml-1 text-xs">↗</span>
        </motion.button>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-2 border-orange-200 rounded-2xl p-5 md:p-7 lg:p-10 bg-white shadow-sm"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2  items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full flex justify-center p-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-[100px] w-full   transition-all duration-300 opacity-80 "
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PartnersSection;