"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <header className="w-full border-b border-black/10 dark:border-white/10 bg-[#2e7d32] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo_175x50.png"
            alt="Taiwet logo"
            width={140}
            height={40}
            priority
            className="h-8 w-auto sm:h-10"
          />
          <span className="sr-only">Taiwet</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link href="/" className="hover:underline transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="hover:underline flex items-center gap-1 transition-colors">
              Products
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-1 w-32 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/catalog/retail" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#2e7d32] rounded-t-md transition-colors">
                Retail
              </Link>
              <Link href="/catalog/bulk" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#2e7d32] rounded-b-md transition-colors">
                Bulk
              </Link>
            </div>
          </div>
          <Link href="/careers" className="hover:underline transition-colors">
            Careers
          </Link>
          <Link href="/admin" className="hover:underline transition-colors">
            Admin
          </Link>
          <Link href="/auth/login" className="hover:underline transition-colors">
            Login
          </Link>
          <Link href="/auth/register" className="hover:underline transition-colors">
            Register
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/20 bg-[#2e7d32]">
          <nav className="px-4 py-4 space-y-4">
            <Link 
              href="/" 
              className="block py-2 hover:underline transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Products Dropdown for Mobile */}
            <div>
              <button
                onClick={toggleProducts}
                className="flex items-center justify-between w-full py-2 hover:underline transition-colors"
              >
                Products
                <svg 
                  className={`h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link 
                    href="/catalog/retail" 
                    className="block py-2 text-white/80 hover:underline transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Retail
                  </Link>
                  <Link 
                    href="/catalog/bulk" 
                    className="block py-2 text-white/80 hover:underline transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Bulk
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/careers" 
              className="block py-2 hover:underline transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              href="/admin" 
              className="block py-2 hover:underline transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admin
            </Link>
            <Link 
              href="/auth/login" 
              className="block py-2 hover:underline transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              href="/auth/register" 
              className="block py-2 hover:underline transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;


