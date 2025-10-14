interface JobDetailsProps {
  job: {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    level: string;
    description: string;
    requirements: string[];
    benefits: string[];
    salary?: {
      min: number;
      max: number;
      currency: string;
    };
    postedAt: Date;
    expiresAt?: Date;
  };
}

export default function JobDetails({ job }: JobDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Job Header */}
      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <span className="text-lg text-gray-600">{job.department}</span>
          <span className="text-lg text-gray-600">•</span>
          <span className="text-lg text-gray-600">{job.location}</span>
          <span className="text-lg text-gray-600">•</span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            {job.type}
          </span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
            {job.level}
          </span>
        </div>
        {job.salary && (
          <p className="mt-2 text-lg font-medium text-gray-900">
            {job.salary.currency} {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()}
          </p>
        )}
      </div>

      {/* Job Description */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Job Description</h2>
        <p className="mt-2 text-gray-700">{job.description}</p>
      </div>

      {/* Requirements */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
        <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
          {job.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Benefits</h2>
        <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
          {job.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Application CTA */}
      <div className="border-t border-gray-200 pt-8">
        <button className="rounded-md bg-[#2e7d32] px-6 py-3 text-lg font-medium text-white hover:bg-[#276a2b]">
          Apply for this Position
        </button>
      </div>
    </div>
  );
}
