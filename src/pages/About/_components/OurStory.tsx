

interface OurStoryProps {
  title?: string;
  paragraphs?: string[];
  images?: { src: string; alt: string }[];
}

const defaultStory = {
  title: "Our Story",
  paragraphs: [
    "Founded With The Belief That A United Hispanic Business Community Is A Powerful Force For Economic Growth, The First Coast Hispanic Chamber Of Commerce (FCHCC) Has Been The Cornerstone Of Hispanic Enterprise In Our Region.",
    "Over The Past 15+ Years, We Have Grown From A Small Group Of Passionate Entrepreneurs To A Robust Network Of Over 500 Members, Corporate Partners, And Community Leaders."
  ],
  images: [
    { src: "/images/Immmm.png", alt: "Team collaborating" },
    { src: "/images/Immmmmm.png", alt: "Business meeting" }
  ]
};

const OurStory = ({ 
  title = defaultStory.title, 
  paragraphs = defaultStory.paragraphs, 
  images = defaultStory.images 
}: OurStoryProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-[32px] font-bold text-black">
            {title}
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-base font-normal capitalize w-full md:max-w-[40rem]">
            {paragraphs.map((text, index) => (
              <p key={index}>
                {text}
                {index === paragraphs.length - 1 && (
                  <> <span className="text-blue-500 font-medium cursor-pointer hover:underline">Read More</span></>
                )}
              </p>
            ))}
          </div>
        </div>

        {/* Right Side: Image Gallery */}
        <div className="flex flex-col sm:flex-row gap-4">
          {images.map((img, index) => (
            <div key={index} className={`flex-1 ${index === 1 ? 'mt-0 sm:mt-12' : ''}`}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-[250px] object-cover rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-shadow duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurStory;