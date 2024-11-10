'use client';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function LeftSidebar() {
  const sections = [
    {
      title: 'Guide',
      items: [
        'Introduction',
        'Installation',
        { name: 'CLI', badge: 'New' },
        'Design Principles',
        'Routing',
        'Upgrade to v2',
      ],
    },
    {
      title: 'Frameworks',
      items: ['Next.js', 'Vite', 'Remix', 'Astro'],
    },
    {
      title: 'Customization',
      items: [
        'Theme',
        { name: 'Layout', badge: 'Updated' },
        'Colors',
        'Customize theme',
        'Create theme',
        'Dark mode',
        'Override styles',
        'Custom variants',
      ],
    },
    {
      title: 'Components',
      items: [
        'Accordion',
        'Autocomplete',
        'Buttons',
        'Cards',
        'Modals',
        'Tables',
        'Tabs',
      ],
    },
  ];

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Guide: true,
    Frameworks: true,
    Customization: true,
    Components: true,
  });

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside className="w-64 border-r border-gray-800 bg-black sticky top-16 h-screen">
      <nav className="h-full overflow-y-auto p-4">
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full text-left text-gray-400 hover:text-white text-sm font-semibold mb-2"
              >
                {section.title}
                {openSections[section.title] ? (
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 transform rotate-180" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform duration-300" />
                )}
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openSections[section.title]
                    ? 'max-h-screen opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="space-y-1 pl-4">
                  {section.items.map((item) => {
                    const name = typeof item === 'string' ? item : item.name;
                    const badge =
                      typeof item === 'object' && item.badge
                        ? item.badge
                        : null;
                    return (
                      <li key={name} className="flex items-center">
                        <a
                          href={`#${name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-gray-400 hover:text-white text-sm py-1 flex-1"
                        >
                          {name}
                        </a>
                        {badge && (
                          <span
                            className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                              badge === 'New'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-700 text-gray-300'
                            }`}
                          >
                            {badge}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
