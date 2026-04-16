

import { useTranslation } from "react-i18next";

const ContractHero = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#F97316]/10 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-[40px] font-medium text-black mb-2 tracking-tight">
          {t("contact.hero.title")}
        </h1>

        {/* Subtitle */}
        <p className="text-[#979797] text-sm sm:text-base md:text-[16px] max-w-2xl font-medium mx-auto ">
          {t("contact.hero.desc")}
        </p>
      </div>
    </div>
  );
};


export default ContractHero;