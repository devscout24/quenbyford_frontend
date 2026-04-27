
const POPULATION_DATA = {
  title: "Population Size and Growth",
  source: "Source: Pew Research Center",
  stats: [
    "The U.S. Hispanic population reached 63.6 million in 2022, up from 50.5 million in 2010. The 26% increase in the Hispanic population was faster than the nation’s 8% growth rate but slower than the 34% increase in the Asian population. In 2022, Hispanics made up nearly one-in-five people in the U.S. (19%), up from 16% in 2010 and just 5% in 1970.",
    "Today, one in four (25%) children under 18 is of Hispanic descent.",
    "Hispanics are projected to become 30% of the population by 2060.",
    "65% of all Hispanics Americans are born in the United States.",
    "Shapes students into confident graduates with excellent leadership, communication, critical thinking,",
    "Hispanics have played a major role in U.S. population growth over the past decade. The U.S. population grew by 24.5 million from 2010 to 2022, and Hispanics accounted for 53% of this increase – a greater share than any other racial or ethnic group. The next closest group is non-Hispanic people who identify with two or more races. Their population grew by 8.4 million during this time, accounting for 34% of the overall increase.",
    "Helps students identify and pursue opportunities for employment related to their degrees."
  ]
};

const PopulationStats = ({ data = POPULATION_DATA }) => {
  return (
    <section className="w-full bg-white pb-16 px-4">

      <div className="max-w-270 mx-auto">


        <div className="bg-[#F8F9FA] rounded-lg p-8 md:p-12 shadow-sm">


          <h2 className="text-2xl md:text-[32px] font-bold text-[#2196F3] mb-8 text-left">
            {data.title}
          </h2>


          <ul className="space-y-2">
            {data.stats.map((stat, index) => (
              <li key={index} className="flex items-start ml-3">
                {/* Bullet Point - Precisely aligned with first line */}
                <div className="mt-[0.65em] mr-4 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#2196F3]" />
                </div>

                <div className="flex-1">
                  <p className="text-[#000000] text-[16px] font-normal leading-relaxed text-left">
                    {stat}
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

export default PopulationStats;