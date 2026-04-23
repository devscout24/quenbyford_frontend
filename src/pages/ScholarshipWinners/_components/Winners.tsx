export const winnersData = [
  {
    id: 1,
    name: "Chantelle Merritt",
    university: "Florida State University",
    degree: "Bachelors in Biomedical Engineering",
    imageUrl: "",
    gender: "female",
  },
  {
    id: 2,
    name: "Kayleigh Gutierrez",
    university: "University of Central Florida",
    degree: "Bachelors in Biomedical Science",
    imageUrl: "",
    gender: "female",
  },
  {
    id: 3,
    name: "Leyra Ojeda",
    university: "University of North Florida",
    degree: "Bachelors in Business",
    imageUrl: "",
    gender: "female",
  },
  {
    id: 4,
    name: "Lucas Farfan",
    university: "University of Florida",
    degree: "Bachelors in Civil Engineering",
    imageUrl: "",
    gender: "male",
  },
  {
    id: 5,
    name: "Maya Vazquez",
    university: "Coastal Carolina University",
    degree: "Bachelors of Fine Arts in Theatre Design & Production",
    imageUrl: "",
    gender: "female",
  },
  {
    id: 6,
    name: "Melania Carrigan",
    university: "University of Central Florida",
    degree: "Bachelors in Civil Engineering",
    imageUrl: "",
    gender: "female",
  },
  {
    id: 7,
    name: "Melody Ann Angelica",
    university: "University of North Florida",
    degree: "Bachelors in International Business",
    imageUrl: "",
    gender: "female",
  },
  {
    id: 8,
    name: "Natalie Jaile",
    university: "Florida State University",
    degree: "Bachelors in Mechanical Engineering",
    imageUrl: "",
    gender: "female",
  },
  {
    id: 9,
    name: "Sebastian Lopez",
    university: "Rollins College",
    degree: "Bachelors in Biology",
    imageUrl: "",
    gender: "male",
  },
  {
    id: 10,
    name: "Viviana Arce",
    university: "University of South Florida",
    degree: "Bachelors in Biomedical Science",
    imageUrl: "",
    gender: "female",
  },
  {
    id: 11,
    name: "Vivianna Rivera",
    university: "University of Central Florida",
    degree: "Bachelors in Finance",
    imageUrl: "",
    gender: "female",
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
      className="bg-white border-[1.5px] w-full max-w-[300px] border-blue-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm transition-colors"
    >

      {/* Image */}
      <div className="w-27 h-27 rounded-full border-2 border-[#1E88E5] mb-4">
        <img
          src={imageUrl || "/images/ProfileImage.png"}
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
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-15 bg-white font-sans">

      {/* Top Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 mb-15"
      >
        <h2 className="text-2xl md:text-[40px] font-normal text-black ">
          FCHCC celebrated the achievements of the 2025 ATD winners at this year’s ATD Scholarship Luncheon!
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
          Congratulations to the 2025 ATD Winners!
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