import React from "react";

import logo from "./../asset/Group 220.png";

const Navigation = (props) => {
  return (
    <nav className="nav">
      <a className="nav__nav-brand">
        <img src={logo} alt="Organic Logo" className="nav__nav-brand--logo" />
        <div className="nav__nav-brand--name">organic</div>
      </a>
      <ul className="nav__nav">
        <li className="nav__nav--item active">
          <a href="#" className="nav__nav--link">
            Home
          </a>
        </li>
        <li className="nav__nav--item">
          <a href="#" className="nav__nav--link">
            Products
          </a>
        </li>
        <li className="nav__nav--item">
          <a href="#" className="nav__nav--link">
            Blog
          </a>
        </li>
        <li className="nav__nav--item">
          <a href="#" className="nav__nav--link">
            About Us
          </a>
        </li>

        <li className="nav__nav--item contact">
          <a href="#" className="nav__nav--link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
