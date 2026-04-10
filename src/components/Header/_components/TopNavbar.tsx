import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const TopNavbar = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-360 w-full px-6 md:px-16 py-4 text-sm md:text-base">
        
        {/* Left Side */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
          <span>Non Profit Organisation</span>

          <div className="flex items-center gap-2 md:border-l md:border-white/30 md:pl-6">
            <Phone size={14} />
            <span>+123456789</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>example@gmail.com</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:opacity-80 transition">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <FaTwitter size={16} />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <FaLinkedinIn size={16} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopNavbar;