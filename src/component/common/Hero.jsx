import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-gray-400 min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-20 text-foreground">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Smarter Visitor Management
          </h1>
          <p className="text-lg text-white mt-4">
            Modernize your front desk with instant check-ins, real-time alerts,
            and secure visitor tracking. One platform for all your needs.
          </p>
          <div className="mt-6">
            <button className="px-6 py-2 rounded-lg bg-sky-300 hover:bg-sky-500 text-sm">
              Get Started
            </button>
          </div>
        </div>

        <div className="md:flex mt-10 md:mt-0 md:ml-12">
          <img
            src="https://imgs.search.brave.com/0eu3CoQ011pEkIb4Rt0c_1xOCpCpunWIoI8hWD_ilJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmFjaWxpdHlvcy5j/b20vaHMtZnMvaHVi/ZnMvRmFjaWxpdHlP/UyUyMDIwMjUvSW1h/Z2UvaW1hZ2UtMy5w/bmc_d2lkdGg9NTUy/JmhlaWdodD02Mzkm/bmFtZT1pbWFnZS0z/LnBuZw"
            alt="Visitor dashboard preview"
            className="max-w-md transform transition-all duration-500 md:hover:scale-141"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
