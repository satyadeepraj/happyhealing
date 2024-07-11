import Header from "@/components/Test/Header";
import React from "react";
import Cbc from "./Cbc";
import SampleReport from "@/components/Test/SampleReport";

import MovingHeadline from "@/components/component/MovingHeadline";

import { TestCarousel } from "@/components/component/TestCarousel";
import { HealthCarousel } from "@/components/component/HealthPackagesCarousel";
import WhyChooseUs from "@/components/component/WhyChooseUs";
import Footer from "@/components/component/Footer";
import { Navbar } from "@/components/component/Navbar";

const page = () => {
  return (
    <div>
      <MovingHeadline />
      <Navbar />
      <Header />
      <Cbc />
      <TestCarousel />
      <HealthCarousel />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default page;
