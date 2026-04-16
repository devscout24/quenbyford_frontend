import { ArrowUpRight, X } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from '@/components/ui/button';

const SpeakersSponsors = () => {
  const { t } = useTranslation();
  const speakers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Placeholder for speaker data/images
  const [showAll, setShowAll] = useState(false); // State to toggle view

  const toggleView = () => {
    setShowAll((prev) => !prev);
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="max-w-360 mx-auto px-4 md:px-0 pt-15">

      {/* Speakers Section */}
      <div className="bg-[#E9F4FD] rounded-xl p-8 md:p-12 shadow-sm relative">
        <div className="hidden md:flex justify-end">
          <Button
            onClick={toggleView}
            className="flex items-center gap-2 px-5 py-2 w-30 h-10 border border-[#1E88E5] rounded-full text-[#1E88E5] transition-all text-sm font-medium"
          >
            {showAll ? t("events.agenda.close") : t("events.agenda.view_all")} <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[48px] font-normal text-[#1D83E4] mx-auto md:ml-auto md:translate-x-12">
            {t("events.agenda.speakers_title")}
          </h2>
        </div>

        {/* Scrollable/Grid Speaker List */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
          {(showAll ? speakers : speakers.slice(0, 5)).map((_, index) => {
            const imgSrc = "/images/Frame 2087328015.png";
            return (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(imgSrc)}
              >
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-blue-400 transition-all shadow-md">
                  <img
                    src={imgSrc}
                    alt={`Speaker ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <button
            onClick={toggleView}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full text-sm"
          >
            {showAll ? t("events.agenda.close") : t("events.agenda.view_all")} <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="text-center my-16">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 transition-all duration-500">
          <img
            src="/images/fchcc-bank-of-america 1.png"
            alt="Bank of America"
            className="w-full max-w-111 h-auto object-contain"
          />
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 flex items-center justify-center p-4 cursor-zoom-out"
            />
            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-101 flex items-center justify-center pointer-events-none p-4"
            >
              <div className="relative max-w-4xl w-full pointer-events-auto">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={32} />
                </button>
                <img
                  src={selectedImage}
                  alt="Speaker Enlarged"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl mx-auto"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

export default SpeakersSponsors;
