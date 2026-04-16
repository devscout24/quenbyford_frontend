import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

/* ================= COMPONENT ================= */
const RedioProg: React.FC = () => {
  const { t } = useTranslation();

  const radioData = {
    logo: "/images/Radio-Show-logo-transparent 1.png",
    titleHighlight: t("radio.title_highlight"),
    title: t("radio.title"),
    intro1: t("radio.intro1"),
    intro2: t("radio.intro2"),
    description: t("radio.description"),
    showInfo: t("radio.show_info"),
    requirements: [
      t("radio.requirements_1"),
      t("radio.requirements_2"),
    ],
    poster: "/images/Radio-program-Spanish-600x600 1.png",
    buttonText: t("radio.button"),
  };

  const {
    logo,
    titleHighlight,
    title,
    intro1,
    intro2,
    description,
    showInfo,
    requirements,
    poster,
    buttonText,
  } = radioData;

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">

      {/* Logo */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <img src={logo} alt="logo" className="h-24 md:h-50 object-contain" />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-[50px] font-bold mb-8 mt-11"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="text-blue-500">{titleHighlight}</span> {title}
      </motion.h1>

      {/* Intro */}
      <div className="max-w-[1440px] mx-auto space-y-6 text-[#000000] text-xl font-normal mb-8 text-left">
        <p className="font-normal">{intro1}</p>
        <p className="font-normal">{intro2}</p>
      </div>

      {/* Content */}
      <div className=" max-w-[1440px] flex flex-col md:flex-row gap-10 text-left mb-16">

        {/* Left */}
        <div className="max-w-202 flex-1 space-y-6  text-[#000000] text-xl font-normal mb-8 text-left mt-10">
          <p>{description}</p>

          <div className=" ">
            <p className="font-semibold mb-3">{showInfo}</p>

            <ul className="list-disc pl-5 space-y-2">
              {requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <img
            src={poster}
            alt="poster"
            className="w-full max-w-[400px] h-auto sm:h-[400px] rounded-lg shadow-md"
          />
        </motion.div>
      </div>

      {/* Button */}
      <motion.a
        href="https://www.emailmeform.com/builder/emf/fchcc/radio-show-guest-submission"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="inline-block bg-[#F2741F] hover:bg-[#d96316] text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg text-center"
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default RedioProg;


