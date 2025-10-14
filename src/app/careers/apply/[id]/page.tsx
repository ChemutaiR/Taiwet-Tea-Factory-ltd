"use client";

import { useState, use } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ApplicationPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Sample job data - in a real app, this would come from an API
const jobData: Record<string, any> = {
  "1": {
    title: "Tea Processing Specialist",
    department: "Production",
    location: "On-site",
    type: "Full-time",
    level: "Mid Level",
    description: "Join our production team to oversee the modern tea processing operations using state-of-the-art equipment. You'll work with precision steam treatment, automated cutting, and climate-controlled fermentation systems.",
  },
  "2": {
    title: "Quality Control Manager",
    department: "Quality Assurance",
    location: "On-site",
    type: "Full-time",
    level: "Senior Level",
    description: "Lead our quality control team to ensure consistent tea quality across all batches. You'll implement quality standards, conduct testing, and maintain our high-quality reputation.",
  },
  "3": {
    title: "Sales Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    level: "Entry Level",
    description: "Build relationships with wholesale clients and retail partners. Help expand our market reach and promote our premium tea products to new customers.",
  },
  "4": {
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Hybrid",
    type: "Full-time",
    level: "Entry Level",
    description: "Support our marketing initiatives including digital campaigns, content creation, and brand development. Help tell the story of our sustainable tea processing methods.",
  },
  "5": {
    title: "Maintenance Technician",
    department: "Operations",
    location: "On-site",
    type: "Full-time",
    level: "Mid Level",
    description: "Maintain and repair our advanced tea processing equipment. Ensure optimal performance of steam chambers, cutting systems, and drying equipment.",
  },
  "6": {
    title: "Supply Chain Coordinator",
    department: "Operations",
    location: "On-site",
    type: "Contract",
    level: "Mid Level",
    description: "Manage relationships with tea garden suppliers and coordinate logistics for raw material procurement. Ensure sustainable sourcing practices.",
  },
};

export default function ApplicationPage({ params }: ApplicationPageProps) {
  const resolvedParams = use(params);
  const jobId = resolvedParams.id;
  const job = jobData[jobId] || { title: "Position", department: "Department" };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    experience: "",
    education: "",
    coverLetter: "",
    resume: null as File | null,
    availability: "",
    salary: "",
    references: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Application Submitted!</h1>
          <p className="mt-2 text-lg text-gray-600">
            Thank you for applying to the {job.title} position.
          </p>
          <p className="mt-2 text-gray-500">
            We'll review your application and get back to you within 5-7 business days.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/careers"
              className="rounded-md bg-[#2e7d32] px-6 py-2 text-white hover:bg-[#276a2b] transition-colors"
            >
              View Other Positions
            </Link>
            <Link
              href="/"
              className="rounded-md border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/careers" className="hover:text-[#2e7d32]">Careers</Link>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900">Apply</span>
        </nav>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Apply for Position</h1>
        <div className="mt-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
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
      </div>

      {/* Application Form */}
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Personal Information */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
              <input
                type="text"
                name="address"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                <input
                  type="text"
                  name="city"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State/Province *</label>
                <input
                  type="text"
                  name="state"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between h-10 px-3 py-2 border border-gray-300 rounded-md focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]">
                    {formData.country}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, country: "United States" }))}>United States</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, country: "Canada" }))}>Canada</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, country: "United Kingdom" }))}>United Kingdom</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, country: "Other" }))}>Other</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Professional Information</h3>
          <div className="space-y-6">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between h-10 px-3 py-2 border border-gray-300 rounded-md focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]">
                    {formData.experience || "Select experience level"}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, experience: "0-1 years" }))}>0-1 years</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, experience: "2-3 years" }))}>2-3 years</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, experience: "4-5 years" }))}>4-5 years</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, experience: "6-10 years" }))}>6-10 years</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, experience: "10+ years" }))}>10+ years</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Education *</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between h-10 px-3 py-2 border border-gray-300 rounded-md focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]">
                    {formData.education || "Select education level"}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, education: "High School" }))}>High School</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, education: "Associate Degree" }))}>Associate Degree</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, education: "Bachelor's Degree" }))}>Bachelor's Degree</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, education: "Master's Degree" }))}>Master's Degree</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, education: "PhD" }))}>PhD</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Resume/CV *</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFileChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
              />
              <p className="mt-1 text-xs text-gray-500">PDF, DOC, or DOCX files only. Max size: 5MB</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Additional Information</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
              <textarea
                name="coverLetter"
                rows={6}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                value={formData.coverLetter}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
              <input
                type="text"
                name="availability"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                placeholder="When are you available to start?"
                value={formData.availability}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expected Salary (Optional)</label>
              <input
                type="text"
                name="salary"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                placeholder="e.g., $50,000 - $60,000"
                value={formData.salary}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">References</label>
              <textarea
                name="references"
                rows={3}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                placeholder="Please provide 2-3 professional references with contact information..."
                value={formData.references}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
              <textarea
                name="additionalInfo"
                rows={3}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                placeholder="Any additional information you'd like to share..."
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <Link
            href="/careers"
            className="rounded-md border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-[#2e7d32] px-6 py-2 text-white hover:bg-[#276a2b] transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </div>
  );
}
