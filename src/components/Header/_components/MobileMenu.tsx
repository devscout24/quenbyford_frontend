import { User, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";

type NavLink = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: NavLink[];
}

const MobileMenu = ({ isOpen, setIsOpen, navLinks }: MobileMenuProps) => {
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileAccordion = (name: string) => {
    setMobileExpanded((prev) => (prev === name ? null : name));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 xl:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 h-screen w-[280px] sm:w-[340px] bg-white shadow-2xl z-50 xl:hidden flex flex-col overflow-hidden"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
              <img src="/images/1.png" alt="logo" className="h-8 w-auto mix-blend-multiply" />
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </Button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 overflow-y-auto w-full p-4">
              <ul className="flex flex-col w-full gap-2">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full">
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleMobileAccordion(link.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-slate-800 bg-transparent rounded-xl hover:bg-orange-50 hover:text-orange-600 transition"
                        >
                          {link.name}
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              mobileExpanded === link.name ? "rotate-180 text-orange-500" : "text-gray-400"
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileExpanded === link.name && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 mt-1 border-l-2 border-orange-200 ml-6 space-y-1"
                            >
                              {link.dropdown.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className="block px-4 py-3 text-base font-semibold text-slate-800 bg-transparent rounded-xl hover:bg-orange-50 hover:text-orange-600 transition"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Footer / CTA */}
            <div className="p-6 border-t border-gray-100 shrink-0 bg-gray-50 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Language</span>
                <LanguageToggle />
              </div>
              <Link to="/member-welcome" onClick={() => setIsOpen(false)}>
                <Button className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#e66a12] text-white h-14 rounded-full text-base font-bold shadow-[0_4px_20px_rgba(249,115,22,0.3)] transition-transform hover:scale-[1.02] active:scale-95">
                  <User size={18} />
                  <span>Member Portal</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
