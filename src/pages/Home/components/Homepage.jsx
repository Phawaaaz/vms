import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Steps from "./Steps";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import IndustriesServed from "./IndustriesServed";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

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
// This component serves as the main entry point for the homepage of the application. It imports and renders the Navbar, Hero, and Features components in a structured layout. The use of React fragments (<> and </>) allows for grouping multiple elements without adding extra nodes to the DOM. This is a common pattern in React applications to keep the code organized and maintainable.
