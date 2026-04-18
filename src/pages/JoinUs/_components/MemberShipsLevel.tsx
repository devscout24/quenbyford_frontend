import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

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

// --- Data ---
const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: '1',
    name: 'Strategic Partner Trustee',
    price: 10000,
    features: ['Unlimited associates', 'All leadership benefits', 'Premier networking', 'Maximum visibility'],
    highlighted: true,
    badge: 'Premier',
  },
  {
    id: '2',
    name: 'Leadership Trustee',
    price: 5000,
    features: ['Unlimited associates', 'Enhanced benefits', 'Priority placement', 'Leadership events'],
  },
  {
    id: '3',
    name: 'Large Corporation 2',
    price: 2500,
    features: ['Unlimited associates', 'Corporate benefits', 'Networking access', 'Event sponsorship'],
  },
  {
    id: '4',
    name: 'Small Business 2',
    price: 500,
    features: ['4 associates', 'Business growth tools', 'Networking events', 'Marketing support'],
  },
  {
    id: '5',
    name: 'Small Business 2',
    price: 500,
    features: ['4 associates', 'Business growth tools', 'Networking events', 'Marketing support'],
  },
  {
    id: '6',
    name: 'Small Business 2',
    price: 500,
    features: ['4 associates', 'Business growth tools', 'Networking events', 'Marketing support'],
  },
  {
    id: '7',
    name: 'Small Business 2',
    price: 500,
    features: ['4 associates', 'Business growth tools', 'Networking events', 'Marketing support'],
  },
  {
    id: '8',
    name: 'Small Business 2',
    price: 500,
    features: ['4 associates', 'Business growth tools', 'Networking events', 'Marketing support'],
  },
  {
    id: '7',
    name: 'Small Business 2',
    price: 500,
    features: ['4 associates', 'Business growth tools', 'Networking events', 'Marketing support'],
  },
];

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
      <button
        className={`w-full h-11 rounded-lg font-bold flex items-center justify-center gap-2 text-white mt-auto transition
          ${
            active || highlighted
              ? 'bg-[#FF781F] hover:bg-[#e66a1a]'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
      >
        Join Now <ArrowRight size={18} />
      </button>
    </motion.div>
  );
  
};

// --- Main Component ---
const MembershipLevels = () => {
  const [activeId, setActiveId] = useState('strategic-partner');

  return (
    <section className="py-20 bg-[#F973161A]">
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
            Membership Packages
          </div>

          <h2 className="text-[40px] font-bold text-black mb-4">
            Membership Levels + Fees
          </h2>

          <p className="text-[#4A5565] max-w-4xl text-lg">
            Choose the membership tier that best fits your organization and goals
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