import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

// ----------------------
// DATA (future: API/CMS)
// ----------------------

const sponsors = [
  { id: 1, name: "/images/100.png", type: "placeholder" },
  { id: 2, name: "/images/Overlay+Border (2).png", type: "placeholder" },
  { id: 3, name: "/images/Overlay+Border (3).png", type: "placeholder" },
  { id: 4, name: "/images/Overlay+Border (4).png", type: "placeholder" },
  { id: 5, name: "/images/Overlay+Border (5).png", type: "dark" },
  { id: 6, name: "/images/Overlay+Border (6).png", type: "placeholder" },
];

const partners = [
  { id: 1, name: "/images/100.png", },
  { id: 2, name: "/images/Overlay+Border (2).png" },
  { id: 3, name: "/images/Overlay+Border (3).png", },
  { id: 4, name: "/images/Overlay+Border (4).png" },
  { id: 5, name: "/images/Overlay+Border (5).png", italic: true },
  { id: 6, name: "/images/Overlay+Border (6).png" },
  { id: 7, name: "/images/Overlay+Border (7).png" },
  { id: 8, name: "/images/Overlay+Border (3).png", dark: true },
];

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
            <p className="text-[14px] leading-5.5  fonnt-normal text-black/60 my-6">
              {aboutData.description}
            </p>
          </div>

          <button className="flex w-fit items-center text-[#0077C8] font-bold text-[12px] leading-4 tracking-tighter-1.5px uppercase group">
            {aboutData.buttonText}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
            <button className="flex items-center border border-orange-400 text-[#F15A24] px-4 py-1 rounded-full text-[16px] hover:bg-orange-50 transition-colors font-normal leading-6.5">
              {t("events.agenda.view_all")} <ArrowUpRight className="ml-1 w-4 h-4" />
            </button>
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
          <button className="flex items-center border border-orange-400 text-[#F15A24] px-4 py-1 rounded-full text-[16px] hover:bg-orange-50 transition-colors font-normal leading-6.5">
            {t("events.agenda.view_all")} <ArrowUpRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center"
        >
          {partners.map((item) => (
            <motion.div
              variants={itemVariants}
              key={item.id}
              className="h-16 sm:h-20 flex items-center justify-center text-center transition-all duration-300 hover:scale-110 drop-shadow-sm hover:drop-shadow-lg cursor-pointer"
            >
              <img src={item.name} alt="Sponsor" className="h-full w-full max-w-[120px] object-contain" />
            </motion.div>
          ))}
        </motion.div>

      </motion.div>


    </div>
  );
};

export default SponserSection;
