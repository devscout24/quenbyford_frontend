import React, { useState } from "react";
import { motion, type Easing, type Variants } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// --- Types ---
interface Membership {
  id: number;
  title: string;
  color: string;
  border: string;
  buttonText: string;
  image: string;
}

// --- Data ---
const MEMBERSHIPS: Membership[] = [
  {
    id: 1,
    title: "GOLD MEMBERSHIP LEVEL",
    color: "#FFB800",
    border: "#FFB800",
    buttonText: "Download the Gold Member Benefits",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "PLATINUM MEMBERSHIP LEVEL",
    color: "#00BFFF",
    border: "#00BFFF",
    buttonText: "Download the Platinum Member Benefits",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  },
];

// --- Animation ---
const EASE: Easing = "easeOut";

const cardVariants = (index: number): Variants => ({
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: EASE },
  },
});

// --- Main Component ---
const MemberBenefits = () => {
  const [loadingId, setLoadingId] = useState<number | null>(null);

  // --- PDF Download ---
  const downloadPDF = async (id: number): Promise<void> => {
    const element = document.getElementById(`card-${id}`);
    if (!element) return;

    setLoadingId(id);

    try {
      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = 210;
      const pdfHeight = 297;

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // First page
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Extra pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save(`membership-${id}.pdf`);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1D91E7] mb-6">
            Membership Benefits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the membership that fits you best and download full benefits instantly.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {MEMBERSHIPS.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants(index)}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* PDF Capture Area */}
              <div
                id={`card-${item.id}`}
                className="relative overflow-hidden rounded-lg shadow-2xl mb-8 border-[12px] border-[#003366]"
              >
                <div
                  className="border-4 p-1"
                  style={{ borderColor: item.border }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    crossOrigin="anonymous"
                    className="w-full h-auto block"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#003366]/60 flex flex-col items-center justify-center text-white p-6 text-center">
                    <h3
                      style={{ color: item.color }}
                      className="font-bold text-xl mb-2"
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs uppercase tracking-widest mb-2">
                      Why Should You Join FCHCC?
                    </p>
                    <p className="text-xs max-w-xs">
                      Get exclusive access, premium support, and community benefits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.08 }}
                onClick={() => downloadPDF(item.id)}
                disabled={loadingId === item.id}
                style={{ backgroundColor: item.color }}
                className="text-white px-8 py-3 rounded-full font-bold text-sm shadow-md transition disabled:opacity-60"
              >
                {loadingId === item.id
                  ? "Downloading..."
                  : item.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberBenefits;