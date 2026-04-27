import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// --- Types ---
interface PricingFeatureProps {
  text: string;
}

interface MembershipTier {
  id: string;
  name: string;
  price: number;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

// --- Animation Variants ---
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// --- Subcomponents ---
const PricingFeature = ({ text }: PricingFeatureProps) => (
  <li className="flex items-start gap-3 text-sm text-gray-600">
    <CheckCircle2 size={16} className="text-blue-400 mt-0.5 shrink-0" />
    <span>{text}</span>
  </li>
);

const TierCard = ({
  tier,
  active,
  onClick,
}: {
  tier: MembershipTier;
  active: boolean;
  onClick: () => void;
}) => {
  const { t } = useTranslation();
  const { name, price, features, highlighted, badge } = tier;

  return (
      <motion.div
      variants={cardAnim}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className={`cursor-pointer relative bg-white p-6 rounded-xl flex flex-col 
  w-full h-auto gap-6
  transition-all duration-300
  ${
    active
      ? 'border-2 border-[#FF781F] shadow-xl scale-105'
      : highlighted
      ? 'border-2 border-[#FF781F] shadow-lg'
      : 'border border-gray-100 shadow-sm'
  }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 -right-3 bg-white border border-[#FF781F] font-medium text-[#FF781F] text-[13px]  px-3 py-1 rounded-sm uppercase">
          {badge}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col grow overflow-hidden">
        <h3 className="text-2xl font-medium text-[#101828] mb-3">{name}</h3>

        <div className="text-3xl font-medium text-blue-600 mb-4">
          ${price.toLocaleString()}
        </div>

        <ul className="space-y-3 mb-4  text-[13px] text-[#4A5565] grow overflow-hidden">
          {features.map((feature) => (
            <PricingFeature key={feature} text={feature} />
          ))}
        </ul>
      </div>

      {/* Button */}
      <Link to="https://form.jotform.com/fchcc/membership-renewal-application"
        className={`w-full h-11 rounded-lg font-bold flex items-center justify-center gap-2 text-white mt-auto transition
          ${
            active || highlighted
              ? 'bg-[#FF781F] hover:bg-[#e66a1a]'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
      >
        {t('join_us.membership_levels.join_now')} <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
  
};

// --- Main Component ---
const MembershipLevels = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState('1');

  const MEMBERSHIP_TIERS: MembershipTier[] = [
    {
      id: '1',
      name: t('join_us.membership_levels.tiers.strategic_partner'),
      price: 10000,
      features: [
        t('join_us.membership_levels.features.unlimited_associates'),
        t('join_us.membership_levels.features.leadership_benefits'),
        t('join_us.membership_levels.features.premier_networking'),
        t('join_us.membership_levels.features.max_visibility')
      ],
      highlighted: true,
      badge: 'Premier',
    },
    {
      id: '2',
      name: t('join_us.membership_levels.tiers.leadership'),
      price: 5000,
      features: [
        t('join_us.membership_levels.features.unlimited_associates'),
        t('join_us.membership_levels.features.enhanced_benefits'),
        t('join_us.membership_levels.features.priority_placement'),
        t('join_us.membership_levels.features.leadership_events')
      ],
    },
    {
      id: '3',
      name: t('join_us.membership_levels.tiers.large_corp'),
      price: 2500,
      features: [
        t('join_us.membership_levels.features.unlimited_associates'),
        t('join_us.membership_levels.features.corporate_benefits'),
        t('join_us.membership_levels.features.networking_access'),
        t('join_us.membership_levels.features.event_sponsorship')
      ],
    },
    {
      id: '4',
      name: t('join_us.membership_levels.tiers.small_biz'),
      price: 500,
      features: [
        t('join_us.membership_levels.features.associates_4'),
        t('join_us.membership_levels.features.growth_tools'),
        t('join_us.membership_levels.features.networking_events'),
        t('join_us.membership_levels.features.marketing_support')
      ],
    },
    {
      id: '5',
      name: t('join_us.membership_levels.tiers.small_biz'),
      price: 500,
      features: [
        t('join_us.membership_levels.features.associates_4'),
        t('join_us.membership_levels.features.growth_tools'),
        t('join_us.membership_levels.features.networking_events'),
        t('join_us.membership_levels.features.marketing_support')
      ],
    },
    {
      id: '6',
      name: t('join_us.membership_levels.tiers.small_biz'),
      price: 500,
      features: [
        t('join_us.membership_levels.features.associates_4'),
        t('join_us.membership_levels.features.growth_tools'),
        t('join_us.membership_levels.features.networking_events'),
        t('join_us.membership_levels.features.marketing_support')
      ],
    },
    {
      id: '7',
      name: t('join_us.membership_levels.tiers.small_biz'),
      price: 500,
      features: [
        t('join_us.membership_levels.features.associates_4'),
        t('join_us.membership_levels.features.growth_tools'),
        t('join_us.membership_levels.features.networking_events'),
        t('join_us.membership_levels.features.marketing_support')
      ],
    },
    {
      id: '8',
      name: t('join_us.membership_levels.tiers.small_biz'),
      price: 500,
      features: [
        t('join_us.membership_levels.features.associates_4'),
        t('join_us.membership_levels.features.growth_tools'),
        t('join_us.membership_levels.features.networking_events'),
        t('join_us.membership_levels.features.marketing_support')
      ],
    },
  ];

  return (
    <section id="membership-levels" className="py-20 bg-[#F973161A]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF781F] text-white w-60 h-9.5 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-7.5">
            <Sparkles size={14} />
            {t('join_us.membership_levels.badge')}
          </div>

          <h2 className="text-[40px] font-bold text-black mb-4">
            {t('join_us.membership_levels.title')}
          </h2>

          <p className="text-[#4A5565] max-w-4xl text-lg">
            {t('join_us.membership_levels.description')}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {MEMBERSHIP_TIERS.map((tier) => (
            <TierCard
              key={tier.id}
              tier={tier}
              active={activeId === tier.id}
              onClick={() => setActiveId(tier.id)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default MembershipLevels;