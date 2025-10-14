import Link from "next/link";

export default function CatalogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Product Catalog</h1>
      <p className="mt-4 text-lg text-gray-600">
        Explore our premium tea products available in both retail and bulk quantities.
      </p>
      
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Retail Catalog */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">Retail Catalog</h2>
            <p className="mt-2 text-gray-600">
              Premium tea products for individual consumers and small businesses. Perfect for personal use, gifts, or small-scale retail.
            </p>
            <div className="mt-6">
              <Link 
                href="/catalog/retail"
                className="inline-flex items-center rounded-md bg-[#2e7d32] px-6 py-3 text-white hover:bg-[#276a2b] transition-colors"
              >
                Browse Retail Products
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bulk Catalog */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">Bulk Catalog</h2>
            <p className="mt-2 text-gray-600">
              Large quantity tea products for restaurants, cafes, distributors, and wholesale businesses. Competitive pricing for bulk orders.
            </p>
            <div className="mt-6">
              <Link 
                href="/catalog/bulk"
                className="inline-flex items-center rounded-md bg-[#2e7d32] px-6 py-3 text-white hover:bg-[#276a2b] transition-colors"
              >
                Browse Bulk Products
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-16 rounded-lg bg-gray-50 p-8">
        <h3 className="text-xl font-semibold text-gray-900">Why Choose Taiwet?</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="font-medium text-gray-900">Premium Quality</h4>
            <p className="mt-1 text-sm text-gray-600">Direct sourcing from premium tea gardens with modern processing technology.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Flexible Quantities</h4>
            <p className="mt-1 text-sm text-gray-600">From individual packages to bulk orders, we cater to all your needs.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Competitive Pricing</h4>
            <p className="mt-1 text-sm text-gray-600">Best prices for both retail and wholesale customers with volume discounts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
