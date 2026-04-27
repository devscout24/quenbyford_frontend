
import { useTranslation } from "react-i18next";

const ProgramBenefits = () => {
  const { t } = useTranslation();

  const data = {
    title: t("mentorship.program_benefits.title"),
    items: t("mentorship.program_benefits.items", { returnObjects: true }) as string[]
  };

  return (
    <section className="w-full bg-white pb-16 px-4">
      {/* Container restricted to 1000px */}
      <div className="max-w-360 mx-auto">

        {/* Light Gray Card Background */}
        <div className="bg-[#F8F9FA] rounded-lg p-8 md:p-12 shadow-sm">

          {/* Section Header */}
          <h3 className="text-xl md:text-[34px] font-bold text-[#1E88E5] mb-8 ">
            {data.title}
          </h3>

          {/* Benefits List */}
          <ul className="space-y-2">
            {data.items.map((benefit, index) => (
              <li key={index} className="flex items-start">
                {/* Bullet Point - Precisely aligned with first line */}
                <div className="mt-[0.65em] mr-4 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#1E88E5]" />
                </div>

                <div className="flex-1">
                  <p className="text-[16px] leading-relaxed font-normal text-black text-left">
                    {benefit}
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

export default ProgramBenefits;