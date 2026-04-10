import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-gray-300 py-12  font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0 px-4">
        
        {/* Column 1: Logo and About */}
        <div className="space-y-6 w-115">
          <img 
            src="/path-to-your-logo.png" 
            alt="FCHCC Logo" 
            className="h-16 w-auto"
          />
          <p className="text-sm leading-5 text-[#FFFFFF]/50  max-w-xs">
            First Coast Hispanic Chamber of Commerce - Your Premier Hispanic Chamber. 
            Strengthening the Hispanic business community since its founding.
          </p>
          <div className="flex gap-3">
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
        <div className="w-52 ">
          <h3 className="text-[#FFFFFF]/90 font-bold mb-6 tracking-wider uppercase text-sm leading-5 tracking-tighter-0.7px">Membership</h3>
          <ul className="space-y-4 text-sm leading-5 text-[#FFFFFF]/50">
            <li><a href="#" className="hover:text-white transition-colors">Become a Member</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Renew Membership</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Member Benefits</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Members Portal</a></li>
          </ul>
        </div>

        {/* Column 3: Programs */}
         <div className="w-52 ">
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Programs</h3>
          <ul className="space-y-4 text-sm leading-5 text-[#FFFFFF]/50">
            <li><a href="#" className="hover:text-white transition-colors">Radio Show</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Podcast</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Discounts Program</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Key Data for Hispanics</a></li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div>
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Resources</h3>
          <ul className="space-y-4 text-sm leading-5 text-[#FFFFFF]/50">
            <li><a href="#" className="hover:text-white transition-colors">Events Calendar</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Jobs Board</a></li>
            <li><a href="#" className="hover:text-white transition-colors">News</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 First Coast Hispanic Chamber of Commerce. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;