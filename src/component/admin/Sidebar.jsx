import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cn } from "../../lib/utils";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: HomeIcon },
  { name: "Visitors", href: "/admin/visitors", icon: UserGroupIcon },
  { name: "Reports", href: "/admin/reports", icon: ClipboardDocumentListIcon },
  { name: "Settings", href: "/admin/settings", icon: Cog6ToothIcon },
];

export default function Sidebar({ sidebarOpen, onClose }) {
  const location = useLocation();

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity backdrop-blur-[2px] lg:hidden",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-white border-r transition-transform transform lg:static lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Mobile close button */}
        <div className="flex justify-end p-4 lg:hidden">
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center p-4">
          <span className="text-2xl font-bold text-gray-800">VMS</span>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-4 rounded-lg px-4 py-3 text-base font-semibold transition-all",
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <item.icon className="h-6 w-6" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Info */}
        <div className="flex items-center gap-4 p-4 border-t">
          <img
            src="/fawaz.jpg"
            alt="User"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-bold text-gray-800">Akinola Fawaz</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
        </div>
      </div>
    </>
  );
}
