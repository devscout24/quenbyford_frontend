import { Calendar, ChevronLeft, ChevronRight,  } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export interface EventData {
  title: string;
  date: string;
  banner: string;
  content: string[];
  gallery: string[];
  galleryLink: string;
  pdf: string;
}


export const NewsSingleDetailPage = ({ data }: { data: EventData }) => {
  return (
    <div className="max-w-7xl mx-auto  bg-white font-sans">

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-xl w-7xl h-212 overflow-hidden mb-8 shadow-sm"
      >
        <img 
          src={data.banner} 
          alt={data.title} 
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-between items-start gap-4 mb-8"
      >
        <h1 className="text-2xl md:text-[40px] font-bold text-black leading-tight">
          {data.title}
        </h1>

        <div className="flex flex-col items-center text-black/50 min-w-16 w-25">
          <Calendar className="w-8 h-8 mb-1" />
          <span className="text-xl uppercase font-normal text-black/50 leading-5 text-center tracking-0.18px mt-2">
            {data.date}
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-6 text-black text-xl text-left uppercase font-normal tracking-tight"
      >
        {data.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </motion.div>

      {/* Gallery */}
      <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10"
    >
      {/* Left Column */}
      <div className="flex flex-col gap-4">
        {data.gallery[0] && (
          <div className="flex-1 overflow-hidden rounded-2xl">
            <img src={data.gallery[0]} className="img-style" />
          </div>
        )}
        {data.gallery[3] && (
          <div className="h-1/3 overflow-hidden rounded-2xl">
            <img src={data.gallery[3]} className="img-style" />
          </div>
        )}
      </div>

      {/* Middle Column */}
      <div className="flex flex-col gap-4">
        {data.gallery[1] && (
          <div className="h-1/4 overflow-hidden rounded-2xl">
            <img src={data.gallery[1]} className="img-style" />
          </div>
        )}
        {data.gallery[4] && (
          <div className="flex-1 overflow-hidden rounded-2xl">
            <img src={data.gallery[4]} className="img-style" />
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4">
        {data.gallery[2] && (
          <div className="flex-1 overflow-hidden rounded-2xl">
            <img src={data.gallery[2]} className="img-style" />
          </div>
        )}
        {data.gallery[5] && (
          <div className="h-1/3 overflow-hidden rounded-2xl">
            <img src={data.gallery[5]} className="img-style" />
          </div>
        )}
      </div>
    </motion.div>

      {/* Footer */}
      <div className="flex flex-col gap-6 mt-12 pt-6 border-t border-slate-100">

        <div className="flex justify-between items-center">
          <p className="text-xl font-normal text-black/80">
            <span className="text-[#1E88E5]">Click here</span>{" "}
            <a href={data.galleryLink}>to view the entire photo gallery!</a>
          </p>

          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-[16px] font-normal text-[#1E88E5] border-[#1E88E5] gap-1 w-45 h-11 p-4 hover:bg-[#1E88E5]/10"
          >
            Get PDF <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.586 2C14.0556 2.00011 14.5101 2.16543 14.87 2.467L15 2.586L19.414 7C19.746 7.33202 19.9506 7.77028 19.992 8.238L20 8.414V20C20.0002 20.5046 19.8096 20.9906 19.4665 21.3605C19.1234 21.7305 18.6532 21.9572 18.15 21.995L18 22H6C5.49542 22.0002 5.00943 21.8096 4.63945 21.4665C4.26947 21.1234 4.04284 20.6532 4.005 20.15L4 20V4C3.99984 3.49542 4.19041 3.00943 4.5335 2.63945C4.87659 2.26947 5.34684 2.04284 5.85 2.005L6 2H13.586ZM12 4H6V20H18V10H13.5C13.1271 9.99998 12.7676 9.86108 12.4916 9.61038C12.2156 9.35968 12.0428 9.01516 12.007 8.644L12 8.5V4ZM12.988 11.848C13.2274 13.3711 14.0239 14.7509 15.223 15.72C16.11 16.437 15.299 17.841 14.235 17.432C12.7965 16.8781 11.2035 16.8781 9.765 17.432C8.7 17.842 7.889 16.437 8.776 15.72C9.97513 14.7509 10.7716 13.3711 11.011 11.848C11.189 10.721 12.811 10.722 12.988 11.848ZM11.998 14.152L11.31 15.348H12.69L11.998 14.152ZM14 4.414V8H17.586L14 4.414Z" fill="#1E88E5"/>
</svg> 
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex justify-between gap-4 mb-16">
          <Button className="text-slate-400 text-[16px] w-45 h-11 p-4 font-medium border-[#F97316] rounded-full   gap-2 hover:bg-slate-50">
            <ChevronLeft className="w-4 h-4" /> Previous
          </Button>

          <Button className="text-slate-400 text-[16px] w-45 h-11 p-4 font-medium border-[#F97316] rounded-full  gap-2 hover:bg-slate-50">
            Next <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </div>
  );
};

// ✅ Export default page (use directly)
