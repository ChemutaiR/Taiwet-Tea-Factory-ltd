"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/shared/DataTable";

const sampleUsers = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    role: "Customer",
    status: "Active",
    joinDate: "2024-01-15",
    totalOrders: 5,
    totalSpent: "$234.50",
    lastLogin: "2024-01-20",
    orders: [
      { id: "ORD-001", date: "2024-01-20", amount: "$45.99", status: "Delivered", items: ["Assam Gold Premium", "Earl Grey"] },
      { id: "ORD-002", date: "2024-01-15", amount: "$67.50", status: "Shipped", items: ["Darjeeling First Flush"] },
      { id: "ORD-003", date: "2024-01-10", amount: "$89.99", status: "Delivered", items: ["Ceylon Estate Blend", "Jasmine Pearl"] },
      { id: "ORD-004", date: "2024-01-05", amount: "$23.50", status: "Delivered", items: ["Earl Grey"] },
      { id: "ORD-005", date: "2024-01-01", amount: "$8.52", status: "Delivered", items: ["Assam Gold Premium"] },
    ]
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    role: "Customer",
    status: "Active",
    joinDate: "2024-01-10",
    totalOrders: 12,
    totalSpent: "$567.25",
    lastLogin: "2024-01-19",
    orders: [
      { id: "ORD-006", date: "2024-01-19", amount: "$123.75", status: "Processing", items: ["Darjeeling First Flush", "Assam Gold Premium", "Earl Grey"] },
      { id: "ORD-007", date: "2024-01-16", amount: "$89.50", status: "Delivered", items: ["Ceylon Estate Blend"] },
      { id: "ORD-008", date: "2024-01-12", amount: "$156.00", status: "Delivered", items: ["Jasmine Pearl Collection", "Assam Gold Premium"] },
      { id: "ORD-009", date: "2024-01-08", amount: "$45.25", status: "Delivered", items: ["Earl Grey"] },
      { id: "ORD-010", date: "2024-01-05", amount: "$78.90", status: "Delivered", items: ["Darjeeling First Flush"] },
      { id: "ORD-011", date: "2024-01-02", amount: "$34.50", status: "Delivered", items: ["Ceylon Estate Blend"] },
      { id: "ORD-012", date: "2023-12-28", amount: "$29.35", status: "Delivered", items: ["Earl Grey"] },
    ]
  },
  {
    id: "3",
    name: "Mike Chen",
    email: "mike.chen@email.com",
    role: "Admin",
    status: "Active",
    joinDate: "2023-12-01",
    totalOrders: 0,
    totalSpent: "$0.00",
    lastLogin: "2024-01-20",
    orders: []
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@email.com",
    role: "Customer",
    status: "Inactive",
    joinDate: "2023-11-20",
    totalOrders: 3,
    totalSpent: "$89.75",
    lastLogin: "2024-01-05",
    orders: [
      { id: "ORD-013", date: "2024-01-05", amount: "$45.25", status: "Delivered", items: ["Earl Grey Premium"] },
      { id: "ORD-014", date: "2023-12-20", amount: "$34.50", status: "Delivered", items: ["Assam Gold Premium"] },
      { id: "ORD-015", date: "2023-12-10", amount: "$10.00", status: "Delivered", items: ["Earl Grey"] },
    ]
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.w@email.com",
    role: "Employee",
    status: "Active",
    joinDate: "2024-01-01",
    totalOrders: 0,
    totalSpent: "$0.00",
    lastLogin: "2024-01-20",
    orders: []
  },
];

const roles = ["All Roles", "Admin", "Employee", "Customer"];
const statuses = ["All Statuses", "Active", "Inactive", "Suspended"];

export default function UsersManagement() {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);

  const handleViewDetails = (user: any) => {
    setSelectedUser(user);
    setIsDialogOpen(true);
  };

  const handleAddUser = () => {
    setIsAddUserDialogOpen(true);
  };

  // Define columns for DataTable
  const columns = [
    {
      key: "name",
      header: "User",
      sortable: true,
      render: (value: string, row: any) => (
        <div>
          <div className="text-sm font-medium text-gray-900">{row.name}</div>
          <div className="text-sm text-gray-500">{row.email}</div>
        </div>
      ),
    },
    {
      key: "role",
      header: "Role",
      sortable: true,
      render: (value: string) => (
        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
          value === 'Admin' ? 'bg-red-100 text-red-800' :
          value === 'Employee' ? 'bg-blue-100 text-blue-800' :
          'bg-green-100 text-green-800'
        }`}>
          {value}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      sortable: true,
      render: (value: string) => (
        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
          value === 'Active' ? 'bg-green-100 text-green-800' :
          value === 'Inactive' ? 'bg-gray-100 text-gray-800' :
          'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      ),
    },
    {
      key: "totalOrders",
      header: "Orders",
      sortable: true,
      render: (value: number) => (
        <span className="text-sm text-gray-900">{value}</span>
      ),
    },
    {
      key: "totalSpent",
      header: "Total Spent",
      sortable: true,
      render: (value: string) => (
        <span className="text-sm text-gray-900">{value}</span>
      ),
    },
    {
      key: "lastLogin",
      header: "Last Login",
      sortable: true,
      render: (value: string) => (
        <span className="text-sm text-gray-500">{value}</span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      sortable: false,
      render: (value: any, row: any) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" align="end">
            <DropdownMenuItem 
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => handleViewDetails(row)}
            >
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">
              Edit User
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">
              Reset Password
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">
              Suspend User
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-red-50 cursor-pointer text-red-600">
              Delete User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/admin" className="hover:text-[#2e7d32]">Admin</Link>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900">Users</span>
        </nav>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="mt-2 text-lg text-gray-600">
              Manage user accounts, roles, and permissions.
            </p>
          </div>
          <Button 
            className="bg-[#2e7d32] hover:bg-[#276a2b] text-white"
            onClick={handleAddUser}
          >
            Add New User
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl">✅</span>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-semibold text-gray-900">{sampleUsers.filter(u => u.status === 'Active').length}</p>
              <p className="text-sm text-green-600">+8% from last month</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl">🛒</span>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-semibold text-gray-900">{sampleUsers.reduce((sum, user) => sum + user.totalOrders, 0)}</p>
              <p className="text-sm text-green-600">+15% from last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and DataTable */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        {/* Filters */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    All Roles
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                  {roles.map((role) => (
                    <DropdownMenuItem key={role} className="hover:bg-gray-100 cursor-pointer">{role}</DropdownMenuItem>
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
          </div>
        </div>

        {/* DataTable */}
        <div className="p-6">
          <DataTable
            data={sampleUsers}
            columns={columns}
            itemsPerPage={10}
            searchable={true}
            searchPlaceholder="Search users..."
          />
        </div>
      </div>

      {/* User Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-full max-w-7xl sm:max-w-7xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Order History - {selectedUser?.name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedUser && (
            <div className="space-y-6">
              {/* User Info */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">User Information</h3>
                  <p className="text-sm text-gray-600">Name: {selectedUser.name}</p>
                  <p className="text-sm text-gray-600">Email: {selectedUser.email}</p>
                  <p className="text-sm text-gray-600">Role: {selectedUser.role}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Order Summary</h3>
                  <p className="text-sm text-gray-600">Total Orders: {selectedUser.totalOrders}</p>
                  <p className="text-sm text-gray-600">Total Spent: {selectedUser.totalSpent}</p>
                  <p className="text-sm text-gray-600">Last Login: {selectedUser.lastLogin}</p>
                </div>
              </div>

              {/* Orders Table */}
              {selectedUser.orders && selectedUser.orders.length > 0 ? (
                <div className="border rounded-lg">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                            Order ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                            Items
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {selectedUser.orders.map((order: any) => (
                          <tr key={order.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {order.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {order.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {order.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              <div className="space-y-1">
                                {order.items.map((item: string, index: number) => (
                                  <div key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No orders found for this user.</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add User Dialog */}
      <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* User Information Form */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                placeholder="Enter email address"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role *</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Select Role
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                    <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Admin</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Employee</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Customer</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Select Status
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                    <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Active</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Inactive</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Suspended</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Temporary Password *</label>
              <input
                type="password"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                placeholder="Enter temporary password"
              />
              <p className="mt-1 text-xs text-gray-500">User will be required to change this password on first login</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                placeholder="Enter phone number (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                rows={3}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
                placeholder="Enter address (optional)"
              />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={() => setIsAddUserDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-[#2e7d32] hover:bg-[#276a2b] text-white"
                onClick={() => {
                  // Handle form submission here
                  console.log("Add user form submitted");
                  setIsAddUserDialogOpen(false);
                }}
              >
                Add User
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
