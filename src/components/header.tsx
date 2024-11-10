// Header.tsx

import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-gray-800 bg-black/50 backdrop-blur-lg">
      <div className="mx-auto max-w-screen-2xl flex h-16 items-center justify-between px-4">
        {/* Logo and Navigation Menu */}
        <div className="flex items-center gap-10">
          <span className="text-xl font-bold">EzUI</span>
          <nav className="hidden md:flex items-center gap-6">
            {[
              'Docs',
              'Components',
              'Templates',
              'Blocks',
              'Examples',
              'Themes',
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-white text-sm"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Search and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 hover:bg-gray-800 rounded-lg">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
