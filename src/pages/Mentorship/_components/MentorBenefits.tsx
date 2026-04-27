
import { useTranslation } from "react-i18next";

const MentorBenefitsLeft = () => {
  const { t } = useTranslation();

  const data = {
    title: t("mentorship.mentor_benefits.title"),
    items: t("mentorship.mentor_benefits.items", { returnObjects: true }) as { label: string; description: string }[]
  };

  return (
    <section className="w-full bg-white pb-16 px-4">
      {/* Container restricted to 1000px */}
      <div className="max-w-360 mx-auto">
        
        {/* Light Gray Card */}
        <div className="bg-[#F8F9FA] rounded-lg p-8 md:p-14 shadow-sm">
          
          {/* Section Header - Centered as per original brand style */}
          <h2 className="text-2xl md:text-[34px] font-bold text-[#2196F3] mb-12 text-center">
            {data.title}
          </h2>

          {/* Left Aligned Benefits List */}
          <ul className="space-y-8">
            {data.items.map((item, index) => (
              <li key={index} className="flex items-start group">
                {/* Bullet Point - Precisely aligned with first line */}
                <div className="mt-[0.65em] mr-4 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#2196F3]" />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-[#000000] text-[16px] leading-relaxed text-left">
                    <span className="font-bold text-gray-900">{item.label}</span>
                    <span className="mx-2 text-gray-400">–</span>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default MentorBenefitsLeft;