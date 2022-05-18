import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from "../../images/logo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../button/Button";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const token = localStorage.getItem("Token");
  const tmp = JSON.parse(token);

  const name = tmp?.fullname;

  useEffect(() => {
    if (token) {
      setUser(JSON.parse(token));
    } else {
      setUser(null);
    }
  }, [location]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        data-aos="fade-down"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              alt="logo"
              style={{ width: "168px", padding: "10px 0px" }}
            />
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
              {/* <li className="nav-item">
                <Link to="/jadwalsholat" className="nav-link">
                  Jadwal Sholat
                </Link>
              </li> */}

              {user ? (
                <>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link "
                      to=""
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div
                        className="account dropdown-toggle "
                        style={{ fontSize: "14px", paddingRight: "30px" }}
                      >
                        Assalamu'alaikum, <br />
                        {name}{" "}
                      </div>
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item text-center"
                          to="/profile"
                        >
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link to="/signout">
                          <Button
                            className=" btn sign"
                            title="Signout"
                            color="#660000"
                          />
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/signin">
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
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
