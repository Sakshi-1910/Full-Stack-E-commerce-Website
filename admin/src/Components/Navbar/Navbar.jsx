import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/logo.png";
import navProfile from "../../assets/nav-profile.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <img src={navlogo} alt="" className="nav-logo" />
        <h1>SHOPNEST</h1>
      </div>
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
}

export default Navbar;
