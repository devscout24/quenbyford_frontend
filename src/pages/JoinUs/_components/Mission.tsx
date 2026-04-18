import { Users, TrendingUp, Target, CheckCircle, Heart, type LucideIcon } from 'lucide-react';
import { motion, type Variants, } from 'framer-motion';


// --- Types ---
interface MissionItem {
  icon: LucideIcon;
  text: string;
}

// --- Data ---
const MISSION_DATA: MissionItem[] = [
  {
    icon: Users,
    text: "Create an interactive forum for everyone interested in a vibrant, multicultural economy",
  },
  {
    icon: TrendingUp,
    text: "Promote business opportunities through social interaction and education",
  },
  {
    icon: Target,
    text: "Positively impact and contribute to the regional economy",
  },
  {
    icon: CheckCircle,
    text: "Encourage and promote successful business practices within the Hispanic community",
  },
  {
    icon: Heart,
    text: "Foster unity among all Hispanics in the business community and beyond",
  },
];

// --- Animation Variants ---
const EASE: 'easeOut' = "easeOut"; // ✅ typed as Easing, not string

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE, // ✅ resolves the type error
    },
  },
};

// --- Mission Card ---
const MissionCard = ({ item }: { item: MissionItem }) => {
  const Icon = item.icon;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow min-h-37 flex flex-col"
    >
      <Icon className="text-[#FF781F] mb-4" size={32} />
      <p className="text-[#364153] leading-relaxed text-[14px]">{item.text}</p>
    </motion.div>
  );
};

// --- Main Component ---
const MissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-360 mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] font-bold text-black mb-4">Our Mission</h2>
          <p className="text-[#4A5565] text-lg">
            Our members come from all sectors of the community and rely on the FCHCC to:
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {MISSION_DATA.map((item) => (
            <MissionCard key={item.text} item={item} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default MissionSection;