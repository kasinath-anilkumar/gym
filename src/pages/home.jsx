import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Pricing from "./pricing";
import Features from "./features";
import HorizontalScroll from "./horizontalScroll";
import Contact from "./contact";
import Footer from "../components/footer";
import Trainers from "./trainers";
import Testimonials from "./Testimonials";
import FloatingButtons from "./FloatingButtons";

const Home = () => {
  return (
    <div id="#home">
      <Header />
        <Hero />
        <Pricing />
        <Features />
        <HorizontalScroll />
        <Trainers />
        <Testimonials />
        <Contact />
        <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Home;