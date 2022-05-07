import React from "react";
import "./Jumbotron.scss";
import Button from "../button/Button";
const Jumbotron = ({ kiri, kanan, dataAos }) => {
  return (
    <>
      <section className="jumbotron" data-aos={dataAos}>
        <div className="container">
          <div className="jumbotron-web">
            <div className="row">
              <div className="col-lg-6 col-md-12 m-auto">{kiri}</div>
              <div className="col-lg-6 col-md-12 m-auto">{kanan}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
