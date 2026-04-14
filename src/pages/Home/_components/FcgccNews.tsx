"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SubscribePopup from "../../../components/SubscribePopup";
import { Link } from "react-router-dom";

export const newsData = [
  {
    id: 1,
    title: "Stories from Successful Projects",
    date: "February 20, 2024",
    image: "/images/image.png",
  },
  {
    id: 2,
    title: "Navigating The World Of Business Strategy",
    date: "February 18, 2024",
    image: "/images/image (1).png",
  },
  {
    id: 3,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/image (2).png",
  },
  {
    id: 3,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/image (2).png",
  },
  {
    id: 3,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/image (2).png",
  },
  {
    id: 3,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/image (2).png",
  },
  {
    id: 3,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/image (2).png",
  },
  {
    id: 3,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/image (2).png",
  },
  {
    id: 3,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/image (2).png",
  },
  {
    id: 3,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/image (2).png",
  },
  {
    id: 3,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/image (2).png",
  },
  {
    id: 3,
    title: "Trends Shaping Marketing Strategies",
    date: "February 15, 2024",
    image: "/images/image (2).png",
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
  const [index, setIndex] = useState(0);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-335 mx-auto  py-12 space-y-24 bg-white">
      {/* News Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[50px] font-bold text-black">FCHCC News</h2>

          <Link
            to="/news" /* Navigate to dynamic all-news page */
            className="border border-orange-400 text-orange-400 px-4 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-orange-50"
          >
            View All
            <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {newsData.slice(0, 3).map((news) => (
            <Link to={`/news/${news.id}`} key={news.id} className="w-full block hover:opacity-80 transition-opacity cursor-pointer">
              <img
                src={news.image}
                alt={news.title}
                className="rounded-lg w-full h-75 object-cover"
              />

              <p className="text-[16px] text-black mt-4 font-normal leading-7">
                {news.date}
              </p>

              <h3 className="font-bold text-[24px] capitalize text-black ">
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
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center max-w-335 mx-auto px-4 my-16"
    >
      {/* LEFT SIDE */}
      <div>
        <img
          src="/images/image 148.png"
          alt="scholarship"
          className="rounded-xl shadow-lg w-full h-100 object-cover"
        />

        <p className="mt-6 text-lg text-black font-normal">
          Latest updates and announcements about ATD scholarship programs and
          recipients.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6">
        <h2 className="text-[40px] md:text-[50px] font-bold uppercase leading-tight">
          ADT{" "}
          <span className="text-orange-500">SCHOLARSHIP</span>
        </h2>

        {/* CARD */}
        <div className="border border-orange-200 rounded-xl p-4 flex gap-4 bg-orange-50/30">
          <img src="/icons/Frame.svg" alt="" className="w-10 h-10" />

          <p className="text-[20px] md:text-[24px] font-medium leading-8">
            FCHCC announces the Winners of the 2025 ATD Scholarship! Read the
            full
            <span className="block italic text-[#1E88E5]">
              press release!
            </span>
          </p>
        </div>

        {/* ITEM 1 */}
        <div className="flex items-center gap-4">
          <img src="/icons/Frame (1).svg" alt="" className="w-8 h-8" />

          <p className="text-[20px] md:text-[24px] text-black font-semibold">
            <span className="text-blue-500 font-bold">DONATE </span>
            to the Achieving the Dream Scholarship
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="flex items-center gap-4">
          <img src="/icons/Frame (2).svg" alt="" className="w-8 h-8" />

          <p className="text-[20px] md:text-[24px] text-black font-semibold">
            View our Past Winners
          </p>
        </div>
      </div>

      {/* BUTTON CENTER */}
      <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
        <Button className="bg-[#F97316] w-[150px] h-10 text-white rounded-lg shadow-[0_-4px_20px_rgba(0,0,0,0.05),0_4px_20px_rgba(0,0,0,0.05)] hover:scale-105 transition">
          Apply Now
        </Button>
      </div>
    </motion.section>

      {/* Testimonial */}

       <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {newsData.map((news) => (
            <Link to={`/news/${news.id}`} key={news.id} className="w-full block hover:opacity-80 transition-opacity cursor-pointer">
              <img
                src={news.image}
                alt={news.title}
                className="rounded-lg w-full h-75 object-cover"
              />

              <p className="text-[16px] text-black mt-4 font-normal leading-7">
                {news.date}
              </p>

              <h3 className="font-bold text-[24px] capitalize text-black ">
                {news.title}
              </h3>
            </Link>
          ))}
        </div>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <img
          src={testimonialData[index].image}
          alt="member"
          className="rounded-lg  w-110 h-83"
        />

        <div className="space-y-6">
          <div className="flex items-center gap-2 text-blue-500 text-lg leading-7 font-medium">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            What Our Member Say
          </div>

          <p className="text-[24px] font-medium text-black leading-8 ">
            "{testimonialData[index].text}"
          </p>

          <div>
            <h4 className="font-bold text-gray-900">
              {testimonialData[index].name}
            </h4>

            <p className="text-xs text-gray-500">
              {testimonialData[index].designation}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 border border-gray-300 rounded-full"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextTestimonial}
              className="p-2 border border-gray-300 rounded-full"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative h-64 rounded-3xl overflow-hidden flex items-center justify-center text-center text-white"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />

        <img
          src="/images/Frame 2087327917.png"
          alt="bg"
          className="absolute inset-0 w-full h-85 object-cover"
        />

        <div className="relative z-20 space-y-6 px-4">
          <h2 className="text-[40px] font-normal leading-5.25">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl font-normal leading-8 w-220">
            Get our Conexion newsletter with program updates, event invitations, and community success stories.
          </p>

          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => setIsSubscribeOpen(true)}
              className="bg-[#F97316] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              Subscribe Now
            </button>

            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all active:scale-95 cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
        <SubscribePopup isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />
      </motion.section>
    </div>
  );
};

export default FchccNews;
