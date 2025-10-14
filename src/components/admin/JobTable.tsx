interface JobTableProps {
  jobs: Array<{
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    level: string;
    isActive: boolean;
    postedAt: Date;
    applicationCount: number;
  }>;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onViewApplications: (id: string) => void;
}

export default function JobTable({ jobs, onEdit, onDelete, onViewApplications }: JobTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Job Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Department
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Applications
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {jobs.map((job) => (
            <tr key={job.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{job.title}</div>
                <div className="text-sm text-gray-500">{job.level}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {job.department}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {job.location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                  {job.type}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                  job.isActive 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {job.isActive ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {job.applicationCount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(job.id)}
                    className="text-[#2e7d32] hover:text-[#276a2b]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onViewApplications(job.id)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Applications
                  </button>
                  <button
                    onClick={() => onDelete(job.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
