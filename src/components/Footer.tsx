import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-primary mb-4">ShantiHub</h3>
          <p className="text-sm text-slate-500">
            বাংলাদেশে মানসিক স্বাস্থ্য সচেতনতায় আপনার সঙ্গী। [cite: 101]
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links [cite: 98]</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/explore">Explore Groups</Link>
            </li>
            <li>
              <Link href="/blog">Mental Health Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact [cite: 99]</h4>
          <p className="text-sm">Email: support@shantihub.com</p>
          <p className="text-sm">Phone: +880 6587656533</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us [cite: 100]</h4>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            <span className="text-sm">FB</span>
            <span className="text-sm">LI</span>
            <span className="text-sm">TW</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t text-sm text-slate-500">
        © 2026 ShantiHub. All rights reserved. [cite: 101]
      </div>
    </footer>
  );
}
