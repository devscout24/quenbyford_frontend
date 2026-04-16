import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProudMember = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto text-center px-4">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }} 
          className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 tracking-wide text-gray-700"
        >
          {t("proud_member.text")}
        </motion.h1>

        {/* Logo */}
        <motion.img
          src="/images/Logo1.png"
          alt="Logo"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="w-full max-h-17.5 sm:max-h-22.5 md:max-h-27.5 object-contain mx-auto"
        />
      </div>
    </section>
  );
};

export default ProudMember;