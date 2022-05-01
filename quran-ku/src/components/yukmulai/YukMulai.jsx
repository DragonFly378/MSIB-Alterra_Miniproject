import React from "react";
import Button from "../button/Button";
import "./YukMulai.scss";

const YukMulai = () => {
  return (
    <>
      <div className="container" data-aos="zoom-in">
        <div className="yukMulai-section col-md-12 ">
          <h2>
            Yuk <span style={{ color: "#F9B52C" }}>Mulai</span>{" "}
          </h2>
          <div className="konten">
            <p>
              Dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
              molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
              fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.{" "}
            </p>
            <Button
              className="btn me-3"
              title="Baca Alquran"
              path="/alquran"
              background="#027878"
              color="#fff"
            />
            <Button
              className="btn btn-outline-info"
              title="Jadwal Sholat"
              path="/alquran"
              background="#fff"
              color="#027878"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default YukMulai;
