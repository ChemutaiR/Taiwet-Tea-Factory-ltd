import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const retailProducts = [
  {
    id: "1",
    name: "Assam Gold Premium",
    grade: "P1 - Primary Grade",
    description: "Whole-leaf selection with consistent size and aroma for a refined cup.",
    price: "$24.99",
    weight: "100g",
    image: "/product.jpg",
    tag: "Retail",
  },
  {
    id: "2",
    name: "Darjeeling First Flush",
    grade: "P1 - Primary Grade",
    description: "Carefully sorted whole leaves highlighting clarity, aroma and finish.",
    price: "$32.99",
    weight: "100g",
    image: "/product.jpg",
    tag: "Retail",
  },
  {
    id: "3",
    name: "Ceylon Estate Blend",
    grade: "P2 - Secondary Grade",
    description: "Broken-leaf profile that brews quicker with a brighter, robust character.",
    price: "$18.99",
    weight: "100g",
    image: "/product.jpg",
    tag: "Retail",
  },
  {
    id: "4",
    name: "Earl Grey Premium",
    grade: "P1 - Primary Grade",
    description: "Classic bergamot-scented blend with whole leaf base for aromatic depth.",
    price: "$26.99",
    weight: "100g",
    image: "/product.jpg",
    tag: "Retail",
  },
  {
    id: "5",
    name: "Jasmine Pearl Collection",
    grade: "P1 - Primary Grade",
    description: "Fragrant pearls scented with fresh jasmine for an elegant tea experience.",
    price: "$29.99",
    weight: "100g",
    image: "/product.jpg",
    tag: "Retail",
  },
  {
    id: "6",
    name: "English Breakfast Blend",
    grade: "P2 - Secondary Grade",
    description: "Robust morning blend perfect for milk and sugar, ideal for daily consumption.",
    price: "$19.99",
    weight: "100g",
    image: "/product.jpg",
    tag: "Retail",
  },
];

export default function RetailCatalogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/catalog" className="hover:text-[#2e7d32]">Catalog</Link>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900">Retail</span>
        </nav>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Retail Products</h1>
        <p className="mt-2 text-lg text-gray-600">
          Premium tea products for individual consumers and small businesses.
        </p>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  All Prices
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Prices</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Under $20</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">$20 - $30</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Over $30</DropdownMenuItem>
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
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Grade</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {retailProducts.map((product) => (
          <div key={product.id} className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="rounded-t-lg object-cover"
              />
              <span className="absolute top-2 right-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                {product.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{product.grade}</p>
              <p className="mt-2 text-sm text-gray-700">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#2e7d32]">{product.price}</span>
                  <span className="ml-1 text-sm text-gray-500">/ {product.weight}</span>
                </div>
                <button className="rounded-md bg-[#2e7d32] px-4 py-2 text-white hover:bg-[#276a2b] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
