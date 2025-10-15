import Link from "next/link";

const stats = [
  {
    name: "Total Orders",
    value: "1,234",
    change: "+12%",
    changeType: "positive",
    icon: "📦",
  },
  {
    name: "Revenue",
    value: "$45,678",
    change: "+8%",
    changeType: "positive",
    icon: "💰",
  },
  {
    name: "Active Products",
    value: "24",
    change: "+2",
    changeType: "positive",
    icon: "🍃",
  },
  {
    name: "Pending Orders",
    value: "18",
    change: "-3",
    changeType: "negative",
    icon: "⏳",
  },
];

const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Smith",
    amount: "$89.99",
    status: "Processing",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    amount: "$156.50",
    status: "Shipped",
    date: "2024-01-14",
  },
  {
    id: "ORD-003",
    customer: "Mike Chen",
    amount: "$234.75",
    status: "Delivered",
    date: "2024-01-13",
  },
  {
    id: "ORD-004",
    customer: "Emily Davis",
    amount: "$67.25",
    status: "Pending",
    date: "2024-01-12",
  },
];

const quickActions = [
  {
    name: "Manage Orders",
    description: "View and process customer orders",
    href: "/admin/orders",
    icon: "📦",
    color: "bg-blue-500",
  },
  {
    name: "Manage Products",
    description: "Add, edit, or remove products",
    href: "/admin/products",
    icon: "🍃",
    color: "bg-green-500",
  },
  {
    name: "View Analytics",
    description: "Business insights and reports",
    href: "/admin/analytics",
    icon: "📊",
    color: "bg-purple-500",
  },
  {
    name: "Manage Jobs",
    description: "Career postings and applications",
    href: "/admin/jobs",
    icon: "👥",
    color: "bg-orange-500",
  },
  {
    name: "User Management",
    description: "Manage user accounts and permissions",
    href: "/admin/users",
    icon: "👤",
    color: "bg-indigo-500",
  },
];

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-lg text-gray-600">
          Welcome back! Here&apos;s what&apos;s happening with your tea business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                <Link 
                  href="/admin/orders"
                  className="text-sm text-[#2e7d32] hover:text-[#276a2b] font-medium"
                >
                  View all
                </Link>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <div key={order.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <p className="text-sm font-medium text-gray-900">{order.id}</p>
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{order.amount}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
            </div>
            <div className="p-6 space-y-4">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  className="block rounded-lg border border-gray-200 p-4 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.color}`}>
                      <span className="text-white text-lg">{action.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{action.name}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
