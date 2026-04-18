import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const GrowBusiness = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      titleTop: t("events.grow.vendor_top"),
      titleBottom: t("events.grow.vendor_bottom"),
      icon: "/icons/Frame (5).svg",
      bg: "bg-[#1E88E5]/10",
      btn: "bg-[#1E88E5] hover:bg-blue-700 shadow-blue-200",
      link1: "https://form.jotform.com/252093931968165",
    
    },
    {
      titleTop: t("events.grow.participant_top"),
      titleBottom: t("events.grow.participant_bottom"),
      icon: "/icons/Group.svg",
      bg: "bg-[#F97316]/10",
      btn: "bg-[#F97316] hover:bg-orange-600 shadow-orange-200",
      link1: "https://form.jotform.com/252083870437157",
     
    },
  ];

  const infoData = {
    title: t("events.grow.experts_title"),
    desc: t("events.grow.experts_desc"),
    image: "/images/GrowIm.png",
  };

  return (
    <div id="grow-business" className="scroll-mt-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">

      {/* Header */}
      <div className="text-center space-y-2.5">
        <h1 className="text-[32px] font-bold text-black">{t("events.grow.title")}</h1>
        <p className="max-w-2xl mx-auto text-[rgba(0,0,0,0.60)] text-[16px]">
          {t("events.grow.subtitle")}
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} w-full max-w-[422px] rounded-3xl p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-300 shadow-sm hover:shadow-md`}
          >
            <div className="bg-white p-4 rounded-full mb-6">
              <img src={card.icon} alt="icon" className="w-8 h-8" />
            </div>

            <h2 className="text-xl font-normal text-black mb-2">{card.titleTop}</h2>

            <p className="text-xl font-normal text-black mb-12">{card.titleBottom}</p>

            <div className="flex flex-col gap-4 w-full">
              <Link
                to={card.link1}
                className={`w-full py-3 px-6 text-white font-medium rounded-xl transition-colors shadow-lg ${card.btn}`}
              >
                {t("events.grow.register_btn")}
              </Link>

            
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="grid lg:grid-cols-2 gap-8 items-center pt-16 lg:pt-27 mx-auto">

        <div className="space-y-6 w-full max-w-[600px]">
          <h2 className="text-[32px] font-medium text-black">
            {infoData.title}
          </h2>

          <p className="text-xl font-normal text-[#000000]/60 leading-relaxed">
            {infoData.desc}
          </p>
        </div>

        <div className="relative group">
          <img
            src={infoData.image}
            alt="info"
            className="rounded-[2rem] w-full max-w-[600px] h-auto sm:h-[400px] object-cover shadow-xl transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>
      </div>


    </div>


  );
};

export default GrowBusiness;
