import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0A2540] text-gray-300 py-12 font-sans">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-0 px-4">
        {/* Column 1: Logo and About */}
        <div className="space-y-6 w-full lg:w-1/4">
          <img
            src="/images/1.png"
            alt="FCHCC Logo"
            className="h-16 w-auto mx-auto lg:mx-0"
          />
          <p className="text-sm leading-5 text-[#FFFFFF]/50 max-w-xs mx-auto lg:mx-0">
            {t("footer.about_text")}
          </p>
          <div className="flex justify-center lg:justify-start gap-3">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Icon size={18} className="text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Membership */}
        <div className="w-full lg:w-1/5">
          <h3 className="text-[#FFFFFF]/90 font-bold mb-6 tracking-wider uppercase text-sm leading-5 tracking-tighter-0.7px text-center lg:text-left">{t("footer.membership")}</h3>
          <ul className="space-y-4 text-sm leading-5 text-[#FFFFFF]/50 text-center lg:text-left">
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.become_member")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.renew_membership")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.member_benefits")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.members_portal")}</a></li>
          </ul>
        </div>

        {/* Column 3: Programs */}
        <div className="w-full lg:w-1/5">
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm text-center lg:text-left">{t("footer.programs")}</h3>
          <ul className="space-y-4 text-sm leading-5 text-[#FFFFFF]/50 text-center lg:text-left">
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.radio_show")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.podcast")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.discounts")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.key_data")}</a></li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div className="w-full lg:w-1/5">
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm text-center lg:text-left">{t("footer.resources")}</h3>
          <ul className="space-y-4 text-sm leading-5 text-[#FFFFFF]/50 text-center lg:text-left">
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.events_calendar")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.jobs_board")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.news")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.privacy_policy")}</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 px-4">
        <p className="text-center md:text-left">{t("footer.copyright")}</p>
        <div className="flex gap-6 mt-4 md:mt-0 justify-center md:justify-end">
          <a href="#" className="hover:text-white transition-colors">{t("footer.privacy_policy")}</a>
          <a href="#" className="hover:text-white transition-colors">{t("footer.terms_service")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
