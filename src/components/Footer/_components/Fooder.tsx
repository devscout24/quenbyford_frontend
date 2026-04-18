import { useTranslation } from "react-i18next";
import FooterAbout from "./FooterAbout";
import FooterColumn from "./FooterColumn";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  const { t } = useTranslation();

  const membershipLinks = [
    { label: t("footer.become_member"), href: "https://form.jotform.com/fchcc/new-membership-application" },
    { label: t("footer.renew_membership"), href: "https://form.jotform.com/fchcc/membership-renewal-application" },
    { label: t("footer.member_benefits"), href: "#" },
    { label: t("footer.members_portal"), href: "/member-welcome" },
  ];

  const programLinks = [
    { label: t("footer.radio_show"), href: "/partners/redioprogram" },
    { label: t("footer.podcast"), href: "/partners/podcastprogram" },
    { label: t("footer.discounts"), href: "/partners/discountprogram" },
    { label: t("footer.key_data"), href: "#" },
  ];

  const resourceLinks = [
    { label: t("footer.events_calendar"), href: "/events/calender" },
    { label: t("footer.jobs_board"), href: "/jobs" },
    { label: t("footer.news"), href: "/news" },
    { label: t("footer.privacy_policy"), href: "/privacy-policy" },
  ];

  return (
    <footer className="bg-[#0A2540] text-gray-300 py-12 font-sans">
      <div className="max-w-360 mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-0 px-4">
        {/* Column 1: Logo and About */}
        <FooterAbout />

        {/* Column 2: Membership */}
        <FooterColumn title={t("footer.membership")} links={membershipLinks} />

        {/* Column 3: Programs */}
        <FooterColumn title={t("footer.programs")} links={programLinks} />

        {/* Column 4: Resources */}
        <FooterColumn title={t("footer.resources")} links={resourceLinks} />
      </div>

      {/* Bottom Bar */}
      <FooterBottom />
    </footer>
  );
};

export default Footer;
