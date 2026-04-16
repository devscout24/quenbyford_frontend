import MediaHero from "./_components/MediaHero";
import MediaNav from "./_components/MediaNav";
import ImageGallery from "./_components/ImageGallery";
import VideoGallery from "./_components/VideoGallery";

const Media = () => {
  return (
    <div className="bg-white min-h-screen">
      <MediaHero />
      <MediaNav />

      <main className="max-w-360 mx-auto px-4 pb-24 space-y-24">
        <ImageGallery />
        <VideoGallery />
      </main>
    </div>
  );
};

export default Media;
