

const ScholarshipRequirements = () => {
  const commitments = [
    "Attendance at the ATD luncheon",
    "Write a Thank You note to the donor (within 30 days, 200 words or less)",
    "Provide a 2-minute video (Include: Name, Name of School, Major, How this scholarship will help you)",
  ];

  const criteria = [
    "Grades / GPA – 25%",
    "Essay – 25%",
    "Interview – 20%",
    "Community Involvement – 15%",
    "Recommendation Letters – 10%",
    "FAFSA – 5%",
  ];

  return (
    <div className="bg-gray-100 py-15 flex justify-center items-center">
      {/* Main Container */}
      <div className="bg-[#f8f8f8] rounded-xl overflow-hidden max-w-300 w-full shadow-sm border border-gray-50 flex flex-col md:flex-row">
        
        {/* Left Section: Mandatory Commitments */}
        <div className=" w-full md:w-[650px] p-10">
          <h3 className="text-[#2589f5] text-xl font-bold mb-8">
            Mandatory Commitments after Receiving Scholarship:
          </h3>
          <ul className="space-y-2">
            {commitments.map((item, index) => (
              <li key={index} className="flex items-start text-[#000000] text-lg font-normal">
                <span className="mr-3 mt-[10px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] bg-gray-300 my-8" />

        {/* Right Section: Criteria for Applying */}
        <div className=" p-10">
          <h3 className="text-[#f58220] text-xl font-bold mb-8">
            Criteria for Applying for the ATD Scholarship:
          </h3>
          <ul className="space-y-2">
            {criteria.map((item, index) => (
              <li key={index} className="flex items-start text-[#000000] text-lg font-normal">
                <span className="mr-3 mt-[10px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default ScholarshipRequirements;