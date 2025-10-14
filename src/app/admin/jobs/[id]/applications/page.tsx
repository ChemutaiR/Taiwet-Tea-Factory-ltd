"use client";

import Link from "next/link";
import { useState, use } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const sampleApplications = [
  {
    id: "APP-001",
    applicantName: "John Mwangi",
    email: "john.mwangi@email.com",
    phone: "+254 712 345 678",
    appliedDate: "2024-01-12",
    status: "Under Review",
    experience: "5 years",
    education: "Bachelor's in Food Science",
    coverLetter: "I am passionate about tea processing and have extensive experience in quality control...",
    resume: "resume_john_mwangi.pdf",
    skills: ["Tea Processing", "Quality Control", "Food Safety", "Team Leadership"],
  },
  {
    id: "APP-002",
    applicantName: "Sarah Wanjiku",
    email: "sarah.wanjiku@email.com",
    phone: "+254 723 456 789",
    appliedDate: "2024-01-11",
    status: "Interview Scheduled",
    experience: "3 years",
    education: "Diploma in Agriculture",
    coverLetter: "I have worked in tea farms and understand the entire process from plucking to packaging...",
    resume: "resume_sarah_wanjiku.pdf",
    skills: ["Tea Processing", "Agriculture", "Quality Assurance", "Communication"],
  },
  {
    id: "APP-003",
    applicantName: "Michael Ochieng",
    email: "michael.ochieng@email.com",
    phone: "+254 734 567 890",
    appliedDate: "2024-01-10",
    status: "Rejected",
    experience: "1 year",
    education: "Certificate in Food Processing",
    coverLetter: "I am eager to learn and grow in the tea industry...",
    resume: "resume_michael_ochieng.pdf",
    skills: ["Food Processing", "Basic Quality Control"],
  },
  {
    id: "APP-004",
    applicantName: "Grace Akinyi",
    email: "grace.akinyi@email.com",
    phone: "+254 745 678 901",
    appliedDate: "2024-01-09",
    status: "Shortlisted",
    experience: "7 years",
    education: "Master's in Food Technology",
    coverLetter: "I have managed tea processing operations in multiple facilities and have a deep understanding...",
    resume: "resume_grace_akinyi.pdf",
    skills: ["Tea Processing", "Operations Management", "Quality Control", "Process Optimization", "Team Leadership"],
  },
  {
    id: "APP-005",
    applicantName: "David Kimani",
    email: "david.kimani@email.com",
    phone: "+254 756 789 012",
    appliedDate: "2024-01-08",
    status: "Under Review",
    experience: "4 years",
    education: "Bachelor's in Chemical Engineering",
    coverLetter: "My engineering background combined with experience in food processing makes me an ideal candidate...",
    resume: "resume_david_kimani.pdf",
    skills: ["Chemical Engineering", "Process Control", "Quality Assurance", "Data Analysis"],
  },
];

const statusOptions = ["Under Review", "Shortlisted", "Interview Scheduled", "Rejected", "Hired"];

export default function JobApplicationsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const jobId = resolvedParams.id;
  const jobTitle = "Tea Processing Specialist"; // This would come from the job data
  const [selectedResume, setSelectedResume] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewResume = (resumeFile: string, applicantName: string) => {
    setSelectedResume(resumeFile);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedResume(null);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/admin" className="hover:text-[#2e7d32]">Admin</Link>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/admin/jobs" className="hover:text-[#2e7d32]">Jobs</Link>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900">Applications</span>
        </nav>
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-gray-900">Job Applications</h1>
          <p className="mt-2 text-lg text-gray-600">
            Review applications for: <span className="font-medium text-[#2e7d32]">{jobTitle}</span>
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
              <p className="text-2xl font-semibold text-gray-900">{sampleApplications.length}</p>
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
              <p className="text-2xl font-semibold text-gray-900">{sampleApplications.filter(app => app.status === 'Under Review').length}</p>
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
              <p className="text-2xl font-semibold text-gray-900">{sampleApplications.filter(app => app.status === 'Shortlisted').length}</p>
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
              <p className="text-2xl font-semibold text-gray-900">{sampleApplications.filter(app => app.status === 'Interview Scheduled').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
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

      {/* Applications List */}
      <div className="space-y-6">
        {sampleApplications.map((application) => (
          <div key={application.id} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-semibold text-gray-900">{application.applicantName}</h3>
                  <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                    application.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                    application.status === 'Shortlisted' ? 'bg-green-100 text-green-800' :
                    application.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
                    application.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {application.status}
                  </span>
                </div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-sm font-medium text-gray-900">{application.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-sm font-medium text-gray-900">{application.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="text-sm font-medium text-gray-900">{application.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Applied</p>
                    <p className="text-sm font-medium text-gray-900">{application.appliedDate}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Education</p>
                  <p className="text-sm font-medium text-gray-900">{application.education}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Skills</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {application.skills.map((skill) => (
                      <span key={skill} className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Cover Letter</p>
                  <p className="mt-1 text-sm text-gray-700 line-clamp-2">{application.coverLetter}</p>
                </div>
              </div>
              <div className="ml-6 flex flex-col space-y-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      className={`w-full justify-between text-xs ${
                        application.status === 'Under Review' ? 'border-yellow-300 text-yellow-800' :
                        application.status === 'Shortlisted' ? 'border-green-300 text-green-800' :
                        application.status === 'Interview Scheduled' ? 'border-blue-300 text-blue-800' :
                        application.status === 'Rejected' ? 'border-red-300 text-red-800' :
                        'border-gray-300 text-gray-800'
                      }`}
                    >
                      {application.status}
                      <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                    {statusOptions.map((status) => (
                      <DropdownMenuItem key={status} className="hover:bg-gray-100 cursor-pointer">{status}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <button 
                  onClick={() => handleViewResume(application.resume, application.applicantName)}
                  className="rounded-md bg-[#2e7d32] px-3 py-2 text-sm text-white hover:bg-[#276a2b] transition-colors"
                >
                  View Resume
                </button>
                <button className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  View Details
                </button>
                <button className="rounded-md border border-blue-300 px-3 py-2 text-sm text-blue-700 hover:bg-blue-50 transition-colors">
                  Schedule Interview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resume Viewer Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle>
              Resume - {sampleApplications.find(app => app.resume === selectedResume)?.applicantName}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 h-[70vh] border border-gray-200 rounded-lg overflow-hidden">
            {selectedResume ? (
              <div className="h-full flex flex-col">
                {/* PDF Viewer */}
                <div className="flex-1 bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4">
                      <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{selectedResume}</h3>
                    <p className="text-gray-600 mb-4">PDF Document</p>
                    <div className="space-y-2">
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </button>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2e7d32] hover:bg-[#276a2b] ml-2">
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View in New Tab
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* PDF Controls */}
                <div className="border-t border-gray-200 bg-white px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <span className="text-sm text-gray-500">Page 1 of 2</span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                No resume selected
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}