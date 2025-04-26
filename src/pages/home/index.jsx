import React from "react";
import Navbar from "../../component/common/Navbar";
import Hero from "../../component/common/Hero";
import Features from "../../component/common/Features";
import Steps from "../../component/common/Steps";
import Testimonials from "../../component/common/Testimonials";
import Pricing from "../../component/common/Pricing";
import IndustriesServed from "../../component/common/IndustriesServed";
import CallToAction from "../../component/common/CallToAction";
import Footer from "../../component/common/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Steps />
      <Testimonials />
      <Pricing />
      <IndustriesServed />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Homepage;
