
import { useTranslation } from "react-i18next";

const ProgramGoals = () => {
    const { t } = useTranslation();

    const data = {
        title: t("mentorship.goals.title"),
        description: t("mentorship.goals.description"),
        imagePath: "/images/MentorShip1.png"
    };

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