import React, { useState } from "react";

const pricingPlans = {
  monthly: [
    {
      title: "Starter",
      price: "$0",
      description: "For small offices just getting started.",
      features: [
        "Visitor check-in",
        "Basic visitor log",
        "Email notifications",
      ],
      cta: "Get Started Free",
      isPopular: false,
    },
    {
      title: "Professional",
      price: "$49/mo",
      description: "Ideal for growing teams and multiple locations.",
      features: [
        "All Starter features",
        "Real-time dashboard",
        "Custom branding",
        "SMS alerts",
      ],
      cta: "Choose Plan",
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      description: "Custom solutions for large organizations.",
      features: [
        "All Pro features",
        "Dedicated support",
        "Advanced compliance tools",
        "API access",
      ],
      cta: "Contact Sales",
      isPopular: false,
    },
  ],
  yearly: [
    {
      title: "Starter",
      price: "$0",
      description: "For small offices just getting started.",
      features: [
        "Visitor check-in",
        "Basic visitor log",
        "Email notifications",
      ],
      cta: "Get Started Free",
      isPopular: false,
    },
    {
      title: "Professional",
      price: "$490/yr",
      description: "Get 2 months free with annual billing.",
      features: [
        "All Starter features",
        "Real-time dashboard",
        "Custom branding",
        "SMS alerts",
      ],
      cta: "Choose Plan",
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      description: "Custom solutions for large organizations.",
      features: [
        "All Pro features",
        "Dedicated support",
        "Advanced compliance tools",
        "API access",
      ],
      cta: "Contact Sales",
      isPopular: false,
    },
  ],
};

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Simple Pricing
        </h2>
        <p className="text-gray-600 mb-8">
          Choose a plan that fits your organization. Switch anytime.
        </p>

        {/* Toggle */}
        <div className="inline-flex mb-12 bg-white rounded-full p-1 border border-gray-200">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              billing === "monthly"
                ? "bg-sky-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              billing === "yearly"
                ? "bg-sky-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Plans */}
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans[billing].map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border transition-all duration-500 transform hover:scale-105 ${
                plan.isPopular ? "border-sky-500 shadow-lg" : "border-gray-200"
              } bg-white p-6 flex flex-col justify-between`}
            >
              {plan.isPopular && (
                <div className="text-xs bg-sky-100 text-sky-600 font-semibold px-3 py-1 rounded-full mb-4 w-max mx-auto">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <p className="text-3xl font-bold text-gray-800 mb-2">
                  {plan.price}
                </p>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                <ul className="space-y-2 text-left text-sm text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-sky-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className={`mt-8 inline-block text-sm text-center font-medium px-6 py-3 rounded-lg transition ${
                  plan.isPopular
                    ? "bg-sky-500 text-white hover:bg-sky-600"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
