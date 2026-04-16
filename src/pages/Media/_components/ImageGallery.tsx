import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const ImageGallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, src: "/images/Vector.png", title: t("media_page.image_gallery.items.community_event", "Community Event 2024") },
    { id: 2, src: "/images/Vector (1).png", title: t("media_page.image_gallery.items.business_expo", "Business Expo") },
    { id: 3, src: "/images/Vector (2).png", title: t("media_page.image_gallery.items.annual_gala", "Annual Gala") },
    { id: 4, src: "/images/Vector (3).png", title: t("media_page.image_gallery.items.workshop", "Workshop Highlights") },
    { id: 5, src: "/images/Vector (4).png", title: t("media_page.image_gallery.items.networking", "Networking Social") },
    { id: 6, src: "/images/Vector (5).png", title: t("media_page.image_gallery.items.award", "Award Ceremony") },
    { id: 7, src: "/images/Hero1.jpg", title: t("media_page.image_gallery.items.leadership", "Team Leadership") },
    { id: 8, src: "/images/image 148.png", title: t("media_page.image_gallery.items.scholarship", "Scholarship Luncheon") },
  ];

  return (
    <section id="images" className="max-w-360 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-10 bg-[#F97316] rounded-full" />
          <h2 className="text-3xl font-bold text-gray-900">{t("media_page.image_gallery.title", "Photo Gallery")}</h2>
        </div>
        <Link to="https://www.flickr.com/photos/fchcc/albums/" className="flex items-center gap-2 text-[#F97316] font-semibold hover:gap-3 transition-all">
          {t("media_page.image_gallery.view_all", "View All")} <ArrowRight size={20} />
        </Link>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {images.map((img) => (
          <motion.div 
            key={img.id}
            variants={itemVariants}
            className="relative group aspect-square overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => setSelectedImage(img.src)}
          >
            <img 
              src={img.src} 
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-medium text-sm px-4 text-center">{img.title}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full">
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              alt="Full size view"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageGallery;
