import React from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="w-full lg:w-1/5">
      <h3 className="text-[#FFFFFF]/90 font-bold mb-6 tracking-wider uppercase text-sm leading-5 text-center lg:text-left">
        {title}
      </h3>
      <ul className="space-y-4 text-sm leading-5 text-[#FFFFFF]/50 text-center lg:text-left">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
