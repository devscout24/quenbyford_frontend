import { useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { jobs, JobCard } from "../../Job/_components/JobCard";
import { useTranslation } from "react-i18next";

const JobListing = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Jobs");

  const filterOptions = [
    { key: "All Jobs", label: t("jobs.list.filter_all") },
    { key: "Full-time", label: t("jobs.list.filter_full") },
    { key: "Part-time", label: t("jobs.list.filter_part") },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      filterType === "All Jobs" || job.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="w-full max-w-[1440px] mx-auto py-12 font-sans px-4">
      {/* Header */}
      <div className="text-center mb-10 space-y-6">
        <h1 className="text-[32px] font-bold text-black leading-10">
          {t("jobs.list.title")}
        </h1>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center bg-white border border-[#F97316] rounded-full p-1.5 shadow-sm focus-within:ring-0 ring-blue-100">
            <Search className="ml-4 text-gray-400" size={20} />

            <Input
              type="text"
              placeholder={t("jobs.list.search_placeholder")}
              className="border-none focus-visible:ring-0 text-gray-600 placeholder:text-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Button className="bg-[#FF7A1A] hover:bg-[#e66d17] text-white rounded-full px-8 h-10">
              {t("jobs.list.search_btn")}
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {filterOptions.map((opt) => (
            <Button
              key={opt.key}
              variant={filterType === opt.key ? "default" : "outline"}
              onClick={() => setFilterType(opt.key)}
              className={`rounded-full font-medium text-[14px] w-50 h-10 px-8 ${filterType === opt.key
                  ? "bg-[#2D89E5] hover:bg-[#2574c4] text-white"
                  : "border-gray-200 text-gray-600"
                }`}
            >
              {opt.label}
            </Button>
          ))}
        </div>
      </div>

      {/* View All */}
      <div className="flex justify-end mb-6">
        <Button
          variant="outline"
          className="border-[#FF7A1A] text-[#FF7A1A] hover:bg-orange-50 rounded-lg text-[16px] font-medium flex items-center gap-2 px-8 py-3"
          onClick={() => {
            setSearchTerm("");
            setFilterType("All Jobs");
          }}
        >
          {t("jobs.list.view_all")} <ArrowUpRight size={16} />
        </Button>
      </div>

      {/* Job Grid */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-20">
          {t("jobs.list.no_jobs")}
        </div>
      )}
    </div>
  );
};

export default JobListing;
