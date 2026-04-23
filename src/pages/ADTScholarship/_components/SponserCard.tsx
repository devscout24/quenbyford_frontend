import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sponsors, partners } from "@/data/sponsorsData";

// ----------------------
// DATA (future: API/CMS)
// ----------------------


// ----------------------
// ANIMATION VARIANTS
// ----------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

// ----------------------
// COMPONENT
// ----------------------
const SponserSection = () => {
  const { t } = useTranslation();
  const [showAllText, setShowAllText] = useState(false); // State for toggling text
  const [showAllPartners, setShowAllPartners] = useState(false);

  const aboutData = {
    title: t("scholarship.about.title"),
    description: t("scholarship.about.desc"),
    buttonText: t("scholarship.about.button"),
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-15 font-sans overflow-hidden">
      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border border-blue-400 rounded-2xl p-6 sm:p-10 flex flex-col justify-between min-h-[250px] hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
        >
          <div>
            <h2 className="text-[#0077C8] text-2xl font-bold leading-8 mb-4">
              {aboutData.title}
            </h2>
            <p className={`text-[14px] leading-5.5 font-normal text-black/60 my-6 text-left ${showAllText ? "line-clamp-none" : "line-clamp-4"}`}>
              {aboutData.description}
            </p>
          </div>

          <button
            onClick={() => setShowAllText(!showAllText)}
            className="flex w-fit items-center text-[#0077C8] font-bold text-[12px] leading-4 tracking-tighter-1.5px uppercase group"
          >
            {showAllText ? t("scholarship.about.show_less") : t("scholarship.about.show_more")}
            <ArrowRight className={`ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 ${showAllText ? "rotate-180" : "rotate-0"}`} />
          </button>
        </motion.div>

        {/* SPONSORS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="border border-orange-400 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[#F15A24] text-2xl font-bold leading-8">{t("scholarship.sponsors.title")}</h2>
            <Link 
              to="/sponsors-details"
              className="flex items-center border border-orange-400 text-[#F15A24] px-4 py-1 rounded-full text-[16px] hover:bg-orange-50 transition-colors font-normal leading-6.5"
            >
              {t("events.agenda.view_all")} <ArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-3 gap-2 items-center"
          >
            {sponsors.map((item) => (
              <motion.div
                variants={itemVariants}
                key={item.id}
                className="h-12 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
              >
                <img src={item.name} alt="Sponsor" className="h-full w-full max-w-[120px] object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM PARTNERS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="border border-orange-400 rounded-2xl p-6 sm:p-10 hover:shadow-xl hover:-translate-y-1 mt-8 sm:mt-12 mb-8 transition-all duration-500"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[#F15A24] text-2xl font-bold">
            {t("scholarship.partners.title")}
          </h2>
          <button 
            onClick={() => setShowAllPartners(!showAllPartners)}
            className="flex items-center border border-orange-400 text-[#F15A24] px-4 py-1 rounded-full text-[16px] hover:bg-orange-50 transition-colors font-normal leading-6.5 cursor-pointer"
          >
            {showAllPartners ? t("events.agenda.close") : t("events.agenda.view_all")} 
            {showAllPartners ? <X className="ml-1 w-4 h-4" /> : <ArrowUpRight className="ml-1 w-4 h-4" />}
          </button>
        </div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center"
        >
          <AnimatePresence>
            {(showAllPartners ? partners : partners.slice(0, 8)).map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                variants={itemVariants}
                key={item.id}
                className="h-16 sm:h-20 flex items-center justify-center text-center transition-all duration-300 hover:scale-110 drop-shadow-sm hover:drop-shadow-lg cursor-pointer"
              >
                <img src={item.name} alt="Sponsor" className="h-full w-full max-w-[120px] object-contain" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </motion.div>


    </div>
  );
};

export default SponserSection;
