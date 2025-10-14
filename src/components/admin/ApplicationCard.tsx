import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ApplicationCardProps {
  application: {
    id: string;
    jobId: string;
    applicantName: string;
    email: string;
    phone: string;
    status: string;
    appliedAt: Date;
    jobTitle?: string;
  };
  onStatusChange: (id: string, status: string) => void;
}

export default function ApplicationCard({ application, onStatusChange }: ApplicationCardProps) {
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
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{application.applicantName}</h3>
          <p className="mt-1 text-sm text-gray-600">{application.email}</p>
          <p className="text-sm text-gray-600">{application.phone}</p>
          {application.jobTitle && (
            <p className="mt-2 text-sm font-medium text-gray-700">Applied for: {application.jobTitle}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            Applied: {application.appliedAt.toLocaleDateString()}
          </p>
        </div>
        <div className="ml-4 flex flex-col items-end gap-2">
          <span className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(application.status)}`}>
            {application.status}
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="rounded-md border border-gray-300 px-2 py-1 text-xs h-auto"
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
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="rounded-md bg-[#2e7d32] px-3 py-1 text-xs text-white hover:bg-[#276a2b]">
          View Details
        </button>
        <button className="rounded-md border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-50">
          Download Resume
        </button>
      </div>
    </div>
  );
}
