import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const sampleJobs = [
  {
    id: "1",
    title: "Tea Processing Specialist",
    department: "Production",
    type: "Full-time",
    location: "Nairobi, Kenya",
    status: "Active",
    applications: 12,
    postedDate: "2024-01-10",
    deadline: "2024-02-10",
    description: "Responsible for overseeing the tea processing operations including withering, rolling, fermentation, and drying processes.",
  },
  {
    id: "2",
    title: "Quality Control Manager",
    department: "Quality Assurance",
    type: "Full-time",
    location: "Nairobi, Kenya",
    status: "Active",
    applications: 8,
    postedDate: "2024-01-08",
    deadline: "2024-02-08",
    description: "Ensure all tea products meet quality standards through rigorous testing and inspection procedures.",
  },
  {
    id: "3",
    title: "Sales Representative",
    department: "Sales",
    type: "Full-time",
    location: "Remote",
    status: "Active",
    applications: 15,
    postedDate: "2024-01-05",
    deadline: "2024-02-05",
    description: "Build relationships with retail and wholesale customers, manage sales targets and customer accounts.",
  },
  {
    id: "4",
    title: "Marketing Coordinator",
    department: "Marketing",
    type: "Part-time",
    location: "Nairobi, Kenya",
    status: "Active",
    applications: 6,
    postedDate: "2024-01-03",
    deadline: "2024-02-03",
    description: "Support marketing campaigns, social media management, and brand promotion activities.",
  },
  {
    id: "5",
    title: "Warehouse Supervisor",
    department: "Operations",
    type: "Full-time",
    location: "Nairobi, Kenya",
    status: "Closed",
    applications: 9,
    postedDate: "2023-12-20",
    deadline: "2024-01-20",
    description: "Oversee warehouse operations, inventory management, and shipping coordination.",
  },
  {
    id: "6",
    title: "Tea Taster",
    department: "Quality Assurance",
    type: "Contract",
    location: "Nairobi, Kenya",
    status: "Draft",
    applications: 0,
    postedDate: "2024-01-15",
    deadline: "2024-02-15",
    description: "Evaluate tea quality through sensory analysis and provide feedback for product improvement.",
  },
];

const departments = ["All Departments", "Production", "Quality Assurance", "Sales", "Marketing", "Operations"];
const jobTypes = ["All Types", "Full-time", "Part-time", "Contract"];
const statuses = ["All Statuses", "Active", "Closed", "Draft"];

export default function JobsManagement() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/admin" className="hover:text-[#2e7d32]">Admin</Link>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900">Jobs</span>
        </nav>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Job Management</h1>
            <p className="mt-2 text-lg text-gray-600">
              Manage job postings, review applications, and track hiring progress.
            </p>
          </div>
          <Link
            href="/admin/jobs/new"
            className="rounded-md bg-[#2e7d32] px-4 py-2 text-white hover:bg-[#276a2b] transition-colors"
          >
            Add New Job
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Active Jobs</p>
              <p className="text-2xl font-semibold text-gray-900">{sampleJobs.filter(job => job.status === 'Active').length}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Total Applications</p>
              <p className="text-2xl font-semibold text-gray-900">{sampleJobs.reduce((sum, job) => sum + job.applications, 0)}</p>
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
              <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
              <p className="text-2xl font-semibold text-gray-900">23</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Hired This Month</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  All Departments
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                {departments.map((dept) => (
                  <DropdownMenuItem key={dept} className="hover:bg-gray-100 cursor-pointer">{dept}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  All Types
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                {jobTypes.map((type) => (
                  <DropdownMenuItem key={type} className="hover:bg-gray-100 cursor-pointer">{type}</DropdownMenuItem>
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
                {statuses.map((status) => (
                  <DropdownMenuItem key={status} className="hover:bg-gray-100 cursor-pointer">{status}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Search</label>
            <input
              type="text"
              placeholder="Job title, department..."
              className="mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
            />
          </div>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">Job Postings ({sampleJobs.length})</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applications
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deadline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sampleJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{job.title}</div>
                      <div className="text-sm text-gray-500">{job.location}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {job.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {job.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">{job.applications}</span>
                      {job.applications > 0 && (
                        <Link
                          href={`/admin/jobs/${job.id}/applications`}
                          className="ml-2 text-xs text-[#2e7d32] hover:text-[#276a2b]"
                        >
                          View
                        </Link>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                      job.status === 'Active' ? 'bg-green-100 text-green-800' :
                      job.status === 'Closed' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.deadline}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Link
                        href={`/admin/jobs/${job.id}`}
                        className="text-[#2e7d32] hover:text-[#276a2b]"
                      >
                        Edit
                      </Link>
                      <Link
                        href={`/admin/jobs/${job.id}/applications`}
                        className="text-blue-600 hover:text-blue-500"
                      >
                        Applications
                      </Link>
                      <button className="text-red-600 hover:text-red-500">
                        Delete
                      </button>
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
