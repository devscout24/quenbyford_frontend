import { useTranslation } from 'react-i18next';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import type { Partner } from './types';

interface DetailsCardProps {
  selectedPartner: Partner;
  setIsBioOpen: (open: boolean) => void;
}

const DetailsCard = ({ selectedPartner, setIsBioOpen }: DetailsCardProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="border border-blue-100 rounded-2xl p-6 md:p-10 bg-white shadow-sm">
      <div className="flex flex-col md:flex-row items-center md:items-center mb-8 gap-8">
        <div className="w-full max-w-[200px] md:max-w-75 shrink-0 flex justify-center">
          <img src={selectedPartner.logo} alt={selectedPartner.name} className="w-full h-auto object-contain" />
        </div>
        <p className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed text-center md:text-left">
          {t("partners_details.visit")} {selectedPartner.name}{" "}
          <a href={selectedPartner.website} className="text-blue-500 italic hover:underline">
            {t("partners_details.here")}
          </a>
          . | {t("partners_details.job_portal")}{" "}
          <a href={selectedPartner.jobsUrl} className="text-blue-500 italic hover:underline">
            {t("partners_details.here")}
          </a>
          .
        </p>
      </div>

      <div className="space-y-8 text-black font-normal text-lg md:text-xl leading-relaxed">
        <p className="text-gray-800">
          {selectedPartner.description}
        </p>

        {/* Profile Highlight */}
        <div className="flex flex-col md:flex-row items-center gap-6 border border-blue-100 rounded-xl p-6 bg-blue-50/30">
          <Avatar className="w-24 h-24 shrink-0 border-2 border-orange-200">
            <AvatarImage
              src={selectedPartner.bio.image}
              alt={selectedPartner.bio.name}
              className="object-cover"
            />
            <AvatarFallback>{selectedPartner.bio.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
          </Avatar>
          
          <div className="text-lg md:text-xl font-normal text-black text-center md:text-left">
            <p>
              <span className="font-bold italic text-blue-900">{selectedPartner.bio.name}</span> {selectedPartner.bio.text}
            </p>
            <p className="mt-4">
              {selectedPartner.bio.role}{" "} 
              <button
                onClick={() => setIsBioOpen(true)}
                className="text-blue-600 italic hover:underline font-normal"
              >
                {t("partners_details.bio_click")}
              </button>{" "}
              {t("partners_details.bio_read")}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl md:text-[36px] font-bold text-[#1E73BE] mb-6 border-b border-blue-50 pb-2">
            {selectedPartner.aboutTitle}
          </h2>
          <div className="space-y-4">
            {selectedPartner.aboutDescs.map((desc, i) => (
              <p key={i} className="text-gray-800">
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;