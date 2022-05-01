import React from "react";
import "./Navbar.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        data-aos="fade-down"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="logo"
              style={{ width: "168px", padding: "10px 0px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-in"></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="index.html" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  Baca Quran
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  Jadwal Sholat
                </a>
              </li>

              <li className="nav-item">
                <Button
                  className=" btn sign"
                  title="Sign in"
                  path="/login"
                  color="#027878"
                />
              </li>
              <li className="nav-item">
                <Button
                  className=" btn sign"
                  title="Sign up"
                  path="/signup"
                  background="#027878"
                  color="#fff "
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
