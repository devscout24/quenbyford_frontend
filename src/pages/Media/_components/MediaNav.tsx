import { Image as ImageIcon, Video as VideoIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const MediaNav = () => {
  const { t } = useTranslation();

  return (
    <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 mb-15">
      <div className="max-w-7xl mx-auto px-4 flex justify-center gap-8">
        <a href="#images" className="flex items-center gap-2 font-bold text-[#F97316] hover:text-orange-600 transition-colors">
          <ImageIcon size={20} /> {t("media_page.nav.images", "Images")}
        </a>
        <a href="#videos" className="flex items-center gap-2 font-bold text-[#0284C7] hover:text-blue-600 transition-colors">
          <VideoIcon size={20} /> {t("media_page.nav.videos", "Videos")}
        </a>
      </div>
    </div>
  );
};

export default MediaNav;
