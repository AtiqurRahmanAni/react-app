import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about-us">About Us</Link>
    </nav>
  );
};

export default NavBar;
