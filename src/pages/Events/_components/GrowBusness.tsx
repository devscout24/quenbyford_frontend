const cardData = [
  {
    titleTop: "Register",
    titleBottom: "as a vendor",
    icon: "/icons/Frame (5).svg",
    bg: "bg-[#1E88E5]/10",
    btn: "bg-[#1E88E5] hover:bg-blue-700 shadow-blue-200",
  },
  {
    titleTop: "Register",
    titleBottom: "as a participant",
    icon: "/icons/Group.svg",
    bg: "bg-[#F97316]/10",
    btn: "bg-[#F97316] hover:bg-orange-600 shadow-orange-200",
  },
];

const infoData = {
  title: "Learn from Experts",
  desc: `Apply What You Learn. Showcase Your Brand. The Hola Emprende Conference & Business Expo 
  is your two-day destination for growth, connection, and opportunity. Whether you're 
  launching your first venture or looking to scale your business, this is where real 
  learning and real action come together.`,
  image: "/images/GrowIm.png",
};

const GrowBusiness = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-2.5">
        <h1 className="text-[32px] font-bold text-black">Grow Business</h1>
        <p className="max-w-2xl mx-auto text-[rgba(0,0,0,0.60)] text-[16px]">
          Ready to grow your business? Register today and be part of two days of learning, networking, and opportunity!
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} w-[422px] h-[300px] rounded-3xl p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-300 shadow-sm hover:shadow-md`}
          >
            <div className="bg-white p-4 rounded-full mb-6">
              <img src={card.icon} alt="icon" className="w-8 h-8" />
            </div>

            <h2 className="text-xl font-normal text-black mb-2">
              {card.titleTop}
            </h2>

            <p className="text-xl font-normal text-black mb-12">
              {card.titleBottom}
            </p>

            <button
              className={`w-full py-3 px-6 text-white font-medium rounded-xl transition-colors shadow-lg ${card.btn}`}
            >
              Register
            </button>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="grid lg:grid-cols-2 gap-8 items-center pt-27 mxa-w-7xl mx-auto">
        
        <div className="space-y-6 w-[600px]">
          <h2 className="text-[32px] font-medium text-black">
            {infoData.title}
          </h2>

          <p className="text-xl font-normal text-[#000000]/60 leading-relaxed">
            {infoData.desc}
          </p>
        </div>

        <div className="relative group">
          <img
            src={infoData.image}
            alt="info"
            className="rounded-[2rem] w-[600px] h-[400px] object-cover shadow-xl transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>
      </div>

      
    </div>

    
  );
};

export default GrowBusiness;