

const Mentorship_Data = {
  title: "What is the Mentorship Program?",
  paragraphs: [
    "The mentorship program is a structured one-to-one relationship within a professional or academic setting with the goal to connect people, increase knowledge and build skills for future goals and milestones. The mentorship program is designed to create a partnership which can be rewarding to both people, personally and professionally. It’s an opportunity to develop communication skills, expand viewpoints, and consider new ways of approaching situations.",
    "Our Mentorship Program founded and led by Monica Hernandez, FCHCC President was created to help students learn and gain skills through their mentoring with one of our Business Corporate members who has extensive experience as a business owner and/or managing and running an organization."
  ]
};

const MentorshipHeaderSection = ({ data = Mentorship_Data }) => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-360 mx-auto text-center">
        
        {/* Dynamic Title */}
        <h2 className="text-3xl md:text-[40px] font-bold text-[#1E88E5] mb-8">
          {data.title}
        </h2>

        {/* Dynamic Paragraphs Mapping */}
        <div className="space-y-5 text-[#000000] leading-relaxed text-base md:text-[16px]">
          {data.paragraphs.map((text, index) => (
            <p key={index}>
              {text}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MentorshipHeaderSection;