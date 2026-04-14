import { Button } from "@/components/ui/button";
import { UserPlus } from 'lucide-react';
import { motion } from "framer-motion";

// ✅ Dynamic Data
const committeeData = {
  header: {
    title: "Our Committee",
    description:
      "Committees are led by the Executive Committee and we are always looking for volunteers. Learn more about each committee below! If any of the following committees sparks your interest, let us know and we will contact you after we receive your information.",
  },

  committees: [
    {
      id: 1,
      title: "New Membership",
      desc: "The Membership Retention committee encourages active membership of all Members, not included in the payment of dues but participation in the activities and affairs of the FCHCC. The committee shall monitor the payment of members’ dues and make recommendations to the Board regarding action to be taken for nonpayment.",
    },
    {
      id: 2,
      title: "Non-Profit",
      desc: "The Non-Profit committee encourages active membership of Non-Profit corporations, not only in the payment of dues but participation in the activities and affairs of the FCHCC. The Non-Profit committee shall establish relationships with Non-Profits that will further the vision and mission of the FCHCC.",
    },
    {
      id: 3,
      title: "Professional Events",
      desc: "Plans and organizes networking events, workshops, and professional development programs.",
    },
    {
      id: 4,
      title: "Hispanic Heritage Gala Event",
      desc: "Responsible for planning and executing the annual gala celebration.",
    },
  ],

  volunteer: {
    title: "Become a Volunteer",
    buttonText: "Register",
  },
};

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
      <h3 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-[#2D89E5] mb-2">
        {item.title}
      </h3>
      <p className="text-black text-base md:text-lg lg:text-xl max-w-6xl mx-auto leading-relaxed text-center">
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
      className="bg-[#E9F3FF] rounded-3xl p-6 sm:p-8 w-full max-w-[400px] flex flex-col items-center justify-center text-center space-y-4 shadow-sm min-h-[200px]"
    >

      <div className="flex justify-center text-[#2D89E5] mb-2">
        <UserPlus size={40} />
      </div>

      <h4 className="text-lg sm:text-xl font-bold text-black w-full">
        {data.title}
      </h4>

      <Button className="w-full bg-[#2D89E5] hover:bg-[#2574c4] text-white rounded-lg h-12 text-base font-semibold mt-2 transition-colors">
        {data.buttonText}
      </Button>

    </motion.div>
  );
};

// 🔹 Main Section
const CommitteeSection = () => {
  const { header, committees, volunteer } = committeeData;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 font-sans overflow-hidden">

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16 space-y-3 md:space-y-5"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#2D89E5]">
          {header.title}
        </h2>
        <p className="text-black text-base md:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed text-center px-2">
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