

const BENEFITS_DATA = {
  title: "The mentorship program benefits both the mentee and mentor in the following ways:",
  items: [
    "Mentees can expand their knowledge and skills, gain valuable advice from a more experienced person, and build their professional networks",
    "Helps identify career paths for students and support students’ personal growth.",
    "Provides an opportunity for students to learn and practice professional networking skills.",
    "Equips students with the understanding and tools to make ethical and informed decisions.",
    "Shapes students into confident graduates with excellent leadership, communication, critical thinking, professionalism and other skills important to the transition to the world of work.",
    "Helps students identify and pursue opportunities for employment related to their degrees."
  ]
};

const ProgramBenefits = ({ data = BENEFITS_DATA }) => {
  return (
    <section className="w-full bg-white pb-16 px-4">
      {/* Container restricted to 1000px */}
      <div className="max-w-360 mx-auto">

        {/* Light Gray Card Background */}
        <div className="bg-[#F8F9FA] rounded-lg p-8 md:p-12 shadow-sm">

          {/* Section Header */}
          <h3 className="text-xl md:text-[34px] font-bold text-[#1E88E5] mb-8 ">
            {data.title}
          </h3>

          {/* Benefits List */}
          <ul className="space-y-2">
            {data.items.map((benefit, index) => (
              <li key={index} className="flex items-start">
                {/* Bullet Point - Precisely aligned with first line */}
                <div className="mt-[0.65em] mr-4 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#1E88E5]" />
                </div>

                <div className="flex-1">
                  <p className="text-[16px] leading-relaxed font-normal text-black text-left">
                    {benefit}
                  </p>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default ProgramBenefits;