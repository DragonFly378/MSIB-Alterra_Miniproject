import React from "react";
import imgbanner from "../../images/bannerImg.svg";
import "./Jumbotron.scss";
import Button from "../button/Button";
const Jumbotron = () => {
  return (
    <>
      <section className="jumbotron" data-aos="zoom-in">
        <div className="container">
          <div className="jumbotron-web">
            <div className="row">
              <div className="col-lg-6 col-md-12 kiri">
                <img src={imgbanner} alt="" />
              </div>
              <div className="col-lg-6 col-md-12 kanan">
                <h2>
                  Keutamaan Membaca
                  <span style={{ color: "#F9B52C", marginLeft: "10px" }}>
                    {" "}
                    Al-Quran
                  </span>
                </h2>
                <p>
                  “Abdullah bin Mas’ud radhiyallahu ‘anhu berkata: “Rasulullah
                  shallallahu ‘alaihi wasallam bersabda: “Siapa yang membaca
                  satu huruf dari Al Quran maka baginya satu kebaikan dengan
                  bacaan tersebut, satu kebaikan dilipatkan menjadi 10 kebaikan
                  semisalnya dan aku tidak mengatakan الم satu huruf akan tetapi
                  Alif satu huruf, Laam satu huruf dan Miim satu huruf.” <br />
                  (HR. Tirmidzi)
                </p>

                <Button
                  className="btn"
                  title="Get Started"
                  path="/alquran"
                  color="#fff"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
