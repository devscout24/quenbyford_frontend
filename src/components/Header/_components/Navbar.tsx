import { Search, User, Menu, X } from "lucide-react";
import { Button } from "../../ui/button";
import TopNavbar from "./TopNavbar";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t("navbar.home"), href: "/" },

    {
      name: t("navbar.members"),
      href: "/members",
      dropdown: [
        { name: t("navbar.members_info"), href: "/members" },
        { name: t("navbar.strategic_partners"), href: "/partners" },
        { name: t("navbar.member_parking"), href: "/comingsoon" },
      ],
    },

    { name: t("navbar.community"), href: "/community" },

    {
      name: t("navbar.events"),
      href: "/events",
      dropdown: [
        { name: t("navbar.hola_emprende"), href: "/events" },
        { name: t("navbar.atd_scholarship"), href: "/events/scholarship" },
        { name: t("navbar.monthly_calendar"), href: "/events/calender" },
      ],
    },

    { name: t("navbar.job_board"), href: "/jobs" },
    {
      name: t("navbar.news"),
      href: "/news",
      dropdown: [
        { name: t("navbar.resources"), href: "/news/resources" },
      ],
    },
    { name: t("media.title"), href: "/media" },
    { name: t("navbar.contact"), href: "/contact" },
    {
      name: t("navbar.about"),
      href: "/about",
      dropdown: [
        { name: t("navbar.our_committees"), href: "/about/committee" },
        { name:"Donate ATD Scholarship", href: "/about/donatescholarship" },
        { name: t("navbar.member_parking"), href: "/comingsoon" },
        { name: t("navbar.circle_of_friends"), href: "/about/circle-of-friends" },
      ],
    },
  ];

  return (
    <>
      <TopNavbar />

      <nav className="w-full sticky top-0 z-50 shadow-lg bg-[#B9DCF8]">
        <div className="max-w-360 mx-auto px-2 flex items-center justify-between py-6 gap-6">

          {/* Logo */}
          <div className="flex-1 flex items-center">
            <Link to="/">
              <img src="/images/1.png" alt="Quenby Ford Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Nav Links */}
          <ul className="hidden lg:flex w-238  items-center justify-center bg-white py-3 rounded-full border border-gray-100/50 shadow-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || link.dropdown?.some(item => location.pathname === item.href);
              
              return (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => setOpenMenu(link.name)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  to={link.href}
                  className={`px-3.5 py-3 text-sm font-medium rounded-md transition-all duration-200 hover:text-orange-500 whitespace-nowrap block ${isActive ? "border-b-2 border-orange-500 text-orange-500 pb-1" : ""
                    }`}
                >
                  {link.name}
                </Link>

                {/* 🔽 Dropdown */}
                {link.dropdown && openMenu === link.name && (
                  <div className="absolute top-full -mt-1 w-52 bg-white rounded-xl shadow-lg py-2 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-2 py-2 text-sm hover:bg-gray-100 transition text-left"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              );
            })}
          </ul>

          {/* Right Side */}
          <div className="flex-1 flex items-center justify-end shrink-0 gap-2 ">

            {/* Language Toggle */}
            <LanguageToggle />

            <Button variant="ghost" className="p-2 hover:bg-white/50 rounded-md">
              <Search size={22} className="text-slate-800" />
            </Button>

            {/* Member Portal */}
            <Link
              to="/member-welcome"
              className="hidden sm:flex items-center justify-center gap-1 bg-[#F97316] text-white w-[200px] px-2  h-10 md:h-12 rounded-full text-[16px] font-medium hover:opacity-95 active:scale-95 transition-all shadow-md relative overflow-hidden"
            >
              <User size={16} className="relative z-10 hidden md:inline" />

              <span className="relative z-10 flex items-center gap-1">
                {t("navbar.member_portal")}
                <span className="absolute left-0 bottom-0.5 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              className="xl:hidden p-2 text-slate-800 hover:bg-white/50 rounded-md ml-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </Button>

          </div>
        </div>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          navLinks={navLinks}
        />
      </nav>
    </>
  );
};

export default Header;