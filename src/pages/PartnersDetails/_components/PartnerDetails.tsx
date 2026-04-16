import { useState } from "react";
import { useTranslation } from "react-i18next";
import BioModal from "./BioModal";
import DetailsCard from "./DetailsCard";
import type { Partner } from "./types";

const StrategicPartners = () => {
  const { t } = useTranslation();
  const [isBioOpen, setIsBioOpen] = useState(false);

  const partnersData: Partner[] = [
    {
      id: 1,
      name: "Florida Blue",
      logo: "/images/5.png",
      website: "#",
      jobsUrl: "#",
      description: t("partners_details.desc1"),
      bio: {
        name: t("partners_details.bio_title"),
        image: "/images/10.png",
        role: t("partners_details.bio_role"),
        text: t("partners_details.bio_text"),
      },
      aboutTitle: t("partners_details.about_title"),
      aboutDescs: [
        t("partners_details.about_desc1"),
        t("partners_details.about_desc2"),
        t("partners_details.about_desc3"),
      ]
    },
    {
      id: 2,
      name: "CMG",
      logo: "/images/6.png",
      website: "#",
      jobsUrl: "#",
      description: "Cox Media Group (CMG) is an industry-leading media company with dominant platforms, programmed locally of high-quality, and deeply engaged with the Northeast Florida community.",
      bio: {
        name: "James Carter",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        role: "Strategic Accounts Manager at CMG",
        text: "James has been with CMG for over 10 years, leading digital transformation initiatives for local businesses in the First Coast area.",
      },
      aboutTitle: "About CMG:",
      aboutDescs: [
        "CMG is a multiplatform media company engaged in local broadcasting, publishing, and digital services. We are committed to providing premium content and innovative solutions to our audiences and advertising partners.",
        "With a focus on local news, weather, and entertainment, CMG serves millions of viewers and listeners across the country through our trusted brands.",
      ]
    },
    {
      id: 3,
      name: "iHeartMedia",
      logo: "/images/7.png",
      website: "#",
      jobsUrl: "#",
      description: "iHeartMedia is the No. 1 audio company in the United States, reaching 9 out of 10 Americans every month, and providing unparalleled results for partners through its massive reach.",
      bio: {
        name: "Sophia Lee",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        role: "Director of Community Relations at iHeartMedia",
        text: "Sophia coordinates iHeartMedia's local outreach programs, ensuring that the Hispanic community has a strong voice in local radio programming.",
      },
      aboutTitle: "About iHeartMedia:",
      aboutDescs: [
        "iHeartMedia is a leading global media and entertainment company specializing in radio, digital, outdoor, mobile, events, and information services.",
        "Our platform provides consumers with a seamless experience across all devices, making us the top choice for listeners and advertisers alike.",
      ]
    },
    {
      id: 4,
      name: "Norsan Media",
      logo: "/images/8.png",
      website: "#",
      jobsUrl: "#",
      description: "Norsan Media is one of the top Hispanic media companies in the Southeastern United States, providing high-quality Spanish-language radio, television, and print content.",
      bio: {
        name: "Michael Hernandez",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        role: "Regional Director at Norsan Media",
        text: "Michael leads Norsan Media's expansion into the Northeast Florida market, focusing on cultural connectivity and business growth for Hispanic entrepreneurs.",
      },
      aboutTitle: "About Norsan Media:",
      aboutDescs: [
        "Norsan Media's mission is to empower the Hispanic community through information and entertainment while providing businesses with the tools to reach this vibrant market.",
        "We pride ourselves on our deep cultural roots and our ability to bridge the gap between businesses and the Hispanic consumer base.",
      ]
    }
  ];

  const [selectedPartner, setSelectedPartner] = useState<Partner>(partnersData[0]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="relative h-[400px] md:h-125 flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30, 58, 95, 0.7), rgba(30, 58, 95, 0.7)), url("/images/Details.png")',
        }}
      >
        <div className="px-4">
          <h1 className="text-3xl md:text-[56px] font-bold mb-4 md:mb-8 capitalize">
            {t("partners_details.hero.title")}
          </h1>
          <p className="text-lg md:text-[36px] capitalize font-normal max-w-4xl mx-auto">
            {t("partners_details.hero.desc")}
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        {/* Logo Tabs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              onClick={() => setSelectedPartner(partner)}
              className={`border-2 p-6 flex items-center justify-center rounded-xl bg-white hover:shadow-lg cursor-pointer transition-all duration-300 ${
                selectedPartner.id === partner.id
                  ? "border-blue-500 shadow-md ring-1 ring-blue-500/20"
                  : "border-gray-100 hover:border-blue-200"
              }`}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 md:max-h-24 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Details Card Component */}
        <DetailsCard 
          selectedPartner={selectedPartner} 
          setIsBioOpen={setIsBioOpen} 
        />
      </div>

      {/* Bio Modal Component */}
      <BioModal
        isOpen={isBioOpen}
        onClose={() => setIsBioOpen(false)}
        title={selectedPartner.bio.name}
        role={selectedPartner.bio.role}
        image={selectedPartner.bio.image}
        bioText={selectedPartner.bio.text}
        detailedBioTitle="Detailed Biography"
        description={selectedPartner.description}
      />
    </div>
  );
};

export default StrategicPartners;
