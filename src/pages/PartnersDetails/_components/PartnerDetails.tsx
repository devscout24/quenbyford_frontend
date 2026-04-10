const StrategicPartners = () => {
  const logos = [
    { name: "Florida Blue", url: "/images/5.png" },
    { name: "CMG", url: "/images/6.png" },
    { name: "iHeartMedia", url: "/images/7.png" },
    { name: "Norsan Media", url: "/images/8.png" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="relative h-125 flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30, 58, 95, 0.7), rgba(30, 58, 95, 0.7)), url("/images/Details.png")',
        }}
      >
        <h1 className="text-4xl md:text-[56px] font-bold mb-8 capitalize">
          FCHCC Strategic Partners
        </h1>
        <p className="text-xl md:text-[36px] capitalize font-normal">
          Learn More About Our Strategic Partners!
        </p>
      </div>

      <div className="max-w-335 mx-auto px-4 py-12">
        {/* Logo Tabs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`border-2 p-4 flex items-center justify-center rounded-md bg-white hover:shadow-md cursor-pointer transition-all ${index === 0 ? 
                "border-blue-400" : "border-gray-200"}`}
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="max-h-24 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Details Card */}
        <div className="border border-blue-200 rounded-xl p-8 bg-white shadow-sm">
          <div className="flex flex-col md:flex-row j items-start md:items-center mb-6 gap-6">
            <img src={logos[0].url} alt="Selected Logo" className="h-25.25" />
            <p className="text-xl text-gray-600 font-normal">
              Visit Florida Blue{" "}
              <a href="#" className="text-blue-500 italic">
                here
              </a>
              . | Check out Florida Blue's job portal{" "}
              <a href="#" className="text-blue-500 italic">
                here
              </a>
              .
            </p>
          </div>

          <div className="space-y-6 text-black font-normal text-xl leading-relaxed">
            <p>
              <span className="font-bold">Florida Blue</span> has been a member
              of FCHCC since January of 2005. Their organization is a loyal,
              long-standing partner of the Chamber’s initiatives, programs and
              sponsored many events. Florida Blue won <span className="font-bold">Corporate Business of the
              Year </span > at the 2023 Excellence in Business Awards.
            </p>

            {/* Profile Highlight */}
            <div className="flex flex-col md:flex-row items-center gap-6 border border-blue-100 rounded-lg p-4 bg-blue-50/30">
              <img
                src="/images/10.png"
                alt="Sandra Martin"
                className="w-20 h-20 rounded-full object-cover border-2 border-red-500"
              />
              <div className="text-xl font-normal text-black">
                <p>
                  <span className="font-bold italic">Sandra "Sandy" Martin</span> has
                  been with Florida Blue since 2003. She is an Advanced IT
                  Systems Analyst with strong analytical and problem-solving
                  skills that allows her to resolve business application issues
                  within the IT environment experienced by Florida Blue’s
                  providers.
                </p>
                <p className="mt-2 ml-0">
                  Sandy currently serves as the Vice Chair for FCHCC.{" "}
                  <a href="#" className="text-blue-600 italic">
                    Click here
                  </a>{" "}
                  to read her bio.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-[36px] font-normal text-[#1E73BE] mb-4">
                About Florida Blue:
              </h2>
              <p className="mb-1.75 text-xl font-normal text-black">
                Advancing health has always been at the center of our story.
                From the critical coverage that delivers peace of mind to the
                full breadth of health solutions that care for every aspect of
                your well-being, you can rest assured that Florida Blue is
                always looking out for you, your family and your community as we
                have done for more than 75 years.
              </p>
            <p className="mb-1.75 text-xl font-normal text-black">
                We are so much more than an insurer. We’re your health partner,
                working to lower your costs, make your benefits easy to access
                and providing you with a broad range of health services that
                include traditional medical care, mental well-being, preventive
                care and so much more. As a policyholder-owned not-for-profit,
                we invest resources to keep health care costs lower and work
                hard to ensure as many people as possible have access to
                high-quality, affordable and equitable care.
              </p>
              <p className="mb-1.75 text-xl font-normal text-black">
                We’re always working, always investing and always advancing
                toward a better state of health. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPartners;
