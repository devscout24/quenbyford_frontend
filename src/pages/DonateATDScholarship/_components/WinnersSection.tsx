
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import SubscribePopup from '@/components/SubscribePopup';

interface NewsCardProps {
  title: string;
  imageSrc: string;
  children?: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
}

const NewsCard = ({ title, imageSrc, children, buttonText, buttonLink }: NewsCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 max-w-360">
      {/* Title */}
      <h3 className="text-[#3b82f6] text-[32px] font-medium text-lg mb-6 text-center">
        {title}
      </h3>

      {/* Achievement Logo/Image */}
      <div className="mb-6 w-full">
        <img
          src={imageSrc}
          alt="Achieving The Dream Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Dynamic Content (Button or Text) */}
      <div className="flex flex-col items-center text-center">
        {buttonText ? (
          buttonLink ? (
            <Link to={buttonLink} className="bg-[#f97316] hover:bg-orange-600 text-white px-8 py-2 rounded-full text-sm font-medium transition-colors shadow-md">
              {buttonText}
            </Link>
          ) : (
            <button className="bg-[#f97316] hover:bg-orange-600 text-white px-8 py-2 rounded-full text-sm font-medium transition-colors shadow-md">
              {buttonText}
            </button>
          )
        ) : (
          <div className="text-sm text-gray-800 leading-relaxed max-w-360">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

const WinnersSection = () => {
  const { t } = useTranslation();
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  return (
    <div>
      <SubscribePopup isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />
      <div>
        <Link
          to="/scholarshipwinners"
          className="bg-[#F97316] rounded-full text-white w-75 px-6 py-3 hover:bg-[#ea580c] transition-all flex justify-center items-center mx-auto mb-12"
        >
          View Past ATD Winners
        </Link>
        <div className="flex justify-center mb-12">
          <Link to="/events/scholarship"
            className="bg-[#1E88E5] px-6 sm:px-8 py-3 sm:py-5 text-xl sm:text-2xl md:text-[32px] font-normal leading-relaxed text-white flex justify-center items-center mx-auto rounded-xl text-center">
            {t("scholarship.pricing.view_2024")}
          </Link>

        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 p-10  bg-white">
        {/* 2025 Card */}
        <NewsCard
          title="ATD 2025 Winners Announced!"
          imageSrc="/images/Logo_ATD_2025-lorez 1.png"
          buttonText="Click Here"
          buttonLink="/scholarshipwinners"
        />

        {/* 2026 Card */}
        <NewsCard
          title="ATD 2026 Winners Announced!"
          imageSrc="/images/c919ac0e827b20fdcd1f4253d1a8d5474ed5888a.png"
        >
          <p className=''>
            Applications for 2026 will open on September 16, 2025!
            Be sure to <span onClick={() => setIsSubscribeOpen(true)} className="text-[#f97316] cursor-pointer hover:underline font-medium">subscribe</span> to be notified!
          </p>
        </NewsCard>
      </div>
    </div>
  );
};

export default WinnersSection;