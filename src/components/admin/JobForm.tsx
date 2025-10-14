"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function JobForm({ job, onSubmit }: { job?: any; onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    title: job?.title || "",
    department: job?.department || "",
    location: job?.location || "",
    type: job?.type || "full-time",
    level: job?.level || "entry",
    description: job?.description || "",
    requirements: job?.requirements || [""],
    benefits: job?.benefits || [""],
    salaryMin: job?.salary?.min || "",
    salaryMax: job?.salary?.max || "",
    currency: job?.salary?.currency || "USD",
    isActive: job?.isActive ?? true,
    expiresAt: job?.expiresAt || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addRequirement = () => {
    setFormData({ ...formData, requirements: [...formData.requirements, ""] });
  };

  const removeRequirement = (index: number) => {
    setFormData({
      ...formData,
      requirements: formData.requirements.filter((_, i) => i !== index),
    });
  };

  const addBenefit = () => {
    setFormData({ ...formData, benefits: [...formData.benefits, ""] });
  };

  const removeBenefit = (index: number) => {
    setFormData({
      ...formData,
      benefits: formData.benefits.filter((_, i) => i !== index),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {formData.type === "full-time" ? "Full-time" : formData.type === "part-time" ? "Part-time" : "Contract"}
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData({ ...formData, type: "full-time" })}>Full-time</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData({ ...formData, type: "part-time" })}>Part-time</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData({ ...formData, type: "contract" })}>Contract</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {formData.level === "entry" ? "Entry Level" : 
                 formData.level === "mid" ? "Mid Level" : 
                 formData.level === "senior" ? "Senior Level" : "Executive"}
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData({ ...formData, level: "entry" })}>Entry Level</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData({ ...formData, level: "mid" })}>Mid Level</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData({ ...formData, level: "senior" })}>Senior Level</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData({ ...formData, level: "executive" })}>Executive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {formData.isActive ? "Active" : "Inactive"}
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData({ ...formData, isActive: true })}>Active</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData({ ...formData, isActive: false })}>Inactive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Job Description</label>
        <textarea
          rows={4}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      {/* Requirements */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Requirements</label>
        {formData.requirements.map((requirement, index) => (
          <div key={index} className="mt-2 flex gap-2">
            <input
              type="text"
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
              value={requirement}
              onChange={(e) => {
                const newRequirements = [...formData.requirements];
                newRequirements[index] = e.target.value;
                setFormData({ ...formData, requirements: newRequirements });
              }}
            />
            <button
              type="button"
              onClick={() => removeRequirement(index)}
              className="rounded-md border border-red-300 px-3 py-2 text-red-700 hover:bg-red-50"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addRequirement}
          className="mt-2 rounded-md border border-gray-300 px-3 py-2 text-gray-700 hover:bg-gray-50"
        >
          Add Requirement
        </button>
      </div>

      {/* Benefits */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Benefits</label>
        {formData.benefits.map((benefit, index) => (
          <div key={index} className="mt-2 flex gap-2">
            <input
              type="text"
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
              value={benefit}
              onChange={(e) => {
                const newBenefits = [...formData.benefits];
                newBenefits[index] = e.target.value;
                setFormData({ ...formData, benefits: newBenefits });
              }}
            />
            <button
              type="button"
              onClick={() => removeBenefit(index)}
              className="rounded-md border border-red-300 px-3 py-2 text-red-700 hover:bg-red-50"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addBenefit}
          className="mt-2 rounded-md border border-gray-300 px-3 py-2 text-gray-700 hover:bg-gray-50"
        >
          Add Benefit
        </button>
      </div>

      {/* Salary */}
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">Min Salary</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
            value={formData.salaryMin}
            onChange={(e) => setFormData({ ...formData, salaryMin: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Max Salary</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
            value={formData.salaryMax}
            onChange={(e) => setFormData({ ...formData, salaryMax: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {formData.currency}
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData({ ...formData, currency: "USD" })}>USD</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData({ ...formData, currency: "EUR" })}>EUR</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer" onClick={() => setFormData({ ...formData, currency: "GBP" })}>GBP</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="rounded-md bg-[#2e7d32] px-4 py-2 text-white hover:bg-[#276a2b]"
        >
          {job ? "Update Job" : "Create Job"}
        </button>
        <button
          type="button"
          className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
