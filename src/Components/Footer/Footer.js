import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="topinfo">
          {/* <h4>BLUE WAVES</h4> */}
          <p>
            <i class="fas fa-map-marker-alt"></i>zamzam complex, behind gastab
            filling station, new garage, Ibadan
          </p>
          <p>
            <i class="fas fa-phone-alt"></i>
            07089266134, 08139737934
          </p>
          <p>
            <i class="fas fa-at"></i>surfaveglobalconsult@gmail.com
          </p>
          <p>
            <i class="fab fa-whatsapp"></i>07089266134, 08139737934
          </p>
          <p>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="http://www.twitter.com/surfwave_official"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="http://www.instagram.com/surfwave_official"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
