import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { format } from "date-fns";

interface ViewListProps {
  events?: { date: Date; title: string; time?: string; description?: string; extraInfo?: string; cta?: string }[];
}

const ViewList = ({ events }: ViewListProps) => {
  // Use passed events or fallback
  const listEvents = events && events.length > 0
    ? events.map(evt => ({
        monthYear: format(evt.date, 'MMMM yyyy'),
        dayName: format(evt.date, 'EEEE MMMM d'),
        time: evt.time || "8:30 AM – 10:00 AM",
        title: evt.title,
        description: evt.description || "",
        extraInfo: evt.extraInfo || "",
        cta: evt.cta || ""
      }))
    : [];

  return (
    <div>
      <div className="space-y-6">
        {listEvents.map((event, index) => (
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
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-black leading-none">
                      {event.monthYear}
                    </h3>
                    <p className="text-lg sm:text-xl font-extrabold text-black">
                      {event.dayName}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm sm:text-[16px] font-medium text-black">
                      {event.time} <span className="ml-1 sm:block md:inline">{event.title}</span>
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