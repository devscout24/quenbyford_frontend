import { Card, CardContent } from "@/components/ui/card";


interface PartnerData {
  name: string;
  logo?: string;
  website: string;
  jobs: string;
  intro?: string;
  aboutShort: string;
  aboutFull?: string[];
}

const PartnerProfile = ({ data }: { data: PartnerData }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-0">
      <Card className="border border-[#1E88E5] rounded-xl overflow-hidden ">
        <CardContent className="p-6 sm:p-8 space-y-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {data.logo && (
              <div className="w-full max-w-[200px] md:max-w-75 shrink-0 flex justify-center">
                <img
                  src={data.logo}
                  alt={`${data.name} Logo`}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}

            <div className="text-lg md:text-xl font-medium text-black text-center md:text-left">
              Visit {data.name}{" "}
              <a href={data.website} className="text-[#1E73BE] underline">here</a> Check out {data.name}’s portal {" "}
              <a href={data.jobs} className="text-[#1E73BE] underline">here</a>
            </div>
          </div>

          {/* Intro */}
          {data.intro && (
            <p className="text-black font-normal text-lg sm:text-xl text-left ">
              <span className="font-bold text-[#0F172A] ">
                {data.name}
              </span>{" "}
              {data.intro}
            </p>
          )}

          {/* About Short */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-[#1E73BE]">
              {data.name}:
            </h2>
            <p className="text-black text-lg sm:text-xl font-normal text-left">
              {data.aboutShort}
            </p>
          </div>

          {data.aboutFull && data.aboutFull.length > 0 && (
            <>
              <hr className="border-t border-slate-300" />
              {/* About Full */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-[#1E73BE]">
                  {data.name}:
                </h2>

                <div className="text-black text-lg sm:text-xl font-normal text-left space-y-4">
                  {data.aboutFull.map((text, index) => (
                    <p key={index}
                      className={
                        index === data.aboutFull!.length - 1
                          ? "italic font-normal text-black "
                          : ""
                      }
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}

        </CardContent>
      </Card>
    </div>
  );
};

export default PartnerProfile;