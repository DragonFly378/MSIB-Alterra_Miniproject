import React from "react";
import Button from "../button/Button";
import "./YukMulai.scss";
import { Link } from "react-router-dom";

const YukMulai = () => {
  return (
    <>
      <div className="container">
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
              feugiat lectus.
            </p>
            <Link to="/bacaquran">
              <Button
                className="btn me-3"
                title="Baca Alquran"
                background="#027878"
                color="#fff"
              />
            </Link>

            {/* <Link to="/jadwalsholat">
              <Button
                className="btn btn-outline-info"
                title="Jadwal Sholat"
                path="/alquran"
                background="#fff"
                color="#027878"
              />
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default YukMulai;
