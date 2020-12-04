import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MArioPlan
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
