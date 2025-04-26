import React, { useState } from "react";
import { ChevronDown, User, Building, FileText, Globe } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const navLinks = [
    {
      name: "Platform",
      href: "/platform",
      dropdown: true,
      icon: <Building className="w-4 h-4" />,
    },
    {
      name: "Industries",
      href: "/industries",
      dropdown: true,
      icon: <User className="w-4 h-4" />,
    },
    {
      name: "Pricing",
      href: "/pricing",
      dropdown: false,
      icon: <FileText className="w-4 h-4" />,
    },
    {
      name: "Resources",
      href: "/resources",
      dropdown: true,
      icon: <Globe className="w-4 h-4" />,
    },
    {
      name: "Company",
      href: "/company",
      dropdown: true,
      icon: <Building className="w-4 h-4" />,
    },
  ];

  const toggleDropdown = (name) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const industries = [
    { name: "Corporate Offices", href: "/industries/corporate" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Education", href: "/industries/education" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Hospitality", href: "/industries/hospitality" },
  ];

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">VMS</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className="flex items-center space-x-2 text-sm font-medium hover:text-primary"
              >
                {link.icon}
                <span>{link.name}</span>
                {link.dropdown && (
                  <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                )}
              </a>

              {link.dropdown && (
                <div className="absolute left-0 hidden mt-2 space-y-2 bg-white shadow-lg rounded-md w-48 group-hover:block">
                  {link.name === "Industries" &&
                    industries.map((industry) => (
                      <a
                        key={industry.name}
                        href={industry.href}
                        className="flex items-center space-x-2 px-4 py-2 text-sm hover:text-primary"
                      >
                        <Building className="w-4 h-4" />
                        <span>{industry.name}</span>
                      </a>
                    ))}
                  {link.name !== "Industries" && (
                    <a
                      href={`${link.href}/overview`}
                      className="flex items-center space-x-2 px-4 py-2 text-sm hover:text-primary"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Overview</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/get-started"
            className="px-6 py-2 rounded-lg bg-sky-300 hover:bg-sky-500 text-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none relative w-8 h-8 flex flex-col justify-center items-center space-y-1"
          >
            <div
              className={`w-6 h-1 bg-black transition-all duration-300 transform ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-black transition-all duration-300 transform ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-600 ease-in-out transform">
          <ul className="flex flex-col space-y-2 px-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <div className="flex items-center justify-between">
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 py-2 text-sm font-medium hover:text-primary"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                  {link.dropdown && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown(link.name);
                      }}
                    >
                      <ChevronDown
                        className={`w-3 h-3 transform transition-transform ${
                          mobileDropdowns[link.name] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.dropdown && mobileDropdowns[link.name] && (
                  <ul className="space-y-1 mt-2 pl-4">
                    {link.name === "Industries" &&
                      industries.map((industry) => (
                        <li key={industry.name}>
                          <a
                            href={industry.href}
                            className="flex items-center space-x-2 text-sm py-1 hover:text-primary"
                          >
                            <Building className="w-4 h-4" />
                            <span>{industry.name}</span>
                          </a>
                        </li>
                      ))}
                    {link.name !== "Industries" && (
                      <li>
                        <a
                          href={`${link.href}/overview`}
                          className="block text-sm py-1 hover:text-primary"
                        >
                          Overview
                        </a>
                      </li>
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
