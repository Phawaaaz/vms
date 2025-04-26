import React from "react";
import {
  Building,
  Stethoscope,
  GraduationCap,
  Factory,
  Hotel,
} from "lucide-react";

const industries = [
  {
    name: "Corporate Offices",
    description: "Secure and manage guest visits across corporate campuses.",
    icon: <Building className="w-8 h-8 text-sky-500" />,
    href: "/industries/corporate",
  },
  {
    name: "Healthcare",
    description: "Ensure safety and compliance for patients and visitors.",
    icon: <Stethoscope className="w-8 h-8 text-sky-500" />,
    href: "/industries/healthcare",
  },
  {
    name: "Education",
    description: "Streamline check-ins and enhance student safety.",
    icon: <GraduationCap className="w-8 h-8 text-sky-500" />,
    href: "/industries/education",
  },
  {
    name: "Manufacturing",
    description: "Track contractor and visitor access across facilities.",
    icon: <Factory className="w-8 h-8 text-sky-500" />,
    href: "/industries/manufacturing",
  },
  {
    name: "Hospitality",
    description: "Create a welcoming and secure experience for guests.",
    icon: <Hotel className="w-8 h-8 text-sky-500" />,
    href: "/industries/hospitality",
  },
  {
    name: "Transportation",
    description: "Monitor and manage visitor access at transport hubs.",
    icon: <Hotel className="w-8 h-8 text-sky-500" />,
    href: "/industries/transportation",
  },
];

const IndustriesServed = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Built for Every Industry
        </h2>
        <p className="text-gray-600 mb-12">
          Whether you're running a school, clinic, or corporate HQ — our system
          adapts to your needs.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <a
              key={index}
              href={industry.href}
              className="group p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-sky-500 transition-all"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-sky-100 p-2 rounded-full">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-sky-600">
                  {industry.name}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{industry.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
