import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-b border-black/10 dark:border-white/10 bg-[#2e7d32] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between pl-1 pr-4 py-3 sm:pl-2 sm:pr-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo_175x50.png"
            alt="Taiwet logo"
            width={140}
            height={40}
            priority
          />
          <span className="sr-only">Taiwet</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <div className="relative group">
            <button className="hover:underline flex items-center gap-1">
              Products
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-1 w-32 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/catalog/retail" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#2e7d32] rounded-t-md">
                Retail
              </Link>
              <Link href="/catalog/bulk" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#2e7d32] rounded-b-md">
                Bulk
              </Link>
            </div>
          </div>
          <Link href="/careers" className="hover:underline">
            Careers
          </Link>
              <Link href="/admin" className="hover:underline">
                Admin
              </Link>
              <Link href="/auth/login" className="hover:underline">
                Login
              </Link>
              <Link href="/auth/register" className="hover:underline">
                Register
              </Link>
            </nav>
      </div>
    </header>
  );
}

export default Header;


