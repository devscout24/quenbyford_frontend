

const ScholarshipCriteria = () => {
  const criteria = [
    "U.S. citizen or U.S. permanent resident",
    "DACA Students must provide documentation",
    "Pursuing an Associate's and/or Bachelor's degree (the ATD Scholarship is for undergraduates only)",
    "At least one parent or grandparent of Hispanic/Latino origin from a Spanish speaking country",
    "Minimum GPA 3.0 (must provide official transcript)",
    "A resident of one of the five First Coast counties: Duval, Baker, St. Johns, Clay or Nassau",
    "Completed FAFSA to determine financial need",
    "Answer two (2) short essays",
    "Submit at least one (1) Letter of Recommendation",
    "Attend an interview session",
  ];

  return (
    <div className="bg-gray-100 p-8   flex justify-center items-start">
      {/* Main Card Container */}
      <div className="bg-[#f8f8f8] max-w-300 mx-auto rounded-xl p-10 shadow-xl border  border-gray-50">
        
        {/* Heading */}
        <h2 className="text-[#2589f5] text-[40px] font-bold mb-8 ">
          Criteria for Applying:
        </h2>

        {/* Introductory Text */}
        <p className="text-[#333] text-xl w-full md:w-[155] mb-8 font-normal">
          The Achieving The Dream (ATD) Scholarship is for students of Hispanic/Latino descent 
          who are pursuing an Associate's or Bachelor's Degree and meet the following requirements:
        </p>

        {/* List of Requirements */}
        <ul className="space-y-3">
          {criteria.map((item, index) => (
            <li key={index} className="flex items-start text-[#000000] text-xl font-normal">
              <span className="mr-3 mt-2.5 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScholarshipCriteria;