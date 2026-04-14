import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const ViewList = () => {
    return (
        <div>
            <div className="space-y-6">
                {[
                    {
                        monthYear: "March 2026",
                        dayName: "Friday March 20",
                        time: "8:30 AM – 10:00 AM",
                        title: "FCHCC Social Cafecito Meeting",
                        description: "FCHCC Members: Mark your calendars to join us at the monthly Social Cafecito event! These meetings are an ideal space for our members to exchange ideas and establish professional relationships. With the participation of the most prominent business leaders in our community, it ensures an enriching experience.",
                        extraInfo: "Its purpose is to bring in speakers every month who will cover topics in: marketing, capital, finance, legal, communities and more! Expand your business network and learn from the best. Social Cafecito meets each month on the 3rd Friday. Not an FCHCC member? Join here.",
                        cta: "Be sure to look out for the meeting invites to learn when registration opens. You can subscribe to our mailing list at fchcc.com."
                    },
                    {
                        monthYear: "March 2026",
                        dayName: "Friday March 20",
                        time: "8:30 AM – 10:00 AM",
                        title: "FCHCC Social Cafecito Meeting",
                        description: "FCHCC Members: Mark your calendars to join us at the monthly Social Cafecito event! These meetings are an ideal space for our members to exchange ideas and establish professional relationships...",
                        extraInfo: "Its purpose is to bring in speakers every month...",
                        cta: "Be sure to look out for the meeting invites to learn when registration opens."
                    }
                ].map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    >
                        <Card className="border border-[#1E88E5] rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                            <CardContent className="p-2.5 space-y-6">
                                {/* Top Row: Date and Time */}
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-bold text-black leading-none">
                                            {event.monthYear}
                                        </h3>
                                        <p className="text-xl font-extrabold text-black">
                                            {event.dayName}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[16px] font-medium text-black">
                                            {event.time} <span className="ml-1">{event.title}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Description Body */}
                                <div className="space-y-4 text-[16px] font-medium leading-relaxed text-black">
                                    <p>{event.description}</p>
                                    <p>
                                        {event.extraInfo}{" "}
                                        <span className="underline cursor-pointer font-medium italic text-black hover:text-[#1E88E5]">Join here.</span>
                                    </p>
                                    <p className="font-medium italic text-black">
                                        {event.cta}{" "}
                                        <span className="underline cursor-pointer text-black hover:text-[#1E88E5]">fchcc.com.</span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>


        </div>
    )
}

export default ViewList