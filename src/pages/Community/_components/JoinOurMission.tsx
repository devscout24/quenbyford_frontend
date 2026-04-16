import { Card, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


const JoinMission = () => {
    const { t } = useTranslation();
    return (
        <section id="join-our-mission" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-16 bg-white overflow-hidden">
            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-2xl sm:text-[32px] font-medium text-center text-black mb-8 sm:mb-15"
            >
                {t('community_page.join_mission.title')}
            </motion.h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center mb-15">

                {/* Card 1: Support Our Programs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.02, y: -10 }}
                >
                    <Card className="border border-gray-200 ring-0 shadow-xl rounded-2xl w-full p-5 sm:p-10 flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-blue-500 mb-3"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48" fill="none">
                                <path d="M12.52 42.7761H12C10.114 42.7761 9.172 42.7761 8.586 42.1901C8 41.6081 8 40.6641 8 38.7781V36.5541C8 35.5181 8 35.0001 8.266 34.5361C8.532 34.0721 8.934 33.8401 9.738 33.3721C15.03 30.2941 22.544 28.5621 27.558 31.5521C27.8953 31.7534 28.1953 31.9987 28.458 32.2881C28.7271 32.5822 28.9345 32.9273 29.0678 33.303C29.2011 33.6787 29.2577 34.0774 29.2342 34.4753C29.2107 34.8733 29.1076 35.2625 28.931 35.6199C28.7544 35.9773 28.5079 36.2956 28.206 36.5561C27.9655 36.7844 27.6721 36.9493 27.352 37.0361C27.592 37.0081 27.822 36.9767 28.042 36.9421C29.864 36.6521 31.394 35.6761 32.794 34.6181L36.41 31.8881C37.0555 31.4197 37.8325 31.1675 38.63 31.1675C39.4275 31.1675 40.2045 31.4197 40.85 31.8881C41.996 32.7541 42.348 34.1801 41.622 35.3441C40.776 36.7001 39.584 38.4341 38.44 39.4941C37.296 40.5541 35.588 41.5021 34.196 42.1741C32.652 42.9201 30.948 43.3481 29.214 43.6301C25.698 44.1981 22.034 44.1101 18.554 43.3941C16.5686 42.9854 14.547 42.777 12.52 42.7761ZM13.172 5.17206C12.438 5.90606 12.164 6.91806 12.062 8.50006C13.2344 8.48401 14.3542 8.01101 15.1831 7.18174C16.012 6.35248 16.4845 5.23245 16.5 4.06006C14.92 4.16406 13.906 4.43806 13.172 5.17206ZM34.828 5.17206C34.094 4.43806 33.082 4.16406 31.5 4.06206C31.5161 5.23444 31.989 6.35426 32.8183 7.18315C33.6476 8.01204 34.7676 8.48454 35.94 8.50006C35.836 6.92006 35.562 5.90606 34.828 5.17206ZM34.828 18.8281C34.094 19.5621 33.082 19.8361 31.5 19.9381C31.5161 18.7657 31.989 17.6459 32.8183 16.817C33.6476 15.9881 34.7676 15.5156 35.94 15.5001C35.836 17.0801 35.562 18.0941 34.828 18.8281ZM13.172 18.8281C13.906 19.5621 14.918 19.8361 16.5 19.9381C16.4839 18.7657 16.0109 17.6459 15.1817 16.817C14.3524 15.9881 13.2324 15.5156 12.06 15.5001C12.164 17.0801 12.438 18.0941 13.172 18.8281Z" fill="#1E88E5" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.5C13.9891 11.5 15.8968 10.7098 17.3033 9.3033C18.7098 7.89678 19.5 5.98912 19.5 4H28.5C28.5 5.98912 29.2902 7.89678 30.6967 9.3033C32.1032 10.7098 34.0109 11.5 36 11.5V12.5C34.0109 12.5 32.1032 13.2902 30.6967 14.6967C29.2902 16.1032 28.5 18.0109 28.5 20H19.5C19.5 18.0109 18.7098 16.1032 17.3033 14.6967C15.8968 13.2902 13.9891 12.5 12 12.5V11.5ZM24 14C24.5304 14 25.0391 13.7893 25.4142 13.4142C25.7893 13.0391 26 12.5304 26 12C26 11.4696 25.7893 10.9609 25.4142 10.5858C25.0391 10.2107 24.5304 10 24 10C23.4696 10 22.9609 10.2107 22.5858 10.5858C22.2107 10.9609 22 11.4696 22 12C22 12.5304 22.2107 13.0391 22.5858 13.4142C22.9609 13.7893 23.4696 14 24 14Z" fill="#1E88E5" />
                            </svg>
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xl font-medium text-[#1E88E5] mb-2"
                        >{t('community_page.join_mission.cards.support.title')}</motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-[#64748B] text-[16px] max-w-135 leading-relaxed mb-4"
                        >
                            {t('community_page.join_mission.cards.support.desc')}
                        </motion.p>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.5 }}>
                            <Button className="bg-[#2B82D9] hover:bg-[#1E88E5] text-white px-10 py-6  rounded-xl font-semibold transition-all">
                                {t('community_page.join_mission.cards.support.btn')}
                            </Button>
                        </motion.div>
                    </Card>
                </motion.div>

                {/* Card 2: Share Your Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.02, y: -10 }}
                >
                    <Card className="border border-gray-200 ring-0 shadow-xl rounded-2xl w-full p-5 sm:p-10 flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-[#F97316] mb-3"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <g clip-path="url(#clip0_431_6329)">
                                    <path d="M24 8.92865C24.7766 8.92865 25.4062 8.29902 25.4062 7.5224V2.87793C25.4062 2.1013 24.7766 1.47168 24 1.47168C23.2234 1.47168 22.5938 2.1013 22.5938 2.87793V7.5224C22.5938 8.29902 23.2234 8.92865 24 8.92865ZM30.5625 11.3154C30.7472 11.3157 30.9301 11.2794 31.1008 11.2087C31.2714 11.138 31.4264 11.0343 31.5568 10.9035L35.3068 7.15349C35.856 6.6044 35.856 5.71396 35.3068 5.16477C34.7577 4.61568 33.8673 4.61568 33.3181 5.16477L29.5681 8.91477C29.0189 9.46387 29.0189 10.3543 29.5681 10.9035C29.6985 11.0343 29.8535 11.138 30.0242 11.2087C30.1948 11.2794 30.3778 11.3157 30.5625 11.3154ZM16.4432 10.9036C16.7178 11.1782 17.0777 11.3155 17.4375 11.3155C17.7973 11.3155 18.1573 11.1782 18.4318 10.9036C18.981 10.3545 18.981 9.46406 18.4318 8.91487L14.6818 5.16487C14.1327 4.61577 13.2423 4.61577 12.6931 5.16487C12.1439 5.71396 12.1439 6.6044 12.6931 7.15359L16.4432 10.9036ZM36.6309 21.3472L31.1721 15.8883C30.6497 15.3659 30.0296 14.9516 29.3471 14.6689C28.6646 14.3862 27.9332 14.2407 27.1944 14.2407H18.6558C16.5272 14.2407 14.5261 15.0696 13.021 16.5747L12.5716 17.0241L12.5425 17.0531H1.40625C0.629625 17.0531 0 17.6827 0 18.4594V33.4594C0 34.236 0.629625 34.8656 1.40625 34.8656H8.41753L11.7557 38.2037C12.0194 38.4674 12.3771 38.6156 12.75 38.6156H14.0233C13.552 37.8861 13.2487 37.0713 13.1299 36.2182C12.0665 35.872 11.1219 35.2338 10.4039 34.3764C8.28572 31.8518 8.61619 28.0747 11.1406 25.9565L16.4855 21.4716H27.1574C27.5303 21.4716 27.8881 21.6198 28.1518 21.8836L32.0782 25.8099C33.3393 27.0711 35.4301 27.098 36.6696 25.8156C37.8736 24.5699 37.8607 22.577 36.6309 21.3472Z" fill="#F97316" />
                                    <path d="M48 21.3657C48 20.5889 47.3704 19.9594 46.5938 19.9595H39.1438C40.9419 22.3099 40.7682 25.6951 38.6198 27.8438C37.4874 28.9761 35.9806 29.5996 34.3771 29.5996C32.7735 29.5996 31.2668 28.9761 30.1345 27.8438L26.5751 24.2843H17.246L16.1413 25.2112L12.5737 28.2048C11.235 29.328 11.0605 31.3238 12.1837 32.6624C13.3069 34.0011 15.3026 34.1756 16.6413 33.0524C15.3026 34.1756 15.1281 36.1714 16.2513 37.51C17.3745 38.8487 19.3703 39.0233 20.7089 37.9C19.3703 39.0233 19.1957 41.019 20.3189 42.3577C21.4421 43.6963 23.4379 43.8709 24.7765 42.7477L27.267 40.6579L26.9311 40.9398C25.5925 42.063 25.4179 44.0588 26.5411 45.3974C27.6643 46.7361 29.6601 46.9106 30.9987 45.7874L40.5513 37.7718H46.594C47.3706 37.7718 48.0002 37.1422 48.0001 36.3655L48 21.3657Z" fill="#F97316" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_431_6329">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xl font-bold text-[#F97316] mb-2"
                        >{t('community_page.join_mission.cards.volunteer.title')}</motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-[#64748B] text-[16px] max-w-135 leading-relaxed mb-6"
                        >
                            {t('community_page.join_mission.cards.volunteer.desc')}
                        </motion.p>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.6 }}>
                            <Button className="bg-[#F97316] hover:bg-[#F97316] text-white px-10 py-6 rounded-xl font-semibold transition-all">
                                {t('community_page.join_mission.cards.volunteer.btn')}
                            </Button>
                        </motion.div>
                    </Card>
                </motion.div>

                {/* Card 3: Collaborate With Us */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.02, y: -10 }}
                >
                    <Card className="border border-gray-200 ring-0 shadow-xl rounded-2xl w-full p-5 sm:p-10 flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-[#8B5CF6] mb-3"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <g clip-path="url(#clip0_431_6339)">
                                    <path d="M42 26.6784C42 28.5719 40.4649 30.107 38.5714 30.107C36.678 30.107 35.1429 28.5719 35.1429 26.6784C35.1429 24.785 36.678 23.2499 38.5714 23.2499C40.4649 23.2499 42 24.785 42 26.6784ZM12.8571 26.6784C12.8571 28.5719 11.322 30.107 9.42857 30.107C7.53514 30.107 6 28.5719 6 26.6784C6 24.785 7.53514 23.2499 9.42857 23.2499C11.322 23.2499 12.8571 24.785 12.8571 26.6784ZM27.4286 23.2499C27.4286 25.1433 25.8934 26.6784 24 26.6784C22.1066 26.6784 20.5714 25.1433 20.5714 23.2499C20.5714 21.3564 22.1066 19.8213 24 19.8213C25.8934 19.8213 27.4286 21.3564 27.4286 23.2499ZM13.7382 46.3927C13.1686 45.6564 12.8588 44.7522 12.8571 43.8213V35.2499C12.861 34.3826 13.0111 33.5221 13.3012 32.7048C13.1539 32.6947 13.0078 32.6784 12.8571 32.6784H6C4.79644 32.675 3.62032 33.0379 2.62789 33.7188C1.81913 34.269 1.15698 35.0084 0.699002 35.8728C0.241022 36.7371 0.00106991 37.7002 0 38.6784L0 42.107C0.00151382 42.926 0.237251 43.7274 0.679397 44.4168C1.12154 45.1061 1.75165 45.6546 2.49536 45.9976C2.79269 46.1383 3.10608 46.2422 3.42857 46.307V36.9641H5.14286V46.3927H13.7382ZM14.5978 47.2499C14.5886 47.2431 14.5811 47.2343 14.5714 47.2277V47.2499H14.5978ZM32.7251 32.4323C32.2655 31.5743 31.6063 30.8394 30.8031 30.2895C30.7235 30.2304 30.6399 30.1768 30.5529 30.1292C29.6122 29.5542 28.5311 29.2499 27.4286 29.2499H20.5714C17.2575 29.2499 14.5714 31.9359 14.5714 35.2499V43.8213C14.5714 45.2414 15.7228 46.3927 17.1429 46.3927H18V34.3927H19.7143V46.3927H28.2857V34.3927H30V46.3927H30.8571C32.2772 46.3927 33.4286 45.2414 33.4286 43.8213V35.2499C33.4289 34.2672 33.1873 33.2995 32.7251 32.4323ZM45.3746 33.7206C44.3816 33.0387 43.2046 32.6752 42 32.6784H35.1429C34.9931 32.6784 34.8469 32.6947 34.6996 32.7048C34.9892 33.5222 35.139 34.3826 35.1429 35.2499V43.8213C35.1412 44.7522 34.8314 45.6564 34.2618 46.3927H42.8571V36.9641H44.5714V46.307C44.889 46.2434 45.1975 46.1409 45.4901 46.0019C46.2373 45.6609 46.8709 45.1126 47.3158 44.4223C47.7607 43.7319 47.9982 42.9283 48 42.107V38.6784C47.9989 37.7008 47.7592 36.7381 47.3017 35.8741C46.8442 35.0102 46.1827 34.2709 45.3746 33.7206Z" fill="#1E88E5" />
                                    <path d="M24.0002 11.25C22.2755 11.2467 20.5777 11.6779 19.0637 12.504C17.5496 13.33 16.2681 14.5243 15.3375 15.9764C14.4068 17.4285 13.8571 19.0917 13.7389 20.8124C13.6208 22.5331 13.9382 24.2558 14.6617 25.8215H19.5534C18.2978 23.6602 18.7779 20.9096 20.6909 19.3013C22.6041 17.6933 25.3964 17.6933 27.3096 19.3013C29.2226 20.9096 29.7027 23.6602 28.4471 25.8215H33.343C34.0667 24.2555 34.3841 22.5323 34.2658 20.8113C34.1476 19.0902 33.5974 17.4266 32.6663 15.9744C31.7352 14.5221 30.453 13.328 28.9384 12.5022C27.4237 11.6765 25.7254 11.2458 24.0002 11.25Z" fill="#1E88E5" />
                                    <path d="M44.5713 18.1069H39.9427L39.7762 17.4632C39.3976 15.9905 38.8089 14.5799 38.0281 13.275L37.6849 12.7017L40.9711 9.4095C41.0504 9.33058 41.1133 9.23676 41.1562 9.13345C41.1992 9.03013 41.2213 8.91935 41.2213 8.80747C41.2213 8.69559 41.1992 8.58481 41.1562 8.48149C41.1133 8.37818 41.0504 8.28436 40.9711 8.20543L37.3312 4.56429C37.1695 4.40996 36.9546 4.32385 36.7311 4.32385C36.5075 4.32385 36.2926 4.40996 36.1309 4.56429L32.8387 7.85636L32.2654 7.5135C30.9588 6.73231 29.5466 6.14317 28.0721 5.76418L27.4284 5.59672V0.964076C27.4284 0.736748 27.3381 0.51873 27.1774 0.357985C27.0166 0.197239 26.7986 0.106934 26.5713 0.106934H21.4284C21.2011 0.106934 20.9831 0.197239 20.8223 0.357985C20.6616 0.51873 20.5713 0.736748 20.5713 0.964076V5.59265L19.9276 5.75915C18.4548 6.13793 17.044 6.72641 15.7386 7.50654L15.1652 7.84972L11.8739 4.56429C11.712 4.40881 11.4963 4.32197 11.2718 4.32197C11.0474 4.32197 10.8316 4.40881 10.6698 4.56429L7.02865 8.20415C6.94927 8.28318 6.88627 8.37709 6.84325 8.48051C6.80023 8.58393 6.77803 8.69482 6.77793 8.80683C6.77793 9.03333 6.86825 9.25008 7.02865 9.4095L10.3207 12.7017L9.97786 13.275C9.19694 14.5799 8.60804 15.9904 8.22929 17.4632L8.06107 18.1069H3.42843C3.2011 18.1069 2.98309 18.1972 2.82234 18.358C2.66159 18.5187 2.57129 18.7367 2.57129 18.9641V24.1069C2.57129 24.3343 2.66159 24.5523 2.82234 24.713C2.98309 24.8738 3.2011 24.9641 3.42843 24.9641H4.58815C4.83949 24.2489 5.24627 23.5983 5.7792 23.0591C6.31214 22.5199 6.95797 22.1056 7.67022 21.846C8.38241 21.5862 9.14335 21.4876 9.89825 21.5572C10.6531 21.6268 11.3832 21.863 12.0359 22.2486C12.022 22.0113 11.9999 21.7761 11.9999 21.5355C11.9999 14.9082 17.3725 9.53551 23.9999 9.53551C30.6272 9.53551 35.9999 14.9082 35.9999 21.5355C35.9999 21.7761 35.9777 22.0113 35.9639 22.2486C36.6165 21.863 37.3466 21.6268 38.1015 21.5572C38.8564 21.4876 39.6173 21.5862 40.3295 21.846C41.0418 22.1056 41.6876 22.5199 42.2205 23.0591C42.7535 23.5983 43.1602 24.2489 43.4116 24.9641H44.5713C44.7986 24.9641 45.0166 24.8738 45.1774 24.713C45.3381 24.5523 45.4284 24.3343 45.4284 24.1069V18.9641C45.4284 18.7367 45.3381 18.5187 45.1774 18.358C45.0166 18.1972 44.7986 18.1069 44.5713 18.1069Z" fill="#1E88E5" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_431_6339">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-xl font-bold text-[#2B82D9] mb-3"
                        >{t('community_page.join_mission.cards.collaborate.title')}</motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-[#64748B] text-[16px] max-w-135 leading-relaxed mb-6"
                        >
                            {t('community_page.join_mission.cards.collaborate.desc')}
                        </motion.p>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.7 }}>
                            <Button className="bg-[#2B82D9] hover:bg-[#1E88E5] text-white px-10 py-6 rounded-xl font-semibold transition-all">
                                {t('community_page.join_mission.cards.collaborate.btn')}
                            </Button>
                        </motion.div>
                    </Card>
                </motion.div>

                {/* Card 4: Stay Informed */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.02, y: -10 }}
                >
                    <Card className="border border-gray-200 ring-0 shadow-xl rounded-2xl w-full p-5 sm:p-10 flex flex-col items-center text-center ">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-[#8B5CF6] mb-3"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M44 15.0698V33.9998C44.0001 35.5302 43.4153 37.0029 42.3654 38.1163C41.3155 39.2298 39.8798 39.9 38.352 39.9898L38 39.9998H10C8.46958 39.9999 6.99697 39.4152 5.88348 38.3653C4.76999 37.3153 4.09978 35.8796 4.01 34.3518L4 33.9998V15.0698L22.89 27.6638L23.122 27.7958C23.3954 27.9294 23.6957 27.9988 24 27.9988C24.3043 27.9988 24.6046 27.9294 24.878 27.7958L25.11 27.6638L44 15.0698Z" fill="#8B5CF6" />
                                <path d="M37.9996 8C40.1596 8 42.0536 9.14 43.1096 10.854L23.9996 23.594L4.88965 10.854C5.39123 10.0396 6.08023 9.357 6.89919 8.86298C7.71816 8.36896 8.64335 8.07787 9.59765 8.014L9.99965 8H37.9996Z" fill="#8B5CF6" />
                            </svg>
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-xl font-bold text-[#8B5CF6]  mb-2"
                        >{t('community_page.join_mission.cards.newsletter.title')}</motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.7 }}
                            className="text-[#64748B] text-[16px] max-w-135 leading-relaxed mb-6"
                        >
                            {t('community_page.join_mission.cards.newsletter.desc')}
                        </motion.p>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.8 }}>
                            <Button className="bg-[#8B5CF6] hover:bg-[#8B5CF6] text-white px-10 py-6 rounded-xl font-semibold transition-all">
                                {t('community_page.join_mission.cards.newsletter.btn')}
                            </Button>
                        </motion.div>
                    </Card>
                </motion.div>

            </div>
        </section>
    );
};

export default JoinMission;