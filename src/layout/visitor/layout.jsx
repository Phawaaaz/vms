import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { Bars3Icon } from "@heroicons/react/24/outline";
import VisitorSidebar from "../../component/visitor/Sidebar";

export default function VisitorLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <VisitorSidebar
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white p-4 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-700 hover:text-gray-900"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          <div className="text-lg font-bold text-gray-800">Visitor Portal</div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
