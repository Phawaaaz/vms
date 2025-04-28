import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserCircleIcon,
  QrCodeIcon,
  ClockIcon,
  ArrowRightOnRectangleIcon,
  XMarkIcon,
  CalendarIcon
} from "@heroicons/react/24/outline";
import { cn } from "../../lib/utils";

const visitorNavigation = [
  { name: "Dashboard", href: "/visitor/dashboard", icon: HomeIcon },
  { name: "Bookings", href: "/visitor/bookings", icon: CalendarIcon },
  { name: "My Profile", href: "/visitor/profile", icon: UserCircleIcon },
  { name: "My QR Code", href: "/visitor/qrcode", icon: QrCodeIcon },
  { name: "Visit History", href: "/visitor/history", icon: ClockIcon },
];

export default function VisitorSidebar({ sidebarOpen, onClose }) {
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
          {visitorNavigation.map((item) => {
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

        {/* Logout Button */}
        <div className="p-4 border-t">
          <button
            className="w-full flex items-center gap-4 rounded-lg px-4 py-3 text-base font-semibold text-red-600 hover:bg-red-50"
            onClick={() => {
              // Add logout logic
              console.log("Logging out...");
            }}
          >
            <ArrowRightOnRectangleIcon className="h-6 w-6" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
