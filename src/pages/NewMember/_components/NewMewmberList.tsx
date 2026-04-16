import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const MemberCard = ({ title, companies }: { title: string; companies: string[] }) => (
  <div className="bg-white w-full border border-[#1E88E5] rounded-xl px-4 sm:px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl sm:text-2xl md:text-[32px] font-medium text-[#000000] mb-6 sm:mb-11.5 pb-2">
      {title}
    </h3>
    <div className="space-y-4">
      {companies.map((company, index) => (
        <p key={index} className="text-[#F97316] text-sm font-medium mt-4">
          {company}
        </p>
      ))}
    </div>
  </div>
);

const RenewingMembers = () => {
  const { t } = useTranslation();

  const months = [
    {
      name: "April 2025",
      sections: [
        { title: "Large Corporation # 1", companies: ["PNC Bank", "SOHO Network Solutions, Inc."] },
        { title: "Large Corporation # 2", companies: ["PNC Bank", "SOHO Network Solutions, Inc."] },
        { title: "Small Business # 1", companies: ["PNC Bank", "SOHO Network Solutions, Inc."] },
      ]
    },
    {
      name: "March 2025",
      sections: [
        { title: "Large Corporation # 1", companies: ["PNC Bank", "SOHO Network Solutions, Inc."] },
        { title: "Large Corporation # 2", companies: ["PNC Bank", "SOHO Network Solutions, Inc."] },
        { title: "Small Business # 1", companies: ["PNC Bank", "SOHO Network Solutions, Inc."] },
      ]
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-15 bg-white font-sans text-center">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl md:text-[50px] font-bold text-[#1E88E5] mb-4 sm:mb-8">{t("new_members.title")}</h2>
      <p className="max-w-2xl mx-auto text-[#000000] mb-8 sm:mb-16 text-base sm:text-xl font-normal">
        {t("new_members.desc")}
      </p>

      {/* Month Wise Lists */}
      <div className="space-y-12 text-left ">
        {months.map((month, mIdx) => (
          <div key={mIdx}>
            <h4 className="text-2xl sm:text-[32px] font-medium text-[#000000] mb-4 sm:mb-6">{month.name}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {month.sections.map((section, sIdx) => (
                <MemberCard key={sIdx} title={section.title} companies={section.companies} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination / Year Selector */}
      <div className="flex flex-wrap justify-center gap-2 mt-8 sm:mt-16">
        <Button className="px-4 py-1 bg-orange-500 text-white rounded font-bold text-sm">2025</Button>
        <Button className="px-4 py-1 border border-gray-200 text-gray-700 rounded font-bold text-sm hover:bg-gray-50">2024</Button>
        <Button className="px-4 py-1 border border-gray-200 text-gray-700 rounded font-bold text-sm hover:bg-gray-50">2023</Button>
      </div>
    </div>
  );
};

export default RenewingMembers;
