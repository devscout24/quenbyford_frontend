import { useState } from "react";
import { Button } from "@/components/ui/button";
import ATDAnnouncementModal from "./ATDAnnouncementModal";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative min-h-[500px] md:h-150 w-full overflow-hidden flex justify-center py-10 md:py-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/pexels-fauxels-3184394 1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay tipis agar teks lebih menonjol */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 text-center px-4 mt-20">
        <h1 className="text-2xl sm:text-4xl md:text-[56px] font-bold text-white mb-2 tracking-tight capitalize">
          {t("scholarship.hero.title")}
        </h1>
        
        <p className="text-lg sm:text-xl md:text-[36px] font-normal text-white mt-6 sm:mt-10 tracking-wide drop-shadow-md mb-8 sm:mb-20 md:mb-56 px-4">
          {t("scholarship.hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Custom Orange Button menggunakan shadcn base */}
          <Button 
            onClick={() => setIsModalOpen(true)}
            size="lg" 
            className=" px-14 py-6 text-lg  text-[16px] font-normal bg-[#FF7B25] border-2 border-[#FF7B25] hover:bg-[#E66A1F] text-white transition-all hover:scale-105 active:scale-95 rounded-full"
          >
            {t("scholarship.hero.ticket_btn")}
          </Button>

          <ATDAnnouncementModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />

          {/* Outline Button khas shadcn dengan sedikit sentuhan transparan */}
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full  px-14 py-6 text-[16px]  font-normal bg-white/10 backdrop-blur-sm border-2 border-white  text-white hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95"
          >
             {t("scholarship.hero.info_btn")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;