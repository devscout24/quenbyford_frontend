import { Ruler, Palette, Maximize, Layers, Crown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

interface PricingCardProps {
  badge: string;
  title: string;
  description: string;
  dimensions: string;
  colorOpts: string;
  price: string | number;
  isWide?: boolean;
  badgeColor?: string;
  icon?: React.ReactNode;
  text?: string;
}

const SinglePricingCard = ({
  badge,
  title,
  description,
  dimensions,
  colorOpts,
  price,
  isWide = false,
  badgeColor = "bg-[#F97316]/20 text-[#F97316]",
  icon,
  text = "PNG, JPG (300DPI)"
}: PricingCardProps) => {
  const { t } = useTranslation();

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 flex flex-col ${isWide ? 'md:flex-row gap-6 md:gap-8 md:col-span-2' : ''} justify-between h-full`}>
      <div className={isWide ? 'w-full md:w-1/2' : 'w-full'}>
        <span className='flex justify-between items-center mb-4'>
          <span className={`inline-block px-2 py-1 rounded text-[12px] font-black uppercase tracking-widest ${badgeColor}`}>
            {badge}
          </span>
          <span>
            {icon || (
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M9.7 16C8.1 15.9167 6.75 15.3 5.65 14.15C4.55 13 4 11.6167 4 10C4 8.33333 4.58333 6.91667 5.75 5.75C6.91667 4.58333 8.33333 4 10 4C11.6167 4 13 4.55 14.15 5.65C15.3 6.75 15.9167 8.1 16 9.7L13.9 9.075C13.6833 8.175 13.2167 7.4375 12.5 6.8625C11.7833 6.2875 10.95 6 10 6C8.9 6 7.95833 6.39167 7.175 7.175C6.39167 7.95833 6 8.9 6 10C6 10.95 6.2875 11.7833 6.8625 12.5C7.4375 13.2167 8.175 13.6833 9.075 13.9L9.7 16ZM10.9 19.95C10.75 19.9833 10.6 20 10.45 20C10.3 20 10.15 20 10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 10.15 20 10.3 20 10.45C20 10.6 19.9833 10.75 19.95 10.9L18 10.3V10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.1217 4.325 15.675C5.875 17.225 7.76667 18 10 18C10.05 18 10.1 18 10.15 18C10.2 18 10.25 18 10.3 18L10.9 19.95ZM18.525 20.5L14.25 16.225L13 20L10 10L20 13L16.225 14.25L20.5 18.525L18.525 20.5Z" fill="#475569" />
              </svg>
            )}
          </span>
        </span>

        <h3 className="text-2xl font-black text-slate-900 uppercase mb-2 leading-tight">
          {title}
        </h3>

        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
          {description}
        </p>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
            <Ruler size={14} className="text-blue-500" />
            <span>{dimensions}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-xs font-medium">
            <Palette size={14} className="text-blue-500" />
            <span>{colorOpts}</span>
          </div>
        </div>

        <div className="text-3xl font-black text-slate-900">
          ${price}
        </div>
      </div>

      {/* Right Side Detail Box (For Wide/Standard Slots) */}
      {isWide && (
        <div className="w-full md:w-1/2 bg-slate-50 rounded-xl p-4 sm:p-6 flex flex-col justify-center gap-4 sm:gap-6 border border-slate-100 mt-4 md:mt-0">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Maximize size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{t("scholarship.pricing.dimensions")}</p>
              <p className="text-sm font-bold text-slate-800">{dimensions}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Layers size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{t("scholarship.pricing.formats")}</p>
              <p className="text-sm font-bold text-slate-800 uppercase">{text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PricingCardList = () => {
  const { t } = useTranslation();

  const pricingCards = [
    {
      title: t("scholarship.luncheon_pricing.micro.title"),
      price: "$150",
      description: [
        t("scholarship.luncheon_pricing.micro.desc1"),
        t("scholarship.luncheon_pricing.micro.desc2"),
      ],
      buttonText: t("scholarship.prev.register"),
      bgColor: "bg-[#F97316]",
    },
    {
      title: t("scholarship.luncheon_pricing.standard.title"),
      price: "$300",
      description: [
        t("scholarship.luncheon_pricing.standard.desc1"),
        t("scholarship.luncheon_pricing.standard.desc2"),
      ],
      buttonText: t("scholarship.prev.register"),
      bgColor: "bg-[#1E88E5]",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center py-12 px-4 max-w-[1440px] mx-auto">
      {pricingCards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="w-full max-w-sm"
        >
          <div className="bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            {/* Header */}
            <div className={`${card.bgColor} p-8 text-center text-white h-48 flex flex-col justify-center items-center`}>
              <h3 className="text-3xl font-bold mb-2 uppercase tracking-wide">
                {card.title}
              </h3>
              <div className="text-5xl font-extrabold">{card.price}</div>
            </div>

            <div className="p-8 bg-white min-h-[300px] flex flex-col">
              <ul className="space-y-6 mb-10 flex-grow">
                {card.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#F97316] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg leading-relaxed text-left">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-5 rounded-full text-xl font-bold uppercase transition-transform active:scale-95 ${card.bgColor} text-white hover:brightness-110 shadow-lg cursor-pointer`}
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function PricingSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50 py-16 px-4">
      {/* Header Button */}
      <div className="flex justify-center mb-12">
        <Link to="/scholarshipwinners"
          className="bg-[#1E88E5] px-6 sm:px-10 py-4 sm:py-6 text-xl sm:text-2xl md:text-[32px] font-medium text-white rounded-2xl text-center shadow-lg hover:bg-[#1976D2] transition-colors">
          {t("scholarship.pricing.view_2024")}
        </Link>
      </div>

      {/* New Localized Pricing Cards */}
      <PricingCardList />

      {/* Grid Layout for Other Slots */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {/* Micro Slot */}
        <SinglePricingCard
          badge={t("scholarship.luncheon_pricing.micro.title")}
          title="1/4 Page Portrait"
          description="Compact impact for tactical messaging."
          dimensions='2-3/4" x 4-1/4"'
          colorOpts="Full Color / B&W"
          price="100"
        />

        {/* Standard Slot */}
        <SinglePricingCard
          badge={t("scholarship.luncheon_pricing.standard.title")}
          badgeColor="bg-blue-100 text-blue-600"
          title="1/2 Page Landscape"
          description="Wide format visibility for expansive brand storytelling."
          dimensions='5-1/2" x 4-1/4"'
          colorOpts="Full Color / B&W"
          price="200"
          isWide={true}
          text="PNG, JPG (300DPI) Formats"
        />

        {/* Bottom Premium Row */}
        <div className="grid grid-cols-1 md:col-span-3">
          <SinglePricingCard
            badge="Premium Placement"
            badgeColor="bg-purple-100 text-purple-600"
            title="1/2 Page Landscape"
            description="Wide format visibility for expansive brand storytelling."
            dimensions='5-1/2" x 4-1/4"'
            colorOpts="Full Color / B&W"
            price="200"
            isWide={true}
            icon={<Crown className="w-[22px] h-[22px] text-purple-600" />}
          />
        </div>
      </div>
    </div>
  );
}
