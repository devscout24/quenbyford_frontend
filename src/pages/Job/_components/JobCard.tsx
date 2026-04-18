import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// ✅ 18 Jobs Data
export const jobs = [
  { id: 1, title: "Frontend Developer", company: "Google", type: "Full-time", location: "California, USA", isNew: true },
  { id: 2, title: "Backend Engineer", company: "Amazon", type: "Full-time", location: "Seattle, USA", isNew: true },
  { id: 3, title: "UI/UX Designer", company: "Adobe", type: "Part-time", location: "Remote", isNew: false },
  { id: 4, title: "Software Engineer", company: "Microsoft", type: "Full-time", location: "Texas, USA", isNew: true },
  { id: 5, title: "Mobile App Developer", company: "Apple", type: "Full-time", location: "California, USA", isNew: false },
  { id: 6, title: "DevOps Engineer", company: "Netflix", type: "Full-time", location: "Los Angeles, USA", isNew: true },
  { id: 7, title: "Data Analyst", company: "Facebook", type: "Part-time", location: "New York, USA", isNew: false },
  { id: 8, title: "Cyber Security Specialist", company: "Cisco", type: "Full-time", location: "San Jose, USA", isNew: true },
  { id: 9, title: "AI Engineer", company: "OpenAI", type: "Full-time", location: "San Francisco, USA", isNew: true },
  { id: 10, title: "Cloud Engineer", company: "IBM", type: "Full-time", location: "Chicago, USA", isNew: false },
  { id: 11, title: "QA Engineer", company: "Samsung", type: "Full-time", location: "Seoul, South Korea", isNew: false },
  { id: 12, title: "Full Stack Developer", company: "Tesla", type: "Full-time", location: "Austin, USA", isNew: true },
  { id: 13, title: "Game Developer", company: "Ubisoft", type: "Part-time", location: "Montreal, Canada", isNew: false },
  { id: 14, title: "System Administrator", company: "Dell", type: "Full-time", location: "Texas, USA", isNew: false },
  { id: 15, title: "Product Manager", company: "Spotify", type: "Full-time", location: "Stockholm, Sweden", isNew: true },
  { id: 16, title: "Machine Learning Engineer", company: "NVIDIA", type: "Full-time", location: "California, USA", isNew: true },
  { id: 17, title: "Technical Support Engineer", company: "HP", type: "Part-time", location: "Remote", isNew: false },
  { id: 18, title: "Blockchain Developer", company: "Binance", type: "Full-time", location: "Dubai, UAE", isNew: true },
];

// 🔹 Job Card Component
export interface Job {
  id: number;
  title: string;
  company: string;
  type: string;
  location: string;
  isNew: boolean;
}

export const JobCard = ({ job }: { job: Job }) => {
  const { t } = useTranslation();

  return (
    <Link to={`/availablejobs/${job.id}`} className="block w-full">
      <Card className="relative w-full h-full overflow-hidden border border-[#1E88E5]/25 ring-0 hover:shadow-md transition-shadow duration-300">
        <CardContent className="p-5 flex flex-col gap-8">

          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="p-2 bg-[#1E88E5]/10 rounded-lg text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 16.5H7.5M9 16.5H10.5M9 12H10.5M6 12H7.5M6 7.5H7.5M9 7.5H10.5M20.25 20.25H3.75V3.75H12.75V11.25H20.25V20.25ZM12.75 14.25H17.25V20.25H12.75V14.25Z" stroke="#1E88E5" stroke-width="1.5" />
              </svg>
            </div>

            {job.isNew && (
              <span className="bg-[#F97316]/10 text-orange-600 text-xs font-bold px-3 py-1 rounded-md">
                {t("jobs.card.new")}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="space-y-4">
            <p className="text-[#475569] text-sm font-medium">{job.type}</p>

            <h3 className="text-lg font-medium text-black w-full leading-tight">
              {job.company} - {job.title}
            </h3>

            <p className="text-[#64748B] font-normal text-sm">{job.location}</p>
          </div>

          {/* Button */}
          <Button
            variant="outline"
            className="w-full  border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full transition-colors duration-300"
          >
            {t("jobs.card.view")}
          </Button>

        </CardContent>
      </Card>
    </Link>
  );
};

// 🔹 Job Grid Component
const JobGrid = () => {
  return (
    <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {jobs.slice(0, 6).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}

      </div>
    </div>
  );
};

export default JobGrid;