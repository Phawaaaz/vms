import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-sky-600 py-16 px-6 sm:px-8 text-center text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">
          Ready to Take Control of Your Visitor Management?
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Our platform offers seamless integration, real-time tracking, and
          top-notch security. Start today and enhance your office or facility's
          security and efficiency.
        </p>
        <a
          href="#get-started"
          className="inline-block px-8 py-3 bg-white text-sky-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
