import { User, Shield, Clock, Search } from "lucide-react"; // Example icons from lucide-react

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          Our Key Features
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <div className="text-4xl text-primary mb-4">
              <User />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Easy Visitor Check-in
            </h3>
            <p className="text-gray-600 mt-2">
              Effortlessly register and check-in visitors with our user-friendly
              system.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <div className="text-4xl text-primary mb-4">
              <Shield />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Enhanced Security
            </h3>
            <p className="text-gray-600 mt-2">
              Our system ensures secure visitor access with real-time monitoring
              and alerts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <div className="text-4xl text-primary mb-4">
              <Clock />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Real-time Monitoring
            </h3>
            <p className="text-gray-600 mt-2">
              Keep track of visitor arrivals and departures in real-time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <div className="text-4xl text-primary mb-4">
              <Search />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Detailed Reporting
            </h3>
            <p className="text-gray-600 mt-2">
              Access detailed reports on visitor history, check-ins, and
              security events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
