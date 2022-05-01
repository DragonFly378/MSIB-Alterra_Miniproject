import React from "react";
import Navbar from "../components/navbar/Navbar";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Features from "../components/features/Features";
import YukMulai from "../components/yukmulai/YukMulai";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Features />
      <YukMulai />
      <Footer />
    </>
  );
};

export default Home;
