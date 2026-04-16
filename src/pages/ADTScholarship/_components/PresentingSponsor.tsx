import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from "react-i18next";

const ATDWinners = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(2);

  // Dynamic winner placeholder data 
  const winners = [
    { id: 1, name: "Chantelle Merritt", uni: "Florida State University", degree: "Bachelors in Bio Engineering", img: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Marcus Johnson", uni: "Harvard University", degree: "Masters in Computer Science", img: "https://i.pravatar.cc/150?img=11" },
    { id: 3, name: "Sarah Williams", uni: "MIT", degree: "Bachelors in Physics", img: "https://i.pravatar.cc/150?img=5" },
    { id: 4, name: "David Chen", uni: "Stanford University", degree: "PhD in Mathematics", img: "https://i.pravatar.cc/150?img=8" },
    { id: 5, name: "Elena Rodriguez", uni: "Oxford University", degree: "Bachelors in Literature", img: "https://i.pravatar.cc/150?img=9" },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % winners.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + winners.length) % winners.length);
  };

  // Auto-play feature
  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 font-sans overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h3 className="text-2xl sm:text-3xl md:text-[48px] font-bold text-black mb-6">
          {t("scholarship.presenting.title")}
        </h3>
        <div className="flex flex-col items-center mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-16 border border-gray-100 hover:shadow-md transition-shadow">
            {/* Using a placeholder logo since original might be missing */}
            <img
              src="/images/FoundationLogos-CommunityImpact-1a 1.png"
              alt="Foundation Logo"
              className="h-auto max-h-32 md:max-h-60 w-auto object-contain"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium tracking-tight text-black mb-4 px-4">
            {t("scholarship.presenting.congrats")}
          </h2>
        </div>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative max-w-[1440px] mx-auto flex items-center justify-center ">

        {/* Left Navigation Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-3 z-30 p-3 md:p-4 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg hover:bg-blue-50 hover:text-[#1E88E5] hover:scale-110 transition-all active:scale-95"
          aria-label="Previous Winner"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="relative w-full h-100 flex items-center justify-center perspective-1000">
          <AnimatePresence initial={false}>
            {winners.map((winner, index) => {

              let offset = index - activeIndex;
              if (offset < -2) offset += winners.length;
              if (offset > 2) offset -= winners.length;

              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // Smooth calculation for card positions
              const xPos = offset * (window.innerWidth > 768 ? 220 : 140); // Reduced gap between cards
              const scale = 1 - Math.abs(offset) * 0.12; // Slightly increased size of cards
              const zIndex = 10 - Math.abs(offset);
              const opacity = 1 - Math.abs(offset) * 0.3;

              return (
                <motion.div
                  key={winner.id}
                  initial={{ opacity: 0, x: offset > 0 ? 300 : -300 }}
                  animate={{
                    opacity: opacity,
                    x: xPos,
                    scale: scale,
                    zIndex: zIndex,
                    rotateY: offset * -15 // Adds a slight 3D angle effect
                  }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 250, damping: 25 }}
                  className={`absolute flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-3xl shadow-xl border cursor-pointer
                    ${isActive
                      ? 'border-[#1E88E5] w-[260px] sm:w-80 md:w-90 h-[380px] md:h-100 shadow-blue-200/50 shadow-2xl'
                      : 'border-gray-100 w-[220px] sm:w-70 md:w-80 h-[320px] md:h-85 hover:border-blue-200'}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`rounded-full border-2 mb-6 transition-all duration-300 ${isActive ? 'border-[#1E88E5] scale-115' : 'border-gray-100'}`}>
                    <img
                      src={winner.img}
                      alt={winner.name}
                      className="w-24 h-24 md:w-30 md:h-30 rounded-full object-cover shadow-inner"
                    />
                  </div>

                  <h4 className={`font-bold text-xl md:text-2xl leading-tight mb-2 ${isActive ? 'text-[#1E88E5]' : 'text-gray-800'}`}>
                    {winner.name}
                  </h4>
                  <p className="text-black text-sm font-normal mb-3 px-2">
                    {winner.uni}
                  </p>

                  {/* Nice badge style for the degree */}
                  <div className={`mt-auto w-full py-3 rounded-xl transition-colors ${isActive ? ' text-[#1E88E5] font-semibold' : ' text-black/40'}`}>
                    <p className="text-xs md:text-sm text-normal leading-tight px-2">
                      {winner.degree}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right Navigation Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-3 z-30 p-3 md:p-4 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-600 hover:scale-110 transition-all active:scale-95"
          aria-label="Next Winner"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center gap-3 mt-10">
        {winners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${activeIndex === index
                ? 'w-10 h-3 bg-blue-600 shadow-md shadow-blue-200'
                : 'w-3 h-3 bg-gray-300 hover:bg-blue-400'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ATDWinners;
