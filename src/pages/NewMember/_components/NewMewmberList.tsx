import { Button } from "@/components/ui/button";


const MemberCard = ({ title, companies }: { title: string; companies: string[] }) => (
  <div className="bg-white w-99 h-55 border border-[#1E88E5] rounded-xl px-6 py-4   shadow-sm hover:shadow-md transition-shadow ">
    <h3 className="text-[32px] font-medium text-[#000000] mb-11.5 pb-2">
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
    <div className="max-w-7xl mx-auto my-15 bg-white font-sans text-center">
      {/* Header */}
      <h2 className="text-[50px] font-bold text-[#1E88E5]  mb-8">New and Renewing Members</h2>
      <p className="max-w-2xl mx-auto text-[#000000] mb-16 text-xl font-normal">
        We thank our new and renewing members for their support and partnership. And, we look forward to our continued growth!
      </p>

      {/* Month Wise Lists */}
      <div className="space-y-12 text-left ">
        {months.map((month, mIdx) => (
          <div key={mIdx}>
            <h4 className="text-[32px] font-medium text-[#000000] mb-6">{month.name}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {month.sections.map((section, sIdx) => (
                <MemberCard key={sIdx} title={section.title} companies={section.companies} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination / Year Selector */}
      <div className="flex justify-center gap-2 mt-16">
        <Button className="px-4 py-1 bg-orange-500 text-white rounded font-bold text-sm">2025</Button>
        <Button className="px-4 py-1 border border-gray-200 text-gray-700 rounded font-bold text-sm hover:bg-gray-50">2024</Button>
        <Button className="px-4 py-1 border border-gray-200 text-gray-700 rounded font-bold text-sm hover:bg-gray-50">2023</Button>
      </div>
    </div>
  );
};

export default RenewingMembers;