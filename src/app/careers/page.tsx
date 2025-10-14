import JobCard from "@/components/careers/JobCard";
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
    location: "On-site",
    type: "Full-time",
    level: "Mid Level",
    description: "Join our production team to oversee the modern tea processing operations using state-of-the-art equipment. You'll work with precision steam treatment, automated cutting, and climate-controlled fermentation systems.",
    postedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Quality Control Manager",
    department: "Quality Assurance",
    location: "On-site",
    type: "Full-time",
    level: "Senior Level",
    description: "Lead our quality control team to ensure consistent tea quality across all batches. You'll implement quality standards, conduct testing, and maintain our high-quality reputation.",
    postedAt: new Date("2024-01-10"),
  },
  {
    id: "3",
    title: "Sales Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    level: "Entry Level",
    description: "Build relationships with wholesale clients and retail partners. Help expand our market reach and promote our premium tea products to new customers.",
    postedAt: new Date("2024-01-08"),
  },
  {
    id: "4",
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Hybrid",
    type: "Full-time",
    level: "Entry Level",
    description: "Support our marketing initiatives including digital campaigns, content creation, and brand development. Help tell the story of our sustainable tea processing methods.",
    postedAt: new Date("2024-01-05"),
  },
  {
    id: "5",
    title: "Maintenance Technician",
    department: "Operations",
    location: "On-site",
    type: "Full-time",
    level: "Mid Level",
    description: "Maintain and repair our advanced tea processing equipment. Ensure optimal performance of steam chambers, cutting systems, and drying equipment.",
    postedAt: new Date("2024-01-03"),
  },
  {
    id: "6",
    title: "Supply Chain Coordinator",
    department: "Operations",
    location: "On-site",
    type: "Contract",
    level: "Mid Level",
    description: "Manage relationships with tea garden suppliers and coordinate logistics for raw material procurement. Ensure sustainable sourcing practices.",
    postedAt: new Date("2024-01-01"),
  },
];

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Join Our Team</h1>
      <p className="mt-4 text-lg text-gray-600">
        Discover exciting career opportunities at Taiwet and be part of our growing tea processing team.
      </p>
      
      {/* Job listings */}
      <div className="mt-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            Open Positions ({sampleJobs.length})
          </h2>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="min-w-[160px] justify-between">
                  All Departments
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Departments</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Production</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Quality Assurance</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Sales</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Marketing</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Operations</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="min-w-[120px] justify-between">
                  All Types
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Types</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Full-time</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Part-time</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Contract</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="grid gap-6">
          {sampleJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
