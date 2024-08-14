import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="scrollY overflow-y-scroll h-screen text-white flex flex-col justify-between font-Nunito ">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Body;
