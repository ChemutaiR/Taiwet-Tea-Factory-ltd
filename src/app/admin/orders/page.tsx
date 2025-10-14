import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const orders = [
  {
    id: "ORD-001",
    customer: "John Smith",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    amount: "$89.99",
    status: "Processing",
    date: "2024-01-15",
    items: [
      { name: "Assam Gold Premium", quantity: 2, price: "$24.99" },
      { name: "Earl Grey Premium", quantity: 1, price: "$26.99" },
    ],
    shippingAddress: "123 Main St, New York, NY 10001",
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 (555) 234-5678",
    amount: "$156.50",
    status: "Shipped",
    date: "2024-01-14",
    items: [
      { name: "Darjeeling First Flush", quantity: 3, price: "$32.99" },
      { name: "Jasmine Pearl Collection", quantity: 2, price: "$29.99" },
    ],
    shippingAddress: "456 Oak Ave, Los Angeles, CA 90210",
  },
  {
    id: "ORD-003",
    customer: "Mike Chen",
    email: "mike@example.com",
    phone: "+1 (555) 345-6789",
    amount: "$234.75",
    status: "Delivered",
    date: "2024-01-13",
    items: [
      { name: "Ceylon Estate Blend", quantity: 5, price: "$18.99" },
      { name: "English Breakfast Blend", quantity: 3, price: "$19.99" },
    ],
    shippingAddress: "789 Pine St, Chicago, IL 60601",
  },
  {
    id: "ORD-004",
    customer: "Emily Davis",
    email: "emily@example.com",
    phone: "+1 (555) 456-7890",
    amount: "$67.25",
    status: "Pending",
    date: "2024-01-12",
    items: [
      { name: "Assam Gold Premium", quantity: 1, price: "$24.99" },
      { name: "Earl Grey Premium", quantity: 1, price: "$26.99" },
    ],
    shippingAddress: "321 Elm St, Houston, TX 77001",
  },
];

const statusOptions = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/admin" className="hover:text-[#2e7d32]">Admin</Link>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900">Orders</span>
        </nav>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Order Management</h1>
        <p className="mt-2 text-lg text-gray-600">
          View and manage customer orders, update statuses, and track fulfillment.
        </p>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  All Time
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Time</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Today</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">This Week</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">This Month</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Search</label>
            <input
              type="text"
              placeholder="Order ID, customer name..."
              className="mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
            />
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">Orders ({orders.length})</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.id}</div>
                      <div className="text-sm text-gray-500">{order.items.length} items</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                      <div className="text-sm text-gray-500">{order.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="outline" 
                          className={`rounded-full px-2 py-1 text-xs font-medium border-0 h-auto ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' :
                            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' :
                            'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                        >
                          {order.status}
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
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-[#2e7d32] hover:text-[#276a2b] mr-4">
                      View Details
                    </button>
                    <button className="text-blue-600 hover:text-blue-500">
                      Edit
                    </button>
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
