import React from "react";

import facebook from "../asset/Group 99.png";
import linkedin from "../asset/Group 100.png";
import instagram from "../asset/Group 105.png";
import logo from "../asset/Group 225.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <section className="footer__company">
        <div className="footer__company--logo">
          <img
            src={logo}
            alt="Company Logo"
            className="footer__company--logo--img"
          />
        </div>
        <div className="footer__company__brief">
          <p className="footer__company__brief--text paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
          </p>

          <p className="footer__company__brief--copywright paragraph">
            © Copyright 2020 Nature
          </p>
        </div>
      </section>

      <section className="footer__info">
        <div className="footer__info--brief">
          <p className="footer__info--brief--text paragraph">Information</p>
        </div>
        <ul className="footer__info--list">
          <li className="footer__info--item">
            <a href="#" className="footer__info--link">
              About Us
            </a>
          </li>
          <li className="footer__info--item">
            <a href="#" className="footer__info--link">
              Product
            </a>
          </li>
          <li className="footer__info--item">
            <a href="#" className="footer__info--link">
              Contact Us
            </a>
          </li>
          <li className="footer__info--item">
            <a href="#" className="footer__info--link">
              Terms of Service
            </a>
          </li>
        </ul>
      </section>

      <section className="footer__follow">
        <div className="footer__follow--brief">
          <p className="footer__follow--brief--text paragraph">Follow Us</p>
          <ul className="footer__follow--list">
            <li className="footer__follow--item">
              <img
                src={facebook}
                alt="Facebook"
                className="footer__follow--img"
              />
            </li>
            <li className="footer__follow--item">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="footer__follow--img"
              />
            </li>
            <li className="footer__follow--item">
              <img
                src={instagram}
                alt="Instagram"
                className="footer__follow--img"
              />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
