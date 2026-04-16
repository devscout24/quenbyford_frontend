import { useState } from "react";
import { motion } from "framer-motion";

const Video = () => {
  const [play, setPlay] = useState(false);

  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-12 my-12 lg:my-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-[1440px] aspect-video mx-auto rounded-2xl md:rounded-3xl overflow-hidden bg-black shadow-2xl  "
      >
        {!play ? (
          <>
            {/* Thumbnail */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 hover:opacity-100 transition-opacity duration-500 cursor-pointer"
              style={{
                backgroundImage: 'url("/images/VideoImage.png")',
              }}
              onClick={() => setPlay(true)}
            />

            {/* Play Button */}
            <button
              onClick={() => setPlay(true)}
              className="absolute inset-0 flex items-center justify-center z-10 transition-transform hover:scale-110 group focus:outline-none"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#F97316]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.5)] group-hover:bg-[#F97316] transition-colors">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ml-1" viewBox="0 0 100 100" fill="white">
                  <path d="M91.5 39.2C99.6 44.1 99.6 55.8 91.5 60.7L34.5 94.8C26.2 99.8 15.6 93.8 15.6 84.1V15.8C15.6 6.1 26.2 0.1 34.5 5.1L91.5 39.2Z" />
                </svg>
              </div>
            </button>
          </>
        ) : (
          <iframe
            className="w-full h-full border-none"
            src="https://www.youtube.com/embed/n5cW4FpGvhI?autoplay=1"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </motion.div>
    </section>
  );
};

export default Video;