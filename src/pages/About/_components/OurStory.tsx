
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface OurStoryProps {
  title?: string;
  paragraphs?: string[];
  images?: { src: string; alt: string }[];
}


const OurStory = ({
  title,
  paragraphs,
  images
}: OurStoryProps) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const defaultStory = {
    title: t("about.story.title"),
    paragraphs: t("about.story.desc").split("\n").filter(p => p.trim() !== ""),
    images: [
      { src: "/images/Immmm.png", alt: t("about.story.title") },
      { src: "/images/Immmmmm.png", alt: t("about.story.title") }
    ]
  };

  const displayTitle = title || defaultStory.title;
  const displayParagraphs = paragraphs || defaultStory.paragraphs;
  const displayImages = images || defaultStory.images;

  return (
    <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left Side: Content */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-[32px] font-bold text-black">
            {displayTitle}
          </h2>

          <div className="space-y-4 text-black leading-relaxed text-base font-normal w-full md:max-w-160">
            {displayParagraphs.map((text, index) => {
              if (!isExpanded && index !== 0) return null;

              return (
                <p key={index}>
                  {text}
                  {!isExpanded && index === 0 && displayParagraphs.length > 1 && (
                    <>
                      {" "}
                      <span
                        onClick={() => setIsExpanded(true)}
                        className="text-blue-500 font-medium cursor-pointer hover:underline"
                      >
                        {t("about.story.read_more", "See More")}
                      </span>
                    </>
                  )}
                  {isExpanded && index === displayParagraphs.length - 1 && (
                    <>
                      {" "}
                      <span
                        onClick={() => setIsExpanded(false)}
                        className="text-blue-500 font-medium cursor-pointer hover:underline block mt-2"
                      >
                        {t("about.story.read_less", "See Less")}
                      </span>
                    </>
                  )}
                </p>
              );
            })}
          </div>
        </div>

        {/* Right Side: Image Gallery */}
        <div className="flex flex-col sm:flex-row gap-4">
          {displayImages.map((img, index) => (
            <div key={index} className={`flex-1 ${index === 1 ? 'mt-0 sm:mt-8 md:mt-12' : ''}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-video md:h-60 lg:h-72 object-cover rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-shadow duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurStory;
