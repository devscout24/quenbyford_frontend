import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.startsWith("es") ? "es" : "en";

  const toggleLanguage = async () => {
    const newLang = currentLang === "es" ? "en" : "es";
    await i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <div
      onClick={toggleLanguage}
      className="relative flex items-center bg-gray-100/50 backdrop-blur-sm p-1 rounded-full w-[72px] h-9 cursor-pointer shadow-inner border border-gray-200/50 group overflow-hidden"
    >
      {/* Background Indicator */}
      <motion.div
        animate={{ x: currentLang === "en" ? 0 : 32 }}
        className="absolute w-8 h-7 bg-[#F97316] rounded-full shadow-md z-0"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* EN Label */}
      <div
        className={`relative z-10 flex-1 text-center text-[11px] font-bold transition-colors duration-300 ${
          currentLang === "en" ? "text-white" : "text-gray-500 group-hover:text-gray-700"
        }`}
      >
        EN
      </div>

      {/* ES Label */}
      <div
        className={`relative z-10 flex-1 text-center text-[11px] font-bold transition-colors duration-300 ${
          currentLang === "es" ? "text-white" : "text-gray-500 group-hover:text-gray-700"
        }`}
      >
        ES
      </div>
    </div>
  );
}

