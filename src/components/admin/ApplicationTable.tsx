import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ApplicationTableProps {
  applications: Array<{
    id: string;
    applicantName: string;
    email: string;
    phone: string;
    status: string;
    appliedAt: Date;
    jobTitle?: string;
  }>;
  onStatusChange: (id: string, status: string) => void;
  onViewDetails: (id: string) => void;
}

export default function ApplicationTable({ applications, onStatusChange, onViewDetails }: ApplicationTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "reviewed":
        return "bg-blue-100 text-blue-800";
      case "interview":
        return "bg-purple-100 text-purple-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "hired":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Applicant
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Job Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Applied Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {applications.map((application) => (
            <tr key={application.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{application.applicantName}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{application.email}</div>
                <div className="text-sm text-gray-500">{application.phone}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {application.jobTitle || "N/A"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      className={`rounded-full px-2 py-1 text-xs font-medium border-0 h-auto ${getStatusColor(application.status)}`}
                    >
                      {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                    <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => onStatusChange(application.id, "pending")}>Pending</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => onStatusChange(application.id, "reviewed")}>Reviewed</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => onStatusChange(application.id, "interview")}>Interview</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => onStatusChange(application.id, "rejected")}>Rejected</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => onStatusChange(application.id, "hired")}>Hired</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {application.appliedAt.toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex gap-2">
                  <button
                    onClick={() => onViewDetails(application.id)}
                    className="text-[#2e7d32] hover:text-[#276a2b]"
                  >
                    View
                  </button>
                  <button className="text-blue-600 hover:text-blue-900">
                    Resume
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
