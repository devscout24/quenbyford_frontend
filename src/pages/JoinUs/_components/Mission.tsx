import { Users, TrendingUp, Target, CheckCircle, Heart, type LucideIcon } from 'lucide-react';
import { motion, type Variants, } from 'framer-motion';
import { useTranslation } from 'react-i18next';


// --- Types ---
interface MissionItem {
  icon: LucideIcon;
  translationKey: string;
}

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
  const { t } = useTranslation();
  const Icon = item.icon;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow min-h-37 flex flex-col"
    >
      <Icon className="text-[#FF781F] mb-4" size={32} />
      <p className="text-[#364153] leading-relaxed text-[14px]">{t(item.translationKey)}</p>
    </motion.div>
  );
};

// --- Main Component ---
const MissionSection = () => {
  const { t } = useTranslation();

  const MISSION_DATA: MissionItem[] = [
    {
      icon: Users,
      translationKey: "join_us.mission.item1",
    },
    {
      icon: TrendingUp,
      translationKey: "join_us.mission.item2",
    },
    {
      icon: Target,
      translationKey: "join_us.mission.item3",
    },
    {
      icon: CheckCircle,
      translationKey: "join_us.mission.item4",
    },
    {
      icon: Heart,
      translationKey: "join_us.mission.item5",
    },
  ];

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
          <h2 className="text-[40px] font-bold text-black mb-4">{t('join_us.mission.title')}</h2>
          <p className="text-[#4A5565] text-lg">
            {t('join_us.mission.description')}
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
            <MissionCard key={item.translationKey} item={item} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default MissionSection;