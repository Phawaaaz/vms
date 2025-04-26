import { Clipboard, Lock, Bell, BarChart2 } from "lucide-react"; // Example icons

const Steps = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          How VMS Works
        </h2>

        {/* Step-by-step Layout */}
        <div className="flex flex-col items-center space-y-12">
          {/* Step 1 */}
          <div className="flex items-center space-x-8 justify-center">
            <div className="w-12 p-4 h-12 md:w-16 md:h-16 bg-primary text-white flex items-center justify-center rounded-full shadow-lg transform transition-all duration-500 hover:scale-110">
              <Clipboard className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Step 1: Visitor Registration
              </h3>
              <p className="text-gray-600 mt-2">
                Visitors sign in using a user-friendly interface, either
                manually or through QR codes.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center space-x-8 justify-center">
            <div className="w-12 p-4 h-12 md:w-16 md:h-16 bg-primary text-white flex items-center justify-center rounded-full shadow-lg transform transition-all duration-500 hover:scale-110">
              <Lock className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Step 2: Security Check
              </h3>
              <p className="text-gray-600 mt-2">
                The system performs a background security check to ensure only
                authorized visitors gain access.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center space-x-8 justify-center">
            <div className="w-12 p-4 h-12 md:w-16 md:h-16 bg-primary text-white flex items-center justify-center rounded-full shadow-lg transform transition-all duration-500 hover:scale-110">
              <Bell className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Step 3: Notification & Access
              </h3>
              <p className="text-gray-600 mt-2">
                Visitors are instantly notified of their access, and their entry
                is logged in real-time.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center space-x-8 justify-center">
            <div className="w-12 p-4 h-12 md:w-16 md:h-16 bg-primary text-white flex items-center justify-center rounded-full shadow-lg transform transition-all duration-500 hover:scale-110">
              <BarChart2 className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Step 4: Reporting & Analytics
              </h3>
              <p className="text-gray-600 mt-2">
                Track visitor history, create detailed reports, and analyze
                patterns with our data-driven system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
