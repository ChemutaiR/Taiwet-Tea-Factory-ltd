import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 bg-[#1b5e20] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© {year} Taiwet. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


