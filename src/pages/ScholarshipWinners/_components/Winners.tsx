import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// ================= Winner Card =================
interface WinnerCardProps {
  name: string;
  uni: string;
  degree: string;
  index: number;
}

const WinnerCard = ({ name, uni, degree, index }: WinnerCardProps) => {
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
          src={`/images/winner${index + 1}.png`}
          alt={name}
          className="w-full h-full rounded-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/ProfileImage.png";
          }}
        />
      </div>

      <h3 className="text-[#1D84E4] font-bold text-xl  mb-3">
        {name}
      </h3>

      <p className="text-black/80 text-[12px] font-normal  tracking-wide mb-1">
        {uni}
      </p>

      <p className="text-black/80 text-[12px] font-normal">
        {degree}
      </p>
    </motion.div>
  );
};

// ================= Main Section =================
export default function ScholarshipSectionWinners() {
  const { t } = useTranslation();
  const winners = t("scholarship.winners_data", { returnObjects: true }) as Array<{ name: string; uni: string; degree: string }>;

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
          {t("scholarship.winners_celebration")}
        </h2>

        <p className="text-black text-[32px] font-normal text-left mb-15">
          {t("scholarship.desc")}
        </p>

        <div className="bg-[#1E88E5]/10 p-6 inline-block rounded-md">
          <p className="text-black text-[32px] font-medium">
            {t("scholarship.check_photos")}{" "}
            <span className="text-[#1D84E4] font-bold cursor-pointer hover:underline">
              {t("scholarship.here")}
            </span>{" "}
            {t("scholarship.read_recap")}{" "}
            <span className="text-[#1D84E4] font-bold cursor-pointer hover:underline">
              {t("scholarship.here")}
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
          {t("scholarship.congrats_2025")}
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {winners.map((winner, index) => (
          <WinnerCard key={index} {...winner} index={index} />
        ))}
      </div>


    </section>
  );
}