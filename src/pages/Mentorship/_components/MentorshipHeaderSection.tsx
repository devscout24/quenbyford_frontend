
import { useTranslation } from "react-i18next";

const MentorshipHeaderSection = () => {
  const { t } = useTranslation();

  const data = {
    title: t("mentorship.hero.title"),
    paragraphs: t("mentorship.hero.paragraphs", { returnObjects: true }) as string[]
  };

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-360 mx-auto text-center">
        
        {/* Dynamic Title */}
        <h2 className="text-3xl md:text-[40px] font-bold text-[#1E88E5] mb-8">
          {data.title}
        </h2>

        {/* Dynamic Paragraphs Mapping */}
        <div className="space-y-5 text-[#000000] leading-relaxed text-base md:text-[16px]">
          {data.paragraphs.map((text, index) => (
            <p key={index}>
              {text}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MentorshipHeaderSection;