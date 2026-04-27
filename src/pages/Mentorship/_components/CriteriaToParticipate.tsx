
import { useTranslation } from "react-i18next";

const ParticipationCriteria = () => {
  const { t } = useTranslation();

  const data = {
    title: t("mentorship.criteria.title"),
    description: t("mentorship.criteria.description"),
    requirements: t("mentorship.criteria.requirements", { returnObjects: true }) as string[]
  };

  return (
    <section className="w-full bg-white py-12 px-4">
   
      <div className="max-w-360 mx-auto">
        
      
        <div className="bg-[#F8F9FA] rounded-lg p-8 md:p-12 shadow-sm text-left">
          
         
          <h2 className="text-2xl md:text-[34px] font-bold text-[#2196F3] mb-6">
            {data.title}
          </h2>

         
          <p className="text-[#000000] text-[16px] font-normal leading-relaxed max-w-225">
            {data.description}
          </p>

          
          <ul className="space-y-2 text-left max-w-212.5 mt-5">
            {data.requirements.map((item, index) => (
              <li key={index} className="flex items-start">
                {/* Bullet Point - Precisely aligned with first line */}
                <div className="mt-2 mr-4 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#2196F3]" />
                </div>
                
                <div className="flex-1">
                  <p className="text-[#000000] text-[16px] font-normal leading-relaxed text-left">
                    {item}
                  </p>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default ParticipationCriteria;