import SponserSection from '@/pages/ADTScholarship/_components/SponserCard';
import React from 'react';
import { useTranslation } from 'react-i18next';


interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
}


export const galleryData: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/400/300?random=1",
    title: "Laptop Donation 1"
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/400/300?random=2",
    title: "Laptop Donation 2"
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/400/300?random=3",
    title: "Laptop Donation 3"
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/400/300?random=4",
    title: "Laptop Donation 4"
  }
];

const LaptopDonationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-15 text-center font-sans">
      {/* Header Text */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-[40px] font-medium text-black leading-snug max-w-6xl mx-auto">
          {t("scholarship.laptop_donation")}
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ">
        {galleryData.map((item: GalleryItem) => (
          <div
            key={item.id}
            className="group relative  cursor-pointer overflow-hidden rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className=" object-cover w-full h-[250px] transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      <SponserSection />
    </section>
  );
};

export default LaptopDonationSection;