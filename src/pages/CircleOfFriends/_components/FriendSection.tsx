import { motion } from 'framer-motion';

interface FriendSectionProps {
  year: string;
  donors: string[];
  isOrange?: boolean;
  index: number;
}

const FriendSection: React.FC<FriendSectionProps> = ({ year, donors, isOrange, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="flex flex-col items-center p-8 bg-[#F8FAFC] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h3 className={`text-2xl font-bold mb-6 ${isOrange ? 'text-[#F97316]' : 'text-[#3B82F6]'}`}>
        {year}
      </h3>
      <motion.ul className="flex flex-col items-center gap-2 text-center">
        {donors.map((donor, idx) => (
          <motion.li 
            variants={itemVariants}
            key={idx} 
            className="text-[#475569] text-xl  font-normal hover:text-[#000000] transition-colors duration-200"
          >
            {donor}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};


export default FriendSection;
