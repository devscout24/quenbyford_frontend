
import { useTranslation } from "react-i18next";

const AttributesSplitSection = () => {
  const { t } = useTranslation();

  const data = {
    mentor: {
      title: t("mentorship.attributes.mentor.title"),
      color: "#2196F3", 
      items: t("mentorship.attributes.mentor.items", { returnObjects: true }) as string[]
    },
    mentee: {
      title: t("mentorship.attributes.mentee.title"),
      color: "#FF9800", 
      items: t("mentorship.attributes.mentee.items", { returnObjects: true }) as string[]
    }
  };

  return (
    <section className="w-full bg-white pb-16 px-4">
      
      <div className="max-w-270 mx-auto border border-gray-100 shadow-sm rounded-lg overflow-hidden">
        
        
        <div className="flex flex-col md:flex-row bg-[#F8F9FA]">
          
        
          <div className="flex-1 p-8 md:p-12 text-center">
            <h3 
              className="text-xl md:text-3xl font-bold mb-8"
              style={{ color: data.mentor.color }}
            >
              {data.mentor.title}
            </h3>
            <ul className="space-y-2">
              {data.mentor.items.map((item, index) => (
                <li key={index} className="text-[#000000] text-[16px] font-normal">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          
          <div className="hidden md:block w-[1px] bg-gray-300 my-10"></div>
      
          <div className="md:hidden h-[1px] bg-gray-300 mx-10"></div>

       
          <div className="flex-1 p-8 md:p-12 text-center">
            <h3 
              className="text-xl md:text-3xl font-bold mb-8"
              style={{ color: data.mentee.color }}
            >
              {data.mentee.title}
            </h3>
            <ul className="space-y-2">
              {data.mentee.items.map((item, index) => (
                <li key={index} className="text-[#000000] text-[16px] font-normal">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AttributesSplitSection;