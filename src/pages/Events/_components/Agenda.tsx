import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from "react-i18next";

const SpeakersSponsors = () => {
  const { t } = useTranslation();
  const speakers = [1, 2, 3, 4, 5]; // Placeholder for speaker data/images

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-15">

      {/* Speakers Section */}
      <div className="bg-[#E9F4FD] rounded-xl p-8 md:p-12 shadow-sm relative">
        <div className="hidden md:flex justify-end">
          <Button className="flex items-center gap-2 px-5 py-2 w-30 h-10 border border-[#1E88E5] rounded-full text-[#1E88E5]   transition-all text-sm font-medium">
            {t("events.agenda.view_all")} <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[48px] font-normal text-[#1D83E4] mx-auto md:ml-auto md:translate-x-12">
            {t("events.agenda.speakers_title")}
          </h2>

        </div>

        {/* Scrollable/Grid Speaker List */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
          {speakers.map((_, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square  rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-blue-400 transition-all shadow-md">
                <img
                  src="/images/Frame 2087328015.png"
                  alt={`Speaker ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Optional: Add text labels here if not using baked-in graphics */}
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full text-sm">
            {t("events.agenda.view_all")} <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="text-center my-16">
        {/* <h3 className="text-xl font-medium text-gray-500">Supported by:</h3> */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 transition-all duration-500">
          <img
            src="/images/fchcc-bank-of-america 1.png"
            alt="Bank of America"
            className="w-full max-w-[444px] h-auto object-contain"
          />

        </div>
      </div>

    </div>
  );
};

export default SpeakersSponsors;
