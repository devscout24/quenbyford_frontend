

export const winnersData = [
  {
    id: 1,
    name: "Chantelle Merritt",
    university: "Florida State University",
    degree: "Bachelors in Bio Engineering",
    imageUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "James Carter",
    university: "Harvard University",
    degree: "Computer Science",
    imageUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Sophia Williams",
    university: "Stanford University",
    degree: "Business Administration",
    imageUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Liam Johnson",
    university: "MIT",
    degree: "Software Engineering",
    imageUrl: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Olivia Brown",
    university: "Yale University",
    degree: "Law",
    imageUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Noah Davis",
    university: "Columbia University",
    degree: "Mechanical Engineering",
    imageUrl: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Emma Wilson",
    university: "University of Chicago",
    degree: "Economics",
    imageUrl: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "William Martinez",
    university: "Princeton University",
    degree: "Physics",
    imageUrl: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Ava Anderson",
    university: "Duke University",
    degree: "Biology",
    imageUrl: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Benjamin Thomas",
    university: "University of Michigan",
    degree: "Data Science",
    imageUrl: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 11,
    name: "Mia Taylor",
    university: "UCLA",
    degree: "Psychology",
    imageUrl: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 12,
    name: "Lucas Moore",
    university: "NYU",
    degree: "Marketing",
    imageUrl: "https://i.pravatar.cc/150?img=12",
  },
];

import { motion } from "framer-motion";

// ================= Winner Card =================
interface WinnerCardProps {
  name: string;
  university: string;
  degree: string;
  imageUrl: string;
  index: number;
}

const WinnerCard = ({ name, university, degree, imageUrl, index }: WinnerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 100, damping: 15 }}
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0px 15px 30px rgba(29, 132, 228, 0.15)" }}
      className="bg-white border-[1.5px] w-[300px] h-[290px] border-blue-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm transition-colors"
    >

      {/* Image */}
      <div className="w-27 h-27 rounded-full border-2 border-[#1E88E5] mb-4">
        <img
          src={imageUrl || "https://via.placeholder.com/150"}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <h3 className="text-[#1D84E4] font-bold text-xl  mb-3">
        {name}
      </h3>

      <p className="text-black/80 text-[12px] font-normal  tracking-wide mb-1">
        {university}
      </p>

      <p className="text-black/80 text-[12px] font-normal">
        {degree}
      </p>
    </motion.div>
  );
};

// ================= Main Section =================
export default function ScholarshipSectionWinners() {
  const winners = winnersData;

  return (
    <section className="max-w-7xl mx-auto  py-15 bg-white font-sans">

      {/* Top Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 mb-15"
      >
        <h2 className="text-2xl md:text-[40px] font-normal text-black ">
          FCHCC celebrated the achievements of the 2024 ATD winners at this year’s ATD Scholarship Luncheon!
        </h2>

        <p className="text-black text-[32px] font-normal text-left mb-15">
          FCHCC's Achieving the Dream Scholarship program was designed to assist
          Hispanic students continue their educational endeavors.
        </p>

        <div className="bg-[#1E88E5]/10 p-6 inline-block rounded-md">
          <p className="text-black text-[32px] font-medium">
            Check out photos from the luncheon{" "}
            <span className="text-[#1D84E4] font-bold cursor-pointer hover:underline">
              here
            </span>{" "}
            and read the recap article{" "}
            <span className="text-[#1D84E4] font-bold cursor-pointer hover:underline">
              here
            </span>
          </p>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-10"
      >
        <h2 className="text-[40px] font-medium text-black">
          Congratulations to the 2024 ATD Winners!
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {winners.map((winner, index) => (
          <WinnerCard key={winner.id} {...winner} index={index} />
        ))}
      </div>


    </section>
  );
}