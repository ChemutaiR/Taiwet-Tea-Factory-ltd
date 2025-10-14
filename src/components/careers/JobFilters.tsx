"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function JobFilters() {
  const [filters, setFilters] = useState({
    department: "",
    location: "",
    type: "",
    level: "",
  });

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Filter Jobs</h3>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Departments</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Production</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Quality Control</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Sales</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Marketing</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                All Locations
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Locations</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Remote</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">On-site</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Hybrid</DropdownMenuItem>
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
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Types</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Full-time</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Part-time</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Contract</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                All Levels
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Levels</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Entry Level</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Mid Level</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Senior Level</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Executive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className="mt-4 flex gap-2">
        <button className="rounded-md bg-[#2e7d32] px-4 py-2 text-white hover:bg-[#276a2b]">
          Apply Filters
        </button>
        <button className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
          Clear Filters
        </button>
      </div>
    </div>
  );
}
