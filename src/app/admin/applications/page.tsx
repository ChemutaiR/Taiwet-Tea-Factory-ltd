import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const allApplications = [
  {
    id: "APP-001",
    applicantName: "John Mwangi",
    email: "john.mwangi@email.com",
    phone: "+254 712 345 678",
    jobTitle: "Tea Processing Specialist",
    jobId: "1",
    appliedDate: "2024-01-12",
    status: "Under Review",
    experience: "5 years",
    education: "Bachelor's in Food Science",
  },
  {
    id: "APP-002",
    applicantName: "Sarah Wanjiku",
    email: "sarah.wanjiku@email.com",
    phone: "+254 723 456 789",
    jobTitle: "Tea Processing Specialist",
    jobId: "1",
    appliedDate: "2024-01-11",
    status: "Interview Scheduled",
    experience: "3 years",
    education: "Diploma in Agriculture",
  },
  {
    id: "APP-003",
    applicantName: "Michael Ochieng",
    email: "michael.ochieng@email.com",
    phone: "+254 734 567 890",
    jobTitle: "Tea Processing Specialist",
    jobId: "1",
    appliedDate: "2024-01-10",
    status: "Rejected",
    experience: "1 year",
    education: "Certificate in Food Processing",
  },
  {
    id: "APP-004",
    applicantName: "Grace Akinyi",
    email: "grace.akinyi@email.com",
    phone: "+254 745 678 901",
    jobTitle: "Tea Processing Specialist",
    jobId: "1",
    appliedDate: "2024-01-09",
    status: "Shortlisted",
    experience: "7 years",
    education: "Master's in Food Technology",
  },
  {
    id: "APP-005",
    applicantName: "David Kimani",
    email: "david.kimani@email.com",
    phone: "+254 756 789 012",
    jobTitle: "Tea Processing Specialist",
    jobId: "1",
    appliedDate: "2024-01-08",
    status: "Under Review",
    experience: "4 years",
    education: "Bachelor's in Chemical Engineering",
  },
  {
    id: "APP-006",
    applicantName: "Mary Njeri",
    email: "mary.njeri@email.com",
    phone: "+254 767 890 123",
    jobTitle: "Quality Control Manager",
    jobId: "2",
    appliedDate: "2024-01-07",
    status: "Shortlisted",
    experience: "6 years",
    education: "Bachelor's in Chemistry",
  },
  {
    id: "APP-007",
    applicantName: "Peter Kiprop",
    email: "peter.kiprop@email.com",
    phone: "+254 778 901 234",
    jobTitle: "Sales Representative",
    jobId: "3",
    appliedDate: "2024-01-06",
    status: "Interview Scheduled",
    experience: "4 years",
    education: "Bachelor's in Business Administration",
  },
  {
    id: "APP-008",
    applicantName: "Jane Wambui",
    email: "jane.wambui@email.com",
    phone: "+254 789 012 345",
    jobTitle: "Marketing Coordinator",
    jobId: "4",
    appliedDate: "2024-01-05",
    status: "Under Review",
    experience: "2 years",
    education: "Bachelor's in Marketing",
  },
];

const statusOptions = ["Under Review", "Shortlisted", "Interview Scheduled", "Rejected", "Hired"];
const jobTitles = ["All Jobs", "Tea Processing Specialist", "Quality Control Manager", "Sales Representative", "Marketing Coordinator"];

export default function AllApplicationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/admin" className="hover:text-[#2e7d32]">Admin</Link>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900">All Applications</span>
        </nav>
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-gray-900">All Job Applications</h1>
          <p className="mt-2 text-lg text-gray-600">
            Review and manage all job applications across all positions.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Total Applications</p>
              <p className="text-2xl font-semibold text-gray-900">{allApplications.length}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Under Review</p>
              <p className="text-2xl font-semibold text-gray-900">{allApplications.filter(app => app.status === 'Under Review').length}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Shortlisted</p>
              <p className="text-2xl font-semibold text-gray-900">{allApplications.filter(app => app.status === 'Shortlisted').length}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Interviews</p>
              <p className="text-2xl font-semibold text-gray-900">{allApplications.filter(app => app.status === 'Interview Scheduled').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Position</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  All Jobs
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                {jobTitles.map((title) => (
                  <DropdownMenuItem key={title} className="hover:bg-gray-100 cursor-pointer">{title}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  All Statuses
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Statuses</DropdownMenuItem>
                {statusOptions.map((status) => (
                  <DropdownMenuItem key={status} className="hover:bg-gray-100 cursor-pointer">{status}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  All Experience Levels
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Experience Levels</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">0-2 years</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">3-5 years</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">6+ years</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Search</label>
            <input
              type="text"
              placeholder="Applicant name, email..."
              className="mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
            />
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">Applications ({allApplications.length})</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applicant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Experience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applied Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allApplications.map((application) => (
                <tr key={application.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{application.applicantName}</div>
                      <div className="text-sm text-gray-500">{application.email}</div>
                      <div className="text-sm text-gray-500">{application.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/admin/jobs/${application.jobId}/applications`}
                      className="text-sm font-medium text-[#2e7d32] hover:text-[#276a2b]"
                    >
                      {application.jobTitle}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900">{application.experience}</div>
                      <div className="text-sm text-gray-500">{application.education}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {application.appliedDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                      application.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                      application.status === 'Shortlisted' ? 'bg-green-100 text-green-800' :
                      application.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
                      application.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {application.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Link
                        href={`/admin/applications/${application.id}`}
                        className="text-[#2e7d32] hover:text-[#276a2b]"
                      >
                        View Details
                      </Link>
                      <Link
                        href={`/admin/jobs/${application.jobId}/applications`}
                        className="text-blue-600 hover:text-blue-500"
                      >
                        Job Applications
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}