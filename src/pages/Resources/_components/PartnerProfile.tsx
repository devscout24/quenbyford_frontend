import { Card, CardContent } from "@/components/ui/card";


interface PartnerData {
  name: string;
  logo: string;
  website: string;
  jobs: string;
  intro: string;
  aboutShort: string;
  aboutFull: string[];
}

const PartnerProfile = ({ data }: { data: PartnerData }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Card className="border border-[#1E88E5] rounded-xl overflow-hidden ">
        <CardContent className="p-4 space-y-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row  items-center gap-3">
            <div className="w-75  shrink-0">
              <img
                src={data.logo}
                alt={`${data.name} Logo`}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-xl font-medium text-black ">
              Visit Florida Blue  {data.name}{" "}
              <a href={data.website} className="text-[#1E73BE] underline">here</a> Check out Florida Blue’s job portal {" "}
              <a href={data.jobs} className="text-[#1E73BE] underline">here</a>
            </div>
          </div>

          {/* Intro */}
          <p className="text-black fonnt-normal text-xl text-left ">
            <span className="font-bold text-[#0F172A] ">
              {data.name}
            </span>{" "}
            {data.intro}
          </p>

          {/* About Short */}
          <div className="space-y-4">
            <h2 className="text-4xl font-normal tracking-tighter-0.2px text-[#1E73BE]">
               {data.name}:
            </h2>
            <p className="text-black text-xl fonnt-normal text-left">
              {data.aboutShort}
            </p>
          </div>

          <hr className="border-t border-slate-300" />

          {/* About Full */}
          <div className="space-y-6">
            <h2 className="text-4xl font-normal tracking-tighter-0.2px text-[#1E73BE]">
              {data.name}:
            </h2>

            <div className="text-black text-xl fonnt-normal text-left space-y-4">
              {data.aboutFull.map((text, index) => (
                <p key={index}
                  className={
                    index === data.aboutFull.length - 1
                      ? "italic font-normal text-black "
                      : ""
                  }
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default PartnerProfile;