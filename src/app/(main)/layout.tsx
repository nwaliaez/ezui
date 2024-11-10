import { ReactNode } from 'react';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <header className="fixed top-0 z-40 w-full border-b border-gray-800 bg-black/50 backdrop-blur-lg">
        <div className="mx-auto max-w-screen-xl flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold">NextUI</span>
              <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs">
                v2.4.8
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-3">
              <Menu className="h-5 w-5" />
              <Menu className="h-5 w-5" />
              <Menu className="h-5 w-5" />
            </div>
            <div className="relative">
              <input
                type="search"
                placeholder="Quick search..."
                className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="mx-auto max-w-screen-xl flex pt-16">
        {/* Left Sidebar - Navigation */}
        <aside className="w-64 border-r border-gray-800 bg-black sticky top-16 h-screen">
          <nav className="h-full overflow-y-auto p-4">
            <div className="space-y-4">
              <div>
                <h5 className="mb-2 text-sm font-semibold">Guide</h5>
                <ul className="space-y-2">
                  {[
                    'Introduction',
                    'Installation',
                    'CLI',
                    'Design Principles',
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block text-gray-400 hover:text-white text-sm py-1"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="mb-2 text-sm font-semibold">Frameworks</h5>
                <ul className="space-y-2">
                  {['Next.js', 'Vite', 'Remix', 'Astro'].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block text-gray-400 hover:text-white text-sm py-1"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 lg:px-8 py-8 min-h-screen">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="hidden xl:block w-64 border-l border-gray-800 bg-black sticky top-16 h-screen p-4">
          <h5 className="text-sm font-semibold mb-4">On this page</h5>
          <ul className="space-y-2 text-sm">
            {[
              'Installation',
              'Import',
              'Usage',
              'With Subtitle',
              'Expand multiple items',
              'Compact',
              'Variants',
              'Light variant',
              'Shadow variant',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white py-1"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
