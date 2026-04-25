import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FriendSection from './_components/FriendSection';

const CircleOfFriends: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    { key: '2024', isOrange: false },
    { key: '2023', isOrange: true },
    { key: '2022', isOrange: false },
    { key: '2021', isOrange: true },
    { key: '2020', isOrange: false },
    { key: '2019', isOrange: true },
    { key: '2018', isOrange: false },
    { key: 'past_donors', isOrange: true },
  ];

  return (
    <div className=" bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-[40px] font-bold text-[#1E88E5] mb-6">
          {t('circle_of_friends.title')}
        </h1>
        <p className="text-[16px] text-[#000000] font-normal">
          {t('circle_of_friends.subtitle')}
        </p>
      </motion.div>

      {/* Grid Section */}
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const data = t(`circle_of_friends.sections.${section.key}`, { returnObjects: true }) as any;
            return (
              <FriendSection
                key={section.key}
                year={data.year}
                donors={data.donors}
                isOrange={section.isOrange}
                index={index}
              />
            );
          })}
        </div>
      </div>

    
    </div>
  );
};

export default CircleOfFriends;
