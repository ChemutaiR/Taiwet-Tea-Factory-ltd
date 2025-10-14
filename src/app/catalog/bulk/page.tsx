import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const bulkProducts = [
  {
    id: "1",
    name: "Assam Gold Premium - Bulk",
    grade: "P1 - Primary Grade",
    description: "Whole-leaf selection with consistent size and aroma for a refined cup.",
    price: "$18.99",
    weight: "1kg",
    minOrder: "10kg",
    image: "/product.jpg",
    tag: "Bulk",
  },
  {
    id: "2",
    name: "Darjeeling First Flush - Bulk",
    grade: "P1 - Primary Grade",
    description: "Carefully sorted whole leaves highlighting clarity, aroma and finish.",
    price: "$24.99",
    weight: "1kg",
    minOrder: "5kg",
    image: "/product.jpg",
    tag: "Bulk",
  },
  {
    id: "3",
    name: "Ceylon Estate Blend - Bulk",
    grade: "P2 - Secondary Grade",
    description: "Broken-leaf profile that brews quicker with a brighter, robust character.",
    price: "$14.99",
    weight: "1kg",
    minOrder: "20kg",
    image: "/product.jpg",
    tag: "Bulk",
  },
  {
    id: "4",
    name: "Earl Grey Premium - Bulk",
    grade: "P1 - Primary Grade",
    description: "Classic bergamot-scented blend with whole leaf base for aromatic depth.",
    price: "$20.99",
    weight: "1kg",
    minOrder: "10kg",
    image: "/product.jpg",
    tag: "Bulk",
  },
  {
    id: "5",
    name: "Jasmine Pearl Collection - Bulk",
    grade: "P1 - Primary Grade",
    description: "Fragrant pearls scented with fresh jasmine for an elegant tea experience.",
    price: "$22.99",
    weight: "1kg",
    minOrder: "5kg",
    image: "/product.jpg",
    tag: "Bulk",
  },
  {
    id: "6",
    name: "English Breakfast Blend - Bulk",
    grade: "P2 - Secondary Grade",
    description: "Robust morning blend perfect for milk and sugar, ideal for daily consumption.",
    price: "$15.99",
    weight: "1kg",
    minOrder: "25kg",
    image: "/product.jpg",
    tag: "Bulk",
  },
];

export default function BulkCatalogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/catalog" className="hover:text-[#2e7d32]">Catalog</Link>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900">Bulk</span>
        </nav>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Bulk Products</h1>
        <p className="mt-2 text-lg text-gray-600">
          Large quantity tea products for restaurants, cafes, distributors, and wholesale businesses.
        </p>
      </div>

      {/* Bulk Info Banner */}
      <div className="mb-8 rounded-lg bg-[#2e7d32] p-6 text-white">
        <h2 className="text-xl font-semibold">Wholesale Benefits</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <h3 className="font-medium">Volume Discounts</h3>
            <p className="text-sm text-white/90">Better prices for larger quantities</p>
          </div>
          <div>
            <h3 className="font-medium">Custom Packaging</h3>
            <p className="text-sm text-white/90">Branded packaging options available</p>
          </div>
          <div>
            <h3 className="font-medium">Direct Shipping</h3>
            <p className="text-sm text-white/90">Fast delivery to your location</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  All Grades
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Grades</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">P1 - Primary Grade</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">P2 - Secondary Grade</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Order</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  All Quantities
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Quantities</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">5kg+</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">10kg+</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">20kg+</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">25kg+</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  Name
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Name</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Price: High to Low</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Minimum Order</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bulkProducts.map((product) => (
          <div key={product.id} className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full">
              <img 
                src={product.image} 
                alt={product.name}
                className="h-full w-full rounded-t-lg object-cover"
              />
              <span className="absolute top-2 right-2 rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                {product.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{product.grade}</p>
              <p className="mt-2 text-sm text-gray-700">{product.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Price per {product.weight}:</span>
                  <span className="text-xl font-bold text-[#2e7d32]">{product.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Min Order:</span>
                  <span className="text-sm font-medium text-gray-900">{product.minOrder}</span>
                </div>
              </div>
              <button className="mt-4 w-full rounded-md bg-[#2e7d32] px-4 py-2 text-white hover:bg-[#276a2b] transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Contact for Custom Orders */}
      <div className="mt-12 rounded-lg bg-gray-50 p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900">Need Custom Quantities?</h3>
        <p className="mt-2 text-gray-600">
          Contact us for custom packaging, private labeling, or special quantity requirements.
        </p>
        <button className="mt-4 rounded-md bg-[#2e7d32] px-6 py-3 text-white hover:bg-[#276a2b] transition-colors">
          Contact Sales Team
        </button>
      </div>
    </div>
  );
}
