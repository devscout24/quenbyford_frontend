"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import SubscribePopup from "../../../components/SubscribePopup";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const newsData = [
  {
    id: 1,
    title: "Stories from Successful Projects",
    date: "February 20, 2024",
    image: "/images/5001.png",
  },
  {
    id: 2,
    title: "Navigating The World Of Business Strategy",
    date: "February 18, 2024",
    image: "/images/50002.png",
  },
  {
    id: 3,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/5003.png",
  },
  {
    id: 4,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/5004.png",
  },
  {
    id: 5,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/5005.png",
  },
  {
    id: 6,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/5006.png",
  },
  {
    id: 7,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/5007.png",
  },
  {
    id: 8,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/5008.jpg",
  },
  {
    id: 9,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/5009.jpg",
  },
  {
    id: 10,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/5010.jpg",
  },
  {
    id: 11,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/5011.jpg",
  },
  {
    id: 12,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/5001.png",
  },
];

const testimonialData = [
  {
    id: 1,
    text: "As A Business Owner, I Needed A Reliable Solar Solution For My Warehouse. Their Advanced Panel Technology Has Exceeded Expectations.",
    name: "Michael J.",
    designation: "CEO, Ignite Digital",
    image: "/images/person-near-alternative-energy-plant.png",
  },
  {
    id: 2,
    text: "Amazing service and great support team. Highly recommended for business owners.",
    name: "David R.",
    designation: "Founder, TechZone",
    image: "/images/Frame 2087327917.png",
  },
];

const FchccNews = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-360 mx-auto py-12 px-4 sm:px-0 space-y-16 lg:space-y-24 bg-white overflow-hidden">
      {/* News Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-3xl sm:text-[40px] lg:text-[50px] font-bold text-black leading-tight">{t("news.title")}</h2>

          <Link
            to="/news" /* Navigate to dynamic all-news page */
            className="border-2 border-orange-400 text-orange-500 font-bold px-5 py-2 rounded-full text-sm sm:text-base flex items-center gap-1 hover:bg-orange-50 transition-colors w-full sm:w-auto justify-center"
          >
            {t("news.view_all")}
            <ChevronRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {newsData.slice(0, 3).map((news) => (
            <Link to={`/news/${news.id}`} key={news.id} className="w-full block hover:opacity-80 transition-opacity cursor-pointer group">
              <img
                src={news.image}
                alt={news.title}
                className="rounded-2xl w-full h-60 sm:h-70 lg:h-75 object-cover shadow-sm group-hover:shadow-md transition-shadow"
              />

              <p className="text-sm sm:text-[16px] text-gray-500 mt-4 font-medium leading-7 uppercase tracking-wide">
                {news.date}
              </p>

              <h3 className="font-semibold text-[22px] capitalize text-black mt-2 leading-tight group-hover:text-[#1E88E5] transition-colors">
                {news.title}
              </h3>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Scholarship Section */}
      <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center w-full my-8 lg:my-16"
    >
      {/* LEFT SIDE */}
      <div className="w-full">
        <img
          src="/images/image 148.png"
          alt="scholarship"
          className="rounded-3xl shadow-xl w-full h-75 sm:h-100 lg:h-120 object-cover"
        />

        <p className="mt-6 text-base sm:text-lg text-black font-normal leading-relaxed px-2">
          {t("news.scholarship.desc")}
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6 lg:space-y-8 w-full">
        <h2 className="text-3xl sm:text-[40px] lg:text-[50px] font-bold uppercase leading-tight sm:leading-none">
          {t("news.scholarship.title").split(' ')[0]}{" "}
          <span className="text-[#F97316]">{t("news.scholarship.title").split(' ')[1]}</span>
        </h2>

        {/* CARD */}
        <div className="border border-orange-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 bg-orange-50/40 hover:bg-orange-50 transition-colors shadow-sm">
          <img src="/icons/Frame.svg" alt="" className="w-10 h-10 sm:w-12 sm:h-12 shrink-0" />

          <p className="text-lg sm:text-[20px] lg:text-[22px] font-medium leading-relaxed text-gray-800">
            {t("news.scholarship.winners_announcement")}
            <Link to="/news" className="block mt-1 sm:inline sm:mt-0 italic text-[#1E88E5] hover:underline cursor-pointer">
              {" "}{t("news.scholarship.press_release")}
            </Link>
          </p>
        </div>

        {/* ITEM 1 */}
        <div className="flex items-start sm:items-center gap-4 group cursor-pointer">
          <img src="/icons/Frame (1).svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 mt-1 sm:mt-0 transition-transform group-hover:scale-110" />

          <p className="text-lg sm:text-xl lg:text-[22px] text-black font-semibold">
            <Link to="#" className="text-[#1E88E5] font-bold">{t("news.scholarship.donate")}</Link>
            {t("news.scholarship.donate_desc")}
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <img src="/icons/Frame (2).svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 transition-transform group-hover:scale-110" />

          <Link to="/scholarshipwinners" className="text-lg sm:text-xl lg:text-[22px] text-[#1E88E5] font-semibold group-hover:text-[#1E88E5] transition-colors">
            {t("news.scholarship.view_past")}
          </Link>
        </div>
      </div>

      {/* BUTTON CENTER */}
      <div className="col-span-1 md:col-span-2 flex justify-center mt-8">
  <Link
    to="/joinus"
    className="flex items-center justify-center bg-[#F97316] w-full sm:w-62.5 h-12 sm:h-14 text-white rounded-full font-bold text-base sm:text-lg shadow-[0_6px_20px_rgba(249,115,22,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
  >
    {t("news.scholarship.apply_now")}
  </Link>
</div>
    </motion.section>

      {/* Testimonial */}

       <div>
          <h2 className="text-3xl sm:text-[40px] lg:text-[50px] font-bold text-[#F97316] mb-10 leading-tight">Atd Scholarship News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">

       
          {newsData.slice(0, 3).map((news, idx) => (
            <Link to={`/news/${news.id}`} key={`${news.id}-${idx}`} className="w-full block hover:opacity-80 transition-opacity cursor-pointer group">
              <img
                src={news.image}
                alt={news.title}
                className="rounded-2xl w-full h-75 object-cover shadow-sm group-hover:shadow-md transition-shadow"
              />

              <p className="text-xs sm:text-sm text-gray-500 mt-3 font-medium uppercase tracking-wide">
                {news.date}
              </p>

              <h3 className="font-semibold text-[22px] capitalize text-black mt-1 leading-snug group-hover:text-[#1E88E5] transition-colors">
                {news.title}
              </h3>
            </Link>
          ))}
        </div>
       </div>
        
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center my-12"
      >
        <div className="w-full h-75 sm:h-112 lg:h-125">
          <img
            src={testimonialData[index].image}
            alt="member"
            className="rounded-3xl w-full h-full object-cover shadow-xl"
          />
        </div>

        <div className="space-y-6 lg:space-y-8 w-full">
          <div className="flex items-center gap-3 text-[#1E88E5] text-base sm:text-lg leading-7 font-bold uppercase tracking-wide">
            <span className="w-2.5 h-2.5 bg-[#1E88E5] rounded-full" />
            {t("news.testimonials.member_say")}
          </div>

          <p className="text-xl sm:text-[24px] lg:text-[28px] font-medium text-black leading-relaxed italic">
            "{testimonialData[index].text}"
          </p>

          <div className="flex items-center justify-between">
           <div> <h4 className="font-bold text-black text-xl">
              {testimonialData[index].name}
            </h4>

            <p className="text-sm sm:text-base text-gray-500 mt-1">
              {testimonialData[index].designation}
            </p>
</div>
            <div className="flex gap-4 pt-2">
            <button
              onClick={prevTestimonial}
              className="p-3 border-2 border-gray-200 text-gray-600 rounded-full hover:border-[#1E88E5] hover:text-[#1E88E5] hover:bg-blue-50 transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="p-3 border-2 border-gray-200 text-gray-600 rounded-full hover:border-[#1E88E5] hover:text-[#1E88E5] hover:bg-blue-50 transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          </div>

          
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative min-h-87.5 sm:h-100 w-full rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center text-center text-white my-10 shadow-xl"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />

        <img
          src="/images/Frame 2087327917.png"
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 space-y-6 px-6 sm:px-12 w-full max-w-200 mx-auto py-12">
          <h2 className="text-3xl sm:text-[40px] font-bold leading-tight drop-shadow-md">
            {t("news.newsletter.subscribe_title")}
          </h2>
          <p className="text-base sm:text-xl font-normal leading-relaxed text-gray-200">
            {t("news.newsletter.subscribe_desc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              onClick={() => setIsSubscribeOpen(true)}
              className="bg-white text-[#F97316] border-[1.5px] border-[#F97316]/30 px-8 py-3.5 sm:py-4 w-full sm:w-auto sm:min-w-50 rounded-full font-bold text-base sm:text-lg flex  items-center  text-left justify-center hover:border-[#F97316] hover:bg-orange-50 transition-all active:scale-95 cursor-pointer "
            >
              {t("hero.subscribe")}
            </button>
            <Link to="/contact" className="bg-white text-black px-8 py-3.5 sm:py-4 w-full sm:w-auto min-w-50 rounded-full font-bold text-base hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200 flex items-center justify-center active:scale-95">
              {t("news.newsletter.contact_us")}
            </Link>
          </div>
        </div>
        <SubscribePopup isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />
      </motion.section>
    </div>
  );
};

export default FchccNews;
