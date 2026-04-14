import { Search, User,  Menu, X } from "lucide-react";
import { Button } from "../../ui/button";
import TopNavbar from "./TopNavbar";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "ES">("EN");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "EN" ? "ES" : "EN");
  };

  const navLinks = [
    { name: "Home", href: "/" },

    {
      name: "Members",
      href: "/members",
      dropdown: [
        { name: "Members Information", href: "/members" },
        { name: "Strategic Partners", href: "/partners" },
        { name: "FCHCC Member parking lot(Coming soon)", href: "#" },
        
      ],
    },

    {
      name: "Community",
      href: "/community",
      dropdown: [
        { name: "Forum", href: "#" },
        { name: "Groups", href: "#" },
      ],
    },

    {
      name: "Events",
      href: "/events",
      dropdown: [
        { name: "Hola Emprende Conference& Business Expo 2025", href: "#" },
        { name: "2025 ATD ScholarshipLuncheon", href: "/events/scholarship" },
        { name: "Monthly Calendar", href: "/events/calender" },
      ],
    },

    { name: "Job Board", href: "/jobs" },
      {
      name: "News",
      href: "/news",
      dropdown: [
        { name: "Resources", href: "/news/resources" },
       
      ],
    },
    { name: "Contact", href: "/contact" },
     {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "What We Are", href: "/about" },
        { name: "Our Committees", href: "/about/committee" },
        { name: "Our Program", href: "/about/program" },
        { name: "FCHCC Member parking lot(Coming soon)", href: "#" },
        
      ],
    },
  ];

  return (
    <>
      <TopNavbar />

      <nav className="w-full sticky top-0 z-50 shadow-lg bg-[#B9DCF8]">
        <div className="max-w-[1335px] mx-auto px-6 flex items-center justify-between py-6">

          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <img src="/images/1.png" alt="logo" className="w-40 h-12" />
          </div>

          {/* Nav Links */}
          <ul className="hidden xl:flex items-center px-4 bg-white py-4 rounded-full">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => setOpenMenu(link.name)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  to={link.href}
                  className="px-5 py-3 text-sm font-medium rounded-md transition-all duration-200 hover:text-orange-500"
                >
                  {link.name}
                </Link>

                {/* 🔽 Dropdown */}
                {link.dropdown && openMenu === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg py-2 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Language Toggle */}
            <Button 
              variant="outline"
              className="px-3 border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600 font-bold rounded-md bg-white transition-colors"
              onClick={toggleLanguage}
            >
              {language}
            </Button>

            <Button variant="ghost" className="p-2 hover:bg-white/50 rounded-md">
              <Search size={22} className="text-slate-800" />
            </Button>

            {/* Member Portal */}
            <Button className="hidden sm:flex group items-center gap-2 bg-[#F97316] text-white w-[140px] md:w-[190px] h-10 md:h-12 rounded-full text-sm font-bold hover:opacity-95 active:scale-95 transition-all shadow-md relative overflow-hidden">
              <User size={16} className="relative z-10 hidden md:inline" />
              <span className="relative z-10">
                Member Portal
                <span className="absolute left-0 bottom-0.5 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Button>

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