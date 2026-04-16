import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PodcastProgram = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-15 bg-white font-sans text-center">

      {/* Podcast Logo */}
      <div className="flex justify-center mb-10">
        <img
          src="/images/PasCat.png"
          alt="Poscast Logo"
          className="h-23 object-contain"
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-[50px] font-bold mb-8 tracking-tight">
        <span className="text-blue-500">{t("podcast.title_highlight")}</span> {t("podcast.title")}
      </h1>

      {/* Hosts Section */}
      <div className="max-w-[700px] mx-auto mb-14 text-[#000000] text-lg font-normal">
        <p className="">
          {t("podcast.hosts")}
        </p>
      </div>

      {/* Main Description Body */}
      <div className="max-w-[1440px] mx-auto space-y-8 text-[#000000] text-lg font-normal leading-relaxed text-left md:text-left">
        <p>
          {t("podcast.desc1")}
        </p>

        <p>
          {t("podcast.desc2")}
        </p>

        <p>
          {t("podcast.desc3")}
        </p>

        {/* Requirements Section */}
        <div className="">
          <p className="font-bold ">{t("podcast.guest_note")}</p>
          <ul className="inline-block text-left list-disc pl-6 space-y-2">
            <li>
              {t("podcast.req1")}
            </li>
            <li>
              {t("podcast.req2")}
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-16">
        <Link to="https://www.emailmeform.com/builder/emf/fchcc/podcast-show-guest-submission" className="bg-[#F2741F] hover:bg-[#d96316] text-white font-bold py-3.5 px-12 rounded-xl text-lg transition-all shadow-md active:scale-95">
          {t("podcast.button")}
        </Link>
      </div>

    </div>
  );
};

export default PodcastProgram;
