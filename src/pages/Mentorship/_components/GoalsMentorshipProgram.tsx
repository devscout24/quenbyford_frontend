

const GOALS_DATA = {
    title: "Goals of the Mentorship Program",
    description: "In its simplest form, mentoring people to help them grow and develop. The Program leverages the five basic mentoring principles and each mentoring pair will agree on the S.M.A.R.T [Specific, Measurable, Actionable, Realistic and Time oriented] goals of the partnership.",
    imagePath: "/images/MentorShip1.png"
};

const ProgramGoals = ({ data = GOALS_DATA }) => {
    return (
        <section className="w-full bg-white pb-16 px-4">

            <div className="max-w-270 mx-auto">


                <div className="bg-[#F8F9FA] rounded-lg p-8 md:p-14 shadow-sm text-left relative">


                    <h2 className="text-2xl md:text-[34px] font-bold text-[#2196F3] mb-8">
                        {data.title}
                    </h2>


                    <p className="text-[#000000] text-[16px] font-normal leading-relaxed max-w-270 mb-10">
                        {data.description}
                    </p>


                    <div className="mt-2 text-center">
                        <img
                            src={data.imagePath}
                            alt="Mentoring Programs with Impact"
                            className="inline-block max-w-full h-auto rounded-md"
                        />
                    </div>




                </div>
            </div>
        </section>
    );
};

export default ProgramGoals;