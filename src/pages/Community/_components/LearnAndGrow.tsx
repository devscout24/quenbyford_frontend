import { PlayCircle, Download, Award, Users } from 'lucide-react';
import { Card, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LearnAndGrow = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-16 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-[32px] font-medium text-center text-black mb-8 sm:mb-15"
      >
        {t('community_page.learn_and_grow.title')}
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >

        {/* Left Card: Upcoming Workshop */}
        <motion.div variants={itemVariants} className="h-full">
          <Card className="border border-slate-100 ring-0 shadow-sm rounded-2xl sm:rounded-4xl p-4 sm:p-8 w-full h-full flex flex-col items-center">
            <div className="bg-orange-500 p-4 rounded-full text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_431_6215)">
                  <path d="M39.1667 35H27.5C27.279 35 27.067 35.0878 26.9107 35.2441C26.7545 35.4004 26.6667 35.6123 26.6667 35.8333V37.5C26.6667 38.163 26.9301 38.7989 27.3989 39.2678C27.8677 39.7366 28.5036 40 29.1667 40H37.5C38.163 40 38.7989 39.7366 39.2678 39.2678C39.7366 38.7989 40 38.163 40 37.5V35.8333C40 35.6123 39.9122 35.4004 39.7559 35.2441C39.5996 35.0878 39.3877 35 39.1667 35ZM37.5 19.1667H19.5833C19.4728 19.1667 19.3668 19.1228 19.2887 19.0446C19.2106 18.9665 19.1667 18.8605 19.1667 18.75V17.0833C19.1667 16.9728 19.2106 16.8668 19.2887 16.7887C19.3668 16.7106 19.4728 16.6667 19.5833 16.6667H26.6667C27.5507 16.6667 28.3986 16.3155 29.0237 15.6904C29.6488 15.0652 30 14.2174 30 13.3333V3.33333C30 2.44928 29.6488 1.60143 29.0237 0.976311C28.3986 0.35119 27.5507 0 26.6667 0L8.33333 0C7.44928 0 6.60143 0.35119 5.97631 0.976311C5.35119 1.60143 5 2.44928 5 3.33333V13.3333C5 14.2174 5.35119 15.0652 5.97631 15.6904C6.60143 16.3155 7.44928 16.6667 8.33333 16.6667H15.4167C15.5272 16.6667 15.6332 16.7106 15.7113 16.7887C15.7894 16.8668 15.8333 16.9728 15.8333 17.0833V18.75C15.8333 18.8605 15.7894 18.9665 15.7113 19.0446C15.6332 19.1228 15.5272 19.1667 15.4167 19.1667H2.5C1.83696 19.1667 1.20107 19.4301 0.732233 19.8989C0.263392 20.3677 0 21.0036 0 21.6667L0 38.3333C0 38.7754 0.175595 39.1993 0.488155 39.5118C0.800716 39.8244 1.22464 40 1.66667 40C2.10869 40 2.53262 39.8244 2.84518 39.5118C3.15774 39.1993 3.33333 38.7754 3.33333 38.3333V25.8333C3.33333 25.6123 3.42113 25.4004 3.57741 25.2441C3.73369 25.0878 3.94565 25 4.16667 25H39.1667C39.3877 25 39.5996 24.9122 39.7559 24.7559C39.9122 24.5996 40 24.3877 40 24.1667V21.6667C40 21.0036 39.7366 20.3677 39.2678 19.8989C38.7989 19.4301 38.163 19.1667 37.5 19.1667ZM8.33333 3.33333H26.6667V13.3333H8.33333V3.33333Z" fill="white" />
                  <path d="M27.5003 27.5H39.167C39.167 27.5 40.0003 27.5 40.0003 28.3333V31.6667C40.0003 31.6667 40.0003 32.5 39.167 32.5H27.5003C27.5003 32.5 26.667 32.5 26.667 31.6667V28.3333C26.667 28.3333 26.667 27.5 27.5003 27.5Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_431_6215">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-xl sm:text-[32px] font-bold text-black">{t('community_page.learn_and_grow.workshop.title')}</h3>
            <p className="text-black font-normal text-base sm:text-xl mb-4 sm:mb-8">{t('community_page.learn_and_grow.workshop.desc')}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full ">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`border border-orange-100 rounded-2xl p-4 sm:p-6 h-[214px] flex flex-col justify-between text-center ${i === 3 ? 'col-span-1' : ''}`}>
                  <span className="text-[10px] text-orange-500 font-bold border border-orange-200 px-2 py-1  rounded-full uppercase self-center w-fit">
                    {t('community_page.learn_and_grow.workshop.badge')}
                  </span>
                  <div>
                    <h4 className="text-[14px] font-bold text-black mb-1">{t('community_page.learn_and_grow.workshop.item_title')}</h4>
                    <p className="text-[12px] font-normal text-black">{t('community_page.learn_and_grow.workshop.date')}</p>
                  </div>
                  <Button size="sm" className="w-full bg-[#1E88E5] hover:bg-[#1E88E5] rounded-full h-8 text-[14px] font-medium text-white">
                    {t('community_page.learn_and_grow.workshop.coming_soon')}
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-auto w-full">
              <Button className="w-full mt-6 sm:mt-10 py-5 sm:py-7 bg-[#F97316] hover:bg-[#F97316] text-white text-[16px] font-bold rounded-full">
                {t('community_page.learn_and_grow.workshop.view_all')}
              </Button>
            </div>

          </Card>
        </motion.div>

        {/* Right Card: Featured Courses */}
        <motion.div variants={itemVariants} className="h-full">
          <Card className="border border-slate-100 ring-0 shadow-sm rounded-2xl sm:rounded-4xl p-4 sm:p-8 w-full h-full flex flex-col items-center">
            <div className="bg-[#1E88E5] p-4 rounded-full text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
                <path d="M0 2C0 0.89543 0.895431 0 2 0H35.894C36.9985 0 37.894 0.895431 37.894 2V7.23139C37.894 8.33596 36.9985 9.23139 35.894 9.23139H35.6835C34.5789 9.23139 33.6835 8.33596 33.6835 7.23139V6.21044C33.6835 5.10587 32.7881 4.21044 31.6835 4.21044H6.21044C5.10587 4.21044 4.21044 5.10587 4.21044 6.21044V21.1574C4.21044 22.262 5.10587 23.1574 6.21044 23.1574H11.3324C12.4369 23.1574 13.3324 24.0528 13.3324 25.1574V25.3679C13.3324 26.4724 12.4369 27.3679 11.3324 27.3679H2C0.895429 27.3679 0 26.4724 0 25.3679V2Z" fill="white" />
                <path d="M20.3872 15.3415C22.2272 17.2888 23.7956 18.9477 27.3681 18.9477H31.5786C32.6952 18.9477 33.7662 19.3913 34.5558 20.1809C35.3454 20.9706 35.789 22.0415 35.789 23.1582V25.2634C35.789 26.0025 35.5944 26.7285 35.2249 27.3686C35.0489 27.6733 34.8363 27.9535 34.5926 28.2032C34.0937 28.7147 33.6838 29.3498 33.6838 30.0643V37.9999C33.6838 39.1045 32.7884 39.9999 31.6838 39.9999H29.3681C28.2636 39.9999 27.3681 39.1045 27.3681 37.9999V25.1582C27.3681 24.0536 26.467 23.1773 25.3743 23.0157C21.1503 22.3911 18.8008 19.8473 17.1789 18.0951C16.7598 17.6347 16.7611 16.9234 17.2013 16.4832L18.3607 15.3238C18.925 14.7595 19.8424 14.7584 20.3872 15.3415ZM33.6838 13.6847C33.6838 14.5222 33.3511 15.3254 32.7589 15.9176C32.1667 16.5098 31.3635 16.8425 30.526 16.8425C29.6885 16.8425 28.8852 16.5098 28.293 15.9176C27.7008 15.3254 27.3681 14.5222 27.3681 13.6847C27.3681 12.8472 27.7008 12.044 28.293 11.4518C28.8852 10.8596 29.6885 10.5269 30.526 10.5269C31.3635 10.5269 32.1667 10.8596 32.7589 11.4518C33.3511 12.044 33.6838 12.8472 33.6838 13.6847Z" fill="white" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-[32px] font-bold text-black">{t('community_page.learn_and_grow.courses.title')}</h3>
            <p className="text-black font-normal text-base sm:text-xl mb-4">{t('community_page.learn_and_grow.courses.desc')}</p>
            <span className="font-bold text-black mb-6 text-[16px]">{t('community_page.learn_and_grow.courses.featured')}</span>

            {/* Icon List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-6 sm:mb-10 w-full px-2 sm:px-4">
              <div className="flex items-center gap-2 text-[16px] text-[#64748B] font-medium">
                <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E88E5] shrink-0" /> <span className="text-xs sm:text-[16px]">{t('community_page.learn_and_grow.courses.features.video')}</span>
              </div>
              <div className="flex items-center gap-2 text-[16px] text-[#64748B] font-medium">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E88E5] shrink-0" /> <span className="text-xs sm:text-[16px]">{t('community_page.learn_and_grow.courses.features.resources')}</span>
              </div>
              <div className="flex items-center gap-2 text-[16px] text-[#64748B] font-medium">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E88E5] shrink-0" /> <span className="text-xs sm:text-[16px]">{t('community_page.learn_and_grow.courses.features.certificates')}</span>
              </div>
              <div className="flex items-center gap-2 text-[16px] text-[#64748B] font-medium">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E88E5] shrink-0" /> <span className="text-xs sm:text-[16px]">{t('community_page.learn_and_grow.courses.features.discussions')}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-blue-100 rounded-2xl p-4 h-[214px] flex flex-col justify-between text-center">
                  <h4 className="text-[14px] font-bold text-black mt-2 mb-3">{t('community_page.learn_and_grow.courses.item_title')}</h4>
                  <ul className="text-[12px] text-black space-y-2 mb-10 text-left">
                    <li>• {t('community_page.learn_and_grow.courses.item_li1')}</li>
                    <li>• {t('community_page.learn_and_grow.courses.item_li2')}</li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full rounded-full h-8 font-medium text-[14px] text-[#1E88E5] border-[#1E88E5]">
                    {t('community_page.learn_and_grow.courses.coming_soon')}
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-auto w-full">
              <Button className="w-full mt-6 sm:mt-10 py-5 sm:py-7 bg-blue-500 hover:bg-blue-600 text-white text-[16px] font-bold rounded-full">
                {t('community_page.learn_and_grow.courses.access_panel')}
              </Button>
            </div>
          </Card>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default LearnAndGrow;