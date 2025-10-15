import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "1",
    name: "Assam Gold Premium",
    grade: "P1 - Primary Grade",
    description: "Whole-leaf selection with consistent size and aroma for a refined cup.",
    retailPrice: "$24.99",
    bulkPrice: "$18.99",
    weight: "100g",
    category: "Black Tea",
    status: "Active",
    stock: 150,
    image: "/product.jpg",
  },
  {
    id: "2",
    name: "Darjeeling First Flush",
    grade: "P1 - Primary Grade",
    description: "Carefully sorted whole leaves highlighting clarity, aroma and finish.",
    retailPrice: "$32.99",
    bulkPrice: "$24.99",
    weight: "100g",
    category: "Black Tea",
    status: "Active",
    stock: 89,
    image: "/product.jpg",
  },
  {
    id: "3",
    name: "Ceylon Estate Blend",
    grade: "P2 - Secondary Grade",
    description: "Broken-leaf profile that brews quicker with a brighter, robust character.",
    retailPrice: "$18.99",
    bulkPrice: "$14.99",
    weight: "100g",
    category: "Black Tea",
    status: "Active",
    stock: 234,
    image: "/product.jpg",
  },
  {
    id: "4",
    name: "Earl Grey Premium",
    grade: "P1 - Primary Grade",
    description: "Classic bergamot-scented blend with whole leaf base for aromatic depth.",
    retailPrice: "$26.99",
    bulkPrice: "$20.99",
    weight: "100g",
    category: "Flavored Tea",
    status: "Active",
    stock: 67,
    image: "/product.jpg",
  },
  {
    id: "5",
    name: "Jasmine Pearl Collection",
    grade: "P1 - Primary Grade",
    description: "Fragrant pearls scented with fresh jasmine for an elegant tea experience.",
    retailPrice: "$29.99",
    bulkPrice: "$22.99",
    weight: "100g",
    category: "Green Tea",
    status: "Low Stock",
    stock: 12,
    image: "/product.jpg",
  },
  {
    id: "6",
    name: "English Breakfast Blend",
    grade: "P2 - Secondary Grade",
    description: "Robust morning blend perfect for milk and sugar, ideal for daily consumption.",
    retailPrice: "$19.99",
    bulkPrice: "$15.99",
    weight: "100g",
    category: "Black Tea",
    status: "Active",
    stock: 178,
    image: "/product.jpg",
  },
];

const categories = ["All Categories", "Black Tea", "Green Tea", "Flavored Tea", "Herbal Tea"];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/admin" className="hover:text-[#2e7d32]">Admin</Link>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900">Products</span>
        </nav>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
            <p className="mt-2 text-lg text-gray-600">
              Manage your tea product catalog, pricing, and inventory.
            </p>
          </div>
          <Link
            href="/admin/products/new"
            className="rounded-md bg-[#2e7d32] px-4 py-2 text-white hover:bg-[#276a2b] transition-colors"
          >
            Add New Product
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  All Categories
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-300 shadow-lg" style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
                {categories.map((category) => (
                  <DropdownMenuItem key={category} className="hover:bg-gray-100 cursor-pointer">{category}</DropdownMenuItem>
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
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">All Statuses</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Active</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Inactive</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">Low Stock</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Search</label>
            <input
              type="text"
              placeholder="Product name, description..."
              className="mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]"
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="rounded-t-lg object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-1">
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                  product.status === 'Active' ? 'bg-green-100 text-green-800' :
                  product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {product.status}
                </span>
                {product.stock < 20 && (
                  <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                    Low Stock
                  </span>
                )}
              </div>
            </div>
            <div className="p-6">
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.grade}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
              <p className="mb-4 text-sm text-gray-700 line-clamp-2">{product.description}</p>
              
              <div className="mb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Retail Price:</span>
                  <span className="text-sm font-medium text-gray-900">{product.retailPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Bulk Price:</span>
                  <span className="text-sm font-medium text-gray-900">{product.bulkPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Stock:</span>
                  <span className={`text-sm font-medium ${
                    product.stock < 20 ? 'text-red-600' : 'text-gray-900'
                  }`}>
                    {product.stock} units
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 rounded-md bg-[#2e7d32] px-3 py-2 text-sm text-white hover:bg-[#276a2b] transition-colors">
                  Edit
                </button>
                <button className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  View
                </button>
                <button className="rounded-md border border-red-300 px-3 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
