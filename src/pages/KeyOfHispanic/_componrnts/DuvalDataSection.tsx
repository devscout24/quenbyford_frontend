

const DUVAL_DATA = {
  title: "Hispanic Data in Duval County",
  points: [
    "One out of every 11 people living in Duval County is Hispanic. In 2017, 86,941, Hispanics lived in Duval County, representing a 32% increase from 2010.",
    "During the same time period, the non-Hispanic white population in Duval County increased 7%.",
    "During this same time period, the non-Hispanic white population in Duval County increased 4%.",
    "Duval County is divided into six code-based Health Zones (HZ).",
    "Mutually exclusive postcards tied to county organization and demographics.",
    "Every HZ represents the different geographic areas of the county – the urban core (HZ1)",
    "Arlington (HZ2), Southeast (HZ3), Southwest (HZ4), Outer Rim (HZ5), and Beaches (HZ6).",
    "Even if the Hispanic community spans through Duval County, the zip codes with the highest proportion of Hispanic residents are 32,212 (17%), 32,246 (16%), 32,227 (15%), 32,207 (13%), 32,216 (13%) and 32,244 (12%). These zip codes are in HZ 2 and 4."
  ],
  imagePath: "/images/Map1.png"
};

const DuvalDataSection = ({ data = DUVAL_DATA }) => {
  return (
    <section className="w-full bg-white py-16 px-4">

      <div className="max-w-270 mx-auto">


        <div className="bg-[#F8F9FA] rounded-lg p-8 md:p-12 shadow-sm text-left relative">


          <h2 className="text-2xl md:text-[34px] font-bold text-[#2196F3] mb-8">
            {data.title}
          </h2>


          <ul className="space-y-2 mb-10 text-left max-w-225">
            {data.points.map((point, index) => (
              <li key={index} className="flex items-start ml-3">
                {/* Bullet Point - Precisely aligned with first line */}
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


          <div className="flex justify-center mt-6">
            <img
              src={data.imagePath}
              alt="Hispanic Population Map of Duval County"
              className="max-w-full h-auto rounded-md shadow-sm border border-gray-200"
            />
          </div>


      

        </div>
      </div>
    </section>
  );
};

export default DuvalDataSection;