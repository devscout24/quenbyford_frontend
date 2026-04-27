

const MENTOR_BENEFITS_DATA = {
  title: "Benefits to Mentors",
  items: [
    {
      label: "Build leadership skills",
      description: "helps develop your ability to motivate and encourage others. This can help you become a better business owner, manager, employee, and team member."
    },
    {
      label: "Improve communication skills",
      description: "mentees may come from a different background or environment, the two of you may not \"speak the same language.\" This may force you to find a way to communicate more effectively as you navigate your way through the mentoring relationship."
    },
    {
      label: "Learn new perspectives",
      description: "working with someone less experienced and from a different background, you can gain a fresh perspective on things and learn a new way of thinking which can help in your work life as well as your personal life."
    },
    {
      label: "Advance your career",
      description: "Refining leadership skills can strengthen your on-the-job performance, perhaps helping you build a business, get a promotion to higher management or into management in the first place. Showing that you've helped others learn and grow is becoming more and more essential to advancement in today's business world."
    },
    {
      label: "Gain personal satisfaction",
      description: "It is personally fulfilling to know that you've directly contributed to someone's growth and development. Seeing your mentee succeed as result of your input is a reward in itself."
    }
  ]
};

const MentorBenefitsLeft = ({ data = MENTOR_BENEFITS_DATA }) => {
  return (
    <section className="w-full bg-white pb-16 px-4">
      {/* Container restricted to 1000px */}
      <div className="max-w-360 mx-auto">
        
        {/* Light Gray Card */}
        <div className="bg-[#F8F9FA] rounded-lg p-8 md:p-14 shadow-sm">
          
          {/* Section Header - Centered as per original brand style */}
          <h2 className="text-2xl md:text-[34px] font-bold text-[#2196F3] mb-12 text-center">
            {data.title}
          </h2>

          {/* Left Aligned Benefits List */}
          <ul className="space-y-8">
            {data.items.map((item, index) => (
              <li key={index} className="flex items-start group">
                {/* Bullet Point - Precisely aligned with first line */}
                <div className="mt-[0.65em] mr-4 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#2196F3]" />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-[#000000] text-[16px] leading-relaxed text-left">
                    <span className="font-bold text-gray-900">{item.label}</span>
                    <span className="mx-2 text-gray-400">–</span>
                    {item.description}
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

export default MentorBenefitsLeft;