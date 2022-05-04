import React from "react";
import "./Home.scss";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import Features from "../../components/features/Features";
import YukMulai from "../../components/yukmulai/YukMulai";
import Button from "../../components/button/Button";
import imgbanner from "../../images/bannerImg.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Jumbotron kiri={<KontenKiri />} kanan={<KontenKanan />} />
      <Features />
      <YukMulai />
    </>
  );
};

const KontenKiri = () => {
  return (
    <>
      <div className="kiri">
        <img src={imgbanner} alt="" />
      </div>
    </>
  );
};
const KontenKanan = () => {
  return (
    <>
      <div className="kanan">
        <h2>
          Keutamaan Membaca
          <span style={{ color: "#F9B52C", marginLeft: "10px" }}>
            {" "}
            Al-Quran
          </span>
        </h2>
        <p>
          “Abdullah bin Mas’ud radhiyallahu ‘anhu berkata: “Rasulullah
          shallallahu ‘alaihi wasallam bersabda: “Siapa yang membaca satu huruf
          dari Al Quran maka baginya satu kebaikan dengan bacaan tersebut, satu
          kebaikan dilipatkan menjadi 10 kebaikan semisalnya dan aku tidak
          mengatakan الم satu huruf akan tetapi Alif satu huruf, Laam satu huruf
          dan Miim satu huruf.” <br />
          (HR. Tirmidzi)
        </p>
        <Link to="/bacaquran">
          <Button
            className="btn"
            title="Get Started"
            path="/alquran"
            color="#fff"
          />
        </Link>
      </div>
    </>
  );
};

export default Home;
