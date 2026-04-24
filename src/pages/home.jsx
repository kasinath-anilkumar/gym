import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Pricing from "./pricing";
import Features from "./features";
import HorizontalScroll from "./horizontalScroll";
import Contact from "./contact";
import Footer from "../components/footer";
import Trainers from "./Trainers";
import Testimonials from "./Testimonials";
import FloatingButtons from "./FloatingButtons";
import Transformations from "./Transformations ";
import Timeline from "./Timeline";
import Gallery from "./Gallery";


const Home = () => {
  return (
    <div id="home">
      <Header />
        <Hero />
        <Features />
        <Pricing /> 
        <Transformations />
        <Timeline />
        <HorizontalScroll />
        <Trainers />
        <Testimonials />
        <Gallery />
        <Contact />
        <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Home;