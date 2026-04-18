import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { socialLinks } from "../../constants/socialLinks";

interface SocialLinksProps {
  containerClass?: string;
  linkClass?: string;
  iconSize?: number;
  iconClass?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  containerClass = "flex gap-3", 
  linkClass = "p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors",
  iconSize = 18,
  iconClass = "text-white"
}) => {
  const items = [
    { icon: FaFacebookF, href: socialLinks.facebook, label: "Facebook" },
    { icon: FaTwitter, href: socialLinks.twitter, label: "Twitter" },
    { icon: FaInstagram, href: socialLinks.instagram, label: "Instagram" },
    { icon: FaLinkedinIn, href: socialLinks.linkedin, label: "LinkedIn" },
  ];

  return (
    <div className={containerClass}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={linkClass}
          aria-label={item.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <item.icon size={iconSize} className={iconClass} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
