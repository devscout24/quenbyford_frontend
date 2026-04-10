import { useState } from "react";

const Video = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-full max-w-335 h-200 mx-auto my-12 rounded-lg overflow-hidden bg-black">
      
      {!play ? (
        <>
          {/* Thumbnail */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                'url("/images/VideoImage.png")',
            }}
          />

          {/* Play Button */}
          <button
            onClick={() => setPlay(true)}
            className="absolute inset-0 flex items-center justify-center z-10 transition-transform hover:scale-110"
          >
            <svg width="80" height="80" viewBox="0 0 100 100" fill="white">
              <path d="M91.5 39.2C99.6 44.1 99.6 55.8 91.5 60.7L34.5 94.8C26.2 99.8 15.6 93.8 15.6 84.1V15.8C15.6 6.1 26.2 0.1 34.5 5.1L91.5 39.2Z" />
            </svg>
          </button>
        </>
      ) : (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/n5cW4FpGvhI?autoplay=1"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Video;