import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { sponsors } from "@/data/sponsorsData";

const SponsorsDetails = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-360 mx-auto font-sans">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          to="/events/scholarship"
          className="inline-flex items-center text-[#F15A24] font-bold hover:underline gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          {t("news.details.back")}
        </Link>
      </motion.div>

      {/* Sponsors Section */}
      <section className="mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-[#F15A24] mb-12"
        >
          {t("scholarship.sponsors.title")}
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center"
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32 md:h-40 group"
            >
              <img
                src={sponsor.name}
                alt="Sponsor Logo"
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Partners Section */}
      {/* <section>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-bold text-[#F15A24] mb-12"
        >
          {t("scholarship.partners.title")}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32 md:h-40 group"
            >
              <img
                src={partner.name}
                alt="Partner Logo"
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </section> */}
    </div>
  );
};

export default SponsorsDetails;
