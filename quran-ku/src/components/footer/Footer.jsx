import React from "react";
import logo from "../../images/logo.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer class="section-footer mt-5 mb-4" id="kontak-kami">
        <div class="container pt-5 pb-5">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12 col-lg-4 align-self-center">
                  <img width={"270px"} src={logo} alt="logo" />
                </div>

                <div class="col-12 col-lg-2 konten">
                  <h5>FEATURES</h5>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Refund</a>
                    </li>
                    <li>
                      <a href="#">Security</a>
                    </li>
                    <li>
                      <a href="#">Reward</a>
                    </li>
                  </ul>
                </div>

                <div class="col-12 col-lg-2 konten">
                  <h5>COMPANY</h5>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="#">Help Center</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                  </ul>
                </div>

                <div class="col-12 col-lg-2 konten">
                  <h5>GET CONNECTED</h5>
                  <ul class="list-unstyled">
                    <li>Jakarta Pusat</li>
                    <li>Indonesia</li>
                    <li>
                      <a href="#">0882-1192-1299</a>
                    </li>
                    <li>
                      <a href="#">contact@quranku.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid copy">
          <div class="row border-top text-center pt-4">
            <p class="col font-weight-light">
              2022 Copyright QuranKu &bull; All rights reserved &bull; Made in
              Jakarta
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
