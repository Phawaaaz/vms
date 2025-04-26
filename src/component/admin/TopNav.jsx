import { Bars3Icon } from "@heroicons/react/24/outline";

export default function TopNav({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between bg-white shadow px-4 h-16">
      {/* Left: Mobile menu button */}
      <div className="flex items-center">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
          onClick={onMenuClick}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Right: User profile placeholder */}
      <div className="flex items-center space-x-4">
        {/* Future: Notifications / Profile Picture */}
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
