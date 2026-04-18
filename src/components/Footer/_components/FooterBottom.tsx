import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 px-4">
      <p className="text-center md:text-left">{t("footer.copyright")}</p>
      <div className="flex gap-6 mt-4 md:mt-0 justify-center md:justify-end">
        <Link to="/privacy-policy" className="hover:text-white transition-colors">
          {t("footer.privacy_policy")}
        </Link>
        <a href="#" className="hover:text-white transition-colors">
          {t("footer.terms_service")}
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
