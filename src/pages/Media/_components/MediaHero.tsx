import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MediaHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[40vh] min-h-125 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/Hero.png" 
          alt="Media Library Background" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E88E5]/40 to-white" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#1E88E5] mb-4">
          {t("media_page.hero.title", "Media Gallery")}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto font-medium">
          {t("media_page.hero.desc", "Explore our collection of memorable moments, success stories, and community events.")}
        </p>
      </motion.div>
    </section>
  );
};

export default MediaHero;
