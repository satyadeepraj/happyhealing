import { Pricing } from "@/components/component/pricing";
import React from "react";

import { Navbar } from "@/components/component/Navbar";
import MovingHeadline from "@/components/component/MovingHeadline";
import Footer from "@/components/component/Footer";
import { Blog } from "./Blog";

const page = () => {
  return (
    <div>
      <MovingHeadline />
      <Navbar />
     <Blog/>
      <Footer />
    </div>
  );
};

export default page;
