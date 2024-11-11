// Layout.tsx

import Header from "@/components/header";
import LeftSidebar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Layout */}
      <div className="mx-auto max-w-screen-xl flex pt-16">
        {/* Left Sidebar - Navigation */}
        <LeftSidebar />

        {/* Main Content */}
        <main className="flex-1 px-4 lg:px-8 py-8 min-h-screen">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <RightSidebar />
      </div>
    </div>
  );
}
