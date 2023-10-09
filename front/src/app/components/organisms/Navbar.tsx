import React from "react";
import NavList from "../molecules/NavList";
import NavActions from "../molecules/NavActions";
import "../../../styles/components/_navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Riven</div>
        <NavList />
        <NavActions />
      </div>
    </nav>
  );
}

export default Navbar;
