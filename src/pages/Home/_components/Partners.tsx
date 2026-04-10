import { motion } from "framer-motion";

const partners = [
  { name: "Latina", logo: "/images/image1.png" },
  { name: "CMG", logo: "/images/image2.png" },
  { name: "Flow", logo: "/images/image3.png" },
  { name: "Hola", logo: "/images/image4.png" },
  { name: "La Raza", logo: "/images/image5.png" },
  { name: "Rumba", logo: "/images/image5.png" },
  { name: "Estrella", logo: "/images/image3.png" },
];

const CorporateMarquee = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl py-8 mx-auto  bg-white overflow-hidden"
    >
      
      {/* Title */}
     <div className="mb-10 flex items-center gap-4">
 
  <div className="h-0.5 bg-[#F97316]/20 w-50 shrink-0"></div>
  
 
  <h2 className="text-xl font-bold text-[#000000] whitespace-nowrap">
    Corporate Partners
  </h2>
  
 
  <div className="h-0.5 bg-[#F97316]/20 grow"></div>
</div>

      {/* Marquee */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex flex-none gap-16 items-center pr-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* First set */}
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="h-16 w-auto grayscale-0 hover:grayscale-0 transition duration-300 object-contain"
            />
          ))}

          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <img
              key={`dup-${index}`}
              src={partner.logo}
              alt={partner.name}
              className="h-16 w-auto grayscale-0 hover:grayscale-0 transition duration-300 object-contain"
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="mt-10 border-b h-0.5 border border-[#F97316]/20 w-full"></div>
    </motion.div>
  );
};

export default CorporateMarquee;