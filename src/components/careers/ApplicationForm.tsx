"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Application submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
        <textarea
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
          value={formData.coverLetter}
          onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
          placeholder="Tell us why you're interested in this position..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Resume/CV</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          required
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[#2e7d32] file:text-white hover:file:bg-[#276a2b]"
          onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
        />
        <p className="mt-1 text-xs text-gray-500">PDF, DOC, or DOCX files only (max 5MB)</p>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-[#2e7d32] px-4 py-2 text-white hover:bg-[#276a2b] focus:outline-none focus:ring-2 focus:ring-[#2e7d32] focus:ring-offset-2"
      >
        Submit Application
      </button>
    </form>
  );
}
