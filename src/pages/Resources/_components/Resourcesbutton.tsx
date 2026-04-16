import { useState } from 'react';
import PartnerProfile from './PartnerProfile';

const ResourceGrid = () => {

  const resources = [
    { id: 1, label: "Request for Proposal Opportunities", slug: "rfp-opportunities" },
    { id: 2, label: "SBDC Programs", slug: "sbdc-programs" },
    { id: 3, label: "Disaster Recovery Assistance", slug: "disaster-recovery" },
    { id: 4, label: "JTA Programs", slug: "jta-programs" },
    { id: 5, label: "SBA Programs", slug: "sba-programs" },
    { id: 6, label: "Business Training Opportunities", slug: "business-training" },
    { id: 7, label: "SBDC at UNF Resources", slug: "unf-resources" },
    { id: 8, label: "About our Partners", slug: "our-partners" },
  ];

  // Defaulting to 8 initially so the Partner Profile shows immediately, or 0 if you want it blank initially.
  // We'll set it to 8 based on the context so the page looks populated.
  const [activeTab, setActiveTab] = useState(8);

  const handleButtonClick = (id: number) => {
    setActiveTab(id);
  };

  // Temporary mock data to pass into the PartnerProfile
  const mockPartnerData = {
    name: "Florida Blue",
    logo: "/images/5.png",
    website: "#",
    jobs: "#",
    intro: "Florida Blue has been a member of FCHCC since January of 2005. Their organization is a loyal, long-standing partner of the Chamber’s initiatives, programs and sponsored many events. Florida Blue won Corporate Business of the Year at the 2023 Excellence in Business Awards.",
    aboutShort: "Advancing health has always been at the center of our story. From the critical coverage that delivers peace of mind to the full breadth of health solutions that care for every aspect of your well-being, you can rest assured that Florida Blue is always looking out for you, your family and your community as we have done for more than 75 years.",
    aboutFull: [
      "Advancing health has always been at the center of our story. From the critical coverage that delivers peace of mind to the full breadth of health solutions that care for every aspect of your well-being, you can rest assured that Florida Blue is always looking out for you, your family and your community as we have done for more than 75 years.",
      "We are so much more than an insurer. We’re your health partner, working to lower your costs, make your benefits easy to access and providing you with a broad range of health services that include traditional medical care, mental well-being,preventive care and so much more. As a policyholder-owned not-for-profit, we invest resources to keep health care costslower and work hard to ensure as many people as possible have access to high-quality, affordable and equitable care.",
      "We are so much more than an insurer. We’re your health partner, working to lower your costs, make your benefits easy toaccess and providing you with a broad range of health services that include traditional medical care, mental well-being,preventive care and so much more. As a policyholder-owned not-for-profit, we invest resources to keep health care costs lower and work hard to ensure as many people as possible have access to high-quality, affordable and equitable care.",
      "We are so much more than an insurer. We’re your health partner, working to lower your costs, make your benefits easy toaccess and providing you with a broad range of health services that include traditional medical care, mental well-being,preventive care and so much more. As a policyholder-owned not-for-profit, we invest resources to keep health care costs lower and work hard to ensure as many people as possible have access to high-quality, affordable and equitable care.",

      "We’re always working, always investing and always advancing toward a better state of health. "
    ]
  };

  const selectedResource = resources.find(r => r.id === activeTab);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 my-15">
      {/* Header Text */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-lg sm:text-xl font-medium text-black mb-4 sm:mb-8">
          FCHCC is dedicated to helping you have the tools you need to help your business grow and operate.
        </h2>
        <p className="text-black text-lg sm:text-xl font-normal">
          This page is designed to provide you resources and tools from FCHCC's members and partners.
        </p>
      </div>

      {/* Dynamic Button Grid (Always Visible) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {resources.map((item) => (
          <button
            key={item.id}
            onClick={() => handleButtonClick(item.id)}
            className={`
              flex items-center justify-center text-center p-4 sm:p-6 min-h-[80px] sm:min-h-24 text-base sm:text-lg md:text-xl font-medium transition-all duration-200 rounded-md border cursor-pointer
              ${activeTab === item.id
                ? 'border-[#1E88E5] text-[#1E88E5] bg-blue-50 shadow-sm ring-1 ring-[#1E88E5]'
                : 'border-slate-200 text-black bg-white hover:border-[#1E88E5] hover:text-[#1E88E5] hover:shadow-md'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Conditionally Rendered Content Below Grid */}
      {activeTab !== 0 && (
        <div className="pt-8 mt-8 border-t border-slate-200 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 pb-2">
            {selectedResource?.label}
          </h2>

          {/* Render the same design for every button, just changing the image & title */}
          <PartnerProfile
            data={{
              ...mockPartnerData,
              name: selectedResource?.label || mockPartnerData.name,
              logo: `/images/${activeTab}.png`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ResourceGrid;