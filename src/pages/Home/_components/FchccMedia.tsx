import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FCHCCMedia = () => {
  const { t } = useTranslation();

  const mediaItems = [
    { id: 1, image: "/images/Vector.png", size: "tall" },
    { id: 2, image: "/images/Vector (1).png", size: "wide" },
    { id: 3, image: "/images/Vector (2).png", size: "tall" },
    { id: 4, image: "/images/Vector (3).png", size: "normal" },
    { id: 5, image: "/images/Vector (4).png", size: "tall-middle" },
    { id: 6, image: "/images/Vector (5).png", size: "normal" },
  ];

  return (
    <section className="max-w-335 mx-auto px-6 py-12 bg-white overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center mb-8"
      >
        <h2 className="text-4xl font-bold text-gray-900">{t("media.title")}</h2>
        <button className="border border-orange-400 text-orange-400 px-5 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 hover:bg-orange-50 transition-all">
          {t("media.view_all")} <ChevronRight size={14} />
        </button>
      </motion.div>

      {/* Media Grid Layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-200"
      >

        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 overflow-hidden rounded-2xl">
            <img src={mediaItems[0].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" alt="media" />
          </div>
          <div className="h-1/3 overflow-hidden rounded-2xl">
            <img src={mediaItems[3].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" alt="media" />
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-4">
          <div className="h-1/4 overflow-hidden rounded-2xl">
            <img src={mediaItems[1].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" alt="media" />
          </div>
          <div className="flex-1 overflow-hidden rounded-2xl">
            <img src={mediaItems[4].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" alt="media" />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 overflow-hidden rounded-2xl">
            <img src={mediaItems[2].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" alt="media" />
          </div>
          <div className="h-1/3 overflow-hidden rounded-2xl">
            <img src={mediaItems[5].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" alt="media" />
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default FCHCCMedia;