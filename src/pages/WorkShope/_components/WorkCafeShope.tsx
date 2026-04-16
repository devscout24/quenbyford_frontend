import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SocialCafecito = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden my-15">

      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-2">
          <div className="flex w-full max-w-[332px] h-[60px] justify-center gap-4.5 items-center border border-orange-400 text-orange-500 p-4 rounded-full text-base sm:text-lg
           font-extrabold ing-wider uppercase">
            <img src="/icons/Frame5.svg" alt="" /> {t("cafecito.badge")}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-[64px] font-semibold leading-tight">
            {t("cafecito.hero.title").split(':')[0]}: <br />
            {t("cafecito.hero.title")?.includes(':') ? (
              <>
                {t("cafecito.hero.title").split(':')[1].trim().split(' ').slice(0, 2).join(' ')} <br />
                {t("cafecito.hero.title").split(':')[1].trim().split(' ').slice(2).join(' ')}
              </>
            ) : t("cafecito.hero.title")}
          </h1>
          <p className="text-black text-[16px] font-normal w-full max-w-[500px] mt-6 mb-10">
            {t("cafecito.hero.desc")}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button className="px-6 py-7 flex items-center justify-center bg-[#F2741F] hover:bg-[#d96316] text-white rounded-full shadow-lg transition-all text-[16px] uppercase font-medium">
              {t("cafecito.hero.button")}
            </Button>
            <p className="text-[16px] text-black font-medium">
              {t("cafecito.hero.not_member")} <Link to="/members" className="text-black font-bold underline">{t("cafecito.hero.join")}</Link> {t("cafecito.hero.attend")}
            </p>
          </div>
        </div>

        {/* Hero Image with Badge */}
        <div className="flex-1 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/Rectangle 6.png"
              alt="Networking Event"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full max-w-[276px] absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-[#F97316]">
            <div className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.25)]">

              <span className="text-orange-500 font-bold text-lg">

                <img src="/icons/Frame6.svg" alt="icon" className="w-8 h-8" />
              </span>
            </div>
            <div>
              <p className="text-[12px] text-black uppercase font-medium">{t("cafecito.verified.title")}</p>
              <p className="text-xs  text-black font-medium">{t("cafecito.verified.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="max-w-[1440px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* When & Where */}
        <div className="w-full border border-[#1E88E5] rounded-2xl p-6 bg-white hover:shadow-lg transition-shadow">
          <div className="text-blue-500 text-3xl mb-5">📅</div>
          <h3 className="text-xl md:text-[38px] leading-9 font-bold mb-5 text-black">{t("cafecito.when.title")}</h3>
          <p className="text-lg leading-7 text-black">
            {t("cafecito.when.desc")}
          </p>
        </div>

        {/* The Experience */}
        <div className="border border-orange-100 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow">
          <div className="text-orange-500 text-3xl mb-6">👥</div>
          <h3 className="text-xl md:text-[38px] leading-9 font-bold mb-5 text-black">{t("cafecito.experience.title")}</h3>
          <p className="text-lg leading-7 text-black">
            {t("cafecito.experience.desc")}
          </p>
        </div>

        {/* Topics Covered */}
        <div className="border border-orange-100 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow">
          <div className="text-orange-500 text-3xl mb-6">📈</div>
          <h3 className="text-xl md:text-[38px] leading-9 font-bold mb-5 text-black">{t("cafecito.topics.title")}</h3>
          <p className="text-lg leading-7 text-black">
            {t("cafecito.topics.desc")}
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-[972px] mx-auto px-6 py-16">
        <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-12 text-center">
          <h2 className="text-[32px] font-medium text-black mb-4">{t("cafecito.newsletter.title")}</h2>
          <p className="text-2xl  text-black font-normal mb-10 max-w-lg mx-auto">{t("cafecito.newsletter.subtitle")}</p>
          <p className="text-[16px]  text-black font-normal mb-10 max-w-[618px] mx-auto">
            {t("cafecito.newsletter.desc")}
          </p>

          <form className="max-w-2xl mx-auto space-y-6">
            <div className="text-left">
              <label className="text-[12px] font-bold text-black uppercase ml-2 mb-2 block">{t("cafecito.newsletter.label")}</label>
              <input
                type="email"
                className="w-full bg-white border-gray-50 shadow-md p-4 rounded-full text-[16px] outline-none"
                placeholder="yourname@example.com"
              />
            </div>
            <button className="w-full bg-[#F2741F] hover:bg-[#d96316] text-white font-bold py-4 rounded-full shadow-md transition-all uppercase tracking-widest text-xs">
              {t("cafecito.newsletter.button")}
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default SocialCafecito;