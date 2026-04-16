import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const VideoGallery = () => {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      thumbnail: "/images/VideoImage.png",
      url: "https://www.youtube.com/embed/n5cW4FpGvhI",
      title: t("media_page.video_gallery.items.impact", "Chamber Impact Overview"),
      duration: "3:45"
    },
    {
      id: 2,
      thumbnail: "/images/Hero.png",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      title: t("media_page.video_gallery.items.success", "Success Stories: Local Businesses"),
      duration: "5:12"
    },
    {
      id: 3,
      thumbnail: "/images/person-near-alternative-energy-plant.png",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      title: t("media_page.video_gallery.items.scholarship", "ATD Scholarship Highlights"),
      duration: "4:30"
    }
  ];

  return (
    <section id="videos">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-10 bg-[#0284C7] rounded-full" />
          <h2 className="text-3xl font-bold text-gray-900">{t("media_page.video_gallery.title", "Video Highlights")}</h2>
        </div>
        <Link to="https://www.flickr.com/photos/fchcc/albums/" className="flex items-center gap-2 text-[#0284C7] font-semibold hover:gap-3 transition-all">
          {t("media_page.video_gallery.view_all", "View All")} <ArrowRight size={20} />
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Featured Video */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl group"
        >
          {!activeVideo ? (
            <>
              <img 
                src={videos[0].thumbnail} 
                className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
                alt={videos[0].title}
              />
              <button 
                onClick={() => setActiveVideo(videos[0].url)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-[#F97316]/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="text-white ml-1" size={32} />
                </div>
              </button>
              <div className="absolute bottom-6 left-6 text-white text-shadow-lg">
                <h3 className="text-2xl font-bold">{videos[0].title}</h3>
                <p className="opacity-80">{t("media_page.video_gallery.featured_subtitle", "Featured Highlights")}</p>
              </div>
            </>
          ) : (
            <iframe 
              src={`${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </motion.div>

        {/* Video List */}
        <div className="flex flex-col gap-4">
          {videos.map((vid) => (
            <motion.div 
              key={vid.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex gap-4 p-3 rounded-2xl cursor-pointer transition-colors ${activeVideo === vid.url ? 'bg-blue-50 border border-blue-100' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveVideo(vid.url)}
            >
              <div className="relative w-32 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-200">
                <img src={vid.thumbnail} className="w-full h-full object-cover" alt={vid.title} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Play size={16} className="text-white" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-bold text-gray-900 text-sm line-clamp-2">{vid.title}</h4>
                <span className="text-xs text-gray-500">{vid.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
