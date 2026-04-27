

const BUSINESS_COMMUNITY_DATA = {
  title: "Thriving Business Community",
  source: "Source: United States Hispanic Chamber of Commerce",
  points: [
    "Latinos are opening more small businesses than anyone else in the U.S.",
    "With a total of 4.7 million Latino-owned businesses in the U.S., one in four new businesses in the U.S. is Latino-owned.",
    "Over the past ten years, the number of Latino business owners grew 34%, compared to 1% for all business owners in the U.S."
  ]
};

const ThrivingBusinessCommunity = ({ data = BUSINESS_COMMUNITY_DATA }) => {
  return (
    <section className="w-full bg-white pb-16 px-4">
    
      <div className="max-w-270 mx-auto">
        
       
        <div className="bg-[#F8F9FA] rounded-lg p-8 md:p-16 shadow-sm text-left">
          
         
          <h2 className="text-2xl md:text-[34px] font-bold text-[#2196F3] mb-12">
            {data.title}
          </h2>

  
          <ul className="space-y-2 mb-10 text-left ">
            {data.points.map((point, index) => (
              <li key={index} className="flex items-start ml-3">
              
                <div className="mt-[0.65em] mr-4 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#2196F3]" />
                </div>
                
                <div className="flex-1">
                  <p className="text-[#000000] text-[16px] font-normal leading-relaxed text-left">
                    {point}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>


        <p className="text-[#000000] text-sm md:text-base mt-10 text-center italic">
          {data.source}
        </p>

      </div>
    </section>
  );
};

export default ThrivingBusinessCommunity;