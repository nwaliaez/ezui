// RightSidebar.tsx

export default function RightSidebar() {
  const items = [
    'Installation',
    'Import',
    'Usage',
    'With Subtitle',
    'Expand multiple items',
    'Compact',
    'Variants',
    'Light variant',
    'Shadow variant',
  ];

  return (
    <aside className="hidden xl:block w-64 border-l border-gray-800 bg-black sticky top-16 h-screen p-4">
      <h5 className="text-sm font-semibold mb-4">On this page</h5>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-gray-400 hover:text-white py-1"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
