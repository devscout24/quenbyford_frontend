

import { useTranslation } from "react-i18next";

const AboutHero = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-360 mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-[40px] font-medium text-[#1E88E5] mb-2 tracking-tight">
          {t("about.hero.title")}
        </h1>

        {/* Subtitle */}
        <p className="text-[#979797] text-base sm:text-xl max-w-2xl font-medium mx-auto ">
          {t("about.hero.desc")}
        </p>
      </div>
    </div>
  );
};


export default AboutHero;