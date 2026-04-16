import { useState } from "react";
import { motion } from "framer-motion";
import SubscribePopup from "../../../components/SubscribePopup";

const CommunityHero = () => {
    const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // This makes them come in one by one
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        <div>
            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-[400px] sm:min-h-[500px] lg:h-154 flex items-center overflow-hidden">

                {/* Background Video + Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    {/* Video Element */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >

                        <source src="/Video/0304(1).mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>


                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#F97316]/50"></div>

                    <div className="absolute inset-0 bg-[#0A2540]/40"></div>
                </div>

                {/* Content (Animated Container) */}
                <motion.div
                    className="relative z-10 ml-4 sm:ml-12 md:ml-20 lg:ml-75 space-y-4 sm:space-y-6 py-12 sm:py-16 pr-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="max-w-[780px] text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-medium text-white leading-tight"
                    >
                        Empowering Our HispanicCommunity Through Action
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-white text-sm sm:text-base md:text-xl leading-relaxed max-w-[612px]"
                    >
                        Building bridges, creating opportunities, strengthening
                        our community together
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <button className="bg-[#F57C00] text-white px-6 md:px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg">
                            See Your Impact
                        </button>

                        <button
                            onClick={() => setIsSubscribeOpen(true)}
                            className="border border-orange-500 text-orange-500 px-6 md:px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition"
                        >
                            Get Involved
                        </button>
                    </motion.div>
                </motion.div>

                <SubscribePopup
                    isOpen={isSubscribeOpen}
                    onClose={() => setIsSubscribeOpen(false)}
                />


                <div className="absolute bottom-[-1px] left-0 w-full leading-0 z-20 overflow-hidden"></div>
            </section>
        </div>
    );
};

export default CommunityHero;