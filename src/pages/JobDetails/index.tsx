import { useParams, Link } from "react-router-dom";
import { jobs } from "../Job/_components/JobCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ArrowLeft, MapPin, Briefcase } from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="w-full max-w-7xl mx-auto py-15 text-center">
        <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
        <Link to="/availablejobs">
          <Button variant="outline" className="border-[#FF7A1A] text-[#FF7A1A] hover:bg-[#FF7A1A] hover:text-white">
            <ArrowLeft className="mr-2" size={16} /> Back to Jobs
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 font-sans">
      <div className="mb-6">
        <Link to="/availablejobs">
          <Button variant="ghost" className="text-black hover:text-gray-900 border border-gray-200">
            <ArrowLeft className="mr-2" size={16} /> Back to All Jobs
          </Button>
        </Link>
      </div>

      <Card className="border border-[#1E88E5]/25 ring-0 shadow-sm rounded-xl overflow-hidden">
        <CardContent className="p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#1E88E5]/10 rounded-xl text-blue-600">
                <Building2 size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{job.title}</h1>
                <p className="text-xl text-gray-600">{job.company}</p>
              </div>
            </div>

            {job.isNew && (
              <span className="bg-[#F97316]/10 text-[#F97316] text-sm font-bold px-4 py-2 rounded-lg">
                Fresh Posting
              </span>
            )}
          </div>

          <hr className="border-gray-100 my-8" />

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-gray-700">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-50 rounded-full text-gray-400">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Job Type</p>
                <p className="font-semibold">{job.type}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-50 rounded-full text-gray-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-semibold">{job.location}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-black leading-relaxed">
            <h3 className="text-xl font-bold text-black mb-4">Job Description</h3>
            <p>
              We are seeking a talented and motivated {job.title} to join our team at {job.company}.
              In this role, you will be responsible for building high-quality, scalable solutions,
              working closely with cross-functional teams to deliver impactful products.
            </p>
            <p>
              The ideal candidate possesses strong problem-solving skills, excellent communication,
              and a passion for continuous learning in a fast-paced environment.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proven experience working as a {job.title} or similar role.</li>
              <li>Strong problem-solving and analytical skills.</li>
              <li>Ability to work independently and as part of a team in {job.location}.</li>
              <li>Excellent written and verbal communication skills.</li>
            </ul>
          </div>

          {/* Action */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Button className="w-full md:w-auto px-10 border-none bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-300 py-6 text-lg">
              Apply for this Job
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetails;
