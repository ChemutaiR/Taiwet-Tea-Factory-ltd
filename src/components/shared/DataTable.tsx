"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (value: any, row: T) => React.ReactNode;
  sortable?: boolean;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  itemsPerPage?: number;
  searchable?: boolean;
  searchPlaceholder?: string;
  onRowClick?: (row: T) => void;
  className?: string;
}

export default function DataTable<T extends Record<string, any>>({
  data,
  columns,
  itemsPerPage = 10,
  searchable = false,
  searchPlaceholder = "Search...",
  onRowClick,
  className = "",
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  // Filter data based on search term
  const filteredData = data.filter((row) => {
    if (!searchTerm) return true;
    return columns.some((column) => {
      const value = column.key === 'string' ? row[column.key] : row[column.key as keyof T];
      return String(value).toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  const handleSort = (key: string) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return prev.direction === 'asc' 
          ? { key, direction: 'desc' }
          : null;
      }
      return { key, direction: 'asc' };
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getValue = (row: T, column: Column<T>) => {
    if (column.render) {
      return column.render(row[column.key as keyof T], row);
    }
    return row[column.key as keyof T];
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search */}
      {searchable && (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex h-10 w-80 max-w-sm rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      )}

      {/* Desktop Table View */}
      <div className="hidden md:block">
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={String(column.key)}
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 ${
                        column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                      } ${column.className || ''}`}
                      onClick={() => column.sortable && handleSort(String(column.key))}
                    >
                      <div className="flex items-center space-x-1">
                        <span>{column.header}</span>
                        {column.sortable && (
                          <div className="flex flex-col">
                            <ChevronLeftIcon
                              className={`h-3 w-3 ${
                                sortConfig?.key === column.key && sortConfig.direction === 'asc'
                                  ? 'text-gray-900'
                                  : 'text-gray-400'
                              }`}
                              style={{ transform: 'rotate(90deg)' }}
                            />
                            <ChevronRightIcon
                              className={`h-3 w-3 ${
                                sortConfig?.key === column.key && sortConfig.direction === 'desc'
                                  ? 'text-gray-900'
                                  : 'text-gray-400'
                              }`}
                              style={{ transform: 'rotate(90deg)' }}
                            />
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {currentData.map((row, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-50 ${onRowClick ? 'cursor-pointer' : ''}`}
                    onClick={() => onRowClick?.(row)}
                  >
                    {columns.map((column) => (
                      <td key={String(column.key)} className={`px-6 py-4 whitespace-nowrap text-sm ${column.className || ''}`}>
                        {getValue(row, column)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {currentData.map((row, index) => (
          <div
            key={index}
            className={`rounded-lg border bg-white p-4 shadow-sm ${
              onRowClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''
            }`}
            onClick={() => onRowClick?.(row)}
          >
            <div className="space-y-3">
              {columns.map((column) => (
                <div key={String(column.key)} className="flex justify-between items-start">
                  <span className="text-sm font-medium text-gray-500 min-w-0 flex-1">
                    {column.header}:
                  </span>
                  <span className="text-sm text-gray-900 text-right min-w-0 flex-1 ml-2">
                    {getValue(row, column)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing {startIndex + 1} to {Math.min(endIndex, sortedData.length)} of {sortedData.length} results
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className="h-4 w-4" />
              Previous
            </Button>
            
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(pageNum)}
                    className="w-8 h-8 p-0"
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
