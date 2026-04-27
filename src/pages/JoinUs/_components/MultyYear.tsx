import { useTranslation } from "react-i18next";


const DiscountSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-16 px-4">
    
      <div className="max-w-360 mx-auto text-center">
        
       
        <h2 className="text-[40px] font-bold text-[#111827] mb-10">
          {t('join_us.discounts.title')}
        </h2>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          
        
          <div className="bg-[#1E88E5] text-white w-full sm:w-87.5 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <p className="text-[40px] font-bold mb-1">10%</p>
            <p className="text-2xl font-bold mb-2">{t('join_us.discounts.off')}</p>
            <p className="text-sm font-normal text-white/80">{t('join_us.discounts.agreement_2')}</p>
          </div>

          
          <div className="bg-[#FF781F] text-white w-full sm:w-87.5 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <p className="text-[40px] font-bold mb-1">30%</p>
            <p className="text-2xl font-bold mb-2">{t('join_us.discounts.off')}</p>
            <p className="text-sm font-normal text-white/80">{t('join_us.discounts.agreement_3')}</p>
          </div>
          
        </div>

   
        <p className="text-sm text-[#6A7282] italic max-w-sm mx-auto">
          {t('join_us.discounts.processing_fee')}
        </p>

      </div>
    </div>
  );
};

export default DiscountSection;