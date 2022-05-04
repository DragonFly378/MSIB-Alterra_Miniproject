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
          <Link to="/">
            <a className="navbar-brand">
              <img
                src={logo}
                alt="logo"
                style={{ width: "168px", padding: "10px 0px" }}
              />
            </a>
          </Link>
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
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bacaquran" className="nav-link">
                  Baca Quran
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jadwalsholat" className="nav-link">
                  Jadwal Sholat
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/login">
                  <Button
                    className=" btn sign"
                    title="Sign in"
                    color="#027878"
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup">
                  <Button
                    className=" btn sign"
                    title="Sign up"
                    background="#027878"
                    color="#fff "
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
