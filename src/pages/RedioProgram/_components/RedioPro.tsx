import { motion } from "framer-motion";
import { useState } from "react";

/* ================= TYPES ================= */
interface RadioData {
  logo: string;
  titleHighlight: string;
  title: string;
  intro1: string;
  intro2: string;
  description: string;
  showInfo: string;
  requirements: string[];
  poster: string;
  buttonText: string;
}

interface Props {
  data: RadioData;
}

/* ================= DATA ================= */
export const radioData: RadioData = {
  logo: "/images/Radio-Show-logo-transparent 1.png",
  titleHighlight: "FCHCC On",
  title: "Air Radio Program",

  intro1:
    "Don’t miss this great opportunity to be part of something extraordinary! Get ready for insightful discussions, exclusive insights and the opportunity to connect with like-minded members, as well as the opportunity to PROMOTE YOUR BUSINESS to the LARGEST NETWORK of HISPANIC LISTENERS IN NORTHEAST FLORIDA! Do not miss it!",
  intro2:
    "Our radio show is the chamber’s initiative to assist our corporate members grow their businesses by helping to bring awareness to their services and products.",

  description:
    "The First Coast Hispanic Chamber of Commerce’s “FCHCC On Air” Radio Program is a great way to promote your business and for our audience to learn more about your company and how it serves the Hispanic community..",

  showInfo:
    "The show airs on Action 930 Wednesdays at 1 PM & Sundays at 9:30 AM ET! To be considered for a guest spot, please note:",

  requirements: [
    "You must be an active corporate member of the FCHCC ",
    "chamber (Membership level Small Business #1 up to Strategic Partner). Your company/business positively impacts your community.!",
  ],

  poster: "/images/Radio-program-Spanish-600x600 1.png",

  buttonText: "Request a guest spot",
};

/* ================= COMPONENT ================= */
const RedioProg: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false);

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
  } = data;

  return (
    <section className="max-w-7xl mx-auto  py-12 text-center">
      
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
      <div className="max-w-7xl mx-auto space-y-6 text-[#000000] text-xl font-normal mb-8 text-left">
        <p className="font-normal">{intro1}</p>
        <p className="font-normal">{intro2}</p>
      </div>

      {/* Content */}
      <div className=" max-w-7xl flex flex-col md:flex-row gap-10 text-left mb-16">

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
            className="w-[400px] h-[400px] rounded-lg shadow-md"
          />
        </motion.div>
      </div>

      {/* Button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        className="bg-[#F2741F] hover:bg-[#d96316] text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg"
      >
        {buttonText}
      </motion.button>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-xl w-full max-w-md relative"
          >
            
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">
              Request Guest Spot
            </h2>

            {/* Form */}
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted ✅");
                setOpen(false);
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Business Name"
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                placeholder="Message"
                rows={3}
                className="w-full border p-3 rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-[#F2741F] text-white py-3 rounded-lg font-semibold"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default RedioProg;

