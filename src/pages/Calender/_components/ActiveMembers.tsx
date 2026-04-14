import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const ActiveMembersButton = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6 p-8  mb-30 ">
      
      {/* Orange/Invite Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Left Accent Bar */}
          <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#F97316] rounded-l-full" />
          
          <CardContent className="p-8 flex items-center justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-black leading-8 tracking-tight w-145">
                Invite for active members, went to submit events for FCHCC!
              </h3>
              <p className="text-[#4B5563] text-[16px] font-semibold">
                Submit active members,{" "}
                <a href="#" className="text-[#F97316] underline underline-offset-4 hover:text-[#F97316]/80">
                  click here
                </a>.
              </p>
            </div>
            
            <Button className="rounded-full px-8 py-6 bg-[#1E293B] hover:bg-slate-700 text-white font-semibold">
              join now
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Blue/Subscribe Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <Card className="relative overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl transition-shadow duration-300">
          {/* Left Accent Bar */}
          <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-blue-500 rounded-l-full" />
          
          <CardContent className="p-8 flex items-center justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-black leading-8 tracking-tight">
                Subscribe to our mailing list
              </h3>
              <p className="text-[#4B5563] text-[16px] font-semibold">
                Subscribe to our mailing list on below:{" "}
                <a href="#" className="text-blue-500 underline underline-offset-4 hover:text-blue-600">
                  subscribe here
                </a>.
              </p>
            </div>
            
            <Button className="rounded-full px-8 py-6 bg-[#1E293B] hover:bg-slate-700 text-white font-semibold">
              Subscribe
            </Button>
          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
};

export default ActiveMembersButton;