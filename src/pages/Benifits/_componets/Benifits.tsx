import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useTranslation } from "react-i18next";

// --- Types ---
interface Membership {
  id: number;
  title: string;
  color: string;
  border: string;
  buttonText: string;
  image: string;
}

// --- Component ---
const MemberBenefits = () => {
  const { t } = useTranslation();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  // --- Data ---
  const MEMBERSHIPS: Membership[] = [
    {
      id: 1,
      title: t('membership_benefits.gold_title'),
      color: "#FFB800",
      border: "#FFB800",
      buttonText: t('membership_benefits.gold_button'),
      image:
        "/images/Gold-Level-Membership-Brochure-FCHCC-cover 1.png",
    },
    {
      id: 2,
      title: t('membership_benefits.platinum_title'),
      color: "#00BFFF",
      border: "#00BFFF",
      buttonText: t('membership_benefits.platinum_button'),
      image:
        "/images/Platinum-Level-Membership-Brochure-FCHCC-cover-450x600 1.png",
    },
  ];

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

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

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
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[50px] font-bold text-[#1D91E7] mb-6">
            {t('membership_benefits.title')}
          </h2>
          <p className="text-black max-w-2xl text-xl mx-auto">
            {t('membership_benefits.description')}
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {MEMBERSHIPS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center"
            >
              {/* PDF Area */}
              <div
                id={`card-${item.id}`}
                className="relative overflow-hidden rounded-lg shadow-2xl mb-8 "
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
                  
                </div>
              </div>

              {/* Button */}
             <button
  onClick={() => downloadPDF(item.id)}
  disabled={loadingId === item.id}
  style={{ backgroundColor: item.color }}
  className="text-white w-full h-12 px-8 rounded-full font-normal text-xl 
             shadow-md transition duration-300 hover:shadow-lg
             flex items-center justify-center"
>
  {loadingId === item.id
    ? t('membership_benefits.downloading')
    : item.buttonText}
</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberBenefits;