import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion,  } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // Animation variants for text staggered effect
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 + i * 0.1,
                duration: 0.6,
                ease: "easeOut" as const
            }
        })
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-200 relative overflow-hidden">

            {/* Background Marquee Effect */}
            <div className="absolute inset-0 z-0 opacity-50 flex">
                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        duration: 100, // Extremely slow movement
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex min-w-[200%] h-full"
                >
                    <div className="w-1/2 h-full bg-[url('/images/ge.png')] bg-cover bg-center" />
                    <div className="w-1/2 h-full bg-[url('/images/ge.png')] bg-cover bg-center" />
                </motion.div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-20 pointer-events-none">
                <div className="bg-black/10"></div>
                <div className="bg-black/5"></div>
                <div className="bg-black/10"></div>
                <div className="bg-black/5"></div>
            </div>

            {/* Main Card */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-2xl mx-4 p-[1px] rounded-[32px] bg-gradient-to-b from-white/60 via-white/40 to-orange-400"
            >
                <div className="bg-white/80 backdrop-blur-md rounded-[31px] p-12 flex flex-col items-center text-center shadow-2xl">

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-8"
                    >
                        <img
                            src="/images/1.png"
                            alt="FCHCC Logo"
                            className="h-16 w-auto object-contain"
                        />
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        custom={0}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl font-bold text-black mb-2"
                    >
                        {t("welcome.title")}
                    </motion.h1>
                    <motion.p
                        custom={1}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-black mb-8"
                    >
                        {t("welcome.subtitle")}
                    </motion.p>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="w-full h-[1px] bg-gray-200 mb-8 origin-center"
                    />

                    {/* Section */}
                    <div className="mb-8">
                        <motion.h2
                            custom={2}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-2xl font-bold text-black mb-2"
                        >
                            {t("welcome.portal_title")}
                        </motion.h2>
                        <motion.p
                            custom={3}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-black text-[16px] px-10"
                        >
                            {t("welcome.portal_desc")}
                        </motion.p>
                    </div>

                    {/* Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        onClick={() => navigate('/login')}
                        className="relative overflow-hidden group w-full py-4 bg-blue-600 text-white rounded-xl font-medium flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hover:bg-blue-700"
                    >
                        {/* Sweep Effect */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />

                        <span className="relative z-10 flex items-center text-xl">
                            {t("welcome.enter_btn")}
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </motion.button>

                    {/* Footer inside */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-8 text-xs text-gray-400 uppercase tracking-widest font-medium"
                    >
                        {t("welcome.celebrating")}
                    </motion.p>
                </div>
            </motion.div>

            {/* Bottom Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute bottom-6 z-10 text-white/80 text-xs tracking-wide"
            >
                {t("footer.chamber_name", "First Coast Hispanic Chamber of Commerce")}
            </motion.div>
        </div>
    );
};

export default Welcome;