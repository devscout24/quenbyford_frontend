import { useState } from 'react';
import { Play } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

// ✅ Dynamic Data
interface Award {
  id: number;
  year: string;
  borderColor: string;
  badge: string;
  thumbnail: string;
  videoUrl: string;
}

const awardsData: Award[] = [
  {
    id: 1,
    year: "2024",
    borderColor: "border-orange-200",
    badge: "/images/FCHACC.png",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1",
  },
  {
    id: 2,
    year: "2019",
    borderColor: "border-blue-200",
    badge: "/images/FCHACC.png",
    thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1",
  },
  {
    id: 3,
    year: "2022",
    borderColor: "border-green-200",
    badge: "/images/FCHACC.png",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1",
  },
  {
    id: 4,
    year: "2020",
    borderColor: "border-purple-200",
    badge: "/images/FCHACC.png",
    thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1",
  },
];

// 🔹 Single Card
const AwardCard = ({ award }: { award: Award }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className={`border-2 ${award.borderColor} ring-0 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col h-full` }>
      <CardContent className="p-5 flex flex-col items-center grow">

        {/* Year */}
        <h2 className="text-4xl md:text-[64px] font-normal text-black tracking-tight">
          {award.year}
        </h2>

        {/* Badge */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center my-4">
          <img 
            src={award.badge} 
            alt={`Award ${award.year}`} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Video Thumbnail / Player */}
        <div 
          className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer shadow-md mt-auto"
          onClick={() => setIsPlaying(true)}
        >
          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src={award.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full bg-black"
            ></iframe>
          ) : (
            <>
              <img 
                src={award.thumbnail} 
                alt="Event Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <Play className="text-slate-900 fill-slate-900 ml-1 sm:w-8 sm:h-8 w-6 h-6" />
                </div>
              </div>
            </>
          )}
        </div>

      </CardContent>
    </Card>
  );
};

// 🔹 Main Section
const RecognitionSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-15">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-center text-black mb-8 leading-tight">
        FCHCC Recognized as Chamber of the Year
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {awardsData.map((award) => (
          <AwardCard key={award.id} award={award} />
        ))}
      </div>

    </div>
  );
};

export default RecognitionSection;