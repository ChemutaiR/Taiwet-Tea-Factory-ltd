import Link from "next/link";

const analyticsData = {
  revenue: {
    total: "$45,678",
    change: "+12%",
    period: "vs last month",
  },
  orders: {
    total: "1,234",
    change: "+8%",
    period: "vs last month",
  },
  customers: {
    total: "456",
    change: "+15%",
    period: "vs last month",
  },
  products: {
    total: "24",
    change: "+2",
    period: "new products",
  },
};

const topProducts = [
  { name: "Assam Gold Premium", sales: 156, revenue: "$3,899" },
  { name: "Darjeeling First Flush", sales: 134, revenue: "$4,421" },
  { name: "Earl Grey Premium", sales: 98, revenue: "$2,645" },
  { name: "Ceylon Estate Blend", sales: 87, revenue: "$1,653" },
  { name: "Jasmine Pearl Collection", sales: 76, revenue: "$2,279" },
];

const recentActivity = [
  { type: "order", message: "New order #ORD-001 from John Smith", time: "2 minutes ago" },
  { type: "product", message: "Assam Gold Premium stock updated", time: "15 minutes ago" },
  { type: "order", message: "Order #ORD-002 marked as shipped", time: "1 hour ago" },
  { type: "customer", message: "New customer registration: Sarah Johnson", time: "2 hours ago" },
  { type: "product", message: "Jasmine Pearl Collection added to catalog", time: "3 hours ago" },
];

const customerOrderAnalytics = [
  {
    customer: "John Smith",
    email: "john.smith@email.com",
    totalOrders: 5,
    totalSpent: "$234.50",
    avgOrderValue: "$46.90",
    lastOrder: "2024-01-20",
    favoriteProduct: "Assam Gold Premium",
    customerLifetime: "30 days",
  },
  {
    customer: "Sarah Johnson",
    email: "sarah.j@email.com",
    totalOrders: 12,
    totalSpent: "$567.25",
    avgOrderValue: "$47.27",
    lastOrder: "2024-01-19",
    favoriteProduct: "Darjeeling First Flush",
    customerLifetime: "45 days",
  },
  {
    customer: "Emily Davis",
    email: "emily.davis@email.com",
    totalOrders: 3,
    totalSpent: "$89.75",
    avgOrderValue: "$29.92",
    lastOrder: "2024-01-15",
    favoriteProduct: "Earl Grey Premium",
    customerLifetime: "60 days",
  },
  {
    customer: "Michael Brown",
    email: "michael.b@email.com",
    totalOrders: 8,
    totalSpent: "$345.80",
    avgOrderValue: "$43.23",
    lastOrder: "2024-01-18",
    favoriteProduct: "Ceylon Estate Blend",
    customerLifetime: "25 days",
  },
  {
    customer: "Lisa Wilson",
    email: "lisa.w@email.com",
    totalOrders: 2,
    totalSpent: "$67.50",
    avgOrderValue: "$33.75",
    lastOrder: "2024-01-12",
    favoriteProduct: "Jasmine Pearl Collection",
    customerLifetime: "15 days",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/admin" className="hover:text-[#2e7d32]">Admin</Link>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900">Analytics</span>
        </nav>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Business Analytics</h1>
        <p className="mt-2 text-lg text-gray-600">
          Track your business performance, sales trends, and key metrics.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">{analyticsData.revenue.total}</p>
              <p className="text-sm text-green-600">{analyticsData.revenue.change} {analyticsData.revenue.period}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-semibold text-gray-900">{analyticsData.orders.total}</p>
              <p className="text-sm text-green-600">{analyticsData.orders.change} {analyticsData.orders.period}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Total Customers</p>
              <p className="text-2xl font-semibold text-gray-900">{analyticsData.customers.total}</p>
              <p className="text-sm text-green-600">{analyticsData.customers.change} {analyticsData.customers.period}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">Active Products</p>
              <p className="text-2xl font-semibold text-gray-900">{analyticsData.products.total}</p>
              <p className="text-sm text-green-600">{analyticsData.products.change} {analyticsData.products.period}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Top Products */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">Top Selling Products</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {topProducts.map((product, index) => (
                <div key={product.name} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2e7d32] text-white text-sm font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.sales} units sold</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{product.revenue}</p>
                      <p className="text-sm text-gray-600">revenue</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentActivity.map((activity, index) => (
                <div key={index} className="px-6 py-4">
                  <div className="flex items-start space-x-3">
                    <div className={`flex h-2 w-2 rounded-full mt-2 ${
                      activity.type === 'order' ? 'bg-blue-500' :
                      activity.type === 'product' ? 'bg-green-500' :
                      'bg-purple-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Order Analytics */}
      <div className="mt-8">
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">Customer Order Analytics</h2>
            <p className="text-sm text-gray-600">Detailed breakdown of customer orders and spending patterns</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Total Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Total Spent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Avg Order Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Last Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Favorite Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Customer Lifetime
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {customerOrderAnalytics.map((customer, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{customer.customer}</div>
                        <div className="text-sm text-gray-500">{customer.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                        {customer.totalOrders} orders
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {customer.totalSpent}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.avgOrderValue}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.lastOrder}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.favoriteProduct}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.customerLifetime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Trend</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart will be implemented here</p>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Category</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart will be implemented here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
