import Link from "next/link";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    level: string;
    description: string;
    postedAt: Date;
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{job.department} • {job.location}</p>
          <p className="mt-2 text-sm text-gray-700">{job.description}</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
              {job.type}
            </span>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
              {job.level}
            </span>
          </div>
        </div>
        <Link 
          href={`/careers/apply/${job.id}`}
          className="ml-4 rounded-md bg-[#2e7d32] px-4 py-2 text-white hover:bg-[#276a2b] transition-colors"
        >
          Apply
        </Link>
      </div>
    </div>
  );
}
