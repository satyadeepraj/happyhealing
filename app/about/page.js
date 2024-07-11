import React from "react";
import { Navbar } from "@/components/component/Navbar";
import { Aboutfirst } from "./About";
import MovingHeadline from "@/components/component/MovingHeadline";
import Footer from "@/components/component/Footer";
import { AboutSecond } from "@/components/component/AboutSecond";



const page = () => {
  return (
    <div>
      <MovingHeadline/>
       <Navbar/> 
      <Aboutfirst />
      <AboutSecond/>
      <Footer/>
    </div>
  );
};

export default page;
