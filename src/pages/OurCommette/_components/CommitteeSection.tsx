
import { UserPlus } from 'lucide-react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// 🔹 Single Committee Item
interface Committee {
  id: number;
  title: string;
  desc: string;
}
const CommitteeItem = ({ item, index }: { item: Committee; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="space-y-3 md:space-y-4 text-center"
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold text-[#2D89E5] mb-2">
        {item.title}
      </h3>
      <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl max-w-6xl mx-auto leading-relaxed text-center">
        {item.desc}
      </p>
    </motion.div>
  );
};

// 🔹 Volunteer Card
const VolunteerCard = ({ data }: { data: { title: string; buttonText: string } }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#E9F3FF] rounded-2xl sm:rounded-3xl p-5 sm:p-8 w-full max-w-[400px] flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 shadow-sm min-h-[180px] sm:min-h-[200px]"
    >

      <div className="flex justify-center text-[#2D89E5] mb-2">
        <UserPlus size={32} className="sm:w-10 sm:h-10" />
      </div>

      <h4 className="text-lg sm:text-xl font-bold text-black w-full">
        {data.title}
      </h4>

     <Link
  to="https://www.emailmeform.com/builder/emf/fchcc/committee-volunteer-application"
  className="w-full flex items-center justify-center bg-[#2D89E5] hover:bg-[#2574c4] text-white rounded-lg h-12 text-base font-semibold mt-2 transition-colors"
>
  {data.buttonText}
</Link>

    </motion.div>
  );
};

// 🔹 Main Section
const CommitteeSection = () => {
  const { t } = useTranslation();

  const committeeData = {
    header: {
      title: t("committee.header.title"),
      description: t("committee.header.desc"),
    },

    committees: [
      {
        id: 1,
        title: t("committee.list.membership.title"),
        desc: t("committee.list.membership.desc"),
      },
      {
        id: 2,
        title: t("committee.list.non_profit.title"),
        desc: t("committee.list.non_profit.desc"),
      },
      {
        id: 3,
        title: t("committee.list.events.title"),
        desc: t("committee.list.events.desc"),
      },
      {
        id: 4,
        title: t("committee.list.gala.title"),
        desc: t("committee.list.gala.desc"),
      },
    ],

    volunteer: {
      title: t("committee.volunteer.title"),
      buttonText: t("committee.volunteer.btn"),
    },
  };

  const { header, committees, volunteer } = committeeData;

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 font-sans overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16 space-y-3 md:space-y-5"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#2D89E5]">
          {header.title}
        </h2>
        <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed text-center px-2">
          {header.description}
        </p>
      </motion.div>

      {/* Committee List */}
      <div className="space-y-12 md:space-y-16 mb-16 md:mb-20 px-2 lg:px-12">
        {committees.map((item, index) => (
          <CommitteeItem key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Volunteer Card */}
      <div className="flex justify-center px-4">
        <VolunteerCard data={volunteer} />
      </div>

    </div>
  );
};

export default CommitteeSection;
