import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const ProgramsGrid = () => {
    // Dynamic data array for the programs
    const programs = [
        {
            id: 1,
            title: "ATD Scholarship Program",
            description: '"Thanks to the scholarship, I can pursue my degree and achieve my dreams!"',
            image: "/images/Frame 2087328089 (1).png",
            buttonText: "Apply Now",
            themeColor: "bg-[#F97316]", // Brand Orange
        },
        {
            id: 2,
            title: "JSEB Program",
            description: '"The certification helped our business grow and reach new opportunities! Learn more"',
            image: "/images/Frame 2087328089 (2).png",
            buttonText: "Learn More",
            themeColor: "bg-[#3B82F6]", // Brand Blue
        },
        {
            id: 3,
            title: "Prospera Pro",
            description: '"Thanks to the scholarship, I can pursue my degree and achieve my dreams!"',
            image: "/images/Frame 2087328089.png",
            buttonText: "Apply Now",
            themeColor: "bg-[#F97316]",
        },
        {
            id: 4,
            title: "JSEB Program",
            description: '"The certification helped our business grow and reach new opportunities! Learn more"',
            image: "/images/Frame 2087328090.png",
            buttonText: "Apply Now",
            themeColor: "bg-[#F97316]",
        }
    ];

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
            transition: { duration: 0.7 },
        },
    };

    return (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-16 bg-white">
            {/* Centered Section Header */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-4"
            >
                Programs That Transform Lives
            </motion.h2>

            {/* Grid Layout: 1 column on mobile, 2 on desktop */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                {programs.map((program) => (
                    <motion.div key={program.id} variants={itemVariants}>
                        <Card
                            className="border-gray-100 border ring-0 shadow-xl rounded-xl overflow-hidden p-3 sm:p-6"
                        >
                            <CardContent className="p-0 space-y-6">

                                {/* Rounded Image Container */}
                                <div className="rounded-xl overflow-hidden aspect-[16/10]">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="space-y-3">
                                    <h3 className="text-lg sm:text-2xl font-bold text-black w-full">
                                        {program.title}
                                    </h3>
                                    <p className="text-[#000000]/60 italic text-xs sm:text-[14px] font-normal leading-relaxed w-full">
                                        {program.description}
                                    </p>
                                </div>

                                {/* Action Button */}
                                <Button
                                    className={`w-full py-2.5 px-4 h-12 rounded-full text-white font-bold text-[16px] font-normal transition-all active:scale-95 ${program.themeColor} hover:opacity-90`}
                                >
                                    {program.buttonText}
                                </Button>

                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ProgramsGrid;