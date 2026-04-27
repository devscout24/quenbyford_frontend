import { Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


interface JobCardProps {
  price: string;
  duration: string;
}

const JobListing = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-360 mx-auto px-4">
        
        <h2 className="text-2xl md:text-[50px] font-bold text-center text-[#000000] mb-15">
          {t("hiring_card.non_member.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <JobCard price="$25" duration={`1 ${t("hiring_card.non_member.durations.month")}`} />
          <JobCard price="$125" duration={`6 ${t("hiring_card.non_member.durations.months")}`} />
          <JobCard price="$225" duration={`12 ${t("hiring_card.non_member.durations.months")}`} />
        </div>
      </div>
    </section>
  );
};


const JobCard = ({ price, duration }: JobCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white border-2 border-[#1D91E7] shadow-[#1D91E7]/10 shadow-2xl rounded-xl p-8  flex flex-col items-start transition-transform hover:scale-105">
      
      <div className="bg-[#1D91E7] p-3 rounded-xl mb-6 shadow-md">
        <Crown size={28} className="text-white" />
      </div>

      <h3 className="text-3xl font-bold text-black my-5">{t("hiring_card.non_member.card_title")}</h3>
      <p className="text-gray-400 text-sm mb-6">{t("hiring_card.non_member.card_desc")}</p>

      <div className="w-full flex justify-between items-baseline border-t border-gray-100 pt-6 mb-8">
        <span className="text-3xl font-normal text-[#1D91E7]">{price}</span>
        <span className="text-xl font-medium text-[#1D91E7]">{duration}</span>
      </div>

    <Link 
    to="https://form.jotform.com/fchcc/membership-renewal-application" 
    className="w-full flex justify-center items-center bg-[#1D91E7] hover:bg-[#157dc9] text-white py-3 rounded-2xl font-bold text-sm transition-colors shadow-md"
  >
    {t("hiring_card.non_member.btn")}
  </Link>
    </div>
  );
};

export default JobListing;