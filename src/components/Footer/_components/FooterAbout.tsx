import { useTranslation } from "react-i18next";
import SocialLinks from "../../Common/SocialLinks";
import { Link } from "react-router-dom";

const FooterAbout = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 w-full lg:w-1/4">
      <Link to="/" >
      <img
        src="/images/FooterImage.png"
        alt="FCHCC Logo"
        className="h-16 w-auto mx-auto lg:mx-0"
      /></Link>
      <p className="text-sm leading-5 text-[#FFFFFF]/50 max-w-xs mx-auto lg:mx-0">
        {t("footer.about_text")}
      </p>
      <SocialLinks 
        containerClass="flex justify-center lg:justify-start gap-3" 
        linkClass="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        iconSize={18}
      />
    </div>
  );
};

export default FooterAbout;
