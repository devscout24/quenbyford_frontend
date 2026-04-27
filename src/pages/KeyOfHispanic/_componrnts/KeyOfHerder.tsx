

const FACTS_DATA = {
  mainTitle: "Facts & Statistics",
  subTitle: "Essential to our History",
  facts: [
    "Latinos have fought in every American war dating back to before the Revolutionary War, making significant contributions, including 60 Hispanic Medal of Honor recipients.",
    "the oldest city in our nation is St. Augustine, Florida – a Spanish settlement.",
    "The oldest capital city in the U.S. today is Santa Fe, New Mexico—a Spanish settlement.",
    "Before Brown vs. Board of Education there was Mendez vs. Westminster—this case regarding Mexican American segregation in California was the precedent for the landmark Supreme Court case."
  ]
};

const KeyOfHeader = ({ data = FACTS_DATA }) => {
  return (
    <section className="w-full bg-white py-16 px-4">
    
      <div className="max-w-270 mx-auto text-center">
        
      
        <h2 className="text-3xl md:text-[50px] font-bold text-[#000000] mb-12">
          {data.mainTitle}
        </h2>

        <h3 className="text-2xl md:text-[34px] font-bold text-left text-[#2196F3] mb-4">
          {data.subTitle}
        </h3>

       
        <ul className="space-y-2 max-w-[900px]">
          {data.facts.map((fact, index) => (
            <li key={index} className="flex items-start ml-3">
              {/* Bullet Point - Precisely aligned with first line */}
              <div className="mt-[0.65em] mr-4 shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#2196F3]" />
              </div>
              
              <div className="flex-1">
                <p className="text-[#000000] text-[16px] font-normal leading-relaxed text-left">
                  {fact}
                </p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default KeyOfHeader;